import React, { useState } from "react";
import { Box, Text, HStack, Button, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaWhatsapp } from "react-icons/fa";
import SchedulePopover from "../Popovers/SchedulePopover";

const ContactHelp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box as="section" py={{ base: 8, md: 12 }} px={{ base: 5, md: 20 }} textAlign="center">
      <Box 
        bg="#fff6e4" 
        borderRadius="lg" 
        p={{ base: 6, md: 8 }} 
        maxW="900px" 
        mx="auto"
      >
        {/* Icon */}
        <Image src="/images/home_icon.png" alt="Support Icon" boxSize="65px" mx="auto" mb={3} />

        {/* Text */}
        <Text fontSize="md" color="gray.700" maxW="700px" mx="auto" fontWeight="medium">
          At EstateOne, we’re committed to making your real estate journey smooth, secure, 
          and stress-free. Whatever the issue, we’re here to help—every step of the way.
        </Text>

        {/* Action Buttons */}
        <HStack mt={5} spacing={4} justify="center" flexWrap="wrap">
          <Button 
            leftIcon={<FaCalendarAlt />} 
            bg="yellow.500" 
            color="white" 
            _hover={{ bg: "yellow.600" }}
            size="md"
             _active={{ transform: "scale(1.1)" }} 
        transition="transform 0.1s ease-in-out"
            onClick={() => setIsModalOpen(true)} // Open Modal
          >
            Pick a suitable time
          </Button>
          <Button 
           _active={{ transform: "scale(1.1)" }} 
        transition="transform 0.1s ease-in-out"
            leftIcon={<FaWhatsapp />} 
            colorScheme="#1EBE5D" bg="#25D366" 
            // color="white" 
            _hover={{ bg: "green.500" }}
            size="md"
            onClick={() => window.open("https://wa.me/919548056061", "_blank")} // Open WhatsApp
          >
            WhatsApp Us
          </Button>
        </HStack>

        {/* Render Popover */}
        <SchedulePopover isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Box>
    </Box>
  );
};

export default ContactHelp;
