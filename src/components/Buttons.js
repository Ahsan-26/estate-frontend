import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Use react-router-dom
import QueryPopover from "./Popovers/QueryPopover";



// ✅ Primary Button (Used for "Book a free call")
export const PrimaryButton = ({ text, to, isPopover }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Use useNavigate for routing

  const handleClick = () => {
    if (isPopover) {
      setIsOpen(true); 
    } else {
      navigate(to); // ✅ Use useNavigate properly
    }
  };

  return (
    <>
      <Button 
        bg="yellow.500" 
        color="white" 
        _hover={{ bg: "yellow.600" }} 
        rightIcon={<FaArrowRight />} 
        px={6}
        onClick={handleClick} 
      >
        {text}
      </Button>

      {/* Popover appears only when isPopover is true */}
      {isPopover && <QueryPopover isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

// ✅ Secondary Button (Used for "WhatsApp us")
export const SecondaryButton = ({ text }) => {
  const whatsappUrl = "https://wa.me/919548056061"; // Correct WhatsApp URL format

  return (
    <Button 
      border="2px solid #25D366"
      color=" white"
      bg="#25D366"
      _hover={{ bg: "#25D366" }}
      rightIcon={<FaArrowRight />} 
      px={6}
      onClick={() => window.location.href = whatsappUrl} // Open WhatsApp chat
    >
      {text}
    </Button>
  );
};