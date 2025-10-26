import BlogPage from '@/components/BlogPage'
import React from 'react'
import Head from 'next/head'

export default function BlogSinglePage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.innovativelh.com/blogpage" />
        {/* 🔹 SEO Title & Description */}
        <title>ILH Blog Page | Professional Training Insights & Success Stories</title>
        <meta
          name="description"
          content="Read in-depth blogs and success stories from Innovative Learning Horizons (ILH), sharing tips, training insights, and professional growth guidance in Saudi Arabia."
        />
        <meta
          name="keywords"
          content="ILH blog page, ILH success stories, training blogs Saudi Arabia, professional development tips"
        />

        {/* 🔹 Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="ILH Blog Page | Professional Training Insights & Success Stories" />
        <meta
          property="og:description"
          content="Explore ILH’s blog page for insightful stories, course highlights, and expert advice to grow your career in Saudi Arabia."
        />
        <meta property="og:image" content="https://www.innovativelh.com/og-image.jpg" />
        <meta property="og:url" content="https://www.innovativelh.com/blogpage" />
        <meta property="og:type" content="website" />

        {/* 🔹 Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ILH Blog Page | Professional Training Insights & Success Stories" />
        <meta
          name="twitter:description"
          content="Gain valuable knowledge from ILH blogs – covering training insights, certifications, and student success stories."
        />
        <meta name="twitter:image" content="https://www.innovativelh.com/og-image.jpg" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Innovative Learning Horizons Blog",
      "url": "https://www.innovativelh.com/blogpage",
      "description":
        "Read ILH blogs featuring insights, success stories, and professional training guidance from Saudi Arabia’s trusted institute.",
      "publisher": {
        "@type": "Organization",
        "name": "Innovative Learning Horizons (ILH)",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.innovativelh.com/logo.png"
        }
      },
      "sameAs": [
        "https://www.facebook.com/innovativelh",
        "https://www.instagram.com/innovativelh",
        "https://www.linkedin.com/company/innovativelh"
      ]
    }),
  }}
/>

      </Head>

      {/* 🔹 Hidden H1 for SEO & audit tools */}
      <h1
        style={{
          position: 'absolute',
          fontSize: '1px',
          opacity: 0,
          height: 0,
          overflow: 'hidden',
        }}
      >
        ILH Blog Page – Professional Training and Career Insights
      </h1>

      {/* 🔹 Page Content */}
      <main>
  <BlogPage />
</main>

    </>
  )
}