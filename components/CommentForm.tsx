import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormInputProps {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

export const CommentForm = (props: any) => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputProps>();

  const onSubmit: SubmitHandler<FormInputProps> = async (data) => {
    try {
      const res = await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      setSubmitted(true);

      console.log('createComment res', res.json());
    } catch (error) {
      console.error(error);
      setSubmitted(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col p-10 my-10 bg-yellow-500 text-white
      max-w-2xl mx-auto"
      >
        <h3 className="text-3xl font-bold">Thank you for your comment!</h3>
        <p className="">Once it has been approved, it will appear below.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
    >
      <h2 className="text-3xl font-bold mb-10">Leave a comment</h2>

      {/* invisible input to add id */}
      <input
        {...register('_id')}
        type="hidden"
        name="_id"
        value={props.postId}
      />

      <label className="block mb-5">
        <span className="text-gray-700">Name</span>
        <input
          {...register('name', { required: true })}
          className="shadow border rounded py-2 px-3 
          form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
          placeholder="Give your name"
          type="text"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Email</span>
        <input
          {...register('email', { required: true })}
          className="shadow border rounded py-2 px-3 
          form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
          placeholder="Give your email"
          type="email"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Comment</span>
        <textarea
          {...register('comment', { required: true })}
          className="shadow bordr rounded py-2 px-3 
          form-textarea mt-1 block w-full ring-yellow-500 outline-none focus:ring"
          placeholder="Write your comment"
          rows={8}
        />
      </label>
      <div className="flex flex-col p-5">
        {errors.name && <span className="text-red-500">Name is required</span>}
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}
        {errors.comment && (
          <span className="text-red-500">Comment is required</span>
        )}
      </div>
      <input
        type="submit"
        className="shadow bg-yellow-500 
      hover:bg-yellow-400 focus:shadow-outline 
      focus:outline-none text-white font-bold 
      py-2 px-4 rounded cursor-pointer"
      />
    </form>
  );
};
