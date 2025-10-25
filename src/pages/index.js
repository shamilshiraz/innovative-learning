import Blogs from '@/components/Blogs'
import Courses from '@/components/Courses'
import WelcomeSection from '@/components/Intro'
import LandingSection from '@/components/Landing'
import WhyChooseUs from '@/components/Why'
import React from 'react'
<<<<<<< HEAD
import Head from 'next/head'
=======
import Schedule from './schedule'
>>>>>>> abfe56a (changed images)

const Index = () => {
  return (
<<<<<<< HEAD
    <>
      <Head>
        {/* 🔹 Basic SEO Meta Tags */}
        <title>Professional Training Institute in Saudi Arabia | ILH</title>
        <meta
          name="description"
          content="Join Innovative Learning Horizons – a leading professional training institute in Saudi Arabia offering certified career courses for your success."
        />
        <meta
          name="keywords"
          content="professional training institute Saudi Arabia, career training Al Khobar, certification courses KSA, skills development Saudi Arabia"
        />

        {/* 🔹 Open Graph Tags (Social Sharing) */}
        <meta property="og:title" content="Professional Training Institute in Saudi Arabia | ILH" />
        <meta
          property="og:description"
          content="Join ILH – Saudi Arabia’s leading professional training institute offering certified BIM, PMP, and career courses."
        />
        <meta property="og:image" content="https://www.innovativelh.com/og-image.jpg" />
        <meta property="og:url" content="https://www.innovativelh.com/" />
        <meta property="og:type" content="website" />

        {/* 🔹 Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Training Institute in Saudi Arabia | ILH" />
        <meta
          name="twitter:description"
          content="Advance your career with ILH – the trusted professional training institute in Saudi Arabia."
        />
        <meta name="twitter:image" content="https://www.innovativelh.com/og-image.jpg" />
      </Head>

      {/* ✅ Single Navbar (Fixes the double header issue) */}

      {/* ✅ Hidden but SEO & Audit-friendly H1 */}
      <h1
        style={{
          position: 'absolute',
          fontSize: '1px',
          opacity: 0,
          height: 0,
          overflow: 'hidden'
        }}
      >
        Professional Training Institute in Saudi Arabia
      </h1>


      <LandingSection />
      <WelcomeSection />
      <Courses />
      <WhyChooseUs />
      <Blogs />
    </>
=======
    <div>
      <LandingSection/>
      <WelcomeSection/>
      <Courses/>
      <WhyChooseUs/>
      <Schedule/>
      <Blogs/>
    </div>
>>>>>>> abfe56a (changed images)
  )
}

export default Index
