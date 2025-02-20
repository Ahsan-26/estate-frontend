import React from "react";
import { Box, Text, VStack, Grid, Image, Container } from "@chakra-ui/react";

const ExpertSection = () => {
  return (
    <Box as="section" position="relative" w="100vw">
      {/* Background Image with 70% height */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="70%"
        backgroundImage="linear-gradient(to bottom, rgba(255, 223, 0.3, 0.3), white), url('/images/expert_bg.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        zIndex={-1}
      />

      {/* Content Container */}
      <Container maxW="1100px" py={{ base: 8, md: 14 }} px={{ base: 5, md: 10 }} textAlign="start">
        <VStack alignItems="start" spacing={3} w="full">
          {/* Section Tag */}
          <Text
            bg="white"
            color="#da990e"
            fontSize="sm"
            fontWeight="bold"
            px={4}
            py={1}
            borderRadius="full"
            display="inline-block"
          >
            SAY GOODBYE TO PUSHY AGENTS
          </Text>

          {/* Section Heading */}
          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
            Speak with a Real Estate Expert Today!
          </Text>

          {/* Description */}
          <Text fontSize="md" color="gray.700">
            At EstateOne, we believe in real advice you can trust. When you connect with us,
            you're engaging with professionals who genuinely care about your real estate journey.
          </Text>
        </VStack>
      </Container>

      {/* Cards Section - Now Properly Aligned */}
      <Container maxW="1100px" px={{ base: 4, md: 10 }} pb={{ base: 8, md: 14 }}>
        <Grid 
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={6} 
        >
          {expertCards.map((card, index) => (
            <VStack 
              key={index} 
              p={6} 
              bg="white" 
              borderRadius="lg" 
              boxShadow="md" 
              align="start"
              textAlign="left"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
            >
              <Image src={card.icon} alt={card.title} boxSize="30px" />
              <Text fontSize="lg" fontWeight="bold">{card.title}</Text>
              <Text fontSize="sm" color="gray.600">{card.description}</Text>
            </VStack>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Cards Data
const expertCards = [
  {
    icon: "/images/agent_icon.png",
    title: "No Pushy Agents",
    description: "Say goodbye to pushy agents. Our team is made up of knowledgeable advisors who prioritize your needs, not hard sales pitches."
  },
  {
    icon: "/images/folder_icon.png",
    title: "No Spam Ever",
    description: "We respect your time and privacy. At EstateOne, we ensure a spam-free experience—no unexpected calls or emails."
  },
  {
    icon: "/images/chat_icon.png",
    title: "30 min Consultation",
    description: "Your time matters. We dedicate at least 30 minutes to understand your needs, offering tailored advice with complete focus."
  },
  {
    icon: "/images/free_icon.png",
    title: "100% Free",
    description: "Our consultations are completely free, with no pressure to buy or commit. We're here to guide you in making confident decisions."
  }
];

export default ExpertSection;
