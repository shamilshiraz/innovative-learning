import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* 🔹 Global SEO & Meta Fallback */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/ilh.png" />
      </Head>

      {/* 🔹 Persistent Layout */}
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
