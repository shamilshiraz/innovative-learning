import React from 'react'
import Head from "next/head"
import AboutPage from '@/components/About'

function About() {
  return (
    <>
      <Head>
        <title>About Innovative Learning Horizons | Saudi Arabia</title>
        <meta
          name="description"
          content="Discover our journey as a trusted training provider in Saudi Arabia. Learn how ILH empowers professionals through certified programs."
        />
        <meta
          name="keywords"
          content="about training provider Saudi Arabia, ILH story, trusted training center KSA, professional education Saudi Arabia"
        />
      </Head>

      <AboutPage />
    </>
  )
}

export default About
