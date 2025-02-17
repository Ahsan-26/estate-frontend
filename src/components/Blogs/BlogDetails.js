import React from "react";
import { Box, Text, VStack, HStack, Image, Link, Divider, Flex } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaShareAlt } from "react-icons/fa";

const BlogDetails = () => {
  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }} maxW="1200px" mx="auto">
      
      {/* Blog Header */}   
      <VStack align="start" spacing={4} mb={6}>
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
          Lorem ipsum dolor sit amet consectetur. Tellus ut feugiat vulputate
        </Text>
        
        {/* Author and Social Share */}
        <HStack spacing={3} color="gray.600">
          <Image src="/images/user.png" alt="Author" boxSize="40px" borderRadius="full" />
          <Text fontWeight="bold">Pablo Santos</Text>
          <Text>· 2h ago</Text>
          <HStack spacing={3} ml={4}>
            <FaFacebook size={18} />
            <FaTwitter size={18} />
            <FaLinkedin size={18} />
            <FaShareAlt size={18} />
          </HStack>
        </HStack>
        
        {/* Blog Image */}
        <Image src="/images/blog_main.png" alt="Blog" w="100%" borderRadius="lg" />
      </VStack>

      {/* Sidebar + Blog Content Layout */}
      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        
        {/* Left Sidebar - Related Articles */}
        <Box flex={{ base: "1", md: "0.3" }} bg="yellow.50" p={5} borderRadius="lg">
          <Text fontWeight="bold" mb={3}>Related Articles</Text>
          <VStack align="start" spacing={2}>
            <Link color="black" _hover={{ textDecoration: "underline" }}>Lorem ipsum dolor sit amet?</Link>
            <Link color="black" _hover={{ textDecoration: "underline" }}>Lorem ipsum dolor sit amet?</Link>
            <Link color="black" _hover={{ textDecoration: "underline" }}>Lorem ipsum dolor sit amet?</Link>
            <Link color="black" _hover={{ textDecoration: "underline" }}>Lorem ipsum dolor sit amet?</Link>
          </VStack>
        </Box>

        {/* Blog Content */}
        <Box flex="1">
          <Text fontSize="md" color="gray.700" lineHeight="1.8">
            Lorem ipsum dolor sit amet consectetur. Duis tempor commodo morbi auctor diam tristique risus ac. Faucibus dignissim consequat tincidunt facilisis posuere integer magna tristique. Urna aliquam convallis eu habitasse justo. Lorem ipsum dolor sit amet consectetur.
          </Text>

          <Divider my={5} />

          <Text fontSize="lg" fontWeight="bold">Lorem ipsum dolor sit amet consectetur.</Text>
          <Text fontSize="md" color="gray.700" lineHeight="1.8">
            Lorem ipsum dolor sit amet consectetur. Duis tempor commodo morbi auctor diam tristique risus ac. Faucibus dignissim consequat tincidunt facilisis posuere integer magna tristique. Urna aliquam convallis eu habitasse justo.
          </Text>

          <Divider my={5} />

          <Text fontSize="lg" fontWeight="bold">Lorem ipsum dolor sit amet?</Text>
          <Text fontSize="md" color="gray.700" lineHeight="1.8">
            Lorem ipsum dolor sit amet consectetur. Duis tempor commodo morbi auctor diam tristique risus ac. Faucibus dignissim consequat tincidunt facilisis posuere integer magna tristique. Urna aliquam convallis eu habitasse justo.
          </Text>

          <Divider my={5} />

          <Text fontSize="lg" fontWeight="bold">Lorem ipsum dolor sit amet?</Text>
          <Text fontSize="md" color="gray.700" lineHeight="1.8">
            Lorem ipsum dolor sit amet consectetur. Duis tempor commodo morbi auctor diam tristique risus ac. Faucibus dignissim consequat tincidunt facilisis posuere integer magna tristique. Urna aliquam convallis eu habitasse justo.
          </Text>
        </Box>

      </Flex>

    </Box>
  );
};

export default BlogDetails;
