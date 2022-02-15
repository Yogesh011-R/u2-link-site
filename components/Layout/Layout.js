import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title, description }) => {
  return (
    <div className=''>
      <Head>
        <meta name='description' content={description || 'U2Lynk'} />
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
