import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Button,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

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
      align = "center"
      as="header"
      position="fixed"
      top={visible ? "20px" : "-80px"}
      left="51.58%"
      transform="translateX(-50%)"
      width="90%"
      maxW="1200px"
      bg="white"
      borderRadius="15px"
      boxShadow="0px 0px 15px rgba(0, 0, 0, 0.1)"
      py={2}
      px={{ base: 4, md: 10 }}
      transition="top 0.3s ease-in-out"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center">
        {/* ✅ Logo */}
        <ChakraLink as={Link} to="/" display="inline-flex" alignItems="center">
          <Image 
            src="/images/logo.svg" 
            alt="EstateOne Logo" 
            h={{ base: "35px", md: "40px" }} 
            maxW="100%" 
          />
        </ChakraLink>


        {/* ✅ Desktop Navigation */}
        <Flex gap={6} fontWeight="bold" fontSize="md" display={{ base: "none", md: "flex" }} alignItems="center">
        <ChakraLink as={Link} to="/" onClick={onClose} _hover={{ textDecoration: "underline" }}>
              Home
            </ChakraLink>
          {/* ✅ Our Services Dropdown */}
            <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FaChevronDown />}
              variant="link"
              color="black"
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
          <ChakraLink as={Link} to="/blog" _hover={{ textDecoration: "underline" }}>
            Blog
          </ChakraLink>
          <ChakraLink as={Link} to="/faqs" _hover={{ textDecoration: "underline" }}>
            FAQs
          </ChakraLink>
          <ChakraLink as={Link} to="/career" _hover={{ textDecoration: "underline" }}>
            Career
          </ChakraLink>
          <ChakraLink as={Link} to="/partner" _hover={{ textDecoration: "underline" }}>
            Partner with Us
          </ChakraLink>
        </Flex>

        {/* ✅ Buttons: Contact Us & Hotline */}
        <Flex gap={3} display={{ base: "none", md: "flex" }} alignItems="center">
          <Button
            as={Link}
            to="/contact"
            bg="yellow.500"
            color="white"
            fontWeight="bold"
            fontSize="md"
            px={5}
            borderRadius="10px"
            _hover={{ bg: "yellow.600" }}
          >
            Contact Us
          </Button>
          <Button
            bg="yellow.100"
            color="yellow.600"
            fontWeight="bold"
            fontSize="md"
            leftIcon={<FaPhoneAlt />}
            px={5}
            borderRadius="10px"
            _hover={{ bg: "yellow.200" }}
            onClick={(e) => {
              e.preventDefault();
              setIsPopoverOpen(true);
            }}
          >
            Hotline
          </Button>
        </Flex>

        {/* ✅ Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={isOpen ? <FaTimes /> : <FaBars />}
          aria-label="Toggle Menu"
          onClick={onToggle}
          bg="transparent"
          fontSize="22px"
        />
      </Flex>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          left="0"
          right="0"
          bg="white"
          borderRadius="20px"
          boxShadow="md"
          py={4}
          px={6}
          display={{ base: "block", md: "none" }}
        >
          <VStack spacing={4} align="start">
          <ChakraLink as={Link} to="/" onClick={onClose} _hover={{ textDecoration: "underline" }}>
              Home
            </ChakraLink>
                        {/* ✅ Mobile Services Dropdown */}
                        <Menu>
              <MenuButton as={Button} rightIcon={<FaChevronDown />} variant="link" fontWeight="bold">
                Our Services
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => { handleServiceClick(); onClose(); }}>Buy</MenuItem>
                <MenuItem onClick={() => { handleServiceClick(); onClose(); }}>Manage</MenuItem>
                <MenuItem onClick={() => { handleServiceClick(); onClose(); }}>Sell</MenuItem>
              </MenuList>
            </Menu>
            <ChakraLink as={Link} to="/blog" onClick={onClose} _hover={{ textDecoration: "underline" }}>
              Blog
            </ChakraLink>
            <ChakraLink as={Link} to="/faqs" onClick={onClose} _hover={{ textDecoration: "underline" }}>
              FAQs
            </ChakraLink>
            <ChakraLink as={Link} to="/career" onClick={onClose} _hover={{ textDecoration: "underline" }}>
              Career
            </ChakraLink>
            <ChakraLink as={Link} to="/partner" onClick={onClose} _hover={{ textDecoration: "underline" }}>
              Partner with Us
            </ChakraLink>

            {/* ✅ Mobile Buttons */}
            <Button
              as={Link}
              to="/contact"
              bg="yellow.500"
              color="white"
              fontWeight="bold"
              fontSize="md"
              w="100%"
              borderRadius="25px"
              _hover={{ bg: "yellow.600" }}
            >
              Contact Us
            </Button>
            <Button
              bg="yellow.100"
              color="yellow.600"
              fontWeight="bold"
              fontSize="md"
              leftIcon={<FaPhoneAlt />}
              w="100%"
              borderRadius="25px"
              _hover={{ bg: "yellow.200" }}
              onClick={(e) => {
                e.preventDefault();
                setIsPopoverOpen(true);
              }}
            >
              Hotline
            </Button>
          </VStack>
        </Box>
      )}

      <PropertyAdvicePopover isOpen={isPopoverOpen} onClose={() => setIsPopoverOpen(false)} />
    </Box>
  );
};

export default Header;
