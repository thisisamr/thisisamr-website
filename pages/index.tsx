import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Image,
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
        Hello I&apos;m a full stack Engineer based in Cairo
        <Image display={'inline'} src="/eg.png" alt="" ml={2} mr={1} />
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading variant={'page-title'} fontFamily={'heading'}>
            Amr Soliman
          </Heading>
          <p>(Engineer/Developer/Gym rat🏋️)</p>
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
          Hey👋 i&apos;m Amr Soliman <br />
          i&apos;m an Engineer & a full-stack developer based in Egypt, with a
          great passion for building software, services, and learning new stuff.
          when i&apos;m not coding, i&apos;m mostly immersed in music and
          sports.
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
          <BioYear>2017 to 2019</BioYear>
          <VStack>
            <span>
              Assistant Lecturer in Transportation Engineering,traffic theory
              and microsimulation.
            </span>
            <ChackraSpan fontSize={'sm'} color="gray.500">
              &quot;i&apos;m extremetly passionate about teaching and
              communicating with others and at the end of the day you feel like
              you have added value, which feels awesome 🤗&quot;
            </ChackraSpan>
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
