import React, { useState } from "react";
import { Box, Text, HStack, Image, Button, Flex, List, ListItem, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const TakeCareSection = () => {
  const [activeTab, setActiveTab] = useState("buyers");

  // Tab content data
  const tabData = {
    buyers: [
      "Finding the perfect property tailored to your needs",
      "Expert investment guidance you can trust",
      "Free 30-minute consultation to explore market opportunities",
      "Dedicated CRM for ongoing support and care",
      "Comprehensive after-sales assistance, including market updates",
      "Legal support to ensure a hassle-free experience",
    ],
    sellers: [
      "Maximize your property value with expert strategies",
      "Targeted marketing for the right buyers",
      "Hassle-free paperwork and legal compliance",
      "Professional photography and listings",
      "Negotiation support to secure the best deal",
      "End-to-end guidance throughout the selling process",
    ],
    management: [
      "Efficient property management solutions",
      "Tenant screening and lease management",
      "Timely maintenance and repairs",
      "Automated rent collection and tracking",
      "Financial reporting and transparency",
      "24/7 support for property owners and tenants",
    ],
  };

  return (
    <Box as="section" px={{ base: 5, md: 20 }} py={{ base: 10, md: 16 }}>
      <Flex 
        direction={{ base: "column", lg: "row" }} 
        align="center" 
        justify="space-between" 
        gap={{ base: 6, md: 10 }}
      >
        
        {/* Left Side - Text & Tabs */}
        <Box maxW={{ base: "100%", lg: "600px" }} textAlign={{ base: "center", lg: "left" }}>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
            What we Take Care of
          </Text>

          {/* Tabs */}
          <HStack mt={4} spacing={2} justify={{ base: "center", lg: "flex-start" }} flexWrap="wrap">
            <Button 
              bg={activeTab === "buyers" ? "yellow.400" : "transparent"} 
              color={activeTab === "buyers" ? "white" : "black"} 
              _hover={{ bg: "yellow.500", color: "white" }}
              onClick={() => setActiveTab("buyers")}
              fontSize={{ base: "sm", md: "md" }}
              px={4} py={2}
              borderRadius="md"
            >
              For Buyers
            </Button>
            <Button 
              bg={activeTab === "sellers" ? "yellow.400" : "transparent"} 
              color={activeTab === "sellers" ? "white" : "black"} 
              _hover={{ bg: "yellow.500", color: "white" }}
              onClick={() => setActiveTab("sellers")}
              fontSize={{ base: "sm", md: "md" }}
              px={4} py={2}
              borderRadius="md"
            >
              For Sellers
            </Button>
            <Button 
              bg={activeTab === "management" ? "yellow.400" : "transparent"} 
              color={activeTab === "management" ? "white" : "black"} 
              _hover={{ bg: "yellow.500", color: "white" }}
              onClick={() => setActiveTab("management")}
              fontSize={{ base: "sm", md: "md" }}
              px={4} py={2}
              borderRadius="md"
            >
              For Property Management
            </Button>
          </HStack>

          {/* Tab Content - List */}
          <List spacing={3} mt={6}>
            {tabData[activeTab].map((item, index) => (
              <ListItem key={index} display="flex" alignItems="center" fontSize={{ base: "sm", md: "md" }}>
                <Icon as={FaCheckCircle} color="yellow.400" mr={3} />
                {item}
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Right Side - Image with Branding */}
        <Box display="flex" justifyContent="center" flexShrink={0}>
          <Image 
            src="/images/house_icon.png" 
            alt="House" 
            w={{ base: "100%", sm: "400px", md: "450px" }} 
            maxW="500px"
          />
        </Box>

      </Flex>
    </Box>
  );
};

export default TakeCareSection;
