import React from "react";
import { Box, Text, VStack, HStack, Button, List, ListItem, Icon, Grid } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const HowWeWork = () => {
  // Section Data
  const sections = [
    {
      title: "BUY",
      color: "yellow.500",
      items: [
        "Book a Consultation (Meet 1)",
        "Understand Market & Investment Areas",
        "Visit Selected Properties with Advisor",
        "Strategic Planning Session",
        "Negotiate for Best Deals and Buy Your Property",
        "Dedicated CRM Support and demand time Receive Bi-Monthly Property Insights",
        "Personalized Post-Purchase Support",
        "Regular Property Updates & Market Insights",
        "Pre-Possession Inspection",
      ],
      ctaText: "Book a free call",
      ctaLink: "/buy",
      subActions: ["Income?", "Want Live", "Sell & Exit"],
    },
    {
      title: "MANAGE",
      color: "yellow.500",
      items: [
        "Schedule a Consultation",
        "Understand Your Objectives: Long-Term Rental Income Short-Term Rental Income (Airbnb, etc.)",
        "Property Inspection & Assessment",
        "For Long-Term Rentals: Tenant Screening Add Property to Rental Listings",
        "For Short-Term Rentals: Furnishing & Staging Add Basic Amenities (e.g., WiFi, Utilities) List on Short-Term Rental Platforms",
        "Management & Monitoring: Rent Collection Property Maintenance Guest or Tenant Coordination",
        "Maximize Income Potential",
        "Qualify Potential Buyers Schedule Property Showings",
      ],
      ctaText: "Book a free call",
      ctaLink: "/manage",
      subActions: [],
    },
    {
      title: "SELL",
      color: "yellow.500",
      items: [
        "Book a consultation",
        "Evaluate Market Value & Finalize Selling Price",
        "If project is approved or taking care by estateone, then list or include in advisor list for selling, and ask for other partners to sell",
        "Market Property Across Relevant Channels",
        "Qualify Potential Buyers Schedule Property Showings",
        "Negotiation & Deal Closure Facilitate Buyer Negotiations Finalize and Close the Sale",
      ],
      ctaText: "Book a free call",
      ctaLink: "/sell",
      subActions: [],
    },
  ];

  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }} textAlign="center">
      {/* Section Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
        How We Work
      </Text>
      <Text fontSize="md" color="gray.600" maxW="800px" mx="auto" mt={3}>
        At EstateOne, we simplify property ownership. Whether you're looking to buy, manage, or sell real estate,
        we've got you covered. From finding the perfect property to handling day-to-day management and ensuring
        a smooth selling process, we do it all.
      </Text>

      {/* Grid Layout for the 3 Sections */}
      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} 
        gap={8} 
        mt={10} 
        maxW="1100px" 
        mx="auto"
      >
        {sections.map((section, index) => (
          <VStack 
            key={index} 
            p={6} 
            bg="white" 
            borderRadius="lg" 
            boxShadow="md" 
            align="start" 
            textAlign="left" 
            spacing={4} 
            h="full"
          >
            {/* Title */}
            <Text fontSize="xl" fontWeight="bold" color={section.color}>
              {section.title}
            </Text>

            {/* List of Features */}
            <List spacing={3} flex="1">
              {section.items.map((item, i) => (
                <ListItem key={i} display="flex" alignItems="center">
                  <Icon as={FaCheckCircle} color={section.color} mr={2} />
                  {item}
                </ListItem>
              ))}
            </List>

            {/* Sub Actions (Only for Buy Section) */}
            {section.subActions.length > 0 && (
              <HStack spacing={3} mt={4}>
                {section.subActions.map((action, i) => (
                  <Button 
                    key={i} 
                    bg="#F8F1E7" 
                    color="black" 
                    borderRadius="lg" 
                    _hover={{ bg: "#f5e5d5" }} 
                    size="sm"
                    px={4}
                  >
                    {action}
                  </Button>
                ))}
              </HStack>
            )}

            {/* Call to Action Button */}
            <Button 
              bg={section.color} 
              color="white" 
              _hover={{ bg: "yellow.600" }} 
              width="full" 
              mt={4}
            >
              {section.ctaText}
            </Button>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default HowWeWork;
