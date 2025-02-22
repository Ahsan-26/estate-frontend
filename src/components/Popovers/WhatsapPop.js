import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import SchedulePopover from "./SchedulePopover";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppPopover({ isOpen, onClose }) {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const whatsappUrl = "https://wa.me/919548056061";

  const handleBack = () => {
     // Close WhatsApp Popover
    setTimeout(() => setIsScheduleOpen(true), 200); // Open SchedulePopover after slight delay
  };

  const handleExit = () => {
    onClose(); // Close everything
    setIsScheduleOpen(false); // Ensure SchedulePopover is also closed
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", md: "sm" }} isCentered>
        <ModalOverlay />
        <ModalContent
          as={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          p={6}
          borderRadius="xl"
          boxShadow="2xl"
          maxW="443px"
          bg="#FFFFFF"
          textAlign="center"
        >
          <ModalHeader display="flex" justifyContent="flex-start" p={0}>
            <Button
              size="sm"
              onClick={handleBack} // ✅ Corrected Back Button Behavior
              variant="ghost"
              fontSize="sm"
              position="absolute"
              top={2}
              left={2}
            >
              ← Back
            </Button>
          </ModalHeader>

          <ModalBody>
            <Flex direction="column" align="center" justify="center" textAlign="center">
              <Image src="/images/Whatsapp_POP.png" alt="WhatsApp Assistance" boxSize="100px" mb={4} />
              <Text fontSize="md" fontWeight="medium" maxW="359px" mb={4}>
                If you don’t find your desired slot, no worries! You can still WhatsApp us your queries, and we’ll be happy to assist you.
              </Text>
              <Flex gap={3} w="100%" maxW="320px" justify="center">
                <Button onClick={handleExit} variant="outline" colorScheme="gray" px={4} flex={1} h="40px" fontSize="sm">
                  Exit
                </Button>
                <Button colorScheme="#1EBE5D"  _active={{ transform: "scale(1.1)" }} 
        transition="transform 0.1s ease-in-out" bg="#25D366" leftIcon={<FaWhatsapp />} onClick={() => window.location.href = whatsappUrl} px={4} flex={1} h="40px" fontSize="sm">
                   WhatsApp us
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* ✅ Schedule Popover */}
      <SchedulePopover isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
    </>
  );
}
