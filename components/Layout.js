import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head';

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>Ai2Dev | Code generator</title>
        <meta name="description" content="Generate modules with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
        <div>
            {children}
        </div>
      <Footer />
    </>
  );
}
