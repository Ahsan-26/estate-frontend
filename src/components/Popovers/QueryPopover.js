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
  useToast
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

export default function QueryPopover({ isOpen, onClose, selectedSlotId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

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
          <Flex flexDirection={{ base: "column", md: "row" }} gap={4} mb={3}>
            <Box flex={1}>
              <Text mb={1} fontWeight="bold">Your Name*</Text>
              <Input placeholder="Write your name" value={name} onChange={(e) => setName(e.target.value)} />
            </Box>
            <Box flex={1}>
              <Text mb={1} fontWeight="bold">Your Whatsapp no*</Text>
              <PhoneInput
                country="in"
                value={phone}
                onChange={setPhone}
                inputStyle={{ width: "100%" }}
              />
            </Box>
          </Flex>

          <Box mb={3}>
            <Text mb={1} fontWeight="bold">Your Email*</Text>
            <Input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Box>

          <Box mb={3}>
            <Text mb={1} fontWeight="bold">Tell us your query*</Text>
            <Textarea placeholder="Write your query" value={query} onChange={(e) => setQuery(e.target.value)} />
          </Box>

          <Flex justifyContent="center" mt={4}>
            <Button  color="white" bg="yellow.500" px={8} _hover={{ bg: "yellow.600" }}
             _active={{ transform: "scale(1.1)" }} 
        transition="transform 0.1s ease-in-out"
           onClick={() => {
            onClose(); // Close SchedulePopover
            setTimeout(() => {
              //setIsConfirmationOpen(true); // ✅ Show confirmation dialog after slight delay
            }, 300); // Delay ensures smooth transition
          }}
            >
              Confirm →
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
