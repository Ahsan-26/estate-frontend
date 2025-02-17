import React, { useState } from "react";
import { 
  Box, Text, VStack, HStack, Button, Modal, ModalOverlay, ModalContent, ModalBody, 
  Grid, Icon, Select, Divider, Flex
} from "@chakra-ui/react";
import { FaArrowLeft, FaGlobe, FaSun, FaMoon } from "react-icons/fa";

const SchedulePopover = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState("17");


  const dates = [
    { day: "16", label: "Today" },
    { day: "17", label: "FRI" },
    { day: "18", label: "SAT" },
    { day: "19", label: "SUN" },
    { day: "20", label: "MON" },
    { day: "21", label: "TUE" }
  ];

  const slots = ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent 
        borderRadius="lg" 
        boxShadow="2xl" 
        p={{ base: 4, md: 6 }} 
        minW={{ base: "90%", md: "700px" }} // ✅ Adjust modal width based on screen size
      >
        <ModalBody p={0}>
          <Flex 
            direction={{ base: "column", md: "row" }} 
            align="stretch"
          >
            {/* Left Section - Advisor Info */}
            <Box 
              bg="gray.100" 
              p={{ base: 4, md: 6 }} 
              borderRadius="lg" 
              w={{ base: "100%", md: "35%" }} 
              textAlign={{ base: "center", md: "left" }}
            >
              <Button 
                variant="link" 
                leftIcon={<FaArrowLeft />} 
                color="black" 
                onClick={onClose} 
                mb={{ base: 3, md: 0 }}
              >
                Back
              </Button>
              <VStack align={{ base: "center", md: "start" }} spacing={3}>
                <Text fontSize="lg" fontWeight="bold">Talk to an Advisor</Text>
                <Text fontSize="sm" color="gray.600">
                  Schedule your slot and connect with our experts for personalized property guidance tailored to your needs.
                </Text>
              </VStack>
              <Box mt={4} textAlign="center">
                <Text fontSize="xs" fontWeight="bold">ESTATE</Text>
                <Box bg="yellow.500" h="4px" w="30px" mt={1} mx="auto" />
              </Box>
            </Box>

            {/* Right Section - Booking Slots */}
            <Box flex="1" p={{ base: 4, md: 6 }}>
              <Text fontSize="md" fontWeight="bold">Availability</Text>
              
              {/* Date Selection */}
              <HStack spacing={2} mt={3} wrap="wrap">
                {dates.map(date => (
                  <Button 
                    key={date.day} 
                    size="sm" 
                    borderRadius="full"
                    variant={selectedDate === date.day ? "solid" : "outline"} 
                    bg={selectedDate === date.day ? "yellow.500" : "white"} 
                    color={selectedDate === date.day ? "white" : "black"} 
                    _hover={{ bg: "yellow.600", color: "white" }}
                    onClick={() => setSelectedDate(date.day)}
                    flex={{ base: "1 1 30%", md: "auto" }} // ✅ Auto-adjusts width on small screens
                  >
                    {date.day} <br /> {date.label}
                  </Button>
                ))}
              </HStack>

              {/* Timezone Selection */}
              <HStack mt={5} justify="space-between" flexWrap="wrap">
                <Text fontSize="sm" fontWeight="medium">Available Slots</Text>
                <HStack>
                  <Icon as={FaGlobe} color="blue.500" />
                  <Select size="sm" defaultValue="Asia/Kolkata">
                    <option value="Asia/Kolkata">Asia/Kolkata</option>
                    <option value="America/New_York">America/New York</option>
                    <option value="Europe/London">Europe/London</option>
                  </Select>
                </HStack>
              </HStack>

              {/* Time Slots */}
              <VStack mt={4} align="stretch" spacing={4}>
                <Text fontSize="sm" fontWeight="bold">
                  <Icon as={FaSun} color="yellow.500" mr={2} /> Afternoon
                </Text>
                <Grid templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }} gap={2}>
                  {slots.slice(3, 7).map((slot, index) => (
                    <Button key={index} size="sm" borderRadius="full" variant="outline" _hover={{ bg: "gray.100" }}>
                      {slot}
                    </Button>
                  ))}
                </Grid>

                <Text fontSize="sm" fontWeight="bold" mt={4}>
                  <Icon as={FaMoon} color="blue.500" mr={2} /> Evening
                </Text>
                <Grid templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }} gap={2}>
                  {slots.slice(7).map((slot, index) => (
                    <Button key={index} size="sm" borderRadius="full" variant="outline" _hover={{ bg: "gray.100" }}>
                      {slot}
                    </Button>
                  ))}
                </Grid>
              </VStack>

              {/* Divider & Confirm Button */}
              <Divider mt={6} />
              <Text fontSize="xs" color="gray.500" mt={3}>
                A consultation with an EstateOne advisor generally takes 30 minutes.
              </Text>
              <Button 
                bg="yellow.500" 
                color="white" 
                width="full" 
                mt={4} 
                borderRadius="full"
                _hover={{ bg: "yellow.600" }}
              >
                Confirm schedule →
              </Button>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SchedulePopover;
