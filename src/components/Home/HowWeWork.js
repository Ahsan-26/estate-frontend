import React from "react";
import { Box, Text, VStack, HStack, Button, List, ListItem, Icon, Grid } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const HowWeWork = () => {
  // Section Data
  const sections = [
    {
      title: "BUY",
      color: "yellow.500",
      items: [
        "Schedule a Consultation (Meet 1)",
        "Explore Market & Investment Areas",
        "Property tours with our Advisor",
        "Strategic Planning Session(Meet 2)",
        "Negotiate & Secure the Best Deal",
        "Property updates and market trends",
        "Pre-Possession Inspection",
        "Generate Income? Self-Use,Sell & Exit",
        
      ],
      ctaText: "Book a free call",
      ctaLink: "/buy",
      subActions: ["Income?", "Want Live", "Sell & Exit"],
    },
    {
      title: "MANAGE",
      color: "yellow.500",
      items: [
        "Schedule a Consultation(Meet 1)",
        "Define your Objectives: Long Term Rental Income or Short Term Rental Income",
        "Property Inspection & Assessment",
        "For Long-Term Rentals: Tenant Screening & Maximized Rental Listings",
        "For Short-Term Rentals: Complete setup &Strategic listings",
        "Management & Monitoring:For Long-Term Rentals:Secure Rent Collection &Property MaintenanceFor Short-Term Rentals:Streamlined Guest Coordination & Dynamic Pricing",
        "Maximize Income Potential",
        "Generate consistent income",
      ],
      ctaText: "Book a free call",
      ctaLink: "/manage",
      subActions: [],
    },
    {
      title: "SELL",
      color: "yellow.500",
      items: [
        "Schedule a consultation (Meet 1)",
        "EstateOne Approval & Strategic Collaboration",
        "Property Tour with our Advisor",
        "Evaluate Market Value &Finalize Selling Price",
        "Targeted Marketing Exposure",
        "Qualified Buyer Screening",
        "Organise Property Showings",
        "Facilitate Buyer Negotiations",
        "Finalize & Close the Sale",
      ],
      ctaText: "Book a free call",
      ctaLink: "/sell",
      subActions: [],
    },
  ];

  return (
    <Box 
      as="section" 
      id="howwework"
      py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }} textAlign="center">
      {/* Section Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
        Your Real Estate Roadmap
      </Text>
      <Text fontSize="md" color="gray.600" maxW="800px" mx="auto" mt={3}>
      We make real estate easy. At EstateOne, our roadmap takes
you from where you are to where you want to be—quickly, confidently, and
seamlessly
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
                  <Icon as={FaChevronDown} color={section.color} mr={2} />
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
