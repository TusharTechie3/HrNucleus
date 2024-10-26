import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
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