import React from 'react'
import { 
  Flex,
  Heading,
  Image,
  Text,
  Box
 } from '@chakra-ui/react'

 import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

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

  return (
    <Layout>
      <Seo 
        title='O nas'
      />
      <Flex direction='column' align='center' justify='center' w='100%'>
        <Flex direction='column' align='center' justify='center' w='100%' maxW='1400px' gap='10'>
        <Heading fontFamily='head' fontSize={['3xl', '4xl', '5xl', '7xl']}>O nas</Heading>
        <Flex direction={['column','column','row']} gap='1rem' align='center'>
        <Box>
          <Image src={data.wpPage.featuredImage.node.localFile.childImageSharp.original.src} w='md' />
        </Box>
        <Text fontFamily='paragraph' maxW='500px'>
          <Text dangerouslySetInnerHTML={{ __html: data.wpPage.content}} />
        </Text>
        </Flex>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default About