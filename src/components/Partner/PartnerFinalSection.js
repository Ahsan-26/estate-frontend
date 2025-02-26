import React from "react";
import { Box, Text, VStack, HStack, Grid, Link, Image, Icon } from "@chakra-ui/react";
import { FaEnvelope, FaWhatsapp, FaCheck } from "react-icons/fa"; // ✅ WhatsApp & Email Icons Restored
import { AtSignIcon } from '@chakra-ui/icons';

const PartnerFinalSection = () => {
  
  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 5, md: 8 }}>
      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} 
        gap={6} 
        maxW="1100px" 
        mx="auto"
      >
        {/* Left Card - Why EstateOne */}
        <VStack 
          p={8} 
          bg="#F3F3F3" 
          borderRadius="lg" 
          boxShadow="md" 
          align="start" 
          spacing={4} 
          width="100%"
        >
          {/* ✅ Image with Soft Rounded Background & Shadow */}
          <Box 
            bg="white" 
            borderRadius="xl"  // Soft rounded edges
            p={3}  
            boxShadow="lg" // ✅ Soft shadow effect
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            <Image src="/images/question_icon.svg" alt="Why EstateOne?" boxSize="30px" />
          </Box>
          
          <Text fontSize="xl" fontWeight="bold" mt={-4}>Why EstateOne?</Text>

          {/* Bullet Points */}
          <VStack align="start" spacing={3} width="100%">
            <HStack spacing={3}>
              <Icon as={FaCheck} color="black" boxSize="16px" />
              <Text fontSize="sm" color="gray.700">500+ Successful Collaborations</Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaCheck} color="black" boxSize="16px" />
              <Text fontSize="sm" color="gray.700">Proven Track Record in Real Estate</Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaCheck} color="black" boxSize="16px" />
              <Text fontSize="sm" color="gray.700">Commitment to Secure & Professional Transactions</Text>
            </HStack>
          </VStack>
        </VStack>

        {/* Right Card - Partner Success */}
        <VStack 
          p={8} 
          bg="#F3F3F3" 
          borderRadius="lg" 
          boxShadow="md" 
          align="start" 
          spacing={4} 
          width="100%"
        >
          {/* ✅ Image with Soft Rounded Background & Shadow */}
          <Box 
            bg="white" 
            borderRadius="xl"  // Soft rounded edges
            p={3}  
            boxShadow="lg" // ✅ Soft shadow effect
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            <Image src="/images/handshake_icon.svg" alt="Partner Success" boxSize="30px" />
          </Box>

          <Text fontSize="xl" fontWeight="bold" mt={-4}>Let's Build Success Together!</Text>

          {/* Subtitle */}
          <Text fontSize="sm" color="gray.700">Become a valued partner today</Text>

          {/* Contact Info */}
          <VStack align="start" spacing={3} width="100%">
            <Text fontSize="sm" fontWeight="bold">Have Questions?</Text>
            <HStack spacing={3}>
              <Icon as={AtSignIcon} color="yellow.500" boxSize="18px" />
              <Link href="mailto:connect@estateone.in" fontSize="sm" color="gray.700">
                connect@estateone.in
              </Link>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaWhatsapp} color="green.500" boxSize="18px" />
              <Link href="https://wa.me/919548056061" fontSize="sm" color="gray.700">WhatsApp Us</Link>
            </HStack>
          </VStack>
        </VStack>
      </Grid>
    </Box>
  );
};

export default PartnerFinalSection;
