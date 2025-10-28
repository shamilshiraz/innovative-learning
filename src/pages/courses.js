import CoursePage from '@/components/CoursePage'
import React from 'react'
import Head from 'next/head'

export default function Courses() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.innovativelh.com/courses" />

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
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "ILH Certified Courses",
      "description":
        "Explore certified professional training courses offered by Innovative Learning Horizons (ILH) across Saudi Arabia.",
      "url": "https://www.innovativelh.com/courses",
      "numberOfItems": 8, // Adjust to total number of courses
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Project Management Professional (PMP)",
          "provider": {
            "@type": "Organization",
            "name": "Innovative Learning Horizons (ILH)",
            "url": "https://www.innovativelh.com",
          },
        },
        {
          "@type": "Course",
          "name": "Building Information Modeling (BIM)",
          "provider": {
            "@type": "Organization",
            "name": "Innovative Learning Horizons (ILH)",
            "url": "https://www.innovativelh.com",
          },
        },
        {
          "@type": "Course",
          "name": "AutoCAD 2D & 3D",
          "provider": {
            "@type": "Organization",
            "name": "Innovative Learning Horizons (ILH)",
            "url": "https://www.innovativelh.com",
          },
        },
      ],
    }),
  }}
/>

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

      <main>
  <CoursePage />
</main>

    </>
  )
}
