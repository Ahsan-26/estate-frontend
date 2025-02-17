import React from "react";
import ContactHero from "../components/Contact/ContactHero";
import ContactSupport from "../components/Contact/ContactSupport";
import ContactFAQ from "../components/Contact/ContactFAQ";
import ContactHelp from "../components/Contact/ContactHelp";

const Contact = () => {
    return (
      <div>
        <ContactHero />
        <ContactSupport />
        <ContactFAQ />
        <ContactHelp />
      </div>
    );
  };
  export default Contact;