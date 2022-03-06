import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/books'
import Layout from '../../components/layouts/article'

const Discover = () => {
	return (
		<Layout title="Dare to Know">
		 <Container>
		  <Title>
		   Dare to Know <Badge>2020</Badge>
		  </Title>
		  <p>
		    A razor-smart sci-fi corporate noir nightmare. Dare to Know is what happens when Willy Loman sees through the Matrix. A heartbreaking, time-bending, galactic mindbender delivered in the mordantly funny clip of a doomed antihero. Daniel Kraus, co-author of The Shape of Water. Dark Matter meets Annihilation in this mind-bending and emotional speculative thriller set in a world where the exact moment of your death can be predicted for a price. Our narrator is the most talented salesperson at Dare to Know, an enigmatic company that has developed the technology to predict anyone s death down to the second. Divorced, estranged from his sons, and broke, he&apos;s driven to violate the cardinal rule of the business by forecasting his own death day. The problem: his prediction says he died twenty-three minutes ago. The only person who can confirm its accuracy is Julia, the woman he loved and lost during his rise up the ranks of Dare to Know. As he travels across the country to see her, he&apos;s forced to confront his past, the choices he&apos;s made, and the terrifying truth about the company he works for. Wildly ambitious and highly immersive, this mind-bending thriller explores the destructive power of knowledge and collapses the boundaries between reality, myth, and conspiracy as it races toward its shocking conclusion.
		  </p>
		  <List ml={4} my={4}>
		   <ListItem>
		    <Meta>Wikipedia</Meta>
			<Link href="https://www.goodreads.com/en/book/show/57068380-dare-to-know">
			 https://www.goodreads.com/en/book/show/57068380-dare-to-know <ExternalLinkIcon mx="2px" />
			</Link>
		   </ListItem>
		   <ListItem>
		    <Meta>Author</Meta>
			<span> James Kennedy </span>
		   </ListItem>
		   <ListItem>
		    <Meta>Genre</Meta>
			<span> Science Fiction, Mystery Thriller </span>
		   </ListItem>
		  </List>
		 </Container>
		</Layout>
	)
}

export default Discover