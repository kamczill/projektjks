import React from 'react'
import { Container, Box, Flex, Image, VStack, Text, Heading } from '@chakra-ui/react'
import teamImg from '../../images/team.png'

const Header = () => {
  return (
    <Flex direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']} align='space-between' justify='space-around' pt={['5', '5', '10']}>
      <VStack justify={['center', 'flex-start']} align={['center', 'center', 'center', 'flex-start']} mt='5'>
        <Box bg='pink' px='2' py='1.5' alignItem='flex-start' display={['none', 'none', 'none', 'block']}>
          <Text color='white'>Analytics</Text>
        </Box>
        <Container p='0' maxW='510px'>
        <Heading fontSize={['3xl', '6xl']} >Many desktop publishing packages and web page </Heading>
        </Container>
        <Container p='0' maxW='500px' >
          <Text fontSize='xl' fontFamily='paragraph' color='gray.600' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus. 
          </Text>
        </Container>
      </VStack>
      <Flex align={['center', 'center', 'center', 'flex-start']} justify={['center', 'center', 'center', 'flex-start']} mt='5'>
      <Box w={['md', 'md', 'xl', 'xl', '3xl']}>
        <Image src={teamImg}
          css='box-shadow: -27px -27px 0px 0px rgba(0,230,202,1);
          // -webkit-box-shadow: -27px -27px 0px 0px rgba(0,230,202,1);
          // -moz-box-shadow: -27px -27px 0px 0px rgba(0,230,202,1);'
        ></Image>
      </Box>
      </Flex>
    </Flex>
  )
}

export default Header