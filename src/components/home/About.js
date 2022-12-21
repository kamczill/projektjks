import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import photo from '../../images/team.png'

import {
    Image,
    Box,
    Flex,
    Text,
    Heading,
    VStack

} from '@chakra-ui/react'

const About = () => {

    const data = useStaticQuery(graphql`
            {
        wpPage(slug: {eq: "o-nas"}) {
            id
            content
            title
            featuredImage {
            node {
                localFile {
                childImageSharp {
                    original {
                    src
                    }
                }
                }
            }
            }
        }
        }
    `)

    console.log(data.wpPage.featuredImage.node.localFile.childImageSharp.original.src)

  return (
    <Flex align='center' justify='center' mt='100' mr={['0', '0', '400']} >
        <Box display={['none', 'none', 'block']} > 
            <Image src={data.wpPage.featuredImage.node.localFile.childImageSharp.original?.src} w='lg' h='xl' objectFit='cover'/>
            {/* <GatsbyImage image={data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData} /> */}
        </Box>
        <Box pos='relative'>
                <Box pos={['block', 'block','absolute']} top='-120' left='-20' w={['100%', '100%', '400px', '500px', '600px', '760px']} >
                <VStack align='flex-start' spacing='5'p='8' bg='#F7F7F7'>
                    <Text fontFamily='paragraph'>O nas</Text>
                    <Heading fontFamily='head' fontSize={['3xl', '5xl']}>Nasz zespół</Heading>
                    <Text fontFamily='paragraph' fontSize='md' color='gray.600'>
                        <div dangerouslySetInnerHTML={{ __html: data.wpPage.content.slice(0,300) }} />
                    </Text>
                    <Box as='button' px='5' py='1' bg='ocean' color='white' fontFamily='paragraph'><AniLink fade duration='0.3' to='/about'>Dowiedz się więcej</AniLink></Box>
                </VStack>
                </Box>
        </Box>
    </Flex>
  )
}

export default About