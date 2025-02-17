import React from "react";
import { Box, Text, VStack, HStack, Input, Textarea, Button, FormControl, FormLabel, Flex, Icon } from "@chakra-ui/react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactSupport = () => {
  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }}>
      {/* Section Title */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" textAlign="center">
        Facing Challenges? We’ve Got <br /> You Covered
      </Text>

      {/* Main Flex Container */}
      <Flex 
        direction={{ base: "column", md: "row" }} 
        align="center" 
        justify="space-between" 
        mt={10} 
        gap={10}
      >
        {/* Left Side - Support Information */}
        <VStack align="start" spacing={6} maxW="600px">
          <Box>
            <Text fontSize="lg" fontWeight="bold" color="black">
              Delayed Possession? We're Here to Help
            </Text>
            <Text fontSize="sm" color="gray.600">
              If your possession is delayed, don’t stress. Our expert legal team will stand by you, offering 
              step-by-step support to protect your rights and ensure you get what you deserve.
            </Text>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold" color="black">
              Pre-Possession Quality Checks
            </Text>
            <Text fontSize="sm" color="gray.600">
              Concerned about the quality of your property before moving in? With trusted partners, we 
              conduct comprehensive inspections, ensuring your investment is secure and ready for use.
            </Text>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold" color="black">
              Tailored Exit Strategies for Investors
            </Text>
            <Text fontSize="sm" color="gray.600">
              We help investors plan personalized exit strategies to maximize profits. Whether it’s finding 
              the right buyer or timing the market, we ensure your investments work for you.
            </Text>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold" color="black">
              Making Real Estate Laws Simple
            </Text>
            <Text fontSize="sm" color="gray.600">
              Navigating legal complexities can be tough. Whether it’s RERA guidelines, property taxes, or 
              ownership laws, our legal experts provide clear insights and actionable advice to keep you 
              informed and empowered.
            </Text>
          </Box>
        </VStack>

        {/* Right Side - Contact Form */}
        <Box 
          bg="white" 
          p={6} 
          borderRadius="lg" 
          boxShadow="md" 
          maxW="450px" 
          width="100%"
        >
          <VStack spacing={4} align="stretch">
            {/* Name Field */}
            <FormControl>
              <FormLabel fontSize="sm" fontWeight="bold">Name</FormLabel>
              <HStack border="1px solid #E2E8F0" borderRadius="md" p={2}>
                <Icon as={FaUser} color="gray.500" />
                <Input placeholder="name@example.com" border="none" _focus={{ outline: "none" }} />
              </HStack>
            </FormControl>

            {/* Phone Number Field */}
            <FormControl>
              <FormLabel fontSize="sm" fontWeight="bold">Phone No</FormLabel>
              <HStack border="1px solid #E2E8F0" borderRadius="md" p={2}>
                <Icon as={FaPhone} color="gray.500" />
                <Input placeholder="Your Phone Number" type="tel" border="none" _focus={{ outline: "none" }} />
              </HStack>
            </FormControl>

            {/* Email Field */}
            <FormControl>
              <FormLabel fontSize="sm" fontWeight="bold">Email Address</FormLabel>
              <HStack border="1px solid #E2E8F0" borderRadius="md" p={2}>
                <Icon as={FaEnvelope} color="gray.500" />
                <Input placeholder="name@example.com" type="email" border="none" _focus={{ outline: "none" }} />
              </HStack>
            </FormControl>

            {/* Message Field */}
            <FormControl>
              <FormLabel fontSize="sm" fontWeight="bold">Message</FormLabel>
              <Textarea placeholder="Enter your message..." border="1px solid #E2E8F0" borderRadius="md" />
            </FormControl>

            {/* Submit Button */}
            <Button 
              bg="yellow.500" 
              color="white" 
              fontWeight="bold" 
              _hover={{ bg: "yellow.600" }} 
              width="full"
            >
              Submit
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactSupport;
