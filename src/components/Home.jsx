import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default Home