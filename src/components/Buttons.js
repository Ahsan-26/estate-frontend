import React from "react";
import { Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ✅ Primary Button (Used for "Book a free call")
export const PrimaryButton = ({ text, to }) => {
  const navigate = useNavigate();

  return (
    <Button 
      bg="yellow.500" 
      color="white" 
      _hover={{ bg: "yellow.600" }} 
      rightIcon={<FaArrowRight />} 
      px={6}
      onClick={() => navigate(to)}
    >
      {text}
    </Button>
  );
};

// ✅ Secondary Button (Used for "WhatsApp us")
export const SecondaryButton = ({ text, to }) => {
  const navigate = useNavigate();

  return (
    <Button 
      border="2px solid #EAB308"
      color="#EAB308"
      bg="transparent"
      _hover={{ bg: "yellow.100" }}
      rightIcon={<FaArrowRight />} 
      px={6}
      onClick={() => navigate(to)}
    >
      {text}
    </Button>
  );
};
