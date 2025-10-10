import Courses from '@/components/Courses'
import WelcomeSection from '@/components/Intro'
import LandingSection from '@/components/Landing'
import Navbar from '@/components/Navbar'
import WhyChooseUs from '@/components/Why'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <LandingSection/>
      <WelcomeSection/>
      <Courses/>
      <WhyChooseUs/>
    </div>
  )
}

export default index
