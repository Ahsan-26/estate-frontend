import React from "react";
import { Box, Flex, Text, Link, VStack, HStack, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
// import PrivacyPolicy from "./Legal/PrivacyPolicy";

const Footer = () => {
  return (
    <Box bg="gray.100" py={10} textAlign="center">
      <Flex maxW="1100px" mx="auto" px={5} justify="space-between" flexWrap="wrap">
        
        {/* Left Section - Logo & Description */}
        <Box maxW="250px" textAlign="left">
          <img 
            src="/images/logo.svg"  
            alt="logo" 
            style={{ width: "110px", height: "38px", marginBottom: "8px" }}  
          />
          <Text fontSize="sm" color="gray.600" mt={2}>
            With Estate One, you don’t just buy, manage, or sell. You strategize. Unlock potential.
            Navigate markets and achieve your real estate goals.
          </Text>
        </Box>

        {/* Quick Links */}
        <VStack align="flex-start" spacing={2}>
          <Text fontSize="lg" fontWeight="bold">Quick Links</Text>
          <Link as={RouterLink} to="/partner" fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>Partner with us</Link>
          <Link as={RouterLink} to="/career" fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>Career</Link>
          <Link as={RouterLink} to="/blog" fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>Blogs</Link>
          <Link as={RouterLink} to="/faqs" fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>FAQs</Link>
        </VStack>

        {/* Legal */}
        <VStack align="flex-start" spacing={2}>
          <Text fontSize="lg" fontWeight="bold">Legal</Text>
          <Link as={RouterLink} to="/privacy" fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>Privacy Policy</Link>
          <Link as={RouterLink} to="/terms"fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>Terms & Conditions</Link>
        </VStack>

        {/* Support */}
        <VStack align="flex-start" spacing={2}>
          <Text fontSize="lg" fontWeight="bold">Support</Text>
          <Link as={RouterLink} to="/contact" fontSize="sm" color="gray.700" _hover={{ textDecoration: "underline" }}>Contact us</Link>
          
          {/* Social Media Links with Custom Images */}
          <HStack spacing={4} mt={2}>
            <Link href="http://www.youtube.com/@estateone_india" target="_blank">
              <Image src="images/youtube.svg" alt="YouTube" width="40px" />
            </Link>
            <Link href="https://wa.me/918368626797" target="_blank">
              <Image src="images/whatsapp.svg" alt="Whatsapp" width="27px" />
            </Link>
            
            <Link href="https://www.linkedin.com/company/estateone/" target="_blank">
              <Image src="images/linkedin.svg" alt="LinkedIn" width="35px" />
            </Link>
            <Link href="https://www.instagram.com/estateone.in?igsh=MXNrdHd0b3J0aHkwZA==" target="_blank">
              <Image src="images/instagram.svg" alt="Instagram" width="30px" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61569533714774" target="_blank">
              <Image src="images/facebook.svg" alt="Facebook" width="30px" />
            </Link>
          </HStack>
        </VStack>
      </Flex>

      {/* Additional Info Section */}
      <Box maxW="1100px" mx="auto" px={5} mt={8} textAlign="center">
        <Text fontSize="sm" fontWeight="bold" color="gray.700">
          For Real Estate Queries: <Link href="mailto:connect@estateone.in" color="blue.600">connect@estateone.in</Link>
        </Text>
        <Text fontSize="sm" color="gray.600" mt={1}>
          Vedarc Infratech Private Limited | CIN: U68200HR2025PTC127756
        </Text>
        <Text fontSize="xs" color="gray.500" mt={3}>
          Disclaimer: The information on this website is for informational purposes only and is provided as a service to the online community. 
          It does not constitute real estate advice, and we do not guarantee the accuracy, adequacy, or completeness of the information presented here.
        </Text>
      </Box>

      {/* Footer Bottom */}
      <Text fontSize="xs" color="gray.600" mt={8}>
        © Vedarc Infratech Pvt. Ltd
      </Text>
    </Box>
  );
};

export default Footer;
