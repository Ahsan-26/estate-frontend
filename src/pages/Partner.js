import React from "react";
import FAQs from "../components/Faqs";
import PartnerHero from "../components/Partner/PartnerHero";
import PartnerWithUs from "../components/Partner/PartnerWithUs";
import PartnerWork from "../components/Partner/PartnerWork";
import PartnerFinalSection from "../components/Partner/PartnerFinalSection";

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