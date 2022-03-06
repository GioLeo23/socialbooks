import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/books'
import Layout from '../../components/layouts/article'

const Discover = () => {
	return (
		<Layout title="Fahrenheit 451">
		 <Container>
		  <Title>
		   Fahrenheit 451 <Badge>1953</Badge>
		  </Title>
		  <p>
		    Fahrenheit 451 is a 1953 dystopian novel by American writer Ray Bradbury. Often regarded as one of his best works,[4] the novel presents a future American society where books are outlawed and firemen burn any that are found.[5] The book&apos;s tagline explains the title as the temperature at which book paper catches fire, and burns: the autoignition temperature of paper. The lead character, Guy Montag, is a fireman who becomes disillusioned with his role of censoring literature and destroying knowledge, eventually quitting his job and committing himself to the preservation of literary and cultural writings.
		  </p>
		  <List ml={4} my={4}>
		   <ListItem>
		    <Meta>Wikipedia</Meta>
			<Link href="https://en.wikipedia.org/wiki/Fahrenheit_451">
			 https://en.wikipedia.org/wiki/Fahrenheit_451 <ExternalLinkIcon mx="2px" />
			</Link>
		   </ListItem>
		   <ListItem>
		    <Meta>Author</Meta>
			<span> Ray Bradbury </span>
		   </ListItem>
		   <ListItem>
		    <Meta>Genre</Meta>
			<span> Dystopian </span>
		   </ListItem>
		  </List>
		 </Container>
		</Layout>
	)
}

export default Discover