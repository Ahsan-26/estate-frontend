import React from "react";
import { 
  Box, Flex, Button, Link as ChakraLink, Text, IconButton, Collapse, VStack, useDisclosure 
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure(); // Controls mobile menu

  return (
    <Box 
      as="header"
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      py={4} px={{ base: 4, md: 6 }}
    >
      <Flex justify="space-between" align="center">
        
        {/* Left Section - Logo */}
        <Text fontSize="2xl" fontWeight="bold">
          ESTATE
          <Text as="span" color="yellow.500" fontSize="3xl" ml={1}>
            1
          </Text>
        </Text>

        {/* Mobile Menu Button (Hidden on Large Screens) */}
        <IconButton 
          display={{ base: "flex", md: "none" }} // ✅ Show only on mobile
          icon={isOpen ? <FaTimes /> : <FaBars />} 
          aria-label="Toggle Menu" 
          onClick={onToggle}
          bg="transparent"
          fontSize="20px"
        />

        {/* Desktop Navigation Links */}
        <Flex 
          gap={6} fontWeight="bold" 
          display={{ base: "none", md: "flex" }} // ✅ Hide on mobile, show on tablet/desktop
        >
          <ChakraLink as={Link} to="/blog" color="black" _hover={{ textDecoration: "underline" }}>Blog</ChakraLink>
          <ChakraLink as={Link} to="/partner" color="black" _hover={{ textDecoration: "underline" }}>Partner with us</ChakraLink>
          <ChakraLink as={Link} to="/faqs" color="black" _hover={{ textDecoration: "underline" }}>FAQs</ChakraLink>
          <ChakraLink as={Link} to="/career" color="black" _hover={{ textDecoration: "underline" }}>Career</ChakraLink>
        </Flex>

        {/* Right Section - Buttons (Hidden on Mobile) */}
        <Flex 
          gap={4} 
          display={{ base: "none", md: "flex" }} // ✅ Hide on mobile, show on larger screens
        >
          <Button 
            as={Link} to="/contact"
            bg="yellow.500" 
            color="white" 
            fontWeight="bold" 
            _hover={{ bg: "yellow.600" }}
          >
            Contact Us
          </Button>
          <Button 
            as={Link} to="/hotline"
            bg="yellow.100" 
            color="yellow.600" 
            fontWeight="bold"
            leftIcon={<FaPhoneAlt />}
            _hover={{ bg: "yellow.200" }}
          >
            Hotline
          </Button>
        </Flex>

      </Flex>

      {/* Mobile Menu (Collapsible) */}
      <Collapse in={isOpen} animateOpacity>
        <VStack 
          bg="white"
          p={4}
          spacing={4}
          align="stretch"
          display={{ base: "flex", md: "none" }} // ✅ Show only on mobile
        >
          <ChakraLink as={Link} to="/blog" color="black" _hover={{ textDecoration: "underline" }}>Blog</ChakraLink>
          <ChakraLink as={Link} to="/partner" color="black" _hover={{ textDecoration: "underline" }}>Partner with us</ChakraLink>
          <ChakraLink as={Link} to="/faqs" color="black" _hover={{ textDecoration: "underline" }}>FAQs</ChakraLink>
          <ChakraLink as={Link} to="/career" color="black" _hover={{ textDecoration: "underline" }}>Career</ChakraLink>

          {/* ✅ Mobile Menu Buttons */}
          <Button 
            as={Link} to="/contact"
            bg="yellow.500" 
            color="white" 
            fontWeight="bold" 
            _hover={{ bg: "yellow.600" }}
            width="full"
          >
            Contact Us
          </Button>
          <Button 
            as={Link} to="/hotline"
            bg="yellow.100" 
            color="yellow.600" 
            fontWeight="bold"
            leftIcon={<FaPhoneAlt />}
            _hover={{ bg: "yellow.200" }}
            width="full"
          >
            Hotline
          </Button>
        </VStack>
      </Collapse>

    </Box>
  );
};

export default Header;
