import {
  Container,
  Box,
  Heading,
  useColorModePreference,
  useColorModeValue,
} from '@chakra-ui/react'
import ProfileImage from '../components/Profileimage'
import Section from '../components/Section'
const Home = () => {
  return (
    <Container>
      <Box
        borderRadius={'lg'}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
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
              src="/images/amr.jpg"
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
        <p>paragraph</p>
      </Section>
    </Container>
  )
}

export default Home
