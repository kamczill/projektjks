import React from 'react'
import { Flex, Box, VStack, Circle, Text, Heading } from '@chakra-ui/react'
import { RiLineChartFill } from 'react-icons/ri'

const icons = {
    icon: <RiLineChartFill/>
}

const Feature = ({ icon, title, desc, href }) => {

    return(
        <VStack spacing={3}>
            <Circle size='90' bg='pink' color='white'>
                <Text fontSize='4xl'>{icon}</Text>
            </Circle>
            <Heading>
                {title}
            </Heading>
            <Text textAlign='center' maxW='380px'>
                {desc}
            </Text>
            <Box as='button' bg='blue' color='white' px='5' py=''>Read Articles</Box>
        </VStack>
    )
}

const Features = () => {
  return (
    <Flex mt='20' direction={['column', 'column', 'column', 'row']} gap='20' align='center' justify='center'>
        <Feature
            icon={icons.icon}
            title='Fully Responsive'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.'
        />
        <Feature
            icon={icons.icon}
            title='Fully Responsive'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.'
        />
        <Feature
            icon={icons.icon}
            title='Fully Responsive'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.'
        />
        
    </Flex>
  )
}

export default Features