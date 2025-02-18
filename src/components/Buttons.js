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
export const SecondaryButton = ({ text, to }) => {
  const navigate = useNavigate(); // ✅ Use useNavigate properly

  return (
    <Button 
      border="2px solid #EAB308"
      color="#EAB308"
      bg="transparent"
      _hover={{ bg: "yellow.100" }}
      rightIcon={<FaArrowRight />} 
      px={6}
      onClick={() => navigate(to)} // ✅ Correct navigation
    >
      {text}
    </Button>
  );
};
