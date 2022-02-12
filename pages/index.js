import Head from 'next/head';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import Payment from '../components/Payment';
import Support from '../components/Support';
import Works from '../components/Works/Works';

export default function Home() {
  return (
    <>
      <Head>
        <title>U2 Lynk</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        <Hero />
        <Works />
        <Support />
        <Payment />
      </Layout>
    </>
  );
}
