import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text, VStack, HStack, Image, Link, Divider, Flex } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaShareAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams()
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/blogs/${id}/`)
      .then(response => {
        if (response.data.length > 0) {
          setBlog(response.data); // Assuming first blog for now
        }
      })
      .catch(error => console.error("Error fetching blog data:", error));
  }, [id]);

  if (!blog) return <Text>Loading...</Text>;

  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }} maxW="1200px" mx="auto">
      
      {/* Blog Header */}   
      <VStack align="start" spacing={4} mb={6}>
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
        {blog.title}
        </Text>
        
        {/* Author and Social Share */}
        <HStack spacing={3} color="gray.600">
        <Image src={`http://127.0.0.1:8000${blog.author_image}`} alt="Author" boxSize="40px" borderRadius="full" />
          <Text fontWeight="bold">{blog.author}</Text>
          <Text>{new Date(blog.created_at).toLocaleDateString()}</Text>
          <HStack spacing={3} ml={4}>
            <FaFacebook size={18} />
            <FaTwitter size={18} />
            <FaLinkedin size={18} />
            <FaShareAlt size={18} />
          </HStack>
        </HStack>
        
        {/* Blog Image */}
        <Image src={blog.image} alt="Blog" w="100%" borderRadius="lg" />
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
          {blog.content}
          </Text>

          {/* <Divider my={5} />

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
          </Text> */}
        </Box>

      </Flex>

    </Box>
  );
};

export default BlogDetails;
