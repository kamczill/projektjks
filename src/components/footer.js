import React from 'react'

import {
    Heading,
    Text,
    Box,
    Flex,
    Link
} from '@chakra-ui/react'

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <Flex direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']} justify={['space-between']} align={['center', 'center', 'center', 'flex-start']}  gap='5rem' mt='100px' pt='30px'  borderTop='1px solid #161B3D'>
        <Flex direction='column' align='center' maxWidth='370px' gap='5' mb='10'>
            <Heading fontFamily='logo'>Blog o SEO</Heading>
            <Text fontFamily='paragraph' color='gray.600' align='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus. Sed ultrices mauris a facilisis varius.  
            </Text>
            <Flex gap='5'>
                <FaFacebookF fontSize='25' />
                <FaTwitter fontSize='25' />
                <FaInstagram fontSize='25' />
            </Flex>
            <Text mt='19'>
                Blog o SEO © 2022 All Right Reserved
            </Text>
        </Flex>
        <Flex direction={['column', 'row']} gap='20' justify={['center']} align={['center', 'center', 'flex-start', 'flex-start', 'flex-start']} w='100%'>
            <Flex direction='column' align='center' gap='1'>
                <Heading mb='4'>About me</Heading>
                <Link>My team</Link>
                <Link>My team</Link>
                <Link>My team</Link>
            </Flex>
            <Flex direction='column' align='center' gap='1' >
                <Heading mb='4'>Resources</Heading>
                <Link>Webinaries</Link>
                <Link>Webinaries</Link>
                <Link>Webinaries</Link>
            </Flex>
            <Flex direction='column' align='center' gap='1'>
                <Heading mb='4'>Contact</Heading>
                <Link>Privacy</Link>
                <Link>Privacy</Link>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Footer