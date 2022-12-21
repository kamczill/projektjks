import React from 'react'
import {
    Flex,
    Heading,
    Box,
    Circle,
    VStack,
    Text
} from '@chakra-ui/react'
import { RiMapPin2Line, RiMailLine, RiPhoneLine } from 'react-icons/ri'

const icons = {
    map: <RiMapPin2Line/>,
    mail: <RiMailLine/>,
    phone: <RiPhoneLine/>
}

const Feature = ({ icon, title, desc}) => {

    return(
        <VStack spacing={3} align='center' justify='center'>
            <Circle size='90' bg='blue' color='white'>
                <Text fontSize='5xl'>{icon}</Text>
            </Circle>
            <Heading align='center'>
                {title}
            </Heading>
            <Text fontFamily='paragraph' color='gray.600' textAlign='center' maxW='380px'>
                {desc}
            </Text>
        </VStack>
    )
}


const ContactDetails = () => {
  return (
    <Flex direction='column' align='center' justify='center' mt='5rem' gap='3rem'>
        <Heading align='center'>Contact Details</Heading>
        <Flex direction={['column', 'row']} gap='20'>
            <Feature 
                icon={icons.map}
                title='Physical Address'
                desc='3481 Melrose Place
                Beverly Hills, CA 90210'
            />
            <Feature 
                icon={icons.mail}
                title='Physical Address'
                desc='3481 Melrose Place
                Beverly Hills, CA 90210'
            />
            <Feature 
                icon={icons.phone}
                title='Physical Address'
                desc='3481 Melrose Place
                Beverly Hills, CA 90210'
            />
        </Flex>
    </Flex>
  )
}

export default ContactDetails