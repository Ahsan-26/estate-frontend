// src/components/ContactModal.js
import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Text, Button } from "@chakra-ui/react";

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Talk to an Expert</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* ✅ Placeholder for a contact form or details */}
          <Text>Here you can add a contact form or expert details.</Text>
          <Button mt={4} colorScheme="yellow" onClick={onClose}>Close</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
