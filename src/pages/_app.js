import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Global Navbar on all pages */}
      <Navbar />

      {/* Page Content */}
      <main>
        <Component {...pageProps} />
      </main>

      {/* Global Footer on all pages */}
      <Footer />
    </>
  );
}
