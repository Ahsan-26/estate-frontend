import React from "react";
import HeroSection from "../components/HeroSection";
import WhatWeDo from "../components/WhatWeDo";
import ExpertSection from "../components/ExpertSection";
import ReviewsSection from "../components/ReviewsSection";
import TakeCareSection from "../components/TakeCareSection";
import FAQs from "../components/Faqs";
import HowWeWork from "../components/HowWeWork";


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
