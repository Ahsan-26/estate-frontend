import React from "react";
import { Box, Text, VStack, Image, Grid, Button, Stack } from "@chakra-ui/react";
import { PrimaryButton, SecondaryButton } from "../Buttons";

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

      {/* Buttons (Stack on mobile) */}
      <Stack 
        direction={{ base: "column", sm: "row" }} 
        spacing={4} 
        mt={4} 
        w="full" 
        align={{ base: "center", md: "start" }}
        justify="center"
      >
        <PrimaryButton text="Book a free call" isPopover={true} />
        <SecondaryButton text="WhatsApp us" to="/whatsapp" />
      </Stack>

      {/* Service Cards */}
      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} 
        gap={6} 
        mt={10} 
        maxW="1200px" 
        mx="auto"
      >
        {services.map((service, index) => (
          <Box key={index} sx={styles.card}>
            {/* Icon inside a slightly rounded background */}
            <Box sx={styles.iconWrapper}>
              <Image src={service.icon} alt={service.title} boxSize="40px" />
            </Box>

            {/* Button below the icon */}
            <Button 
              bg="yellow.100" 
              color="yellow.700" 
              fontSize="sm"
              fontWeight="bold"
              borderRadius="full" 
              px={4} 
              py={1}
              _hover={{ bg: "yellow.200" }}
            >
              {service.buttonText}
            </Button>

            {/* Content */}
            <VStack spacing={2} align="start">
              <Text fontSize="lg" fontWeight="bold">{service.title}</Text>
              <Text fontSize="sm" color="gray.600">{service.description}</Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

// Service Cards Data
const services = [
  { 
    title: "Discover Tailored Property Solutions for You", 
    icon: "/images/buy_icon.svg", 
    buttonText: "BUY",
    description: "Whether you're seeking your dream home, investment property, or commercial space, our experts provide personalized guidance to help you make an informed decision."
  },
  { 
    title: "Let Us Manage Your Property, Maximize Your Returns", 
    icon: "/images/manage_icon.svg", 
    buttonText: "MANAGE",
    description: "We take care of everything—from finding tenants and managing rent to handling finances and ensuring compliance. Let us make your property profitable and stress-free."
  },
  { 
    title: "Sell Your Property with Confidence", 
    icon: "/images/sale_icon.svg", 
    buttonText: "SELL",
    description: "Get the right value for your property with our transparent, end-to-end selling services. We provide honest evaluations and connect you with genuine buyers."
  }
];

// Card Styles
const styles = {
  card: {
    bg: "yellow.50",
    borderRadius: "12px",
    boxShadow: "md",
    p: 6,
    textAlign: "left",
    spacing: 4,
    width: "100%",
    transition: "all 0.3s ease",
    _hover: {
      transform: "translateY(-5px)",
      boxShadow: "lg",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
  },
  iconWrapper: {
    bg: "white",
    boxShadow: "md",
    borderRadius: "lg",
    padding: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "60px",
  }
};

export default WhatWeDo;
