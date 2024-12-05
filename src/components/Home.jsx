import React, { useContext, useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";
import { GlobalContext } from "@/context";
import { fetchCsv } from "@/utils/helper";

const Home = () => {
  const { setLatestJobs } = useContext(GlobalContext);
  const { setAllJobs } = useContext(GlobalContext);

  useEffect(() => {
    fetchCsv("/data/Jobs.csv", setAllJobs);
    fetchCsv("/data/LatestJobs.csv", setLatestJobs);
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
