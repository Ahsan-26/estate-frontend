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
  useToast, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

export default function QueryPopover({ isOpen, onClose, selectedSlotId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");  // ✅ Ensure email field is included
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const [selectedOption, setSelectedOption] = useState(""); // ✅ New state for radio buttons



  // 🛠 Handles form submission and sends data to backend
  const handleConfirm = async () => {
    if (!name || !email || !phone || !query || !selectedSlotId || !selectedOption) {
      toast({
        title: "All fields are required!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    // console.log("Sending data:", { name, email, phone, query, selectedSlotId, service_type: selectedOption });

    try {
      await axios.post("http://127.0.0.1:8000/api/book_appointment/", {
        name,
        email,
        phone,
        query,
        time_slot_id: selectedSlotId,  // ✅ Correct field for backend
        service_type: selectedOption,  
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
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", md: "lg" }} isCentered>
      <ModalOverlay />
      <ModalContent
        as={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        p={6}
        borderRadius="lg"
        boxShadow="xl"
        maxW={{ base: "90%", md: "600px" }}
      >
        <ModalHeader fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
          Let us know your query?
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <RadioGroup onChange={setSelectedOption} value={selectedOption}>
  <Stack direction="row" spacing={4}>
    <Radio value="buy">Buy</Radio>
    <Radio value="sell">Sell</Radio>
    <Radio value="manage">Manage</Radio>
  </Stack>
</RadioGroup>
          {/* Name and Phone Fields */}
          <Flex flexDirection={{ base: "column", md: "row" }} gap={4} mb={3}>
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
          <Box mb={3}>
            <Text mb={1} fontWeight="bold">Your Email*</Text>
            <Input 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Box>

          {/* Query Textarea */}
          <Box mb={3}>
            <Text mb={1} fontWeight="bold">Tell us your query*</Text>
            <Textarea 
              placeholder="Write your query" 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
            />
          </Box>

          {/* Confirm Button */}
          <Flex justifyContent="center" mt={4}>
            <Button 
              color="white" 
              bg="yellow.500" 
              px={8} 
              _hover={{ bg: "yellow.600" }}
              isLoading={loading}
              onClick={handleConfirm} 
  isDisabled={!name || !email || !phone || !query || !selectedSlotId || !selectedOption} // Ensure all fields are filled
            >
              Confirm →
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
