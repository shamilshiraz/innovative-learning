import React from 'react'
import Head from 'next/head'
import BlogPage from '@/components/BlogPage'
import Blogs from '@/components/Blogs'

function BlogsPage() {
  return (
    <>
      <Head>
        <title>Career & Training Insights – ILH Saudi Arabia</title>
        <meta
          name="description"
          content="Explore ILH’s expert blogs on BIM, PMP, and professional skills. Stay ahead with industry updates, learning tips, and training insights from Saudi experts."
        />
        <meta
          name="keywords"
          content="training blog Saudi Arabia, career growth tips KSA, ILH updates, BIM trends Saudi Arabia, PMP exam insights"
        />
      </Head>

      <Blogs />
      <BlogPage />
    </>
  )
}

export default BlogsPage
