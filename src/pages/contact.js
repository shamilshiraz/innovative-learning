import Contact from '@/components/Contact'
import React from 'react'
import Head from 'next/head'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact ILH | Professional Training Institute in Saudi Arabia</title>
        <meta
          name="description"
          content="Get in touch with Innovative Learning Horizons (ILH) in Saudi Arabia for inquiries about courses, admissions, and certifications."
        />
        <meta
          name="keywords"
          content="contact ILH, ILH Saudi Arabia, training inquiries, course registration"
        />

        {/* OG Tags */}
        <meta property="og:title" content="Contact ILH | Professional Training Institute in Saudi Arabia" />
        <meta
          property="og:description"
          content="Reach out to ILH for professional training and certification course inquiries in Saudi Arabia."
        />
        <meta property="og:image" content="https://www.innovativelh.com/og-image.jpg" />
        <meta property="og:url" content="https://www.innovativelh.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact ILH | Professional Training Institute in Saudi Arabia" />
        <meta
          name="twitter:description"
          content="Connect with ILH for course details and professional training guidance in Saudi Arabia."
        />
        <meta name="twitter:image" content="https://www.innovativelh.com/og-image.jpg" />
      </Head>

      <h1
        style={{
          position: 'absolute',
          fontSize: '1px',
          opacity: 0,
          height: 0,
          overflow: 'hidden',
        }}
      >
        Contact Innovative Learning Horizons in Saudi Arabia
      </h1>

      <Contact />
    </>
  )
}
