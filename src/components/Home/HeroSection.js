import React from "react";
import { Box, Text, Image, VStack, Flex, Stack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import "swiper/css";

import { PrimaryButton, SecondaryButton } from "../Buttons";

const HeroSection = () => {
  return (
    <Box 
      as="section"
      bgGradient="linear(to-b, #FEFEF9, #F7F3EA)"
      py={{ base: 16, md: 16 }} 
      px={{ base: 5, md: 20 }}
      mt={{ base: 18, md: 6 }}
      textAlign={{ base: "center", md: "left" }}
      maxW="100%"
      mx="auto"
      minH="100vh"
      display="flex"
      alignItems="center"
    >
      <Flex 
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={{ base: 6, md: 12, lg: 16 }}
        w="100%"
        maxW="1200px"//do not change this
        mx="auto"
      >
        {/* Left Section - Text Content */}
        <VStack 
          align={{ base: "center", md: "start" }} 
          spacing={6} 
          maxW={{ base: "100%", md: "50%" }}
          flexGrow={1}
        >
          <Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}  fontWeight="bold" >
            Property Solutions <br /> Made Easy
          </Text>
          <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.700" textAlign={{ base: "center", md: "left" }}>
            With EstateOne, we simplify every aspect of property ownership.
            Whether you’re buying, managing, or selling, our experts are here to
            guide you through the process. Explore premium properties, get
            professional management, and maximize returns on your sales—all in one seamless experience.
          </Text>

          {/* Buttons (Stack on mobile) */}
          <Stack 
            direction={{ base: "column", sm: "row" }} 
            spacing={4} 
            mt={4} 
            w="full" 
            align={{ base: "center", md: "start" }}
          >
            <PrimaryButton text="Book a free call" isPopover={true} />
            <SecondaryButton text="Whatsapp Us" to="/whatsapp" />
          </Stack>

          {/* Google Rating & Trust Statement */}
          <VStack 
            mt={6} 
            spacing={1} 
            align={{ base: "center", md: "start" }} // ✅ Centered in mobile, left-aligned in desktop
            w="full" // ✅ Ensures full width for alignment
          >
            <Image 
              src="/images/google_rating.svg" 
              alt="Google Rating" 
              w={{ base: "100px", md: "120px", lg: "140px" }} 
              mx={{ base: "auto", md: "0" }} // ✅ Centers image in mobile
            />
            <Text 
              fontSize="sm" 
              color="#141414"  
              textAlign={{ base: "center", md: "left" }} // ✅ Centers text in mobile, left-aligns in desktop
            >
              Trusted by <Text as="span" fontWeight="bold" color="#141414">thousands of happy clients</Text>
            </Text>
            <Text 
              fontSize="sm" 
              color="#141414" 
              textAlign={{ base: "center", md: "left" }} // ✅ Centers text in mobile, left-aligns in desktop
            >
              for expert guidance and genuine advice.
            </Text>
          </VStack>

        </VStack>

        {/* Right Section - Single Image with Smooth Animation */}
        <Box 
          w={{ base: "90%", md: "45%", lg: "40%" }} 
          maxW="500px"
          flexGrow={1}
        >
          <Swiper 
            modules={[Autoplay]} 
            spaceBetween={0} 
            slidesPerView={1} 
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={2000} // ✅ Smooth animation speed
            style={{ width: "100%", borderRadius: "10px" }}
          >
            <SwiperSlide>
              <Image 
                src="/images/hero_image1.png" 
                alt="Hero Image"
                w="100%" 
                maxH={{ base: "460px", md: "auto" }} 
                objectFit="cover" 
                borderRadius="10px"
                style={{
                  opacity: 0,
                  transition: "opacity 2s ease-in-out",
                }}
                onLoad={(e) => (e.target.style.opacity = 1)} // ✅ Smooth fade-in
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
