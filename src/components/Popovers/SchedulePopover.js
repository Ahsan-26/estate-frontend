import React, { useState, useEffect } from "react";
import { 
  Box, Text, VStack, HStack, Button, Modal, ModalOverlay, ModalContent, ModalBody, 
  Grid, Icon, Divider, ModalCloseButton, Flex, Image, useBreakpointValue
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TimezoneSelect from 'react-timezone-select';
import WhatsapPop from "./WhatsapPop";
import QueryPopover from "./QueryPopover";
import axios from "axios";
import { DateTime } from "luxon";

const generateDates = (numDays = 7) => {
  const days = [];
  const today = new Date();
  
  for (let i = 0; i < numDays; i++) {
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + i);
    
    days.push({
      day: futureDate.getDate(),
      label: futureDate.toLocaleDateString('en-US', { weekday: 'short' }),
      fullDate: futureDate.toISOString().split('T')[0] // Format YYYY-MM-DD
    });
  }
  return days;
};

const SchedulePopover = ({ isOpen, onClose }) => {
  const [isQueryPopoverOpen, setIsQueryPopoverOpen] = useState(false);
  const [showWhatsapPop, setShowWhatsapPop] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState('Asia/Kolkata');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedSlotId, setSelectedSlotId] = useState(null);

  const [dates, setDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState({});
  const [loading, setLoading] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    setDates(generateDates());
  }, []);

  useEffect(() => {
    if (isOpen) {
      fetchAvailableSlots();
    }
  }, [isOpen]);

  const handleSlotSelect = (slot, startTime) => {
    setSelectedSlotId(slot.id);
    setSelectedSlot(startTime);
    console.log("Selected Slot ID:", slot.id);  
    console.log("Selected Time:", startTime);
  };

  const [isSchedulePopoverOpen, setIsSchedulePopoverOpen] = useState(true);
  const onScheduleClose = () => setIsSchedulePopoverOpen(false);

  const handleCloseSchedulePopover = () => {
    console.log("Closing Schedule Popover");
    onScheduleClose();
    setTimeout(() => {
      console.log("Opening Query Popover");
      setIsQueryPopoverOpen(true);
    }, 100);
  };

  const handleOpenQueryPopover = () => {
    setIsQueryPopoverOpen(true);
  };

  const fetchAvailableSlots = async () => {
    try {
      setLoading(true);
      // const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/available_slots/`);
      const response = await axios.get(`http://localhost:8000/api/available_slots/`);
      console.log("Raw API Response:", response.data);

      const formattedSlots = {};
      const datesData = response.data.dates || {};

      Object.keys(datesData).forEach(date => {
        formattedSlots[date] = datesData[date].map(slot => ({
          id: slot.id,
          start: slot.start_time,
          end: slot.end_time
        }));
      });

      setAvailableSlots(formattedSlots);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching available slots:", error);
      setLoading(false);
    }
  };

  const convertToSelectedTimezone = (time, timezone) => {
    try {
      return DateTime.fromFormat(time, "hh:mm a", { zone: "Asia/Kolkata" })
        .setZone(timezone)
        .toFormat("hh:mm a");
    } catch (error) {
      console.error("Timezone conversion error:", error);
      return time;
    }
  };

  const handleBackClick = () => {
    onClose();
    setShowWhatsapPop(true);
  };

  if (showWhatsapPop) {
    return <WhatsapPop isOpen={showWhatsapPop} onClose={() => setShowWhatsapPop(false)} />;
  }

  const convert12to24Hour = (time12Hour) => {
    const [time, modifier] = time12Hour.split(' ');
    let [hours, minutes] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent 
        borderRadius="20px"
        boxShadow="2xl"
        p={0}
        minW={{ base: "90%", md: "900px" }}
      >
        <ModalCloseButton size="lg" top={3} right={3} color="gray.500" _hover={{ color: "black" }} />
        <ModalBody p={0}>
          <Flex direction={{ base: "column", md: "row" }} align="stretch">
         {/* Left Section */}
<Box
  margin={{ base: 2, md: 4 }}
  bg="#F0F0F0"
  p={{ base: 3, md: 5 }}
  w={{ base: "100%", sm: "90%", md: "50%", lg: "40%" }}
  maxW="85%" // Ensure it doesn't overflow the parent container
  borderRadius="12px"
  boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
  position="relative" // Required for absolute positioning of the logo
>
  {/* Back Button */}
  <Button
    variant="link"
    leftIcon={<FaArrowLeft />}
    color="black"
    onClick={handleBackClick}
    mb={4}
    mt={0}
    pl={0}
    bg="white"
    borderRadius="30px"
    px={4}
    py={2}
    _hover={{ bg: "gray.100" }}
  >
    Back
  </Button>

  {/* Content Section */}
  <VStack align="start" spacing={4} mt={3}>
    <HStack spacing={3}>
      <Image
        src="/images/contact_agent.svg"
        alt="Logo"
        w={{ base: "20px", md: "30px" }}
      />
      <Text
        fontSize={{ base: "14px", md: "18px" }}
        fontWeight="bold"
        color="gray.800"
      >
        Talk to an Advisor
      </Text>
    </HStack>
    <Text
      fontSize={{ base: "xs", md: "md" }}
      color="gray.600"
      fontWeight="medium"
      lineHeight="1.5"
    >
      Schedule your slot and connect with our experts for personalized property guidance tailored to your needs.
    </Text>
  </VStack>

  {/* Logo at the Bottom Left */}
  <Flex
    justify="flex-start"
    align="flex-end"
    position={{ base: "static", md: "absolute" }} // Static on mobile, absolute on larger screens
    bottom={{ base: 0, md: 4 }} // Position at the bottom on larger screens
    left={{ base: 0, md: 4 }} // Position at the left on larger screens
    mt={{ base: 4, md: 0 }} // Add margin-top on mobile to separate from text
    w="full" // Ensure it takes full width on mobile
  >
    <Image
      src="/images/logo.svg"
      alt="Contact Agent"
      w={{ base: "60px", md: "100px" }}
    />
  </Flex>
</Box>

            {/* Right Section */}
            <Box flex={1} p={{ base: 4, md: 8 }} bg="white" borderRadius="20px">
              <Text fontSize="md" color="gray.500" fontWeight="bold" mb={6}>Availability</Text>
              {/* Date Selection */}
              {dates.map(date => {
                const isDisabled = !availableSlots[date.fullDate] || availableSlots[date.fullDate].length === 0;
                
                return (
                  <Button
                    key={date.fullDate}
                    variant={selectedDate?.fullDate === date.fullDate ? "solid" : "outline"}
                    bg="transparent"
                    borderRadius="lg"
                    m={0.5}
                    h="70px"
                    _hover={{ bg: isDisabled ? "gray.200" : selectedDate?.fullDate === date.fullDate ? "#DA990E" : "gray.50" }}
                    onClick={() => !isDisabled && setSelectedDate(date)}
                    isDisabled={isDisabled}
                    position="relative"
                    overflow="hidden"
                  >
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bgGradient={
                        selectedDate?.fullDate === date.fullDate
                          ? "linear(to-b, #DA990E 70%, #B48215 30%)"
                          : "linear(to-b, white 70%, #F4F4F4 30%)"
                      }
                      zIndex={0}
                    />
                    <VStack spacing={3} align="stretch" w="100%" position="relative" zIndex={1}>
                      <Text 
                        fontSize="lg" 
                        fontWeight="bold" 
                        color={selectedDate?.fullDate === date.fullDate ? "white" : "black"}
                        textAlign="center"
                        pt={2}
                      >
                        {date.day}
                      </Text>
                      <Text 
                        fontSize="sm" 
                        fontWeight="bold" 
                        color={selectedDate?.fullDate === date.fullDate ? "white" : "#9D9D9D"}
                        textAlign="center"
                        pb={0}
                      >
                        {date.label}
                      </Text>
                    </VStack>
                  </Button>
                );
              })}

              {/* Timezone Selection */}
              <Flex justify="space-between" align="center" mb={6}>
                <Text fontSize="lg" fontWeight="bold">Available Slots</Text>
                <HStack spacing={2}>
                  <Image src="/images/world_icon.svg" alt="Afternoon" boxSize="24px" />
                  <Box w="160px">
                    <TimezoneSelect
                      value={selectedTimezone}
                      onChange={e => setSelectedTimezone(e.value)}
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
              {selectedDate && availableSlots[selectedDate.fullDate]?.length > 0 && (
                <VStack align="stretch" spacing={4}>
                  {/* Afternoon Section */}
                  {availableSlots[selectedDate.fullDate]?.filter(slot => {
                    const time24Hour = convert12to24Hour(slot.start);
                    const hour = parseInt(time24Hour.split(':')[0]);
                    return hour >= 12 && hour < 17;
                  }).length > 0 && (
                    <Box>
                      <HStack mb={4} spacing={2}>
                        <Image src="/images/sun_icon.svg" alt="Afternoon" boxSize="24px" />
                        <Text fontSize="md" fontWeight="semibold" color="gray.700">
                          Afternoon
                        </Text>
                      </HStack>
                      <Grid templateColumns={{ base: "repeat(3, 1fr)", sm: "repeat(4, 1fr)", md: "repeat(5, 1fr)" }} gap={2}>
                        {availableSlots[selectedDate.fullDate]
                          ?.filter(slot => {
                            const time24Hour = convert12to24Hour(slot.start);
                            const hour = parseInt(time24Hour.split(':')[0]);
                            return hour >= 12 && hour < 17;
                          })
                          .map((slot) => (
                            <Button 
                              key={`${slot.id}-afternoon`}
                              variant={selectedSlotId === slot.id ? "solid" : "outline"}
                              borderRadius="15px"
                              width="min-content"
                              h="40px"
                              px={3}
                              _hover={{ bg: selectedSlotId === slot.id ? "yellow.500" : "gray.50" }}
                              onClick={() => handleSlotSelect(slot)}
                              fontSize="sm"
                              fontWeight="bold"
                              color={selectedSlotId === slot.id ? "white" : "gray.700"}
                              bg={selectedSlotId === slot.id ? "yellow.500" : "white"}
                              borderColor={selectedSlotId === slot.id ? "yellow.500" : "gray.200"}
                            >
                              {convertToSelectedTimezone(slot.start, selectedTimezone)}
                            </Button>
                          ))}
                      </Grid>
                    </Box>
                  )}

                  {/* Evening Section */}
                  {availableSlots[selectedDate.fullDate]?.filter(slot => {
                    const time24Hour = convert12to24Hour(slot.start);
                    const hour = parseInt(time24Hour.split(':')[0]);
                    return hour >= 17 && hour < 21;
                  }).length > 0 && (
                    <Box>
                      <HStack mb={4} spacing={2}>
                        <Image src="/images/evening_icon.svg" alt="Evening" boxSize="24px" />
                        <Text fontSize="md" fontWeight="semibold" color="gray.700">
                          Evening
                        </Text>
                      </HStack>
                      <Grid templateColumns={{ base: "repeat(3, 1fr)", sm: "repeat(4, 1fr)", md: "repeat(5, 1fr)" }} gap={2}>
                        {availableSlots[selectedDate.fullDate]
                          ?.filter(slot => {
                            const time24Hour = convert12to24Hour(slot.start);
                            const hour = parseInt(time24Hour.split(':')[0]);
                            return hour >= 17 && hour < 21;
                          })
                          .map((slot) => (
                            <Button 
                              key={`${slot.id}-evening`}
                              variant={selectedSlotId === slot.id ? "solid" : "outline"}
                              borderRadius="15px"
                              width="min-content"
                              h="40px"
                              px={3}
                              _hover={{ bg: selectedSlotId === slot.id ? "yellow.500" : "gray.50" }}
                              onClick={() => handleSlotSelect(slot)}
                              fontSize="sm"
                              fontWeight="bold"
                              color={selectedSlotId === slot.id ? "white" : "gray.700"}
                              bg={selectedSlotId === slot.id ? "yellow.500" : "white"}
                              borderColor={selectedSlotId === slot.id ? "yellow.500" : "gray.200"}
                            >
                              {convertToSelectedTimezone(slot.start, selectedTimezone)}
                            </Button>
                          ))}
                      </Grid>
                    </Box>
                  )}
                </VStack>
              )}

              {/* Footer */}
              <Box mt={8}>
                <Divider mb={4} />
                <Flex justify="space-between" align="center">
                  <Text fontSize="sm" color="gray.500" flex={1} mr={4}>
                    A consultation with an EstateOne advisor generally takes 30 minutes.
                  </Text>
                  <Button 
                    bg="yellow.500"
                    color="white"
                    borderRadius="30px"
                    _hover={{ bg: "yellow.600" }}
                    size="md"
                    isDisabled={!selectedSlotId} 
                    onClick={() => {
                      handleCloseSchedulePopover(); 
                    }}
                    rightIcon={<Icon as={FaArrowRight} />}
                  >
                    Confirm schedule
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
      {isQueryPopoverOpen && (
        <QueryPopover 
          isOpen={isQueryPopoverOpen} 
          onClose={() => setIsQueryPopoverOpen(false)} 
          selectedSlotId={selectedSlotId}
        />
      )}
    </Modal>
  );
};

export default SchedulePopover;