import React from 'react'
import Head from 'next/head'
import BlogPage from '@/components/BlogPage'

function BlogPageMain() {
  return (
    <>
      <Head>
        {/* 🔹 SEO Meta Tags */}
        <title>Expert Articles & Learning Resources – ILH Saudi Arabia</title>
        <meta
          name="description"
          content="Read expert articles from Innovative Learning Horizons. Explore guides on BIM, PMP, and professional development from Saudi Arabia’s trusted institute."
        />
        <meta
          name="keywords"
          content="training blog Saudi Arabia, BIM learning Saudi Arabia, PMP articles, ILH education insights, career development Saudi"
        />

        {/* 🔹 Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Expert Articles & Learning Resources – ILH Saudi Arabia" />
        <meta
          property="og:description"
          content="Explore valuable blogs and insights from ILH on BIM, PMP, and career development. Learn from experts shaping the future of professional training in Saudi Arabia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://innovativelh.com/blogpage" />
        <meta property="og:image" content="https://innovativelh.com/og-image.jpg" /> 
        {/* 👉 Replace this with your actual blog banner image URL */}
        
        {/* 🔹 Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Articles & Learning Resources – ILH Saudi Arabia" />
        <meta
          name="twitter:description"
          content="Explore ILH’s insightful blogs on BIM, PMP, and training strategies from Saudi Arabia’s leading institute."
        />
        <meta name="twitter:image" content="https://innovativelh.com/og-image.jpg" />
      </Head>

      <BlogPage />
    </>
  )
}

export default BlogPageMain
