import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/books'
import Layout from '../../components/layouts/article'

const Discover = () => {
	return (
		<Layout title="Dune">
		 <Container>
		  <Title>
		   Dune <Badge>1965</Badge>
		  </Title>
		  <p>
		    Dune is a 1965 science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine. It tied with Roger Zelazny&apos;s This Immortal for the Hugo Award in 1966 and it won the inaugural Nebula Award for Best Novel. It is the first installment of the Dune saga. In 2003, it was described as the world&apos;s best-selling science fiction novel.

            Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or spice, a drug that extends life and enhances mental abilities. Melange is also necessary for space navigation, which requires a kind of multidimensional awareness and foresight that only the drug provides. As melange can only be produced on Arrakis, control of the planet is a coveted and dangerous undertaking. The story explores the multilayered interactions of politics, religion, ecology, technology, and human emotion, as the factions of the empire confront each other in a struggle for the control of Arrakis and its spice.
		  </p>
		  <List ml={4} my={4}>
		   <ListItem>
		    <Meta>Wikipedia</Meta>
			<Link href="https://en.wikipedia.org/wiki/Dune_(novel)">
			 https://en.wikipedia.org/wiki/Dune_(novel) <ExternalLinkIcon mx="2px" />
			</Link>
		   </ListItem>
		   <ListItem>
		    <Meta>Author</Meta>
			<span> Frank Herbert </span>
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