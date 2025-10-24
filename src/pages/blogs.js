import BlogPage from '@/components/BlogPage'
import Blogs from '@/components/Blogs'
import React from 'react'
import Head from 'next/head'

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>Blogs | ILH Insights & Career Tips</title>
        <meta
          name="description"
          content="Read blogs from Innovative Learning Horizons covering career tips, training insights, and professional growth stories in Saudi Arabia."
        />
        <meta
          name="keywords"
          content="ILH blogs, professional growth Saudi Arabia, career insights, skill development tips"
        />

        {/* OG Tags */}
        <meta property="og:title" content="Blogs | ILH Insights & Career Tips" />
        <meta
          property="og:description"
          content="Stay updated with ILH blogs featuring success stories, course highlights, and industry insights from Saudi Arabia’s top training institute."
        />
        <meta property="og:image" content="https://www.innovativelh.com/og-image.jpg" />
        <meta property="og:url" content="https://www.innovativelh.com/blogs" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs | ILH Insights & Career Tips" />
        <meta
          name="twitter:description"
          content="Learn from ILH experts through insightful blogs and stories focused on professional excellence."
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
        ILH Blog Articles and Career Insights
      </h1>

      <Blogs />
      <BlogPage />
    </>
  )
}
