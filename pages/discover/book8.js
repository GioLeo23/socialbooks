import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/books'
import Layout from '../../components/layouts/article'

const Discover = () => {
	return (
		<Layout title="Galaxias">
		 <Container>
		  <Title>
		   Galaxias <Badge>2021</Badge>
		  </Title>
		  <p>
		   What would happen to the world if the sun went out?

           New epic sci-fi from Stephen Baxter, the award-winning author whose credits include co-authorship of the Long Earth series with Terry Pratchett.

           By the middle of the 21st century, humanity has managed to overcome a series of catastrophic events and maintain some sense of stability. Space exploration has begun again. Science has led the way.

           But then one day, the sun goes out. Solar panels are useless, and the world begins to freeze

           Earth begins to fall out of its orbit.

           The end is nigh.

           Someone has sent us a sign.
		  </p>
		  <List ml={4} my={4}>
		   <ListItem>
		    <Meta>goodreads</Meta>
			<Link href="https://www.goodreads.com/en/book/show/56224175-galaxias">
			 https://www.goodreads.com/en/book/show/56224175-galaxias <ExternalLinkIcon mx="2px" />
			</Link>
		   </ListItem>
		   <ListItem>
		    <Meta>Author</Meta>
			<span> Stephen Baxter </span>
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