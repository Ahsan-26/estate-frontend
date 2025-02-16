import React, { useState } from "react";
import { Box, Text, VStack, HStack, Image, Button, Flex, List, ListItem, Icon } from "@chakra-ui/react";
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
    <Box as="section"  px={{ base: 5, md: 20 }}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={10}>
        
        {/* Left Side - Text & Tabs */}
        <Box maxW="600px">
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
            What we Take Care of
          </Text>

          {/* Tabs */}
          <HStack mt={4} spacing={4}>
            <Button 
              bg={activeTab === "buyers" ? "yellow.400" : "transparent"} 
              color={activeTab === "buyers" ? "white" : "black"} 
              _hover={{ bg: "yellow.500", color: "white" }}
              onClick={() => setActiveTab("buyers")}
            >
              For Buyers
            </Button>
            <Button 
              bg={activeTab === "sellers" ? "yellow.400" : "transparent"} 
              color={activeTab === "sellers" ? "white" : "black"} 
              _hover={{ bg: "yellow.500", color: "white" }}
              onClick={() => setActiveTab("sellers")}
            >
              For Sellers
            </Button>
            <Button 
              bg={activeTab === "management" ? "yellow.400" : "transparent"} 
              color={activeTab === "management" ? "white" : "black"} 
              _hover={{ bg: "yellow.500", color: "white" }}
              onClick={() => setActiveTab("management")}
            >
              For Property Management
            </Button>
          </HStack>

          {/* Tab Content - List */}
          <List spacing={3} mt={6}>
            {tabData[activeTab].map((item, index) => (
              <ListItem key={index} display="flex" alignItems="center">
                <Icon as={FaCheckCircle} color="yellow.400" mr={3} />
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Right Side - Image with Branding */}
        <Box >
          <Image src="/images/house_icon.png" alt="House" w="400px" mt="20"/>
        </Box>

      </Flex>
    </Box>
  );
};

export default TakeCareSection;
