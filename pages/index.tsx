import { FormEvent, useState } from "react";
import { Flex, Input, Textarea, Button, Text, Image, Link } from "@chakra-ui/core";
import axios from 'axios'
import BasicUsage from '../components/Modal'

export default function Home() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const whatsapp = +5599991630729

  function handleSignUpToNewsbudget(event: FormEvent) {
    event.preventDefault();

    axios.post('/api/subscribe', {name,number,address})
  }

  return (
    <Flex as="main" height="100vh" justifyContent="center" alignItems="center">
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsbudget}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%"
        maxW="400px"
      >
        <Image
          marginBottom={8}
          src="/email-notification.svg"
          alt="Arte em Gesso"
        />

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.400"
          maxWidth="310px"
          marginBottom={2}
        >
          Arte em Gesso e Materiais para Contrução. Agende seu orçamento
          conosco.
        </Text>

        <Input
          placeholder="Seu nome"
          marginTop={2}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Seu número"
          marginTop={2}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <Textarea 
        placeholder="Endereço completo" 
        marginTop={2}
        value={address}
        onChange={(e) => setAddress(e.target.value)} />

        <Button
          type="submit"
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          //_hover={{ backgroundColor: "purple.600" }}
         
        >
          <BasicUsage/>
          
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Ou entre em contato.{" "}
        </Text>

        <Flex alignItems="center" marginTop={6}>
          <Text fontSize="lg" maxWidth="135px">
            (99) 99157-2030 (99) 98215-1551
          </Text>

          <Link
            height="50px"
            flex="1"
            borderRightColor="gray.600"
            marginLeft={5}
            borderRadius="sm"
            _hover={{ backgroundColor: "green.500" }}
            display='flex'
            alignItems='center'
            justifyContent='center'
            cursor='pointer'
            target='_blank'
            href={`https://wa.me/${whatsapp}`}
          >
            WHATSAPP
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
