import React from 'react';
import comment from '../sanitymedium/schemas/comment';

interface CommentProps {
  name: string;
  comment: string;
}

export const Comment = ({ name, comment }: CommentProps) => {
  return (
    <div>
      <p>
        <span className="text-yellow-500">{name}</span>: {comment}
      </p>
    </div>
  );
};
