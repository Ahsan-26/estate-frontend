import React from "react";
import CareerHero from "../components/careerHero";
import FAQs from "../components/Faqs";
import Header from "../components/Header";
import PartnerHero from "../components/PartnerHero";
import PartnerWithUs from "../components/PartnerWithUs";
import PartnerWork from "../components/PartnerWork";
import PartnerFinalSection from "../components/PartnerFinalSection";

const Partner = () => {
    return (
      <div>
        
        <PartnerHero />
        <PartnerWithUs/>
        <PartnerWork/>
        <PartnerFinalSection/>
        <FAQs/>
      </div>
    );
  };
  export default Partner;