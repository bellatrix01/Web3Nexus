import React from "react";
import Section1 from "../containers/Section1";
//import Section2 from "../containers/Section2";
import Section3 from "../containers/Section3";
import Section4 from "../containers/Section4";
import Section5 from "../containers/Section5";
import Section6 from "../containers/Section6";
//import Section7 from "../containers/Section7";
import Section8 from "../containers/Section8";
//import Section9 from "../containers/Section9";
import Section10 from "../containers/Section10";
import Section11 from "../containers/Section11";
import Navbar from "../components/Navbars/MainNavbar";
import Footer from "../components/Footer/MainFooter/";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Section1 />
      
      <Box sx={{ bgcolor: "background.default", position: "relative" }}>
     
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
     
      <Section8 />
      
      <Section10 />
      <Section11 />

      {/* Footer */}
      <Footer />
      </Box>
    </div>
  )
}

export default Home;