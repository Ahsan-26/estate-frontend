import React from "react";
import { Box, Text, Image, VStack, Flex } from "@chakra-ui/react";

const PartnerHero = () => {
  return (
    <Box 
      as="section"
      bgGradient="linear(to-b, #FEFEF9, #F7F3EA)" // ✅ Background Gradient
      py={{ base: 12, md: 16 }}
      px={{ base: 5, md: 20 }}
      maxW={"1500px"}
      mx={"auto"}
      mt={{ base: 6, md: 2 }}
    >
      <Flex 
        direction={{ base: "column-reverse", md: "row" }} // ✅ Reverse on mobile for better UX
        align="center"
        justify="space-between"
        gap={{ base: 6, md: 10 }}
      >
        {/* Left Section - Text Content */}
        <VStack align="stretch" spacing={{ base: 4, md: 5 }} maxW="600px">
          {/* Section Tag */}
          <Text 
          
            color="#DA990E" 
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="bold" 
            px={4} 
            py={1} 
            borderRadius="full"
            display="inline-block"
            alignSelf={{ base: "center", md: "flex-start" }} // ✅ Center on mobile
          >
            Your Success, Our Priority!
          </Text>

          {/* Main Heading */}
          <Text 
            fontSize={{ base: "2xl", md: "4xl" }} 
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }} // ✅ Center on mobile
          >
            Unlock Exclusive <br /> Growth Opportunities
          </Text>

          {/* Description */}
          <Text 
            fontSize={{ base: "sm", md: "md" }} 
            color="gray.700" 
            textAlign={{ base: "center", md: "justify" }} // ✅ Center text for better readability on mobile
          >
            Partner with EstateOne as a Channel Partner or Broker and unlock new growth 
            opportunities. Benefit from our extensive market reach, expert insights, and 
            dedicated support. Join our trusted real estate network and enjoy seamless 
            access, secure transactions, and real-time updates through our smart partner 
            dashboard. Expand your success with EstateOne today!
          </Text>
        </VStack>

        {/* Right Section - Image */}
        <Box w={{ base: "90%", sm: "80%", md: "500px" }} mx="auto">
          <Image 
            src="/images/partner_hero.png" // ✅ Replace with actual image path
            alt="Partner with EstateOne"
            w="100%"
            borderRadius="10px"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default PartnerHero;
