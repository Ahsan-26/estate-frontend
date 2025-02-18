import React from "react";
import { Box, Text, Image, VStack, HStack, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PrimaryButton, SecondaryButton } from "../Buttons"; // ✅ Import Buttons

const images = [
  "/images/hero_image1.png",
  "/images/hero_image2.png",
  "/images/hero_image3.png",
];

const HeroSection = () => {
  return (
    <Box 
      as="section"
      bgGradient="linear(to-b, #FEFEF9, #F7F3EA)"
      py={{ base: 10, md: 16 }} 
      px={{ base: 5, md: 20 }}
      textAlign={{ base: "center", md: "left" }}
    >
      
      <Flex 
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={10}
      >
        {/* Left Section - Text Content */}
        <VStack align="stretch" spacing={5} maxW="600px">
          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
            Property Solutions <br /> Made Easy
          </Text>
          <Text fontSize="md" color="gray.700" textAlign="justify">
            With EstateOne, we simplify every aspect of property ownership.
            Whether you’re buying, managing, or selling, our experts are here to
            guide you through the process. Explore premium properties, get
            professional management, and maximize returns on your sales—all in one seamless experience.
          </Text>
          
          {/* Buttons (Using Reusable Components) */}
          <HStack spacing={4} mt={4}>
          <PrimaryButton text="Book a free call" isPopover={true} />
            <SecondaryButton text="WhatsApp us" to="/whatsapp" />
          </HStack>

          {/* Google Rating & Trust Statement */}
          <HStack mt={6} spacing={3}>
            <Image src="/images/google_rating.png" alt="Google Rating" w="120px" />
            <VStack align="start" spacing={0}>
              <Text fontSize="sm" fontWeight="bold">
                Trusted by <Text as="span" color="yellow.500">thousands of happy clients</Text>
              </Text>
              <Text fontSize="sm" color="gray.600">
                for expert guidance and genuine advice.
              </Text>
            </VStack>
          </HStack>
        </VStack>

        {/* Right Section - Image Slider */}
        <Box w={{ base: "100%", md: "500px" }}>
          <Swiper 
            modules={[Autoplay]} 
            spaceBetween={50} 
            slidesPerView={1} 
            autoplay={{ delay: 3000 }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image src={image} alt={`Hero ${index + 1}`} w="100%" borderRadius="10px" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

      </Flex>
    </Box>
  );
};

export default HeroSection;
