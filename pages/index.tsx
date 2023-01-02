import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

// 1:05:58

// To learn how commands have changed from Sanity Studio v2 to v3, check:        ║
// https://www.sanity.io/help/studio-v2-vs-v3

interface Props {
  posts: [Post];
}

const Home = ({ posts }: Props) => {
  console.log('samulin postit', posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroBanner />

      {/* Posts */}
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
