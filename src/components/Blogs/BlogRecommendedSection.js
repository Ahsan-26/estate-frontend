import React from "react";
import { Box, Text, VStack, Grid, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const recommendedPosts = [
  {
    title: "Lorem ipsum dolor sit amet Illus ut feugiat vulputate",
    description: "Lorem ipsum dolor sit amet consectetur nullam enim ut faucibus.",
    image: "/images/recommended1.png", // ✅ Replace with actual image
  },
  {
    title: "Lorem ipsum dolor sit amet Illus ut feugiat vulputate",
    description: "Lorem ipsum dolor sit amet consectetur nullam enim ut faucibus.",
    image: "/images/recommended2.png", // ✅ Replace with actual image
  },
  {
    title: "Lorem ipsum dolor sit amet Illus ut feugiat vulputate",
    description: "Lorem ipsum dolor sit amet consectetur nullam enim ut faucibus.",
    image: "/images/recommended3.png", // ✅ Replace with actual image
  },
];

const BlogRecommendedSection = () => {
  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }}>
      {/* Section Heading */}
      <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={6}>
        Recommended for you
      </Text>

      {/* Blog Recommendations Grid */}
      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} 
        gap={6} 
        maxW="1200px" 
        mx="auto"
      >
        {recommendedPosts.map((post, index) => (
          <VStack key={index} align="start" spacing={3} bg="white" borderRadius="lg" boxShadow="md" p={4}>
            <Image 
              src={post.image} 
              alt="Recommended Blog" 
              w="100%" 
              h="180px" 
              borderRadius="lg" 
              objectFit="cover" 
            />
            <Text fontSize="md" fontWeight="bold">{post.title}</Text>
            <Text fontSize="sm" color="gray.600">{post.description}</Text>
            <Link as={RouterLink} to="/blog-details">
            <Text fontSize="md" fontWeight="bold">Read all →</Text>
          </Link>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogRecommendedSection;
