import React, { useEffect, useState } from "react";
import { 
  Box, Flex, Button, Link as ChakraLink, IconButton, Collapse, VStack, useDisclosure, Image, Menu, MenuButton, MenuList, MenuItem
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";  
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import PropertyAdvicePopover from "./Popovers/HotlinePopover"; 

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure(); 
  const location = useLocation(); 
  const navigate = useNavigate();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  // ✅ Hide/show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // ✅ Close menu when navigating to another page
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]); 

  // ✅ Scroll to "How We Work" section or navigate if needed
  const handleServiceClick = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("howwework");
      if (section) {
        window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("howwework");
        if (section) {
          window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
        }
      }, 500);
    }
  };

  return (
    <Box 
      as="header"
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      py={{ base: 3, md: 4 }}  
      px={{ base: 4, md: 10, lg: 20 }}
      position="fixed"
      top={visible ? "0" : "-80px"}
      left="0"
      right="0"
      transition="top 0.3s ease-in-out"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center" maxW="1300px" mx="auto">
        
        {/* ✅ Logo - Clickable */}
        <ChakraLink as={Link} to="/" display="flex" alignItems="center">
          <Image src="/images/logo.svg" alt="EstateOne Logo" h={{ base: "35px", md: "40px" }} />
        </ChakraLink>

        {/* ✅ Mobile Menu Button */}
        <IconButton 
          display={{ base: "flex", md: "none" }} 
          icon={isOpen ? <FaTimes /> : <FaBars />} 
          aria-label="Toggle Menu" 
          onClick={onToggle}
          bg="transparent"
          fontSize="22px"
        />

        {/* ✅ Desktop Navigation Links */}
        <Flex gap={{ base: 4, md: 6 }} fontWeight="bold" fontSize={{ base: "sm", md: "md" }} display={{ base: "none", md: "flex" }}>
          <ChakraLink as={Link} to="/" _hover={{ textDecoration: "underline" }}>Home</ChakraLink>

          {/* ✅ Our Services Dropdown */}
          <Menu>
            <MenuButton 
              color="#1a202c"
              as={Button} 
              rightIcon={<FaChevronDown />} 
              variant="link"
              fontWeight="bold"
              _hover={{ textDecoration: "underline" }}
            >
              Our Services
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleServiceClick}>Buy</MenuItem>
              <MenuItem onClick={handleServiceClick}>Manage</MenuItem>
              <MenuItem onClick={handleServiceClick}>Sell</MenuItem>
            </MenuList>
          </Menu>

          <ChakraLink as={Link} to="/blog" _hover={{ textDecoration: "underline" }}>Blog</ChakraLink>
          <ChakraLink as={Link} to="/faqs" _hover={{ textDecoration: "underline" }}>FAQs</ChakraLink>
          <ChakraLink as={Link} to="/career" _hover={{ textDecoration: "underline" }}>Career</ChakraLink>
          <ChakraLink as={Link} to="/partner" _hover={{ textDecoration: "underline" }}>Partner with us</ChakraLink>
        </Flex>

        {/* ✅ Right Section - Buttons */}
        <Flex gap={{ base: 3, md: 4 }} display={{ base: "none", md: "flex" }}>
          <Button 
            as={Link} to="/contact"
            bg="yellow.500" 
            color="white" 
            fontWeight="bold" 
            fontSize={{ base: "sm", md: "md" }}
            px={{ base: 3, md: 4 }} 
            _hover={{ bg: "yellow.600" }}
          >
            Contact Us
          </Button>
          <Button
            bg="yellow.100"
            color="yellow.600"
            fontWeight="bold"
            fontSize={{ base: "sm", md: "md" }}
            leftIcon={<FaPhoneAlt />}
            _hover={{ bg: "yellow.200" }}
            px={{ base: 3, md: 4 }} 
            onClick={(e) => {
              e.preventDefault();
              setIsPopoverOpen(true);
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
          <ChakraLink as={Link} to="/" _hover={{ textDecoration: "underline" }}>Home</ChakraLink>
          
          {/* ✅ Our Services in Mobile Menu */}
          <Menu>
            <MenuButton 
              as={Button} 
              rightIcon={<FaChevronDown />} 
              variant="link"
              fontWeight="bold"
              _hover={{ textDecoration: "underline" }}
            >
              Our Services
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleServiceClick}>Buy</MenuItem>
              <MenuItem onClick={handleServiceClick}>Manage</MenuItem>
              <MenuItem onClick={handleServiceClick}>Sell</MenuItem>
            </MenuList>
          </Menu>

          <ChakraLink as={Link} to="/blog" _hover={{ textDecoration: "underline" }}>Blog</ChakraLink>
          <ChakraLink as={Link} to="/faqs" _hover={{ textDecoration: "underline" }}>FAQs</ChakraLink>
          <ChakraLink as={Link} to="/career" _hover={{ textDecoration: "underline" }}>Career</ChakraLink>
          <ChakraLink as={Link} to="/partner" _hover={{ textDecoration: "underline" }}>Partner with us</ChakraLink>
        </VStack>
      </Collapse>

      {/* ✅ Property Advice Popover */}
      <PropertyAdvicePopover isOpen={isPopoverOpen} onClose={() => setIsPopoverOpen(false)} />
    </Box>
  );
};

export default Header;
