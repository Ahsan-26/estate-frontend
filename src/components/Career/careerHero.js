import React from "react";
import { Box, Text, Image, VStack, Flex } from "@chakra-ui/react";

const CareerHero = () => {
  return (
    <Box 
      as="section"
      bgGradient="linear(to-b, #FEFEF9, #F7F3EA)" // ✅ Background Gradient
      py={{ base: 12, md: 16 }}
      px={{ base: 5, md: 20 }}
    >
      <Flex 
        direction={{ base: "column-reverse", md: "row" }} // ✅ Reverse on mobile for better UX
        align="center"
        justify="space-between"
        gap={{ base: 6, md: 10 }}
      >
        {/* Left Section - Text Content */}
        <VStack align="stretch" spacing={{ base: 4, md: 5 }} maxW="600px">
          {/* Main Heading */}
          <Text 
            fontSize={{ base: "2xl", md: "4xl" }} 
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }} // ✅ Center on mobile
          >
             Career Opportunities<br />at EstateOne
          </Text>

          {/* Description */}
          <Text 
            fontSize={{ base: "sm", md: "md" }} 
            color="gray.700" 
            textAlign={{ base: "center", md: "justify" }} // ✅ Center text for better readability on mobile
          >
            At EstateOne, we believe in fostering a culture of growth and development. 
            Our commitment to empowering employees by involving them in the organization's 
            growth ensures that everyone is aligned with the bigger picture. We keep our 
            team members informed about the latest developments, helping them realize tangible 
            benefits from their contributions.
          </Text>

          <Text 
            fontSize={{ base: "sm", md: "md" }} 
            color="gray.700" 
            textAlign={{ base: "center", md: "justify" }} // ✅ Center text on mobile
          >
            We prioritize a work environment that encourages excellence and inspires our 
            employees to enjoy their work while performing at their best.
          </Text>
        </VStack>

        {/* Right Section - Image */}
        <Box w={{ base: "90%", sm: "80%", md: "500px" }} mx="auto">
          <Image 
            src="/images/career_hero.png" // ✅ Replace with actual image path
            alt="Career at EstateOne"
            w="100%"
            borderRadius="10px"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CareerHero;
