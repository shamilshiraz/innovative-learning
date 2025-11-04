import Head from "next/head";

export default function PmpOffer() {
  return (
    <>
      <Head>
        <title>PMP Certification Offer | Innovative Learning Horizons</title>
        <meta
          name="description"
          content="Join our PMP Certification Program and elevate your project management career. Limited-time offer for professionals in Saudi Arabia."
        />
        <link rel="canonical" href="https://www.innovativelh.com/pmp-offer" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12">
        <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-xl text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Exclusive PMP Certification Offer 🎓
          </h1>
          <p className="text-gray-600 mb-6">
            Enroll today and gain internationally recognized project management skills. Limited seats available!
          </p>
          <a
            href="https://wa.me/966511742526?text=Hi%20ILH%20Team,%20I%20want%20to%20know%20about%20the%20PMP%20offer."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </main>
    </>
  );
}
