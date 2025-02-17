import React from "react";
import { Box, Flex, Text, Link, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.100" py={10} textAlign="center">
      <Flex 
        maxW="1100px" 
        mx="auto" 
        px={5} 
        justify="space-between" 
        flexWrap="wrap"
      >
        {/* Left Section - Logo & Description */}
        <Box maxW="250px" textAlign="left">
          
        <img 
          src="/images/logo.png"  
          alt="logo" 
          style={{ width: "110px", height: "38px", marginBottom: "8px" }}  
        />
          <Text fontSize="sm" color="gray.600" mt={2}>
            Lorem ipsum dolor sit amnsectetur Sit sagittis volutpat sed ut augue odio natoque elementum.
          </Text>
        </Box>

        {/* Quick Links */}
        <VStack align="flex-start" spacing={2}>
          <Text fontSize="lg" fontWeight="bold">Quick Links</Text>
          <Link href="#" fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>Partner with us</Link>
          <Link href="#" fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>Career</Link>
          <Link href="#" fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>Blog</Link>
          <Link href="#" fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>FAQs</Link>
        </VStack>

        {/* Legal */}
        <VStack align="flex-start" spacing={2}>
          <Text fontSize="lg" fontWeight="bold">Legal</Text>
          <Link href="#" fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>Privacy Policy</Link>
          <Link href="#" fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>Terms & Conditions</Link>
        </VStack>

        {/* Support */}
        <VStack align="flex-start" spacing={2}>
          <Text fontSize="lg" fontWeight="bold">Support</Text>
          <Text fontSize="sm" color="gray.700">Contact Us</Text>
          <HStack spacing={4} mt={2}>
            <IconButton as="a" href="#" icon={<FaFacebookF />} aria-label="Facebook" color="gray.700" _hover={{ color: "blue.500" }} />
            <IconButton as="a" href="#" icon={<FaLinkedinIn />} aria-label="LinkedIn" color="gray.700" _hover={{ color: "blue.600" }} />
            <IconButton as="a" href="#" icon={<FaInstagram />} aria-label="Instagram" color="gray.700" _hover={{ color: "pink.500" }} />
            <IconButton as="a" href="#" icon={<FaYoutube />} aria-label="YouTube" color="gray.700" _hover={{ color: "red.500" }} />
          </HStack>
        </VStack>
      </Flex>

      {/* Footer Bottom */}
      <Text fontSize="xs" color="gray.600" mt={6}>
        © 2021-2024. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;
