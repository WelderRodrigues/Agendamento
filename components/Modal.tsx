
import React from "react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Button
  } from "@chakra-ui/core";

  function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button 
        backgroundColor="purple.500" 
        _hover={{ backgroundColor: "purple.600" }} 
        height="50px"
        borderRadius="sm"
        flex='1'
        onClick={onOpen}>ENVIAR</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>TUDO CERTO</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Em breve entraremos em contato para realizar seu orçamento.
            </ModalBody>
  
            <ModalFooter>
              <Button 
              backgroundColor="purple.500" 
              _hover={{ backgroundColor: "purple.600" }} 
              onClick={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  export default BasicUsage