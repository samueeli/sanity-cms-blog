import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import { Post } from '../components/Post';
import { sanityClient, urlFor } from '../sanity';
import { Post as PostTypes } from '../typings';

// 2:24:05 Next finish comments component and get comments from db

// To learn how commands have changed from Sanity Studio v2 to v3, check:        ║
// https://www.sanity.io/help/studio-v2-vs-v3

interface Props {
  posts: [PostTypes];
}

const Home = ({ posts }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroBanner />

      {/* Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Post
            key={post._id}
            href={`/post/${post.slug.current}`}
            image={urlFor(post.mainImage).url()!}
            title={post.title}
            description={post.description}
            author={post.author.name}
            authorImg={urlFor(post.author.image).url()!}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `
  *[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
      name,
      image
    },
    mainImage,
    description,
  }
  `;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
