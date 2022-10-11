import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Link,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Paragraph from '../components/Paragraph'
import ProfileImage from '../components/Profileimage'
import Section from '../components/Section'
import { BioSection, BioYear } from '../components/Bio'
const ChackraSpan = chakra('span')
const Home = () => {
  return (
    <Container>
      <Box
        borderRadius={'lg'}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        mt={10}
        textAlign="center"
      >
        Hello I'm a full stack developer based in cairo,Egypt!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading variant={'page-title'} fontFamily={'heading'}>
            Amr Solimann
          </Heading>
          <p>This is Amr (Engineer/Developer/Athlete)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/amr.JPG"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
              objectFit={'cover'}
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading variant={'section-title'}>Work</Heading>
        <Paragraph>
          Amr is an Engineer & full-stack developer based in 🇪🇬 Cairo, with a
          great passion for building software, services, and interesting stuff.
          When he is not coding he is mostly immersed in music and sports
        </Paragraph>
        <Box display={'flex'} my={4} justifyContent="center">
          <NextLink href={'/works'}>
            <Button colorScheme={'purple'} rightIcon={<ChevronRightIcon />}>
              My portifolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading variant={'section-title'}>Bio</Heading>
        <BioSection>
          <BioYear>1987</BioYear>
          Born in Cairo,Egypt.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          M.sc in Transportation & Traffic Simulation at the college of
          Engineering ,
          {
            <Link
              color={'purple.500'}
              _hover={{ textDecoration: 'none', color: 'purple.300' }}
              target="_blank"
              href="https://www.fayoum.edu.eg/english/"
            >
              Fayoum University
            </Link>
          }
        </BioSection>
        <BioSection>
          <BioYear>2016 to 2019</BioYear>
          <span>Academia days 💪</span>
          <VStack>
            <ChackraSpan fontSize={'sm'} color="gray.500">
              "i'm extremetly passionate about teaching and communicating with
              others.At the end of the day you feel like you have added value,
              which feels awesome 🤗"
            </ChackraSpan>
            <span>
              Assistant Lecturer in Transportation Engineering,remote Sensing
              and geomatics'
            </span>
          </VStack>
        </BioSection>
        <BioSection>
          <BioYear>2019 to present </BioYear>
          Full-stack Dev/Tech-Lead/Product consultant
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Art, Music, Sports , Travel , Technology</Paragraph>
      </Section>
    </Container>
  )
}

export default Home
