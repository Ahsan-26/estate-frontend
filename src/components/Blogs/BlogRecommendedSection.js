import React, { useEffect, useState } from "react";
import { Box, Text, VStack, Grid, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

const BlogRecommendedSection = () => {
  const [recommendedPosts, setRecommendedPosts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blogs/")
      .then(response => setRecommendedPosts(response.data.slice(0,3)))
      .catch(error => console.error("Error fetching recommended blogs:", error));
  }, []);

  return (
    <Box py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }}>
      <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={6}>
        Recommended for you
      </Text>

      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} 
        gap={6} 
        maxW="1200px" 
        mx="auto"
      >
        {recommendedPosts.map((post) => (
          <VStack key={post.id} align="start" spacing={3} bg="white" borderRadius="lg" boxShadow="md" p={4}>
            <Image 
              src={post.image} 
              alt="Recommended Blog" 
              w="100%" 
              h="180px" 
              borderRadius="lg" 
              objectFit="cover" 
            />
            <Text fontSize="md" fontWeight="bold">{post.title}</Text>
            <Text fontSize="sm" color="gray.600">{post.sections[0]?.content.slice(0, 60)}...</Text>
            <Link as={RouterLink} to={`/blog-details/${post.id}`}>
              <Text fontSize="md" fontWeight="bold">Read all →</Text>
            </Link>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogRecommendedSection;
