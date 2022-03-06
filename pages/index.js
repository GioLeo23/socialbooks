import { Container, Button, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

const Page = () => {
	return(
	  <Layout>
		<Container>
		 <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center">
		  Hello and welcome to SocialBooks
		 </Box>

		 <Box display={{ md: 'flex' }}>
		  <Box flexGrow={1}>
		   <Heading as="h2" variant="page-title">
		    SocialBooks
		   </Heading>
		   <p>The place to discover new books, write about the books you love and make loads of friends. </p>
		  </Box>
		  <Box
		    flexShrink={0}
			mt={{ base: 4, md: 0 }}
			ml={{ md: 6 }}
			align="center"
          >
		   <Image
		     borderColor="whiteAlpha.800"
			 borderWidth={2}
			 borderStyle="solid"
			 maxWidth="200px"
			 display="inline-block"
			 borderRadius="full"
			 src="/images/people.jpg"
			 alt="SocialBooks Library"
		   />
		  </Box>
		 </Box>
		  <Section delay={0.1}>
		   <Heading as="h3" variant="section-title">
		    About SocialBooks
		   </Heading>
		    <p>Discover our book recommendations especially chosen for you</p>
			<Box align="center" my={4}>
			 <NextLink href="/discover">
			  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
			   Discover 
			  </Button>
			 </NextLink>
			</Box>
		  </Section>
		  <Section delay={0.1}>
		   <Heading as="h3" variant="section-title">
		    Our community&apos;s relevant posts
		   </Heading>
		    <p>Read and write posts about the books you love and share your thoughts and opinions with others </p>
			<Box align="center" my={4}>
			 <NextLink href="/posts">
			  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
			   Posts
			  </Button>
			 </NextLink>
			</Box>
		  </Section>
		  <Section delay={0.1}>
		   <Heading as="h3" variant="section-title">
		    Join a Group
		   </Heading>
		    <p>This is the perfect space to make new friends that share the same love for books as you do</p>
			<Box align="center" my={4}>
			 <NextLink href="/groups">
			  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
			   Groups
			  </Button>
			 </NextLink>
			</Box>
		  </Section>
		</Container>
	  </Layout>
	)
}

export default Page