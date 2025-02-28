import React, { useState } from "react";
import { Box, Text, VStack, Collapse, IconButton, Button, SlideFade } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do I need to pay GST when selling my property?",
    answer: "GST applies only to under-construction properties. Ready-to-move-in properties and resale homes are exempt.",
  },
  {
    question: "Is it better to invest in residential or commercial real estate?",
    answer: "Residential properties offer stable long-term growth, while commercial spaces generate higher rental yields. The choice depends on your investment goals and risk appetite.",
  },
  {
    question: "Can I get a home loan, and how does the process work?",
    answer: "Yes, banks and financial institutions offer home loans based on your income, credit score, and property value. We help you connect with leading banks for loan approvals.",
  },
  {
    question: "How long does it usually take to sell a property?",
    answer: "The selling timeline varies based on demand, pricing, and market conditions. Proper pricing and marketing can speed up the process.",
  },
  {
    question: "What documents should I check before buying a property?",
    answer: "Essential documents include sale deed, title deed, RERA registration, building plan approval, encumbrance certificate, and possession letter. Our team assists in verifying all necessary paperwork.",
  },
  {
    question:"What is the difference between RERA-approved and non-RERA projects?",
    answer: "RERA-approved projects comply with government regulations, ensuring transparency, timely delivery, and legal protection. Non-RERA projects may carry higher risks. Our team will assist you in investing smartly.",
  },
  {
    question: "How can I negotiate the best deal on a property?",
    answer: "Research market rates, compare similar properties, check builder reputation, and leverage expert negotiation skills. Our advisors help clients secure the best deals.",
  },
  {
    question: "What is the difference between a builder floor and an apartment?",
    answer: "A builder floor is an independent unit in a low-rise building, while an apartment is part of a high-rise complex with shared amenities.",
  },
  {
    question: "Should I buy a resale property or a new one?",
    answer: "Resale properties offer immediate possession and lower prices, while new properties come with better amenities, warranties, and modern designs.",
  },
  {
    question: "What is the typical lease period for rental agreements?",
    answer: "Lease agreements are usually signed for 11 months, with renewal options. Long-term leases (3–5 years) are common for commercial properties.",
  },
  {
    question: "What does EstateOne specialize in?",
    answer: "EstateOne specializes in comprehensive real estate advisory, including:\n  •BUYING: Guiding you through property selection and investment strategies.\n  •MANAGING: Efficient management solutions for long-term and short-term rentals.\n  •SELLING: Strategic marketing and selling to maximize your property's value.",
  },
  {
    question: "Why choose EstateOne for real estate advisory?",
    answer: "Our strategic approach, in-depth market knowledge, and personalized solutions ensure you make informed decisions, maximize your investment returns, and achieve your real estate goals.",
  },
  {
    question: "How do I get started with EstateOne?",
    answer: "Schedule a consultation with our advisors to discuss your real estate needs and explore tailored solutions for buying, managing, or selling your property.",
  },
  {
    question: "Which locations does EstateOne cover?",
    answer: "Currently, we specialize in real estate advisory for Gurgaon and its neighboring developing areas, offering in-depth market knowledge and investment opportunities in these high-growth regions. We plan to expand to other metropolitan areas in the coming months.",
  },
  {
    question: "Do you provide property inspection and assessment services?",
    answer: "Yes, we offer thorough property inspections and assessments to ensure you make informed decisions. Our experts evaluate the property’s condition, market value, and investment potential before finalizing any purchase or sale.",
  },
  {
    question:"Does EstateOne offer ongoing support after the property purchase or sale?",
    answer: "Yes, we provide ongoing CRM support and property management services to ensure a seamless experience even after the deal is closed. This includes rental income management, property maintenance, and strategic market insights for maximizing your investment.",
  }
];

const FAQs = () => {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }} textAlign="center" mt={{ base: 7, md: 5 }}>
      {/* Section Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
        FAQs
      </Text>

      {/* FAQ List */}
      <VStack mt={8} spacing={4} maxW="640px" mx="auto" align="stretch" textAlign="left">
        {faqs.slice(0, showAll ? faqs.length : 5).map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }} // ✅ Starts hidden
            animate={{ opacity: 1, y: 0 }} // ✅ Fades in & moves up
            transition={{ delay: index * 0.1, duration: 0.5 }} // ✅ Staggered animation
          >
            <Box
              w="full"
              bg={openIndex === index ? "#F7F7F7" : "#F7F7F7"}
              color={openIndex === index ? "black" : "black"}
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
          </motion.div>
        ))}
      </VStack>

      {/* See More Button with Animation */}
      {!showAll && (
        <Button
          mt={6}
         bg="#F3F3F3"
          size="lg"
          borderRadius="full"
          px={6}
          py={3}
          fontSize="md"
          fontWeight="bold"
          transition="all 0.3s ease-in-out"
          onClick={() => setShowAll(true)}
          _hover={{ transform: "scale(1.05)" }}
          _active={{ transform: "scale(0.95)" }}
        >
          See More
        </Button>
      )}

      {showAll && (
        <SlideFade in={showAll} offsetY="20px">
          <Button
            mt={6}
            bg="#F3F3F3"
  
            size="lg"
            borderRadius="full"
            px={6}
            py={3}
            fontSize="md"
            fontWeight="bold"
            transition="all 0.1s ease-in-out"
            onClick={() => setShowAll(false)}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(0.95)" }}
          >
            Show Less
          </Button>
        </SlideFade>
      )}
    </Box>
  );
};

export default FAQs;
