import React, { useEffect, useState } from "react";
import { Box, Text, VStack, HStack, Image, Grid, Link, Spinner } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blogs/") // Replace with your actual backend API URL
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (blogs.length === 0) {
    return <Text textAlign="center">No blog posts available.</Text>;
  }

  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }}>
      {/* Section Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" textAlign="center" mb={6}>
        Blog
      </Text>

      <Grid templateColumns={{ base: "1fr", md: "2fr 3fr" }} gap={8} maxW="1200px" mx="auto">
  {/* Left - Main Blog Post */}
  <VStack align="start" spacing={4} w="100%">
    <Text fontSize="lg" fontWeight="bold">{blogs[0]?.title}</Text>
    <Text fontSize="sm" color="gray.600">{blogs[0]?.reading_time} min read</Text>
    <Link as={RouterLink} to={`/blog-details/${blogs[0]?.id}`}>
      <Text fontSize="md" fontWeight="bold">Read all →</Text>
    </Link>
    <Image src={blogs[0]?.image} alt="Blog Main" w="100%" borderRadius="lg" />
  </VStack>

  {/* Right - Blog List */}
  <VStack align="start" spacing={4} w="100%">
    {blogs.slice(1).map((post, index) => (
      <HStack key={index} align="start" spacing={4} w="full">
        <Box w="100px" h="80px" bg="gray.200" borderRadius="lg">
          <Image src={post.image} alt="Blog Thumbnail" w="100%" h="100%" borderRadius="lg" objectFit="cover" />
        </Box>
        <VStack align="start" spacing={1} flex="1">
          <Text fontSize="sm" fontWeight="bold">{post.title}</Text>
          <Text fontSize="xs" color="gray.600">{post.reading_time} min read</Text>
          <Link as={RouterLink} to={`/blog-details/${post.id}`}>
          console.log(post.id);
            <Text fontSize="md" fontWeight="bold">Read all →</Text>
          </Link>
        </VStack>
      </HStack>
    ))}
  </VStack>
</Grid>

    </Box>
  );
};

export default BlogSection;
