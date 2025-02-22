import React from "react";
import { Box, Text, useDisclosure, Image ,Button} from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";
import ContactModal from "./contactModal"; // ✅ Importing Modal Component
import { PrimaryButton } from "../Buttons";

const ContactHero = () => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Box 
      as="section"
      bgGradient="linear(to-b, #FEFEF9, #F7F3EA)"
      py={{ base: 3, md: 6 }}
      px={{ base: 5, md: 10 }}
      textAlign="center"
    >
      <Button
  bg="white"
  color="black"
  fontSize="sm"
  fontWeight="bold"
  px={4}
  py={2}
  borderRadius="full"
  mt={24}
  boxShadow="md" // Adds a soft shadow to mimic the floating effect
  _hover={{ boxShadow: "md" }} // Slightly increases shadow on hover
>
  CONTACT US
</Button>

      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mt={10}>
        Got a Real Estate Query? Let’s <br /> Solve It Together!
      </Text>

      <Box 
        bg="white"
        borderRadius="lg"
        boxShadow="lg" // 🔹 Increased shadow for better floating effect
      maxW="600px"
      mx="auto"
      p={12}  // 🔹 Reduced padding inside the box (was 20)
      transform="translateY(110px)" 
       position="relative"
       display="flex"  // ✅ Enables flexbox
       flexDirection="column"  // ✅ Ensures vertical stacking
       alignItems="center"
      
      >
        <Image src="/images/contact_agent.png" alt="Expert" boxSize="60px" mx="auto" />
        <Text fontSize="lg" fontWeight="bold" mt={3}>
          Buying, Managing, or Selling? We’ve Got Your Back
        </Text>
        <Text fontSize="md" color="gray.700" mt={2}>
          At EstateOne, we go beyond transactions to build meaningful relationships.
          Whether you're buying your dream home, managing your property, or selling 
          for the best deal, our team is here to guide you through every step.
        </Text>

        {/* ✅ Opens Modal */}
        <PrimaryButton
          bg="yellow.500" 
          color="white" 
          fontWeight="bold" 
          leftIcon={<FaComments />}
          _hover={{ bg: "yellow.600" }} 
          mt={8}
        //  marginTop="auto"
          // transform="translateY(20px)"
          isPopover={true}
          
          text={"Talk to an Expert"}
        >
        </PrimaryButton>
      </Box>

      {/* ✅ Render the Modal Component */}
      <ContactModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default ContactHero;
