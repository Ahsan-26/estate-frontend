import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // ✅ New icons
import { useNavigate } from "react-router-dom";
import SchedulePopover from "./Popovers/SchedulePopover";

// ✅ Primary Button (Used for "Book a free call")
export const PrimaryButton = ({ text, to, isPopover,...props}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isPopover) {
      setIsOpen(true);
    } else {
      navigate(to);
    }
  };

  return (
    <>
      <Button 
        bg="yellow.500" 
        color="white" 
        _hover={{ bg: "yellow.600" }} 
        rightIcon={<FaPhoneAlt />}  
        _active={{ transform: "scale(1.1)" }} 
        transition="transform 0.1s ease-in-out"
        px={6}
        onClick={handleClick}
          {...props}
      >
        {text}
      </Button>

      {/* Popover appears only when isPopover is true */}
      {isPopover && <SchedulePopover isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

// ✅ Secondary Button (Used for "WhatsApp us")
export const SecondaryButton = ({ text }) => {
  const whatsappUrl = "https://wa.me/919548056061";

  return (
    <Button 
      border="2px solid #25D366"
      color="white"
      bg="#25D366"
       _active={{ transform: "scale(1.1)" }} 
        transition="transform 0.1s ease-in-out"
      _hover={{ bg: "#1EBE5D" }}  // ✅ Slightly darker green on hover
      leftIcon={<FaWhatsapp />}  // ✅ Changed icon
      px={6}
      onClick={() => window.location.href = whatsappUrl}
    >
      {text}
    </Button>
  );
};
