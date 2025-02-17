import React from "react";
import { Box, Text, Button, Link, Flex } from "@chakra-ui/react";

const ApplyCareer = () => {
  return (
    <Box as="section" textAlign="center" py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }}>
      {/* Section Tag */}
      <Text 
        bg="yellow.100" 
        color="yellow.700" 
        fontSize="sm" 
        fontWeight="bold" 
        px={4} 
        py={1} 
        borderRadius="full"
        display="inline-block"
      >
        APPLY
      </Text>

      {/* Main Heading */}
      <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="bold" mt={3}>
        To apply, please include the position you are <br /> 
        <Text as="span" fontWeight="bold">
          interested in within the subject line of your email.
        </Text>
      </Text>

      {/* Subtext */}
      <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" mt={2}>
        Kindly attach your updated resume along with the following details:
      </Text>

      {/* Details Section */}
      <Box 
        bg="yellow.50"
        p={6}
        mt={6}
        borderRadius="lg"
        maxW="900px"
        mx="auto"
      >
        {/* Buttons for Details */}
        <Flex 
          wrap="wrap" 
          justify="center" 
          gap={3} // ✅ Ensures proper spacing on all screens
        >
          <Button variant="outline" colorScheme="gray" size="sm">Current CTC</Button>
          <Button variant="outline" colorScheme="gray" size="sm">Expected Salary</Button>
          <Button variant="outline" colorScheme="gray" size="sm">Notice Period</Button>
          <Button variant="outline" colorScheme="gray" size="sm">Present Work Location</Button>
        </Flex>

        {/* Email Instruction */}
        <Text fontSize={{ base: "sm", md: "md" }} mt={5}>
          Please send your application to:  
          <Link href="mailto:hr@estateone.in" color="yellow.600" fontWeight="bold"> hr@estateone.in</Link>
        </Text>

        {/* Closing Statement */}
        <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" mt={3}>
          We look forward to welcoming talented individuals to our team!
        </Text>
      </Box>
    </Box>
  );
};

export default ApplyCareer;
