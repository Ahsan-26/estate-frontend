import React from "react";
import { Box, Text, useDisclosure, Image } from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";
import ContactModal from "./contactModal"; // ✅ Importing Modal Component
import { PrimaryButton } from "../Buttons";

const ContactHero = () => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Box 
      as="section"
      bgGradient="linear(to-b, #FEFEF9, #F7F3EA)"
      py={{ base: 10, md: 16 }}
      px={{ base: 5, md: 20 }}
      textAlign="center"
    >
      <Text 
        bg="yellow.100" 
        color="yellow.700" 
        fontSize="sm" 
        fontWeight="bold" 
        px={4} 
        py={1} 
        borderRadius="full"
        display="inline-block"
        marginTop={15}
      >
        CONTACT US
      </Text>

      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mt={3}>
        Got a Real Estate Query? Let’s <br /> Solve It Together!
      </Text>

      <Box 
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        maxW="600px"
        mx="auto"
        p={6}
        mt={6}
      >
        <Image src="/images/contact_agent.png" alt="Expert" boxSize="50px" mx="auto" />
        <Text fontSize="lg" fontWeight="bold" mt={3}>
          Buying, Managing, or Selling? We’ve Got Your Back
        </Text>
        <Text fontSize="md" color="gray.700" mt={2}>
          At EstateOne, we go beyond transactions to build meaningful relationships.
          Whether you're buying your dream home, managing your property, or selling 
          for the best deal, our team is here to guide you through every step.
        </Text>

        {/* ✅ Opens Modal */}
        <PrimaryButton
          bg="yellow.500" 
          color="white" 
          fontWeight="bold" 
          leftIcon={<FaComments />}
          _hover={{ bg: "yellow.600" }} 
          mt={4}
          isPopover={true}
          text={"Talk to an Expert"}
        >
        </PrimaryButton>
      </Box>

      {/* ✅ Render the Modal Component */}
      <ContactModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default ContactHero;
