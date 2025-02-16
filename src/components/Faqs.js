import React, { useState } from "react";
import { Box, Text, VStack, Collapse, IconButton } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What if I need help?",
    answer: "You get unlimited email support and weekly live Q&A calls for 12 months.",
  },
  {
    question: "Is this legal?",
    answer: "Yes, our services comply with all real estate regulations and guidelines.",
  },
  {
    question: "What if I can’t sell my home?",
    answer: "Our experts provide strategic marketing and support to ensure a smooth sale.",
  },
  {
    question: "Do I need special skills?",
    answer: "No, our services are designed to assist all clients, regardless of experience.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }} textAlign="center">
      {/* Section Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
        FAQs
      </Text>

      {/* FAQ List */}
      <VStack mt={8} spacing={4} maxW="600px" mx="auto">
        {faqs.map((faq, index) => (
          <Box
            key={index}
            w="full"
            bg={openIndex === index ? "#D29400" : "#F7F7F7"}
            color={openIndex === index ? "white" : "black"}
            borderRadius="md"
            p={4}
            boxShadow="sm"
            cursor="pointer"
            onClick={() => toggleFAQ(index)}
            transition="all 0.3s ease-in-out"
          >
            {/* Question Row */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">{faq.question}</Text>
              <IconButton
                icon={openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                size="sm"
                bg="transparent"
                color={openIndex === index ? "white" : "black"}
                _hover={{ bg: "transparent" }}
              />
            </Box>

            {/* Collapsible Answer */}
            <Collapse in={openIndex === index} animateOpacity>
              <Text fontSize="sm" mt={2}>
                {faq.answer}
              </Text>
            </Collapse>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default FAQs;
