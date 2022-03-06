import { List, ListItem, Link, Button, Icon, Container, Heading} from '@chakra-ui/react'
import Section from '../components/section'
import { IoLogoFacebook } from 'react-icons/io5'
import Layout from '../components/layouts/article'


const Group = () => (
  <Layout>
   <Container>
    <Section delay={0.3}>
     <Heading as ="h3" variant="section-title">
       Groups
     </Heading>
     <List>
      <ListItem>
       <Link href="https://socialbooks-chat.netlify.app/" target="_blank">
        <Button
          variant="ghost"
          colorScheme="teal"
        > 
         The SocialBooks Personal Chat Application
        </Button>
       </Link>
      </ListItem>
      <ListItem>
       <Link href="https://www.facebook.com/groups/thebookhangoutspot" target="_blank">
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon as={IoLogoFacebook} />}
        > 
         The Book Hangout Spot
        </Button>
       </Link>
      </ListItem>
      <ListItem>
       <Link href="https://www.facebook.com/groups/mybookloversclub" target="_blank">
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon as={IoLogoFacebook} />}
        > 
         Book Lovers
        </Button>
       </Link>
      </ListItem>
      <ListItem>
       <Link href="https://www.facebook.com/groups/152618353455022" target="_blank">
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon as={IoLogoFacebook} />}
        > 
         Books Reading Group
        </Button>
       </Link>
      </ListItem>
      <ListItem>
       <Link href="https://www.facebook.com/groups/368542331574851" target="_blank">
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon as={IoLogoFacebook} />}
        > 
         Science Fiction
        </Button>
       </Link>
      </ListItem>
     </List>
    </Section>
   </Container>
  </Layout>
)

export default Group