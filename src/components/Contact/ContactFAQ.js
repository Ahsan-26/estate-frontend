import React from "react";
import { Box, Text, VStack, HStack, Grid, Link, Icon, Image } from "@chakra-ui/react";
import {  FaWhatsapp, FaAngleRight } from "react-icons/fa";
import { AtSignIcon } from '@chakra-ui/icons';

const ContactFAQ = () => {
  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }} textAlign="center">
      {/* Section Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
        Have Real Estate Queries? Let’s Answer Them
      </Text>
      <Text fontSize="md" color="gray.600" maxW="700px" mx="auto" mt={2} >
        From understanding property documentation to evaluating market trends, we’re 
        here to address all your questions about real estate.
      </Text>

      {/* FAQ & Escalation Grid */}
      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} 
        gap={8} 
        mt={10} 
        maxW="1100px" 
        mx="auto"
      >
        {/* Left Card - Popular Questions */}
        <VStack 
          p={6} 
          bg="#F3F3F3" 
          borderRadius="lg" 
          boxShadow="md" 
          align="start" 
          spacing={4} 
        >
          {/* Icon & Title */}
          <Box 
            bg="white" 
            borderRadius="xl"  
            p={3}  
            boxShadow="lg"
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            <Image src="/images/question_icon.svg" alt="FAQ Icon" boxSize="30px" />
          </Box>
          <HStack>
          <Text mt={3} fontSize="xl" fontWeight="bold">Popular Questions We Answer:</Text>
          </HStack>

          {/* Questions List */}
          <VStack align="start" spacing={2}>
            <HStack>
              <Icon as={FaAngleRight} color="black" />
              <Text fontSize="sm" align="start" color="gray.700">What are the legal steps for property registration?</Text>
            </HStack>
            <HStack>
              <Icon as={FaAngleRight} color="black" />
              <Text fontSize="sm" align="start" color="gray.700">How do I verify property ownership?</Text>
            </HStack>
            <HStack>
              <Icon as={FaAngleRight} color="black" />
              <Text fontSize="sm" align="start" color="gray.700">Which property suits my investment goals?</Text>
            </HStack>
            <HStack>
              <Icon as={FaAngleRight} color="black" />
              <Text fontSize="sm" align="start" color="gray.700">How do I handle disputes or delayed possession issues?</Text>
            </HStack>
          </VStack>

          {/* Contact Info */}
          <VStack align="start" spacing={2}>
            <HStack>
              <Icon as={ AtSignIcon} color="yellow.500" />
              <Link href="mailto:connect@estateone.in" fontSize="sm" color="black">
                connect@estateone.in
              </Link>
            </HStack>
            <HStack>
              <Icon as={FaWhatsapp} color="green.500" />
              <Link href="https://wa.me/919548056061" fontSize="sm" color="black">WhatsApp Us</Link>
            </HStack>
          </VStack>
        </VStack>

        {/* Right Card - Escalation Procedure */}
        <VStack 
          p={6} 
          bg="#F3F3F3" 
          borderRadius="lg" 
          boxShadow="md" 
          align="start" 
          spacing={4} 
        >
          {/* Icon & Title */}
          <Box 
            bg="white" 
            borderRadius="xl"  
            p={3}  
            boxShadow="lg"
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            <Image src="/images/email_icon.svg" alt="FAQ Icon" boxSize="30px" />
          </Box>
          <HStack>
          <Text fontSize="xl" mt={3} fontWeight="bold">Escalation Procedure</Text>
          </HStack>

          {/* Description */}
          <Text fontSize="sm" color="gray.700" align= "start" >
            <Text as="span" fontWeight="bold">For Complaints or Unresolved Queries</Text>
            <br />
            If you haven’t received a resolution within 15 days or are unhappy with 
            the support provided, escalate your concerns to us at:
          </Text>

          {/* Escalation Email */}
          <HStack mt={8} transform={"translateY(20px)"}>
            <Icon as={ AtSignIcon} color="yellow.500" />
            <Link href="mailto:grievance@estateone.in" fontSize="sm" color="black" >
              grievance@estateone.in
            </Link>
          </HStack>
        </VStack>
      </Grid>
    </Box>
  );
};

export default ContactFAQ;
