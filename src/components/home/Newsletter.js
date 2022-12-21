import React from 'react'

import { Box, VStack, Text, Heading, Input, Flex } from '@chakra-ui/react'

const Newsletter = () => {
  return (
    <VStack w='100%' py='40' px='3' bg='blue' color='white' spacing='5' mt='100px'>
        <Heading fontFamily='head'>Newsletter</Heading>
        <Text fontFamily='paragraph' textAlign='center'>
            Subscribe my Newsletter for new blog posts, tips & new photos. 
            Let's stay updated!
        </Text>
        <Flex fontFamily='paragraph' direction={['column', 'column', 'row']} gap={['2', '2', '0']}>
            <Input placeholder='Your e-mail*' borderRight={['1', '1' ,'0']} borderRightRadius={['5', '5', '0']}/>
            <Box as='button' px='7' py='2' bg='ocean'>Subscribe</Box>
        </Flex>
    </VStack>
  )
}

export default Newsletter