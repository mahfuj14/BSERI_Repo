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
import NewsDetails from "./NewsDetails";
import LoginPage from "./LoginPage";
import NewsFrontPage from "./NewsFrontPage";
import ChairmanDetails from "./ChairmanDetails";

//import Home from "./pages/Home";
//import Committee from "./pages/Committee";
//import About from "./pages/About";

import ExecutiveMembers from "./ExecutiveMembers";
import Home from "./Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="committee" element={<ExecutiveMembers />} /> 
        <Route path="/news/:id" element={<NewsDetails />} />  
        <Route path="/login" element={<LoginPage />} />
        <Route path="/newsFrontpage" element={<NewsFrontPage />} />
        <Route path="/chairmanDetails" element={<ChairmanDetails />} />

        {/* <Route path="/about" element={<About />} /> */}
        {/* Add other routes as needed */}
      </Routes>
      {/* Optional: Include shared components on all pages */}
    </Router>
  );
}

export default App;
