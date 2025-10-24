import CoursePage from '@/components/CoursePage'
import React from 'react'
import Head from 'next/head'

export default function Courses() {
  return (
    <>
      <Head>
        <title>Courses | ILH Saudi Arabia – Professional Training Programs</title>
        <meta
          name="description"
          content="Explore ILH’s certified training courses in Saudi Arabia, including BIM, PMP, AutoCAD, and more career-oriented programs."
        />
        <meta
          name="keywords"
          content="ILH courses, BIM training, PMP certification, professional development Saudi Arabia"
        />

        {/* OG Tags */}
        <meta property="og:title" content="Courses | ILH Saudi Arabia – Professional Training Programs" />
        <meta
          property="og:description"
          content="Discover certified professional courses at ILH in Saudi Arabia, designed to advance your skills and career."
        />
        <meta property="og:image" content="https://www.innovativelh.com/og-image.jpg" />
        <meta property="og:url" content="https://www.innovativelh.com/courses" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Courses | ILH Saudi Arabia – Professional Training Programs" />
        <meta
          name="twitter:description"
          content="ILH offers certified BIM, PMP, and technical training courses across Saudi Arabia."
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
        ILH Certified Training Courses in Saudi Arabia
      </h1>

      <CoursePage />
    </>
  )
}
