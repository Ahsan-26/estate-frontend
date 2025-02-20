import React from "react";
import { Box, Text, VStack, Image, Grid, Button } from "@chakra-ui/react";

const WhatWeDo = () => {
  return (
    <Box 
      as="section" 
      id="whatwedo" // ✅ Correct placement of ID for scrolling
      py={{ base: 10, md: 16 }} 
      px={{ base: 5, md: 20 }} 
      textAlign="center"
    >
      <Text bg="yellow.100" color="yellow.700" fontSize="sm" fontWeight="bold" px={4} py={1} borderRadius="full" display="inline-block">
        WHAT WE DO
      </Text>

      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mt={3}>
        Your All-in-One Real Estate Solution
      </Text>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6} mt={10} maxW="1200px" mx="auto">
        {services.map((service, index) => (
          <VStack key={index} sx={styles.card}>
            <Image src={service.icon} alt={service.title} boxSize="60px" />
            <Text fontSize="lg" fontWeight="bold" textAlign="center">{service.title}</Text>
            <Button bg="yellow.100" color="yellow.700" fontSize="sm" fontWeight="bold" borderRadius="full" px={6} py={2} _hover={{ bg: "yellow.200" }}>
              {service.buttonText}
            </Button>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

const services = [
  { title: "Discover Tailored Property Solutions for You", icon: "/images/buy_icon.png", buttonText: "BUY" },
  { title: "Let Us Manage Your Property, Maximize Your Returns", icon: "/images/manage_icon.png", buttonText: "MANAGE" },
  { title: "Sell Your Property with Confidence and Ease", icon: "/images/sale_icon.png", buttonText: "SELL" }
];

const styles = { card: { bg: "yellow.50", borderRadius: "12px", boxShadow: "md", p: 6, align: "center", textAlign: "center", spacing: 4, width: "100%", transition: "all 0.3s ease", _hover: { transform: "translateY(-5px)", boxShadow: "lg" }, } };

export default WhatWeDo;
