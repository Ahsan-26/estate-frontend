import React from "react";
import { Box, Text, VStack, HStack, Grid, Link, Icon, Image } from "@chakra-ui/react";
import { FaEnvelope, FaWhatsapp, FaAngleRight } from "react-icons/fa";

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
          bg="white" 
          borderRadius="lg" 
          boxShadow="md" 
          align="start" 
          spacing={4} 
        >
          {/* Icon & Title */}
          <HStack>
            <Image src="/images/question_icon.png" alt="FAQ Icon" boxSize="50px" />
            <Text fontSize="lg" fontWeight="bold">Popular Questions We Answer:</Text>
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
              <Icon as={FaEnvelope} color="yellow.500" />
              <Link href="mailto:connect@estateone.in" fontSize="sm" color="gray.700">
                connect@estateone.in
              </Link>
            </HStack>
            <HStack>
              <Icon as={FaWhatsapp} color="green.500" />
              <Link href="#" fontSize="sm" color="gray.700">WhatsApp Us</Link>
            </HStack>
          </VStack>
        </VStack>

        {/* Right Card - Escalation Procedure */}
        <VStack 
          p={6} 
          bg="white" 
          borderRadius="lg" 
          boxShadow="md" 
          align="start" 
          spacing={4} 
        >
          {/* Icon & Title */}
          <HStack>
            <Image src="/images/email_icon.png" alt="Escalation Icon" boxSize="50px" />
            <Text fontSize="lg" fontWeight="bold">Escalation Procedure</Text>
          </HStack>

          {/* Description */}
          <Text fontSize="sm" color="gray.700" align= "start" >
            <Text as="span" fontWeight="bold">For Complaints or Unresolved Queries</Text>
            <br />
            If you haven’t received a resolution within 15 days or are unhappy with 
            the support provided, escalate your concerns to us at:
          </Text>

          {/* Escalation Email */}
          <HStack>
            <Icon as={FaEnvelope} color="yellow.500" />
            <Link href="mailto:grievance@estateone.in" fontSize="sm" color="yellow.600" fontWeight="bold">
              grievance@estateone.in
            </Link>
          </HStack>
        </VStack>
      </Grid>
    </Box>
  );
};

export default ContactFAQ;
