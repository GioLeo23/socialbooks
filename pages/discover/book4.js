import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/books'
import Layout from '../../components/layouts/article'

const Discover = () => {
	return (
		<Layout title="Ready Player Two">
		 <Container>
		  <Title>
		   Ready Player Two <Badge>2020</Badge>
		  </Title>
		  <p>
		    Ready Player Two is a 2020 science fiction novel by American author Ernest Cline. It is the sequel to his 2011 debut novel Ready Player One. Plans for a Ready Player One sequel were first announced back in 2015, though Cline did not begin writing the book until late 2017. Cline attributes further developments to the critical and financial success of the film adaptation of the first novel released in 2018. Ready Player Two was published and released on November 24, 2020. It debuted at number one on The New York Times Best Seller list. The novel received widely negative reviews on release. Critics expressed disappointment in the story, writing, characters, and poor usage of references saying that it failed to expand in new and exciting ways on the original with many taking note of excessive similarities to Sword Art Online and other popular media in the plot. A film adaptation is in development.
		  </p>
		  <List ml={4} my={4}>
		   <ListItem>
		    <Meta>Wikipedia</Meta>
			<Link href="https://en.wikipedia.org/wiki/Ready_Player_Two">
			 https://en.wikipedia.org/wiki/Ready_Player_Two <ExternalLinkIcon mx="2px" />
			</Link>
		   </ListItem>
		   <ListItem>
		    <Meta>Author</Meta>
			<span> Ernest Cline </span>
		   </ListItem>
		   <ListItem>
		    <Meta>Genre</Meta>
			<span> Pop Culture Fiction, Science Fiction </span>
		   </ListItem>
		  </List>
		 </Container>
		</Layout>
	)
}

export default Discover