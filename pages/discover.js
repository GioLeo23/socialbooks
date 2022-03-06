import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import { DiscoverGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbBooks from '../public/images/fahr.jpg'
import dune from '../public/images/dune3.jpg'
import robot from '../public/images/foundation.jpg'
import ready from '../public/images/ready.jpg'
import dare from '../public/images/dare.jpg'
import iron from '../public/images/iron.jpg'
import loco from '../public/images/loco.jpg'
import galaxias from '../public/images/galaxias.jpg'


const DiscoverBooks = () => {
	return (
	  <Layout>
		<Container>
		 <Heading as="h3" fontSize={20} mb={4}>
		  Discover Books
		 </Heading>

		 <SimpleGrid columns={[1,1,2]} gap={6}>
		  <Section>
		   <DiscoverGridItem id="book" title="Fahrenheit 451" thumbnail={thumbBooks}>
		    Ray Bradbury
		   </DiscoverGridItem>
		  </Section>
		  <Section>
		   <DiscoverGridItem
		     id="book2"
			 title="Dune"
			 thumbnail={dune}
		   >
		     Frank Herbert
		   </DiscoverGridItem>
		  </Section>
		  <Section>
		   <DiscoverGridItem
		     id="book3"
			 title="Foundation"
			 thumbnail={robot}
		   >
		     Isaac Asimov
		   </DiscoverGridItem>
		  </Section>
		  <Section>
		   <DiscoverGridItem
		     id="book4"
			 title="Ready Player Two"
			 thumbnail={ready}
		   >
		     Ernest Cline
		   </DiscoverGridItem>
		  </Section>
		  <Section>
		   <DiscoverGridItem
		     id="book5"
			 title="Dare to Know"
			 thumbnail={dare}
		   >
		     James Kennedy
		   </DiscoverGridItem>
		  </Section>
		  <Section>
		   <DiscoverGridItem
		     id="book6"
			 title="Iron Widow"
			 thumbnail={iron}
		   >
		     Xiran Jay Zhao
		   </DiscoverGridItem>
		  </Section>
		  <Section>
		   <DiscoverGridItem
		     id="book7"
			 title="The Black Locomotive"
			 thumbnail={loco}
		   >
		     Rian Hughes
		   </DiscoverGridItem>
		  </Section>
		  <Section>
		   <DiscoverGridItem
		     id="book8"
			 title="Galaxias"
			 thumbnail={galaxias}
		   >
		     Stephen Baxter
		   </DiscoverGridItem>
		  </Section>
		 </SimpleGrid>
		</Container>
	  </Layout>
	)
}

export default DiscoverBooks