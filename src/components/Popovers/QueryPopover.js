import { useState } from "react";
import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Stack,
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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function QueryPopover({ isOpen, onClose }) {
  const [queryType, setQueryType] = useState("sell");
  const [phone, setPhone] = useState("");

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
          <RadioGroup onChange={setQueryType} value={queryType} mb={4}>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Radio value="buy">Buy Property</Radio>
              <Radio value="sell">Sell Property</Radio>
              <Radio value="manage">Manage Property</Radio>
            </Stack>
          </RadioGroup>

          <Flex flexDirection={{ base: "column", md: "row" }} gap={4} mb={3}>
            <Box flex={1}>
              <Text mb={1} fontWeight="bold">Your Name*</Text>
              <Input placeholder="Write your name" />
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
            <Text mb={1} fontWeight="bold">Tell us your query*</Text>
            <Textarea placeholder="" />
          </Box>
          <Box mb={3}>
            <Text mb={1} fontWeight="bold">How did you get to know about EstateOne?</Text>
            <Input placeholder="" />
          </Box>

          <Flex justifyContent="center" mt={4}>
            <Button colorScheme="green" px={8}>
              Next →
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
