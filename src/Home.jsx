import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chairman from "./components/Chairman";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Objectives from "./components/Objectives";
import KeyActivity from "./components/KeyActivity";
import VpandGS from "./components/VPandGS";
import TeamSection from "./components/TeamSection";
import AboutMissionVision from "./components/AboutMissionVision";
import SponsoredSection from "./components/SponsoredSection";

//import Home from "./pages/Home";
//import Committee from "./pages/Committee";
//import About from "./pages/About";

import ExecutiveMembers from "./ExecutiveMembers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <>
      <Navbar />
      <Newsletter />
      <Objectives />
      <KeyActivity />
      <Chairman />
      <VpandGS />
      <TeamSection />
      <AboutMissionVision />
      <SponsoredSection />
      <Footer />
    </>
  );
}

export default Home;
