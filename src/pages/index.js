import Blogs from '@/components/Blogs'
import Courses from '@/components/Courses'
import WelcomeSection from '@/components/Intro'
import LandingSection from '@/components/Landing'
import Navbar from '@/components/Navbar'
import WhyChooseUs from '@/components/Why'
import React from 'react'
import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Head>
        <title>Professional Training Institute in Saudi Arabia | ILH</title>
        <meta
          name="description"
          content="Join Innovative Learning Horizons – a leading professional training institute in Saudi Arabia offering certified career courses for your success."
        />
        <meta
          name="keywords"
          content="professional training institute Saudi Arabia, career training Al Khobar, certification courses KSA, skills development Saudi Arabia"
        />
      </Head>

      <Navbar />
      <LandingSection />
      <WelcomeSection />
      <Courses />
      <WhyChooseUs />
      <Blogs />
    </>
  )
}

export default Index
