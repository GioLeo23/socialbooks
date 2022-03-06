import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/books'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'

const Discover = () => {
	return (
		<Layout title="Iron Widow">
		 <Container>
		  <Title>
		   Iron Widow <Badge>2021</Badge>
		  </Title>
		  <p>
		   The boys of Huaxia dream of pairing up with girls to pilot Chrysalises, giant transforming robots that can battle the mecha aliens that lurk beyond the Great Wall. It doesn&apos;t matter that the girls often die from the mental strain.

           When 18-year-old Zetian offers herself up as a concubine-pilot, it&apos;s to assassinate the ace male pilot responsible for her sister&apos;s death. But she gets her vengeance in a way nobody expected—she kills him through the psychic link between pilots and emerges from the cockpit unscathed. She is labeled an Iron Widow, a much-feared and much-silenced kind of female pilot who can sacrifice boys to power up Chrysalises instead.​

           To tame her unnerving yet invaluable mental strength, she is paired up with Li Shimin, the strongest and most controversial male pilot in Huaxia​. But now that Zetian has had a taste of power, she will not cower so easily. She will miss no opportunity to leverage their combined might and infamy to survive attempt after attempt on her life, until she can figure out exactly why the pilot system works in its misogynist way—and stop more girls from being sacrificed.
		  </p>
		  <List ml={4} my={4}>
		   <ListItem>
		    <Meta>goodreads</Meta>
			<Link href="https://www.goodreads.com/en/book/show/52459864-iron-widow">
			 https://www.goodreads.com/en/book/show/52459864-iron-widow <ExternalLinkIcon mx="2px" />
			</Link>
		   </ListItem>
		   <ListItem>
		    <Meta>Author</Meta>
			<span> Xiran Jay Zhao </span>
		   </ListItem>
		   <ListItem>
		    <Meta>Genre</Meta>
			<span> Fantasy </span>
		   </ListItem>
		  </List>
		 </Container>
		</Layout>
	)
}

export default Discover