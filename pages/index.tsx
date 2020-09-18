//import Head from 'next/head'
import {Heading, Grid, Flex, Input, Textarea, Button, Text} from '@chakra-ui/core'
import Divider from '../components/Divider'

export default function Home() {
  return (
    <Grid
    as='main'
    height='100vh'
    templateColumns='1fr 480px 480px 1fr'
    templateRows='1fr 480px 1fr'
    templateAreas="
      '. . . .'
      '. logo form .'
      '. . . .'
    "
    justifyContent='center'
    alignItems='center'
    >
      <Flex gridArea='logo' flexDir='column' alignItems='flex-start'>
        <img src="/email-notification.svg" alt="Agendamento"/>

        <Heading size='2xl' lineHeight='shorter' marginTop={16}>
          Faça seu agendamento conosco
        </Heading>
      </Flex>

      <Flex
        gridArea='form'
        height='100%'
        backgroundColor='gray.700'
        borderRadius='md'
        flexDir='column'
        alignItems='stretch'
        padding={16}
      >
        <Input
        height='50px'
        backgroundColor='gray.800'
        focusBorderColor='purple.500'
        borderRadius='sm'
        placeholder='Nome'
        />

        <Input
        height='50px'
        backgroundColor='gray.800'
        focusBorderColor='purple.500'
        borderRadius='sm'
        placeholder='Telefone'
        marginTop={2}
        />

        <Textarea
        backgroundColor='gray.800'
        focusBorderColor='purple.500'
        borderRadius='sm'
        placeholder='Endereço'
        marginTop={2}
        />

        <Button
        backgroundColor='purple.500'
        height='50px'
        borderRadius='sm'
        marginTop={6}
        _hover={{backgroundColor: 'purple.600'}}
        >
          ENVIAR
        </Button>

        <Text
        textAlign='center'
        fontSize='sm'
        color='gray.300'
        marginTop={6}>
          Ou entre em contato. {" "}
        </Text>

        <Divider/>

        <Flex alignItems='center'>
          <Text fontSize='sm'>99157-2030</Text>
          <Text fontSize='sm' marginLeft={1}>98115-1551</Text>
          
          
          <Button
          height='50px'
          flex='1'
          borderRightColor='gray.600'
          marginLeft={5}
          borderRadius='sm'
          _hover={{backgroundColor: 'purple.500'}}>
            WHATSAPP
          </Button>

        </Flex>

      </Flex>

    </Grid>
  )
}
