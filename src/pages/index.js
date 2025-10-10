import Blogs from '@/components/Blogs'
import Courses from '@/components/Courses'
import WelcomeSection from '@/components/Intro'
import LandingSection from '@/components/Landing'
import Navbar from '@/components/Navbar'
import WhyChooseUs from '@/components/Why'
import React from 'react'

const index = () => {
  return (
    <div>
      <LandingSection/>
      <WelcomeSection/>
      <Courses/>
      <WhyChooseUs/>
      <Blogs/>
    </div>
  )
}

export default index
