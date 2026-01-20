import Blogs from '@/components/Blogs'
import Courses from '@/components/Courses'
import Schedule from '@/components/Dec'
import WelcomeSection from '@/components/Intro'
import LandingSection from '@/components/Landing'
import Navbar from '@/components/Navbar'
import WhyChooseUs from '@/components/Why'
import WhyChooseUs from '@/components/Testimonials'
import React from 'react'
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.innovativelh.com/" />
        {/* 🔹 Basic SEO Meta Tags */}
        <title>Best Training Institute in Saudi Arabia | ILH</title>
        <meta
          name="description"
          content="Build your career with ILH – Saudi Arabia’s trusted professional training institute offering PMP, LEED, Revit, Primavera & more international courses."
        />
        <meta
          name="keywords"
          content="PMP course, LEED training, Revit Architecture, Primavera P6, professional courses Saudi Arabia, ILH institute"
        />
        
        <meta name="robots" content="index, follow" />

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
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.innovativelh.com/",
      "name": "Innovative Learning Horizons (ILH)",
      "alternateName": "ILH Saudi Arabia",
      "description":
        "Innovative Learning Horizons (ILH) is a leading professional training institute in Saudi Arabia offering certified BIM, PMP, AutoCAD, and skill development courses.",
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "Innovative Learning Horizons (ILH)",
        "url": "https://www.innovativelh.com/",
        "logo": "https://www.innovativelh.com/ilh.png",
        "sameAs": [
          "https://www.facebook.com/innovativelh",
          "https://www.instagram.com/innovativelh",
          "https://www.linkedin.com/company/innovativelh"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+966-5XXXXXXX",
          "contactType": "customer service",
          "areaServed": "SA",
          "availableLanguage": ["English", "Arabic"]
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.innovativelh.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "hasCourse": [
        {
          "@type": "Course",
          "name": "Building Information Modeling (BIM)",
          "description": "Learn BIM with hands-on professional training at ILH Saudi Arabia.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Innovative Learning Horizons (ILH)"
          }
        },
        {
          "@type": "Course",
          "name": "Project Management Professional (PMP)",
          "description": "Master PMP methodologies and become a certified project leader.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Innovative Learning Horizons (ILH)"
          }
        }
      ]
    }),
  }}
/>

      </Head>


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
        Empowering Professionals with World-Class Training in Saudi Arabia
      </h1>


      <main>
  <LandingSection />
  <WelcomeSection />
  <Courses />
  <WhyChooseUs />
  <Schedule/>
          <Testimonials />
  <Blogs />
</main>

    </>
  )
}

export default index
