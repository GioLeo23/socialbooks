import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/books'
import Layout from '../../components/layouts/article'

const Discover = () => {
	return (
		<Layout title="Foundation">
		 <Container>
		  <Title>
		   Foundation <Badge>1951</Badge>
		  </Title>
		  <p>
		    Foundation is a science fiction novel by American writer Isaac Asimov. It is the first published in his Foundation Trilogy (later expanded into the Foundation series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the early story of the Foundation, an institute founded by psychohistorian Hari Seldon to preserve the best of galactic civilization after the collapse of the Galactic Empire.
		  </p>
		  <List ml={4} my={4}>
		   <ListItem>
		    <Meta>Wikipedia</Meta>
			<Link href="https://en.wikipedia.org/wiki/Foundation_(Asimov_novel)">
			 https://en.wikipedia.org/wiki/Foundation_(Asimov_novel) <ExternalLinkIcon mx="2px" />
			</Link>
		   </ListItem>
		   <ListItem>
		    <Meta>Author</Meta>
			<span> Isaac Asimov </span>
		   </ListItem>
		   <ListItem>
		    <Meta>Genre</Meta>
			<span> Science Fiction, Political Drama </span>
		   </ListItem>
		  </List>
		 </Container>
		</Layout>
	)
}

export default Discover