import React, { useState, useEffect } from "react";
import { 
  Box, Text, VStack, HStack, Button, Modal, ModalOverlay, ModalContent, ModalBody, 
  Grid, Icon, Divider, ModalCloseButton, Flex, Image, useBreakpointValue
} from "@chakra-ui/react";
import { FaArrowLeft, FaSun, FaMoon, FaGlobe } from "react-icons/fa";
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
  //const [slots, setSlots] = useState([]);
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
    setSelectedSlotId(slot.id);  // ✅ Now passing actual ID
    setSelectedSlot(startTime);
    console.log("Selected Slot ID:", slot.id);  
    console.log("Selected Time:", startTime);
};
const [isSchedulePopoverOpen, setIsSchedulePopoverOpen] = useState(true);
const onScheduleClose = () => setIsSchedulePopoverOpen(false);
const handleCloseSchedulePopover = () => {
  console.log("Closing Schedule Popover");
  onScheduleClose();  // This should ideally close the SchedulePopover and update its state
  setTimeout(() => {  // Using setTimeout to delay the opening of QueryPopover ensures that state updates have been processed
    console.log("Opening Query Popover");
    setIsQueryPopoverOpen(true);
  }, 100);  // Small delay
};

const handleOpenQueryPopover = () => {
  setIsQueryPopoverOpen(true); // This will open the QueryPopover
};



const fetchAvailableSlots = async () => {
  try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/available_slots/");
      console.log("Raw API Response:", response.data); // Debug log

      const formattedSlots = {};
      const datesData = response.data.dates || {};

      Object.keys(datesData).forEach(date => {
          formattedSlots[date] = datesData[date].map(slot => ({
              id: slot.id,  // ✅ Store the actual slot ID
              start: slot.start_time,
              end: slot.end_time
          }));
      });

      console.log("Formatted Available Slots:", formattedSlots); // Debug log

      setAvailableSlots(formattedSlots);
      setLoading(false);
  } catch (error) {
      console.error("Error fetching available slots:", error);
      setLoading(false);
  }
};

const convertToSelectedTimezone = (time, timezone) => {
  try {
    return DateTime.fromFormat(time, "hh:mm a", { zone: "Asia/Kolkata" })  // Assuming backend sends in IST
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
  w={{ base: "100%", sm: "80%", md: "50%", lg: "40%" }} 
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
  
  <VStack align="start" spacing={2} mt={3}>
    <HStack>
      <Image src="/images/contact_agent.svg" alt="Logo" w={{ base: "25px", md: "30px" }} mb={4} mt={1} />
      <Text fontSize={{ base: "14px", md: "15px" }} fontWeight="bold">Talk to an Advisor</Text>
    </HStack>
    <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" fontWeight="medium">
      Schedule your slot and connect with our experts for personalized property guidance tailored to your needs.
    </Text>
  </VStack>

  {/* Positioned Logo at the Bottom Left */}
  <Flex justify="center" mt={4}>
    <Image 
      src="/images/logo.svg" 
      alt="Contact Agent" 
      w={{ base: "80px", md: "100px" }} 
    />
  </Flex>
</Box>



            {/* Right Section */}
            <Box flex={1} p={{ base: 4, md: 8 }} bg="white">
              <Text fontSize="lg" fontWeight="bold" mb={6}>Availability</Text>
              {/* Date Selection */}
              {dates.map(date => {
    const isDisabled = !availableSlots[date.fullDate] || availableSlots[date.fullDate].length === 0;
    
    return (
        <Button
            key={date.fullDate}
            variant={selectedDate?.fullDate === date.fullDate ? "solid" : "outline"}
            bg={selectedDate?.fullDate === date.fullDate ? "yellow.500" : "white"}
            color={selectedDate?.fullDate === date.fullDate ? "white" : "gray.700"}
            borderRadius="lg"
            h="70px"
            _hover={{ bg: isDisabled ? "gray.200" : selectedDate?.fullDate === date.fullDate ? "#F59E0B" : "gray.50" }}
            onClick={() => !isDisabled && setSelectedDate(date)}
            isDisabled={isDisabled}
        >
            <VStack spacing={0}>
                <Text fontSize="lg" fontWeight="bold">{date.day}</Text>
                <Text fontSize="sm">{date.label}</Text>
            </VStack>
        </Button>
    );
              })}


              {/* Timezone Selection */}
              <Flex justify="space-between" align="center" mb={6}>
                <Text fontSize="sm" fontWeight="medium">Available Slots</Text>
                <HStack spacing={2}>
                  <Icon as={FaGlobe} color="gray.500" />
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
  <VStack align="stretch" spacing={6}>
    <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {availableSlots[selectedDate.fullDate]?.map((slot, index) => {
          const uniqueSlotId = `${selectedDate.fullDate}-${slot.start}-${slot.end}`; // Generate a unique ID

          return (
            <Button 
              key={uniqueSlotId} // Use unique key
              variant="outline"
              borderRadius="lg"
              h="40px"
              _hover={{ bg: "gray.50" }}
              onClick={() => handleSlotSelect(slot)}
            >
              {convertToSelectedTimezone(slot.start, selectedTimezone)} - {convertToSelectedTimezone(slot.end, selectedTimezone)}
            </Button>
          );
        })}
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
                bg="yellow.500"
                color="white"
                w="full"
                borderRadius="lg"
                _hover={{ bg: "yellow.600" }}
                size="lg"
                isDisabled={!selectedSlotId} 
                onClick={() => {
                  handleCloseSchedulePopover(); 
                }}
              >
                Confirm schedule →
              </Button>

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