import React from "react";
import { Box, Text, VStack, Grid, Circle } from "@chakra-ui/react";

const steps = [
  {
    number: "1",
    title: "Register & Get Verified",
    description: "Quick & hassle-free onboarding",
  },
  {
    number: "2",
    title: "Access Your Dashboard",
    description: "Manage bookings, payments & insights in one place",
  },
  {
    number: "3",
    title: "Grow with us",
    description: "Close deals, earn commissions & expand your network",
  },
];

const PartnerWork = () => {
  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 4, md: 20 }} textAlign="center">
    {/* Background Box for Styling */}
    <Box 
      bg="y" 
      borderRadius="lg" 
      py={{ base: 12, md: 16 }} 
      position="relative"
      px={{ base: 4, md: 10 }}
    >
        {/* Section Heading */}
        <Text 
          fontSize={{ base: "2xl", md: "4xl" }} 
          fontWeight="bold" 
          position="absolute" 
          top="20px" 
          left="50%" 
          transform="translateX(-50%)"
          whiteSpace="nowrap"
        >
          How It Works
        </Text>

        {/* Steps Card */}
        <Box 
        bg="white" 
        borderRadius="lg" 
        boxShadow="md" 
        maxW="1100px" 
        mx="auto" 
        py={{ base: 6, md: 8 }} 
        px={{ base: 4, md: 6 }} 
        position="relative"
        top="50px"
      >
        <Grid 
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} 
          gap={6} 
          alignItems="flex-start" // Changed to flex-start
        >
          {steps.map((step, index) => (
            <VStack key={index} spacing={4} textAlign="center">
              <Circle 
                size={{ base: "35px", md: "40px" }} 
                bg="yellow.500" 
                color="white" 
                fontWeight="bold"
                zIndex={1}
              >
                {step.number}
              </Circle>
                {/* Title */}
                <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                  {step.title}
                </Text>

                {/* Description */}
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
                  {step.description}
                </Text>
              </VStack>
            ))}
          </Grid>
          <Box
  position="absolute"
  top={{ md: "52px" }} // Vertical alignment with circles
  left={{ md: "calc(17.33% + 20px)" }} // Start after first circle
  right={{ md: "calc(18.33% - 20px)" }} // End before third circle
  height="1px"
  borderTop="3px dotted"
  borderColor="yellow.200"
  zIndex={0}
  display={{ base: "none", md: "block" }}
/>
      </Box>
    </Box>
    </Box>
  );
};

export default PartnerWork;
