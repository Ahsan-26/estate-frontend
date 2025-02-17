import React from "react";
import { Box, Text, VStack, Button, Image } from "@chakra-ui/react";

const ContactHero = () => {
  return (
    <Box 
      as="section"
      bgGradient="linear(to-b, #FEFEF9, #F7F3EA)" // ✅ Background Gradient
      py={{ base: 10, md: 16 }}
      px={{ base: 5, md: 20 }}
      textAlign="center"
    >
      {/* Section Tag */}
      <Text 
        bg="black" 
        color="white" 
        fontSize="sm" 
        fontWeight="bold" 
        px={4} 
        py={1} 
        borderRadius="full"
        display="inline-block"
      >
        CONTACT US
      </Text>

      {/* Main Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mt={3}>
        Got a Real Estate Query? Let’s <br /> Solve It Together!
      </Text>

      {/* Card Container */}
      <Box 
        bg="white"
        p={6}
        mt={8}
        borderRadius="lg"
        boxShadow="md"
        maxW="550px"
        mx="auto"
        textAlign="center"
      >
        {/* Icon */}
        <Image 
          src="/images/contact_agent.png" // ✅ Replace with actual icon image path
          alt="Agent"
          boxSize="50px"
          mx="auto"
          mb={3}
        />

        {/* Card Title */}
        <Text fontSize="lg" fontWeight="bold">
          Buying, Managing, or Selling? We’ve Got Your Back
        </Text>

        {/* Description */}
        <Text fontSize="sm" color="gray.600" mt={2}>
          At EstateOne, we go beyond transactions to build meaningful relationships. 
          Whether you’re buying your dream home, managing your property, or selling 
          for the best deal, our team is here to guide you through every step.
        </Text>

        {/* Call-to-Action Button */}
        <Button 
          bg="yellow.500" 
          color="white" 
          _hover={{ bg: "yellow.600" }}
          mt={4}
          size="md"
        >
          🏡 Talk to an Expert
        </Button>
      </Box>
    </Box>
  );
};

export default ContactHero;
