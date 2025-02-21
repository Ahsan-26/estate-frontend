import { useState } from "react";
import React from "react";
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
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


export default function QueryPopover({ isOpen, onClose }) {
  const [queryType, setQueryType] = useState("sell");
  const [phone, setPhone] = useState("");
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const cancelRef = React.useRef(); // For handling the dialog close


  return (
    <>
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
          <RadioGroup onChange={setQueryType} value={queryType} mb={4} >
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Radio value="buy"colorScheme="yellow">Buy Property</Radio>
              <Radio value="sell"colorScheme="yellow">Sell Property</Radio>
              <Radio value="manage"colorScheme="yellow">Manage Property</Radio>
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
            <Button  color="white" bg="yellow.500" px={8} _hover={{ bg: "yellow.600" }}
           onClick={() => {
            onClose(); // Close SchedulePopover
            setTimeout(() => {
              setIsConfirmationOpen(true); // ✅ Show confirmation dialog after slight delay
            }, 300); // Delay ensures smooth transition
          }}
            >
              Confirm →
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
    <AlertDialog
  isOpen={isConfirmationOpen}
  leastDestructiveRef={cancelRef}
  onClose={() => setIsConfirmationOpen(false)}
>
  <AlertDialogOverlay>
    <AlertDialogContent borderRadius="xl" boxShadow="2xl">
      <AlertDialogHeader fontSize="lg" fontWeight="bold" textAlign="center">
        ✅ Query Submitted Successfully
      </AlertDialogHeader>

      <AlertDialogBody textAlign="center">
        Your query has been submitted successfully. You will be entertained according to the booked schedule.
      </AlertDialogBody>

      <AlertDialogFooter>
        <Button 
          ref={cancelRef} 
          onClick={() => setIsConfirmationOpen(false)} 
          bg="yellow.500" 
          color="white" 
          _hover={{ bg: "yellow.600" }}
          w="full"
        >
          Close
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialogOverlay>
</AlertDialog>
      {/* ✅ Schedule Popover
      <SchedulePopover isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} /> */}
    </>
  );
}
