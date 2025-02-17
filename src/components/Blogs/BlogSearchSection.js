import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { 
  Box, Text, Input, InputGroup, InputRightElement, IconButton, VStack, Grid, HStack, Image, Link 
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const blogPosts = [
  { title: "Lorem ipsum dolor sit amet Illus ut feugiat vulputate", time: "7 min read", image: "/images/blog1.png" },
  { title: "Lorem ipsum dolor sit amet Illus ut feugiat vulputate", time: "7 min read", image: "/images/blog2.png" },
  { title: "Lorem ipsum dolor sit amet Illus ut feugiat vulputate", time: "7 min read", image: "/images/blog3.png" },
  { title: "Lorem ipsum dolor sit amet Illus ut feugiat vulputate", time: "7 min read", image: "/images/blog1.png" },
  { title: "Lorem ipsum dolor sit amet Illus ut feugiat vulputate", time: "7 min read", image: "/images/blog2.png" },
  { title: "Lorem ipsum dolor sit amet Illus ut feugiat vulputate", time: "7 min read", image: "/images/blog3.png" },
  { title: "Lorem ipsum dolor sit amet Illus ut feugiat vulputate", time: "7 min read", image: "/images/blog1.png" },
  { title: "Lorem ipsum dolor sit amet Illus ut feugiat vulputate", time: "7 min read", image: "/images/blog2.png" },
];

const BlogSearchSection = () => {
  return (
    <Box as="section" py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }}>

      {/* 🔍 Search Bar Section */}
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
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} 
        gap={6} 
        maxW="1200px" 
        mx="auto"
      >
        {blogPosts.map((post, index) => (
          <HStack key={index} align="start" spacing={4} w="full">
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
              <Text fontSize="xs" color="gray.600">{post.time}</Text>
              <Link as={RouterLink} to="/blog-details">
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
