import React, { useState, useEffect } from "react";
import { 
  Box, Text, VStack, HStack, Button, Modal, ModalOverlay, ModalContent, ModalBody, 
  Grid, Icon, Divider, ModalCloseButton, Flex, Image, useBreakpointValue
} from "@chakra-ui/react";
import { FaArrowLeft, FaSun, FaMoon, FaGlobe } from "react-icons/fa";
import TimezoneSelect from 'react-timezone-select';
import WhatsapPop from "./WhatsapPop";

const generateDates = (numDays = 6) => {
  const days = [];
  const today = new Date();
  
  for (let i = 0; i < numDays; i++) {
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + i);
    
    days.push({
      day: futureDate.getDate(),
      label: futureDate.toLocaleDateString('en-US', { weekday: 'short' }),
      fullDate: futureDate
    });
  }
  return days;
};

const generateTimeSlots = (startHour = 12, endHour = 20, interval = 30) => {
  let slots = [];
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minutes = 0; minutes < 60; minutes += interval) {
      const time = new Date();
      time.setHours(hour);
      time.setMinutes(minutes);
      slots.push(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    }
  }
  return slots;
};

const SchedulePopover = ({ isOpen, onClose }) => {
  const [showWhatsapPop, setShowWhatsapPop] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState('Asia/Kolkata');
  const [dates, setDates] = useState([]);
  const [slots, setSlots] = useState([]);

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    setDates(generateDates());
    setSlots(generateTimeSlots());
  }, []);

  const handleBackClick = () => {
    onClose();
    setShowWhatsapPop(true);
  };

  if (showWhatsapPop) {
    return <WhatsapPop isOpen={showWhatsapPop} onClose={() => setShowWhatsapPop(false)} />;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent 
        borderRadius="2xl" 
        boxShadow="2xl" 
        p={0}
        minW={{ base: "90%", md: "700px" }}
      >
        <ModalCloseButton size="lg" top={3} right={3} color="gray.500" _hover={{ color: "black" }} />
        <ModalBody p={0}>
          <Flex direction={{ base: "column", md: "row" }} align="stretch">
            {/* Left Section */}
            <Box 
              bg="#F8FAFC" 
              p={{ base: 4, md: 8 }} 
              w={{ base: "100%", md: "40%" }} 
              position="relative"
            >
              <Button 
                variant="link" 
                leftIcon={<FaArrowLeft />} 
                color="black" 
                onClick={handleBackClick} 
                mb={4}
                pl={0}
              >
                Back
              </Button>
              
              <VStack align="start" spacing={4} mt={8}>
                <Image src="/images/logo.png" alt="Logo" w="120px" mb={4} />
                <Text fontSize="xl" fontWeight="bold">Talk to an Advisor</Text>
                <Text fontSize="sm" color="gray.600">
                  Schedule your slot and connect with our experts for personalized property guidance tailored to your needs.
                </Text>
                <Image 
                  src="/images/imagePopover.png" 
                  alt="Contact Agent" 
                  mt={4}
                  w="full"
                  maxW="280px"
                  mx="auto"
                />
              </VStack>
            </Box>

            {/* Right Section */}
            <Box flex={1} p={{ base: 4, md: 8 }} bg="white">
              <Text fontSize="lg" fontWeight="bold" mb={6}>Availability</Text>
              
              {/* Date Selection */}
              <Grid 
                templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(6, 1fr)" }} 
                gap={2}
                mb={6}
              >
                {dates.map(date => (
                  <Button 
                    key={date.day}
                    variant={selectedDate?.day === date.day ? "solid" : "outline"}
                    bg={selectedDate?.day === date.day ? "#F59E0B" : "white"}
                    color={selectedDate?.day === date.day ? "white" : "gray.700"}
                    borderRadius="lg"
                    h="70px"
                    _hover={{ bg: selectedDate?.day === date.day ? "#F59E0B" : "gray.50" }}
                    onClick={() => setSelectedDate(date)}
                  >
                    <VStack spacing={0}>
                      <Text fontSize="lg" fontWeight="bold">{date.day}</Text>
                      <Text fontSize="sm">{date.label}</Text>
                    </VStack>
                  </Button>
                ))}
              </Grid>

              {/* Timezone Selection */}
              <Flex justify="space-between" align="center" mb={6}>
                <Text fontSize="sm" fontWeight="medium">Available Slots</Text>
                <HStack spacing={2}>
                  <Icon as={FaGlobe} color="gray.500" />
                  <Box w="160px">
                    <TimezoneSelect
                      value={selectedTimezone}
                      onChange={setSelectedTimezone}
                      styles={{
                        control: (base) => ({
                          ...base,
                          fontSize: '14px',
                          minHeight: '40px'
                        })
                      }}
                    />
                  </Box>
                </HStack>
              </Flex>

              {/* Time Slots */}
              {selectedDate && (
                <VStack align="stretch" spacing={6}>
                  <Box>
                    <HStack mb={4}>
                      <Icon as={FaSun} color="#F59E0B" />
                      <Text fontWeight="semibold">Afternoon</Text>
                    </HStack>
                    <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                      {slots.slice(0, 6).map((slot, index) => (
                        <Button 
                          key={index}
                          variant="outline"
                          borderRadius="lg"
                          h="40px"
                          _hover={{ bg: "gray.50" }}
                        >
                          {slot}
                        </Button>
                      ))}
                    </Grid>
                  </Box>

                  <Box>
                    <HStack mb={4}>
                      <Icon as={FaMoon} color="#3B82F6" />
                      <Text fontWeight="semibold">Evening</Text>
                    </HStack>
                    <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                      {slots.slice(6, 12).map((slot, index) => (
                        <Button 
                          key={index}
                          variant="outline"
                          borderRadius="lg"
                          h="40px"
                          _hover={{ bg: "gray.50" }}
                        >
                          {slot}
                        </Button>
                      ))}
                    </Grid>
                  </Box>
                </VStack>
              )}

              {/* Footer */}
              <Box mt={8}>
                <Divider mb={4} />
                <Text fontSize="sm" color="gray.500" mb={4}>
                  A consultation with an EstateOne advisor generally takes 30 minutes.
                </Text>
                <Button 
                  bg="#F59E0B"
                  color="white"
                  w="full"
                  borderRadius="lg"
                  _hover={{ bg: "#D97706" }}
                  size="lg"
                >
                  Confirm schedule →
                </Button>
              </Box>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SchedulePopover;