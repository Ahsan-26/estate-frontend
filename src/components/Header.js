import React, { useEffect, useState } from "react";
import { 
  Box, Flex, Button, Link as ChakraLink, IconButton, Collapse, VStack, useDisclosure, Image
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";  // ✅ Import useLocation
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import PropertyAdvicePopover from "./Popovers/HotlinePopover"; // ✅ Import PropertyAdvicePopover

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure(); // ✅ Controls mobile menu
  const location = useLocation(); // ✅ Track the current route

  // ✅ Automatically close menu when route changes
  useEffect(() => {
    onClose(); // Close the mobile menu when user navigates
  }, [location.pathname, onClose]); // Runs when pathname changes
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // ✅ Define state

  return (
    <Box 
      as="header"
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      py={4} px={{ base: 4, md: 6 }}
    >
      <Flex justify="space-between" align="center">
        
        {/* ✅ Left Section - Logo (Clickable) */}
        <ChakraLink as={Link} to="/" display="flex" alignItems="center">
          <Image src="/images/logo.png" alt="EstateOne Logo" h="40px" />
        </ChakraLink>

        {/* ✅ Mobile Menu Button */}
        <IconButton 
          display={{ base: "flex", md: "none" }} 
          icon={isOpen ? <FaTimes /> : <FaBars />} 
          aria-label="Toggle Menu" 
          onClick={onToggle}
          bg="transparent"
          fontSize="20px"
        />

        {/* ✅ Desktop Navigation Links */}
        <Flex 
          gap={6} fontWeight="bold" 
          display={{ base: "none", md: "flex" }}
        >
          <ChakraLink as={Link} to="/blog" color="black" _hover={{ textDecoration: "underline" }}>Blog</ChakraLink>
          <ChakraLink as={Link} to="/partner" color="black" _hover={{ textDecoration: "underline" }}>Partner with us</ChakraLink>
          <ChakraLink as={Link} to="/faqs" color="black" _hover={{ textDecoration: "underline" }}>FAQs</ChakraLink>
          <ChakraLink as={Link} to="/career" color="black" _hover={{ textDecoration: "underline" }}>Career</ChakraLink>
        </Flex>

        {/* ✅ Right Section - Buttons (Hidden on Mobile) */}
        <Flex 
          gap={4} 
          display={{ base: "none", md: "flex" }}
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
            bg="yellow.100"
            color="yellow.600"
            fontWeight="bold"
            leftIcon={<FaPhoneAlt />}
            _hover={{ bg: "yellow.200" }}
            onClick={(e) => {
              e.preventDefault(); // ✅ Prevent navigation
              setIsPopoverOpen(true); // ✅ Opens the popover
            }}
          >
            Hotline
          </Button>
        </Flex>

      </Flex>

      {/* ✅ Mobile Menu (Collapsible) */}
      <Collapse in={isOpen} animateOpacity>
        <VStack 
          bg="white"
          p={4}
          spacing={4}
          align="stretch"
          display={{ base: "flex", md: "none" }}
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
            bg="yellow.100"
            color="yellow.600"
            fontWeight="bold"
            leftIcon={<FaPhoneAlt />}
            _hover={{ bg: "yellow.200" }}
            width="full"
            onClick={(e) => {
              e.preventDefault(); 
              setIsPopoverOpen(true); 
            }}
          >
            Hotline
          </Button>
        </VStack>
      </Collapse>

      {/* ✅ Property Advice Popover */}
      <PropertyAdvicePopover isOpen={isPopoverOpen} onClose={() => setIsPopoverOpen(false)} />
    </Box>
  );
};

export default Header;
