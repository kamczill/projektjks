import React from 'react'
import {
    Flex,
    Image,
    Box,
    Stack,
    Input,
    Textarea
} from '@chakra-ui/react'

import bridge from '../../images/team.png'

const ContactForm = () => {
  return (
    <Flex direction={['column', 'column', 'column', 'row']} align='center' justify='center' gap='5rem' fontFamily='paragraph' mt='6rem'>
        <Image src={bridge}/>
        <Stack spacing={3} w='100%' maxW='540px'>
            <Input placeholder='Name*' size='md' bg='#F7F7F7'/>
            <Input placeholder='Email*' size='md' bg='#F7F7F7'/>
            <Input placeholder='Subject*' size='md' bg='#F7F7F7'/>
            <Textarea placeholder='Comment or Message*' h='10rem' size='md' bg='#F7F7F7'/>
        </Stack>
    </Flex>
  )
}

export default ContactForm