import AboutPage from '@/components/About'
import React from 'react'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.innovativelh.com/about" />

        {/* 🔹 Page Title & Description */}
        <title>About ILH | Innovative Learning Horizons in Saudi Arabia</title>
        <meta
          name="description"
          content="Discover the story behind Innovative Learning Horizons (ILH), Saudi Arabia’s trusted professional training institute helping students and professionals achieve excellence through certified courses."
        />
        <meta
          name="keywords"
          content="About ILH, ILH Saudi Arabia, Innovative Learning Horizons, training institute, professional development"
        />

        {/* 🔹 Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="About ILH | Innovative Learning Horizons in Saudi Arabia" />
        <meta
          property="og:description"
          content="Learn about Innovative Learning Horizons — a Saudi Arabia-based institute offering certified training programs for aspiring professionals."
        />
        <meta property="og:image" content="https://www.innovativelh.com/og-image.jpg" />
        <meta property="og:url" content="https://www.innovativelh.com/about" />
        <meta property="og:type" content="website" />

        {/* 🔹 Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About ILH | Innovative Learning Horizons in Saudi Arabia" />
        <meta
          name="twitter:description"
          content="Learn about ILH — Saudi Arabia’s leading institute for skill-based and certified professional training."
        />
        <meta name="twitter:image" content="https://www.innovativelh.com/og-image.jpg" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Innovative Learning Horizons (ILH)",
      "alternateName": "ILH Saudi Arabia",
      "url": "https://www.innovativelh.com",
      "logo": "https://www.innovativelh.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/innovativelh",
        "https://www.instagram.com/innovativelh",
        "https://www.linkedin.com/company/innovativelh"
      ],
      "description": "Innovative Learning Horizons (ILH) is a Saudi Arabia-based professional training institute offering certified skill development programs for students and working professionals.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "King Fahad Abdulaziz St, Al Khobar",
        "addressCountry": "Saudi Arabia"
      },
      "foundingDate": "2012",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "telephone": "+966-xxxx-xxxx",
        "email": "info@innovativelh.com"
      }
    }),
  }}
/>

      </Head>

      {/* ✅ Hidden H1 (SEO + Audit Friendly, invisible to users) */}
      <h1
        style={{
          position: 'absolute',
          fontSize: '1px',
          opacity: 0,
          height: 0,
          overflow: 'hidden',
        }}
      >
        About Innovative Learning Horizons (ILH) in Saudi Arabia
      </h1>

      {/* ✅ Actual About Page Component */}
      <main>
        <AboutPage />
      </main>
    </>
  )
}
