import React from "react";
import { Box, Text, VStack, HStack, Image, Grid, Link} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


const blogPosts = [
  {
    title: "Lorem ipsum dolor sit amet consectetur. Tellus ut feugiat vulputate",
    time: "10 min read",
    image: "/images/blog_main.png", // ✅ Replace with actual image
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur Tellus ut feugiat vulputate",
    time: "7 min read",
    image: "/images/blog1.png", // ✅ Replace with actual image
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur Tellus ut feugiat vulputate",
    time: "7 min read",
    image: "/images/blog2.png", // ✅ Replace with actual image
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur Tellus ut feugiat vulputate",
    time: "7 min read",
    image: "/images/blog3.png", // ✅ Replace with actual image
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur Tellus ut feugiat vulputate",
    time: "7 min read",
    image: "/images/blog2.png", // ✅ Replace with actual image
  },
];

const BlogSection = () => {
  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }}>
      {/* Section Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" textAlign="center" mb={6}>
        Blog
      </Text>

      <Grid 
        templateColumns={{ base: "1fr", md: "2fr 3fr" }} 
        gap={8} 
        maxW="1200px" 
        mx="auto"
      >
        {/* Left - Main Blog Post */}
        <VStack align="start" spacing={4} w="100%">
          <Text fontSize="lg" fontWeight="bold">
            {blogPosts[0].title}
          </Text>
          <Text fontSize="sm" color="gray.600">{blogPosts[0].time}</Text>
          <Link as={RouterLink} to="/blog-details">
            <Text fontSize="md" fontWeight="bold">Read all →</Text>
          </Link>
          <Image src={blogPosts[0].image} alt="Blog Main" w="100%" borderRadius="lg" />
        </VStack>

        {/* Right - Blog List */}
        <VStack align="start" spacing={4} w="100%">
          {blogPosts.slice(1).map((post, index) => (
            <HStack key={index} align="start" spacing={4} w="full">
              <Box w="100px" h="80px" bg="gray.200" borderRadius="lg">
                {/* Placeholder Image */}
                <Image src={post.image} alt="Blog Thumbnail" w="100%" h="100%" borderRadius="lg" objectFit="cover" />
              </Box>
              <VStack align="start" spacing={1} flex="1">
                <Text fontSize="sm" fontWeight="bold">{post.title}</Text>
                <Text fontSize="xs" color="gray.600">{post.time}</Text>
                <Link as={RouterLink} to="/blog-details">
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
