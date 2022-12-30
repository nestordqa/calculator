import Head from 'next/head';
import { NextPage } from 'next';
import Calculator from '../components/Calculator';

const Home : NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Calculator app</title>
        <meta name="description" content="App developed for a FrontendMentor Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <>
        <Calculator/>
      </>
    </>
  );
};

export default Home;
