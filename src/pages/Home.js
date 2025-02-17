import React from "react";
import HeroSection from "../components/Home/HeroSection";
import WhatWeDo from "../components/Home/WhatWeDo";
import ExpertSection from "../components/Home/ExpertSection";
import ReviewsSection from "../components/Home/ReviewsSection";
import TakeCareSection from "../components/Home/TakeCareSection";
import FAQs from "../components/Faqs";
import HowWeWork from "../components/Home/HowWeWork";


const Home = () => {
    return (
      <div>
        <HeroSection />
        <WhatWeDo />
        <ExpertSection />
        <ReviewsSection />
        <TakeCareSection />
        <HowWeWork />
        <FAQs/>
      </div>
    );
  };

export default Home;
