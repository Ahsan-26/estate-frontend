import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box, Text, VStack, HStack, Image, Divider, Flex, Icon, Stack,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaShareAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/blogs/${id}/`)
      .then((response) => setBlog(response.data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, [id]);

  if (!blog) return <Text>Loading...</Text>;

  return (
    <Box py={{ base: 10, md: 16 }} px={{ base: 5, md: 20 }} maxW="1200px" mx="auto">
      {/* Blog Header - Modified Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" gap={8} mb={10} mt={10}>
        {/* Author Section (Left) */}
        <VStack align="start" spacing={4} flex="1">
          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
            {blog.title}
          </Text>
          <HStack spacing={4} bg="gray.100" px={4} py={2} borderRadius="full" boxShadow="sm">
            <Image src={blog.author.image} boxSize="40px" borderRadius="full" />
            <Text fontWeight="bold">{blog.author.name}</Text>
            <Text>{blog.reading_time} min read</Text>
            <HStack spacing={3}>
              <Icon as={FaFacebook} />
              <Icon as={FaTwitter} />
              <Icon as={FaLinkedin} />
              <Icon as={FaShareAlt} />
            </HStack>
          </HStack>
        </VStack>

        {/* Blog Image (Right) */}
        <Box flex="1">
          <Image src={blog.image} borderRadius="xl" objectFit="cover" />
        </Box>
      </Flex>

      {/* Your original code below remains unchanged */}
      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        {/* Left Sidebar */}
        <Box flex={{ base: "1", md: "0.3" }} bg="gray.50" p={5} borderRadius="xl" boxShadow="sm">
          <VStack align="start" spacing={4}>
            {blog.sections.map((section, index) => (
              <HStack
                key={index}
                spacing={2}
                align="center"
                cursor="pointer"
                onClick={() => setActiveSection(index)}
              >
                <Box
                  w="4px"
                  h="30px"
                  bg={activeSection === index ? "orange.400" : "transparent"}
                  borderRadius="full"
                />
                <Text
                  fontWeight={activeSection === index ? "bold" : "normal"}
                  color={activeSection === index ? "black" : "gray.600"}
                >
                  {section.heading}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>

        {/* Main Content */}
        <Box flex="1">
          <Stack spacing={5}>
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                {blog.sections[activeSection].heading}
              </Text>
              <Text fontSize="md" color="gray.700" lineHeight="1.8">
                {blog.sections[activeSection].content}
              </Text>
            </Box>

            {blog.sections.map((section, index) =>
              index !== activeSection && (
                <Box key={index}>
                  <Divider my={5} />
                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    {section.heading}
                  </Text>
                  <Text fontSize="md" color="gray.700" lineHeight="1.8">
                    {section.content}
                  </Text>
                </Box>
              )
            )}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default BlogDetails;
