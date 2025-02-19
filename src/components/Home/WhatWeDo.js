import React from "react";
import { Box, Text, VStack, Image, Grid, Button } from "@chakra-ui/react";

const WhatWeDo = () => {
  return (
    <Box 
      as="section" 
      py={{ base: 10, md: 16 }} 
      px={{ base: 5, md: 20 }} 
      textAlign="center"
    >
      {/* Section Tag */}
      <Text 
        bg="yellow.100" 
        color="yellow.700" 
        fontSize="sm" 
        fontWeight="bold" 
        px={4} 
        py={1} 
        borderRadius="full"
        display="inline-block"
      >
        WHAT WE DO
      </Text>

      {/* Section Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mt={3}>
        Your All-in-One Real Estate Solution
      </Text>

      {/* Description */}
      <Text fontSize="md" color="gray.700" mt={3} maxW="800px" mx="auto">
        From finding the perfect property to handing over the keys, we're with you every step of the way. 
        With expert advice, seamless processes, and a dedicated CRM to keep everything on track, we ensure you 
        feel confident and cared for throughout your journey. Whether it’s your dream home or a smart investment, 
        we make real estate simple, stress-free, and truly yours.
      </Text>

      {/* Service Cards */}
      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} 
        gap={6} 
        mt={10} 
        maxW="1200px" 
        mx="auto"
      >
        {services.map((service, index) => (
          <VStack key={index} sx={styles.card}>
            <Image src={service.icon} alt={service.title} boxSize="60px" />
            <Text fontSize="lg" fontWeight="bold" textAlign="center">{service.title}</Text>
            <Button 
              bg="yellow.100" 
              color="yellow.700" 
              fontSize="sm"
              fontWeight="bold"
              borderRadius="full"
              px={6} 
              py={2}
              _hover={{ bg: "yellow.200" }}
            >
              {service.buttonText}
            </Button>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

// Service Cards Data
const services = [
  {
    title: "Discover Tailored Property Solutions for You",
    icon: "/images/buy_icon.png",
    buttonText: "BUY",
  },
  {
    title: "Let Us Manage Your Property, Maximize Your Returns",
    icon: "/images/manage_icon.png",
    buttonText: "MANAGE",
  },
  {
    title: "Sell Your Property with Confidence and Ease",
    icon: "/images/sale_icon.png",
    buttonText: "SELL",
  }
];

// Embedded CSS Styles
const styles = {
  card: {
    bg: "yellow.50",
    borderRadius: "12px",
    boxShadow: "md",
    p: 6,
    align: "center",
    textAlign: "center",
    spacing: 4,
    width: "100%",
    transition: "all 0.3s ease",
    _hover: {
      transform: "translateY(-5px)",
      boxShadow: "lg",
    },
  },
};

export default WhatWeDo;
