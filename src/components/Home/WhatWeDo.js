import React from "react";
import { Box, Text, VStack, HStack, Image, Grid } from "@chakra-ui/react";
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

      {/* Buttons */}
      <HStack spacing={4} mt={6} justify="center">
        <PrimaryButton text="Book a free call" isPopover={true} />
        <SecondaryButton text="WhatsApp us" to="/whatsapp" />
      </HStack>

      {/* Service Cards with Flip Animation */}
      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} 
        gap={6} 
        mt={10} 
        maxW="1200px" 
        mx="auto"
      >
        {services.map((service, index) => (
          <Box key={index} sx={styles.flipCard}>
            <Box sx={styles.flipCardInner}>
              
              {/* Front Side */}
              <VStack sx={styles.flipCardFront}>
                <Image src={service.icon} alt={service.title} boxSize="50px" />
                <Text fontSize="lg" fontWeight="bold" textAlign="center">{service.title}</Text>
              </VStack>

              {/* Back Side */}
              <VStack sx={styles.flipCardBack}>
                <Text fontSize="md" fontWeight="bold" textAlign="center">
                  {service.backText}
                </Text>
                <HStack spacing={1} mt={3}>
                <PrimaryButton text="Book a free call" isPopover={true} />
                <SecondaryButton text="WhatsApp us" to="/whatsapp" />
                </HStack>
              </VStack>

            </Box>
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
    icon: "/images/buy_icon.png",
    backText: "Whether you're seeking your dream home, investment property, or commercial space, our experts provide personalized guidance to help you make an informed decision based on your needs.",
  },
  {
    title: "Let Us Manage Your Property, Maximize Your Returns",
    icon: "/images/manage_icon.png",
    backText: "We take care of everything—from finding tenants and managing rent to handling finances and ensuring everything is compliant. Let us make your property profitable and stress-free",
  },
  {
    title: "Sell Your Property with Confidence",
    icon: "/images/sale_icon.png",
    backText: "Get the right value for your property with our transparent, end-to-end selling services. We provide honest market evaluations and connect you with genuine buyers, ensuring a smooth and rewarding selling experience.",
  }
];

// Embedded CSS Styles
const styles = {
  flipCard: {
    width: "100%",
    height: "220px", // Adjust height as needed
    perspective: "1000px", // 3D effect
  },
  flipCardInner: {
    width: "100%",
    height: "100%",
    position: "relative",
    transition: "transform 0.6s ease-in-out",
    transformStyle: "preserve-3d",
    "&:hover": {
      transform: "rotateY(180deg)",
    },
  },
  flipCardFront: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "gray.50",
    boxShadow: "md",
    p: 6,
  },
  flipCardBack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    bg: "white",
    color: "black",
    boxShadow: "md",
    p: 6,
  },
};

export default WhatWeDo;
