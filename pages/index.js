import Head from 'next/head';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import Payment from '../components/Payment';
import Support from '../components/Support';
import Works from '../components/Works/Works';

export default function Home() {
  return (
    <Layout title='U2Lynk' description='Home Page'>
      <Hero />
      <Works />
      <Support />
      <Payment />
    </Layout>
  );
}
