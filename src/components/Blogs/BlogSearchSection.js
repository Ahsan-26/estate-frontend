import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { 
  Box, Text, Input, InputGroup, InputRightElement, IconButton, VStack, Grid, HStack, Image, Link 
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const BlogSearchSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blogs/")
      .then(response => setBlogPosts(response.data))
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <Box py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }}>
      {/* 🔍 Search Bar */}
      <Box 
        bgGradient="linear(to-r, blackAlpha.900, blackAlpha.700)" 
        borderRadius="lg"
        p={6} 
        textAlign="center"
        color="white"
        maxW="900px"
        mx="auto"
      >
        <Text fontSize="lg" fontWeight="bold" mb={3}>What are you looking for?</Text>
        <InputGroup maxW="500px" mx="auto">
          <Input 
            placeholder="Search articles here" 
            borderRadius="full" 
            bg="white" 
            color="black" 
            _placeholder={{ color: "gray.500" }}
          />
          <InputRightElement>
            <IconButton 
              icon={<FaSearch />} 
              bg="yellow.500" 
              color="white" 
              borderRadius="full" 
              _hover={{ bg: "yellow.600" }} 
            />
          </InputRightElement>
        </InputGroup>
      </Box>

      {/* 📰 What's New Section */}
      <Text fontSize="xl" fontWeight="bold" textAlign="center" mt={10} mb={6}>
        What's new
      </Text>

      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }} 
        gap={6} 
        maxW="1200px" 
        mx="auto"
      >
        {blogPosts.map((post) => (
          <HStack key={post.id} align="start" spacing={4} w="full">
            <Image 
              src={post.image} 
              alt="Blog Thumbnail" 
              w="100px" 
              h="80px" 
              borderRadius="lg" 
              objectFit="cover" 
            />
            <VStack align="start" spacing={1} flex="1">
              <Text fontSize="sm" fontWeight="bold">{post.title}</Text>
              <Text fontSize="xs" color="gray.600">{post.reading_time} min read</Text>
              <Link as={RouterLink} to={`/blog-details/${post.id}`}>
                <Text fontSize="md" fontWeight="bold">Read all →</Text>
              </Link>
            </VStack>
          </HStack>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSearchSection;
