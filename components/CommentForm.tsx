export const CommentForm = () => {
  return (
    <form className="flex flex-col p-5 max-w-2xl mx-auto mb-10">
      <h2 className="text-3xl font-bold mb-10">Leave a comment</h2>
      <label className="block mb-5">
        <span className="text-gray-700">Name</span>
        <input
          className="shadow border rounded py-2 px-3 
          form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
          placeholder="Give your name"
          type="text"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Email</span>
        <input
          className="shadow border rounded py-2 px-3 
          form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
          placeholder="Give your email"
          type="text"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Comment</span>
        <textarea
          className="shadow bordr rounded py-2 px-3 
        form-textarea mt-1 block w-full ring-yellow-500 outline-none focus:ring"
          placeholder="Write your comment"
          rows={8}
        />
      </label>
    </form>
  );
};
