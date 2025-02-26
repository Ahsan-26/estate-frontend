import React, { useRef } from "react";
import { Box, Text, VStack, HStack, Image, Grid } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

// Function to generate a random rating between 4.0 and 5.0
const getRandomRating = () => (Math.random() * (5 - 4) + 4).toFixed(1);

const reviews = [
  { name: "Urvashi", username: "@Urvashi49", text: "EstateOne never bombarded me with calls but was always available when I needed them. A refreshing experience!", image: "/images/Urvashi.jpg" },
  { name: "Dwij Adlakha", username: "@dwij", text: "EstateOne helped me find my dream home with zero hassle. Their team was professional and transparent!", image: "/images/dvij.jpg" },
  { name: "Renu", username: "@renu077", text: "The best real estate service I’ve ever used! No pressure, no stress—just professional advice.", image: "/images/Renu.jpg" },
  { name: "Samayak", username: "@smayak01_", text: "EstateOne’s customer service was beyond my expectations. They truly care about their clients!", image: "/images/Samayak.jpg" },
  { name: "Naman", username: "@Naman421", text: "A reliable real estate service with genuine professionals. EstateOne ensured I got the best deal!", image: "/images/Naman.jpg" },
  { name: "Dikhsha Nagpal", username: "@DK69p", text: "Highly recommended! They took care of everything from property search to paperwork.", image: "/images/Dikhsa.jpg" },
  { name: "Nitish", username: "@N1t1SH", text: "Exceptional service with complete transparency. EstateOne made the home-buying process simple.", image: "/images/Nitish.jpg" },
  { name: "Sachin Tripathi", username: "@Sachin690", text: "Professional, responsive, and highly knowledgeable. EstateOne is my go-to for real estate!", image: "/images/Sachin.jpg" },
  { name: "Megha Kwatra", username: "@Megha23", text: "I had an amazing experience with EstateOne. They made property investment easy!", image: "/images/Megha.jpg" },
  { name: "Karan Kapoor", username: "@KK-e665", text: "Best decision ever! EstateOne provided fantastic guidance and ensured a smooth process.", image: "/images/karan.jpg" },
  { name: "Muskan Garg", username: "@Muskan_34", text: "I highly recommend EstateOne! Their transparency and professionalism are unmatched.", image: "/images/Muskan.jpg" },
  { name: "Umang Dudeja", username: "@Umang420D", text: "Outstanding service! They truly put their clients first and deliver the best solutions.", image: "/images/Umang.jpg" }
];

// Assign random ratings to each review
const reviewsWithRatings = reviews.map(review => ({
  ...review,
  rating: getRandomRating()
}));

const ReviewsSection = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const startScroll = () => {
    if (row1Ref.current) row1Ref.current.style.animation = "scrollLeft 15s linear infinite";
    if (row2Ref.current) row2Ref.current.style.animation = "scrollRight 15s linear infinite";
  };

  const stopScroll = () => {
    if (row1Ref.current) row1Ref.current.style.animation = "none";
    if (row2Ref.current) row2Ref.current.style.animation = "none";
  };

  return (
    <Box as="section" px={{ base: 5, md: 20 }} textAlign="center">
      {/* Section Tag */}
      <Text color="yellow.500" bg="#f6f7dd" fontSize="sm" fontWeight="bold" px={4} py={1} borderRadius="full" display="inline-block">
        Testimonials
      </Text>

      {/* Section Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mt={3}>
        What Our Clients Say
      </Text>
      <Text maxWidth="70%" textAlign="center" mx="auto" fontSize="md" color="gray.700">
        At EstateOne, we simplify property ownership. Whether you're looking to buy, manage, or sell real estate, we’ve got you covered.
      </Text>

      {/* Scrolling Container (Hover to start scrolling) */}
      <Box mt={8} maxW="1200px" mx="auto" overflow="hidden" position="relative" onMouseEnter={startScroll} onMouseLeave={stopScroll}>
        
        {/* Row 1 - Right to Left */}
        <Grid ref={row1Ref} templateColumns="repeat(12, 1fr)" templateRows="1fr" gap={6} display="grid" width="200%">
          {reviewsWithRatings.slice(0, 6).map((review, index) => (
            <VStack key={index} p={5} bg="white" borderRadius="lg" boxShadow="md" align="start" textAlign="left" spacing={3} width="300px">
              {/* Star Rating */}
              <HStack color="yellow.400">
                {[...Array(Math.floor(review.rating))].map((_, i) => <FaStar key={i} size={18} />)}
                <Text fontWeight="bold" fontSize="md" color="black">{review.rating}</Text>
              </HStack>

              <Text fontSize="sm" color="gray.700">{review.text}</Text>

              {/* User Info */}
              <HStack mt={4}>
                <Image src={review.image} alt={review.name} boxSize="40px" borderRadius="full" />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">{review.name}</Text>
                  <Text fontSize="xs" color="gray.500">{review.username}</Text>
                </VStack>
              </HStack>
            </VStack>
          ))}
        </Grid>

        {/* Row 2 - Left to Right */}
        <Grid ref={row2Ref} templateColumns="repeat(12, 1fr)" templateRows="1fr" gap={6} display="grid" width="200%" mt={5}>
          {reviewsWithRatings.slice(6, 12).map((review, index) => (
            <VStack key={index} p={5} bg="white" borderRadius="lg" boxShadow="md" align="start" textAlign="left" spacing={3} width="300px">
              {/* Star Rating */}
              <HStack color="yellow.400">
                {[...Array(Math.floor(review.rating))].map((_, i) => <FaStar key={i} size={18} />)}
                <Text fontWeight="bold" fontSize="md" color="black">{review.rating}</Text>
              </HStack>

              <Text fontSize="sm" color="gray.700">{review.text}</Text>

              {/* User Info */}
              <HStack mt={4}>
                <Image src={review.image} alt={review.name} boxSize="40px" borderRadius="full" />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">{review.name}</Text>
                  <Text fontSize="xs" color="gray.500">{review.username}</Text>
                </VStack>
              </HStack>
            </VStack>
          ))}
        </Grid>
      </Box>

      {/* Embedded CSS for Animations */}
      <style>
        {`
          @keyframes scrollLeft {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            from { transform: translateX(-50%); }
            to { transform: translateX(0%); }
          }
        `}
      </style>
    </Box>
  );
};

export default ReviewsSection;
