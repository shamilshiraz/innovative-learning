import React from 'react'
import Head from 'next/head'
import Contact from '@/components/Contact'

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Innovative Learning Horizons | Al Khobar</title>
        <meta
          name="description"
          content="Get in touch with ILH in Al Khobar, Saudi Arabia. Enroll in top courses, request consultations, or ask about our certification programs."
        />
        <meta
          name="keywords"
          content="contact ILH, enroll training Saudi Arabia, Al Khobar training institute, ILH inquiries, ILH admissions Saudi Arabia"
        />
      </Head>

      <Contact />
    </>
  )
}

export default ContactPage
