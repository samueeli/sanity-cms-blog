import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';

// To learn how commands have changed from Sanity Studio v2 to v3, check:        ║
// https://www.sanity.io/help/studio-v2-vs-v3

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroBanner />
    </div>
  );
};

export default Home;
