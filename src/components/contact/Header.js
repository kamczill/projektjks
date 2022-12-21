import React from 'react'

import { Flex, Heading, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex direction='column' mt='3rem' w='100%' align='center'>
        <Heading fontFamily='head' fontSize={['4xl','4xl', '5xl', '7xl']} maxW='1200px' align='center'>Our Team is at your complete disposal</Heading>
        <Text fontFamily='paragraph' fontSize='1.1rem' color='gray.600' align='center' maxW='1200px'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</Text>
    </Flex>
  )
}

export default Header