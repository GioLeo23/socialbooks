import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/books'
import Layout from '../../components/layouts/article'

const Discover = () => {
	return (
		<Layout title="The Black Locomotive">
		 <Container>
		  <Title>
		   The Black Locomotive <Badge>2021</Badge>
		  </Title>
		  <p>
		   London is built from concrete, steel and the creative urge.

           Old technology gives way to the new. Progress is inevitable - but is it more fragile than its inhabitants realise?

           A strange anomaly is uncovered in the new top-secret Crossrail extension being built under Buckingham Palace. It is an archeological puzzle, one that may transform our understanding of history - and the origins of London itself.

           And if our modern world falls, we may have to turn to the technology of the past in order to save our future.
		  </p>
		  <List ml={4} my={4}>
		   <ListItem>
		    <Meta>waterstones</Meta>
			<Link href="https://www.waterstones.com/book/the-black-locomotive/rian-hughes/9781529074420">
			 https://www.waterstones.com/book/the-black-locomotive/rian-hughes/9781529074420 <ExternalLinkIcon mx="2px" />
			</Link>
		   </ListItem>
		   <ListItem>
		    <Meta>Author</Meta>
			<span> Rian Hughes </span>
		   </ListItem>
		   <ListItem>
		    <Meta>Genre</Meta>
			<span> Science Fiction </span>
		   </ListItem>
		  </List>
		 </Container>
		</Layout>
	)
}

export default Discover