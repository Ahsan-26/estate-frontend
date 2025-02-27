import { useState } from "react";
import React from "react";
import {
  Button,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Flex,
  Text,
  useToast,
  Radio,
  RadioGroup,
  Stack,
  Select,
  useBreakpointValue
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export default function QueryPopover({ isOpen, onClose, selectedSlotId }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");  // ✅ Ensure email field is included
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [location, setLocation] = useState("Gurgaon");
  const [customLocation, setCustomLocation] = useState(""); // ✅ Custom location field
  const toast = useToast();
  const navigate = useNavigate();
  const modalSize = useBreakpointValue({ base: "full", sm: "md", md: "lg" });

  const handleConfirm = async () => {
    if (!name || !email || !phone || !query || !selectedSlotId || !selectedOption || !location) {
      toast({
        title: "All fields are required!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const finalLocation = location === "other" ? customLocation : location;

    setLoading(true);
    // console.log("Sending data:", { name, email, phone, query, selectedSlotId, service_type: selectedOption });

    try {
      await axios.post("http://127.0.0.1:8000/api/book_appointment/", {
        name,
        email,
        phone,
        query,
        time_slot_id: selectedSlotId,
        service_type: selectedOption,
        location: finalLocation, // ✅ Send correct location to backend
      });

      toast({
        title: "Booking Confirmed!",
        description: "Your slot has been booked successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      onClose();
    } catch (error) {
      console.error("Error booking appointment:", error.response?.data || error.message);
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      navigate("/");
      setLoading(false);
    }
  };
  const modalWidth = useBreakpointValue({ base: "95%", sm: "80%", md: "700px", lg: "900px" });
  const modalHeight = useBreakpointValue({ base: "full", md: "520px" });
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={modalSize} isCentered>
      <ModalOverlay />
      <ModalContent
        as={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        p={6}
        borderRadius="lg"
        boxShadow="xl"
        maxW={modalWidth}  // Responsive width
        maxH={modalHeight} // Responsive height
        overflowY="auto"
      >
        <ModalHeader fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
          Let us know your query?
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Radio Selection */}
          <RadioGroup onChange={setSelectedOption} value={selectedOption}>
  <Stack 
    direction={{ base: "column", md: "row" }} // Stack vertically on small screens
    spacing={2} 
    flexWrap="wrap" 
    justifyContent="start"
  >
    {["buy", "sell", "manage"].map((option) => (
      <Box
        key={option}
        as="label"
        border="1px solid"
        borderColor={selectedOption === option ? "#40c051" : "gray.300"}
        borderRadius="lg"
        px={4}
        py={2}
        cursor="pointer"
        display="flex"
        alignItems="center"
        gap={2}
        w={{ base: "100%", md: "auto" }} // Full width on small screens
        transition="all 0.3s ease"
        bg="white"
        _hover={{ borderColor: "#40c051" }}
      >
        <Radio value={option} display="none" />
        <Box
          w="14px"
          h="14px"
          borderRadius="full"
          border="2px solid"
          borderColor={selectedOption === option ? "#40c051" : "gray.300"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {selectedOption === option && (
            <Box w="8px" h="8px" borderRadius="full" bg="#40c051" />
          )}
        </Box>
        <Text fontSize="sm" fontWeight="medium" color="gray.700">
          {option.charAt(0).toUpperCase() + option.slice(1)} Property
        </Text>
      </Box>
    ))}
  </Stack>
</RadioGroup>



          {/* Name and Phone Fields */}
          <Flex flexDirection={{ base: "column", md: "row" }} flexWrap="wrap" gap={4} mb={3}>
            <Box flex={1}>
              <Text mb={1} fontWeight="bold">Your Name*</Text>
              <Input placeholder="Write your name" value={name} onChange={(e) => setName(e.target.value)} />
            </Box>
            <Box flex={1}>
              <Text mb={1} fontWeight="bold">Your WhatsApp No.*</Text>
              <PhoneInput
                country="in"
                value={phone}
                onChange={setPhone}
                inputStyle={{ width: "100%" }}
              />
            </Box>
          </Flex>

          {/* Email Field */}
          <Box mb={1}>
            <Text mb={1} fontWeight="bold">Your Email*</Text>
            <Input 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Box>

          {/* Location Dropdown */}
          <Box mb={1}>
            <Text mb={1} fontWeight="bold">Location*</Text>
            <Select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="Gurgaon">Gurgaon</option>
              <option value="other">Other</option> 
            </Select>
          </Box>

          {/* Custom Location Input (Only if "Other" is selected) */}
          {location === "other" && (
            <Box mb={1}>
              <Text mb={1} fontWeight="bold">Enter Location*</Text>
              <Input 
                placeholder="Type your location" 
                value={customLocation} 
                onChange={(e) => setCustomLocation(e.target.value)} 
              />
            </Box>
          )}
          
          {/* Query Textarea */}
          <Box mb={1}>
            <Text mb={1} fontWeight="bold">Tell us your query*</Text>
            <Textarea 
              placeholder="Write your query" 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
            />
          </Box>
            {/* Info Textarea */}
             <Box mb={1}>
            <Text mb={1} fontWeight="bold">How did you get to know about EsateOne*</Text>
            <Textarea 
              size="sm" 
              h="50px" 
              minH="30px"
              resize="none"
              rows={1}
            />
          </Box>


          {/* Confirm Button */}
          <Flex justifyContent="center" mt={3}>
            <Button 
              color="white"
              width="200px" 
              bg="#40c051" 
              px={8} 
              _hover={{ bg: "yellow.600" }}
              isLoading={loading}
              onClick={handleConfirm} 
              borderRadius="full"

              isDisabled={!name || !email || !phone || !query || !selectedSlotId || !selectedOption || (location === "other" && !customLocation)} 
            >
              Next →
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
