import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import shining from '../public/images/shiningReview.jpg'
import asimov from '../public/images/asimov.jpg'
import ali from '../public/images/ali.jpg'
import ray from '../public/images/RayB.jpg'

const Posts = () => (
  <Layout title="Posts">
   <Container>
    <Heading as="h4" fontSize={20} mb={4}>
     Popular Posts
    </Heading>
    <Section delay={0.1}>
     <SimpleGrid columns={[1, 2, 2]} gap={6}>
      <GridItem
        title="Is The Shining a masterpiece?"
        thumbnail={shining}
        href="https://www.youtube.com/watch?v=uEOth5adWyo"
      />
      <GridItem
        title="Criticisms of Isaac Asimov"
        thumbnail={asimov}
        href="https://literariness.org/2018/04/18/literary-criticism-of-isaac-asimov/"
      />
      <GridItem
        title="15 Books To Read in 2021"
        thumbnail={ali}
        href="https://www.youtube.com/watch?v=w47z_wz6XBA"
      />
      <GridItem
        title="A conversation with Ray Bradbury"
        thumbnail={ray}
        href="https://www.youtube.com/watch?v=EzD0YtbViCs"
      />
     </SimpleGrid>
    </Section>
   </Container>
  </Layout>
)

export default Posts