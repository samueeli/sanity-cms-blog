import Link from 'next/link';
import React from 'react';
import { Post as Props } from '../typings';

interface PostProps {
  key: string;
  href: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  author: string;
  authorImg: string;
  authorImgAlt?: string;
}

export const Post = (props: PostProps) => {
  const {
    href,
    title,
    description,
    image,
    imageAlt,
    author,
    authorImg,
    authorImgAlt,
  } = props;

  return (
    <Link href={href}>
      <div className="group overflow-hidden border rounded-lg cursor-pointer">
        <img
          className="h-60 w-full object-cover group-hover:scale-105 
          transition-transform duration-200 ease-in"
          src={image}
          alt={imageAlt}
        />
        <div className="flex justify-between p-5 bg-white">
          <div>
            <p>{title}</p>
            <p>
              {description} by {author}
            </p>
          </div>
          <img
            className="h-12 w-12 rounded-full"
            src={authorImg}
            alt={authorImgAlt}
          />
        </div>
      </div>
    </Link>
  );
};
