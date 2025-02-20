import React, { useRef } from "react";
import { Box, Text, VStack, HStack, Image, Grid } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const reviews = [
  { name: "Karan Luthra", username: "@KaranL49", text: "I appreciated their 'No-Spam' promise. EstateOne never bombarded me with calls or emails but was always available when I needed them. A refreshing experience in this industry!", image: "/images/p1.png" },
  { name: "Dwij Adlakha", username: "@dwij", text: "EstateOne helped me find my dream home with zero hassle. Their team was professional, transparent, and super helpful throughout the process!", image: "/images/dvij.jpg" },
  { name: "Renu", username: "@renu077", text: "The best real estate service I’ve ever used! No pressure, no stress—just clear and professional advice.", image: "/images/p4.png" },
  { name: "Rukmesh Bandhu", username: "@rukmesh01_", text: "EstateOne’s customer service was beyond my expectations. They truly care about their clients and provide outstanding support!", image: "/images/rukmesh.jpg" },
  { name: "Naman", username: "@Naman421", text: "A reliable real estate service with genuine professionals. EstateOne ensured I got the best deal for my property.", image: "/images/p4.png" },
  { name: "Dikhsha Nagpal", username: "@DK69p", text: "I would highly recommend EstateOne! They took care of everything from property search to final paperwork, making the process stress-free.", image: "/images/p3.png" },
  { name: "Nagendra Adlakha", username: "@Nag12adlakha", text: "Exceptional service with complete transparency. The team at EstateOne made the home-buying process enjoyable and simple.", image: "/images/p4.png" },
  { name: "Sachin Tripathi", username: "@Sachin690", text: "Professional, responsive, and highly knowledgeable. EstateOne is my go-to for all real estate needs.", image: "/images/p1.png" },
  { name: "Megha Kwatra", username: "@Megha23", text: "I had an amazing experience with EstateOne. They made property investment so much easier!", image: "/images/p3.png" },
  { name: "Karan Kapoor", username: "@KK-e665", text: "Best decision ever! EstateOne provided fantastic guidance and ensured everything was smooth.", image: "/images/p2.png" },
  { name: "Muskan Garg", username: "@Muskan_34", text: "I highly recommend EstateOne! Their transparency and professionalism are unmatched.", image: "/images/p4.png" },
  { name: "Umang Dudeja", username: "@Umang420D", text: "Outstanding service! They truly put their clients first and deliver the best solutions.", image: "/images/p1.png" }
];

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
                <Text 
                  color="yellow.500" 
                  bg="#f6f7dd" 
                  fontSize="sm" 
                  fontWeight="bold" 
                  px={4} 
                  py={1} 
                  borderRadius="full"
                  display="inline-block"
                >
                  Testimonials
                </Text>
      {/* Section Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mt={3}>
        What Our Clients Say
      </Text>
      <Text maxWidth= "70%" textAlign="center" mx="auto" fontSize="md" color="gray.700">
      At EstateOne, we simplify property ownership. Whether you're looking to buy, manage, or sell real estate, we’ve got you covered. From finding the perfect property to handling day-to-day management and ensuring a smooth selling process, we do it all.
      </Text>

      {/* Scrolling Container */}
      <Box mt={8} maxW="1200px" mx="auto" overflow="hidden" whiteSpace="normal"  position="relative" onMouseEnter={startScroll} onMouseLeave={stopScroll}>
        
        {/* Row 1 - Right to Left */}
        <Grid ref={row1Ref} templateColumns="repeat(12, 1fr)" templateRows="1fr" gap={6} display="grid" whiteSpace="nowrap" width="200%">
          {reviews.slice(0, 6).map((review, index) => (
            <VStack key={index} p={5} bg="white" borderRadius="lg" boxShadow="md" align="start" textAlign="left" spacing={3} width="300px">
              <HStack color="yellow.400">
                {[...Array(5)].map((_, i) => <FaStar key={i} size={18} />)}
                <Text fontWeight="bold" fontSize="md" color="black">5.0</Text>
              </HStack>
              <Text 
  fontSize="sm" 
  color="gray.700"
  wordBreak="break-word"  // ✅ Forces text to wrap properly
  whiteSpace="normal"  // ✅ Prevents overflow by keeping text inside the box
  overflow="hidden"  // ✅ Ensures no text spills out of the card
>
  {review.text}
</Text>
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
        <Grid ref={row2Ref} templateColumns="repeat(12, 1fr)" templateRows="1fr" gap={6} display="grid" whiteSpace="nowrap" width="200%" mt={5}>
          {reviews.slice(6, 12).map((review, index) => (
            <VStack key={index} p={5} bg="white" borderRadius="lg" boxShadow="md" align="start" textAlign="left" spacing={3} width="300px">
              <HStack color="yellow.400">
                {[...Array(5)].map((_, i) => <FaStar key={i} size={18} />)}
                <Text fontWeight="bold" fontSize="md" color="black">5.0</Text>
              </HStack>
              <Text 
  fontSize="sm" 
  color="gray.700"
  wordBreak="break-word"  // ✅ Forces text to wrap properly
  whiteSpace="normal"  // ✅ Prevents overflow by keeping text inside the box
  overflow="hidden"  // ✅ Ensures no text spills out of the card
>
  {review.text}
</Text>
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

      {/* Embedded CSS for Opposite Animations */}
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
