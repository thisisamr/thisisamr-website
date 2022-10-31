import { EmailIcon, LinkIcon, PhoneIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Circle,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { GiAirplaneDeparture } from 'react-icons/gi'
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { IoMdFitness } from 'react-icons/io'
import { DiMongodb } from 'react-icons/di'
import { MdCheckCircle } from 'react-icons/md'
import {
  SiApollographql,
  SiCsharp,
  SiExpress,
  SiNeo4J,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
} from 'react-icons/si'
import { CgCPlusPlus } from 'react-icons/cg'
import { SiJavascript, SiTypescript } from 'react-icons/si'
import { FaFacebookF, FaNodeJs, FaRust } from 'react-icons/fa'
import { BsMusicNoteBeamed, BsTwitter } from 'react-icons/bs'
import NextImage from 'next/image'
import { TbBrandNextjs } from 'react-icons/tb'
import { HiOutlineBookOpen, HiOutlineLocationMarker } from 'react-icons/hi'
const Resume = () => {
  return (
    <Box mt={5} display={'flex'} flexDir={['column', 'column', 'row']}>
      <Box width={{ md: '75%' }}>
        <Flex
          flexDirection={'column'}
          justifyContent={'space-around'}
          alignItems="center"
        >
          <Flex
            justifyContent="center"
            flexDirection={'column'}
            alignItems="center"
            py={2}
          >
            <Avatar src="/images/amr_2.jpeg" size={'2xl'} />
            <Heading
              mt={5}
              fontFamily={"'Poppins', sans-serif;"}
              size={['sm', 'md']}
              letterSpacing={1}
            >
              Amr Soliman
            </Heading>

            <Text
              fontSize={'xs'}
              cursor="pointer"
              mt={1}
              opacity={0.7}
              _hover={{ opacity: '1', transition: '.5s' }}
            >
              Full stack Engineer
            </Text>
          </Flex>
          <Flex
            justifyContent={['start', 'center']}
            width={['full', 'fit-content']}
          >
            <Flex flexDirection="column" fontSize={['xs', 'sm']}>
              <HStack p={1} spacing={4}>
                <Icon
                  _hover={{
                    transform: 'scale(1.2)',
                    transition: 'all .25s ease',
                  }}
                  onClick={() => {
                    window.open(
                      "https://www.google.com/maps/place/30%C2%B002'50.8%22N+31%C2%B014'08.6%22E/@30.0474532,31.2335359,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe07873020ef1df6!8m2!3d30.0474532!4d31.2357192",
                      '_blank'
                    )
                  }}
                  cursor="pointer"
                  as={HiOutlineLocationMarker}
                  fontSize={'18'}
                  color={useColorModeValue('gray.800', 'gray.300')}
                />
                <Text>Cairo</Text>
                <Tooltip label="Egypt" size={'xs'}>
                  <Image src="/eg.png" alt="EG" />
                </Tooltip>
              </HStack>
              <HStack p={1} spacing={4}>
                <PhoneIcon
                  fontSize={'18'}
                  color={useColorModeValue('gray.800', 'gray.300')}
                />
                <Text>(+20) 122-2826-325</Text>
              </HStack>
              <HStack p={1} spacing={4}>
                <EmailIcon
                  fontSize={'18'}
                  color={useColorModeValue('gray.800', 'gray.300')}
                />
                <Text>thisissoliman@protonmail.com</Text>
              </HStack>
              <HStack p={1} spacing={4}>
                <LinkIcon color={useColorModeValue('gray.800', 'gray.300')} />
                <Text>thisisamr.me</Text>
              </HStack>
              <HStack p={1} spacing={4}>
                <Icon
                  as={AiOutlineGithub}
                  fontSize={16}
                  color={useColorModeValue('black', 'white')}
                />

                <Text>@thisisamr</Text>
              </HStack>

              <NextImage
                src={useColorModeValue('/images/1.png', '/images/2.png')}
                width={100}
                height={35}
                objectFit="contain"
              />
            </Flex>
          </Flex>
          <HStack justifyContent={'start'} w="100%" py={4}>
            <Heading
              letterSpacing={'widest'}
              fontFamily={"'Poppins', sans-serif;"}
              size="sm"
            >
              EDUCATION
            </Heading>
          </HStack>
          <VStack alignItems={'flex-start'} w="full" spacing={0} p={2}>
            <HStack>
              <VStack alignItems={'flex-start'}>
                <HStack justifyContent={'center'}>
                  <Circle bg={'gray.900'} size={2} />
                  <Text fontSize={14}>
                    <span style={{ fontWeight: 'bold' }}>M.sc</span>{' '}
                    Transportation & Traffic Simulation
                  </Text>
                </HStack>
                <HStack justifyContent={'center'}>
                  <Text ml={4} fontSize={14}>
                    Fayoum University
                  </Text>
                  <Text fontStyle={'italic'} fontSize={10} color="gray.500">
                    2016 , Egypt
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </VStack>
          <VStack alignItems={'flex-start'} w="full" spacing={0} p={2}>
            <HStack>
              <VStack alignItems={'flex-start'}>
                <HStack justifyContent={'center'}>
                  <Circle bg={'gray.900'} size={2} />
                  <Text fontSize={14}>
                    <span style={{ fontWeight: 'bold' }}>b.sc</span> Civil
                    Engineering
                  </Text>
                </HStack>
                <HStack justifyContent={'center'}>
                  <Text ml={4} fontSize={14}>
                    Fayoum University
                  </Text>
                  <Text fontStyle={'italic'} fontSize={10} color="gray.500">
                    2011, Egypt
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </VStack>
          <HStack justifyContent={'start'} w="100%" py={4}>
            <Heading
              letterSpacing={'widest'}
              fontFamily={"'Poppins', sans-serif;"}
              size="sm"
            >
              SKILLS
            </Heading>
          </HStack>
          <HStack w={'full'}>
            <VStack w={'50%'}>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Icon fontSize={24} color="blue.500">
                  <CgCPlusPlus />
                </Icon>
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  C plus plus
                </Text>
              </HStack>

              <HStack justifyContent={'flex-start'} marginLeft={2} w="full">
                <Icon color={'purple.600'} fontSize={24}>
                  <SiCsharp />
                </Icon>
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  Csharp
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w="full">
                {/* <Circle bg={'gray.900'} size={2} ml={4} /> */}

                {/* <Text fontSize={14}>Rust</Text> */}
                <Icon fontSize={24} color={'orange.500'}>
                  <FaRust />
                </Icon>
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  Rust
                </Text>
              </HStack>
            </VStack>
            <VStack w={'50%'}>
              <HStack justifyContent={'flex-start'} w={'full'}>
                {/* <Text fontSize={14}>Type-Script</Text> */}
                <Icon fontSize={24} color={'blue.400'}>
                  <SiTypescript />
                </Icon>
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  Typescript
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Icon color={'yellow.500'} fontSize="24">
                  <SiJavascript />
                </Icon>
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  JavaScript
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Text fontSize={14} color="pink.500" fontWeight={'bold'}>
                  SQL
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack justifyContent={'start'} w="100%" py={4}>
            <Heading
              letterSpacing={'widest'}
              fontFamily={"'Poppins', sans-serif;"}
              size="sm"
            >
              TECHNOLOGIES
            </Heading>
          </HStack>
          <HStack w={'full'}>
            <VStack w={'50%'} spacing={4}>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Icon fontSize={24} color={'black'}>
                  <FaNodeJs />
                </Icon>
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  Node
                </Text>
              </HStack>

              <HStack justifyContent={'flex-start'} marginLeft={2} w="full">
                <Icon fontSize={24}>
                  <svg
                    id="badc975a-58b2-46ff-b5d2-37f3c7a2c6f6"
                    viewBox="0 0 2000 2000"
                    color="pink"
                  >
                    <path
                      fill="red"
                      id="a984a27a-1d44-4be6-b319-64a55bff99f0"
                      d="M1000,0C447.7,0,0,447.7,0,1000c0,507.4,378,926.6,867.7,991.3-61.8-95.7-101.3-204.4-136.6-312.1-43.2-132-68.8-268.9-92.8-405.5-2.1-12.1-7.6-57.8-22.6-61.9-16.3-4.5-34.3,33.8-45,42.6-17.9,14.7-37.9,26.2-57.8,37.9-13.6,8-28.1,18.8-43.4,25.2-18.5,11.7-41.7,16.5-64.2,17.5-37.4,1.8-79.4,1-113.8-15.3-35.5-16.9-60.6-52.4-86.5-80.8-16.3-17.9-32.7-35.8-49-53.8-12.8-14-29-38-50.7-31.2-9.5,3-17.2.2-22.3-5.3-10.2-8-15-23.5-3.4-35.5,63.7-65.8,161.4-91.8,248.4-60.5,47,16.9,77.2,47.3,113.4,79.8,32.5,29.1,79.9,37.5,120.9,23.4,13.6-4.7,42.2-15.5,47.4-29.8,7.3-19.8-5.1-62.6-6-84.3a1087.81,1087.81,0,0,1,10.7-199.2s59.7-7.5,70.4-7.5a7,7,0,0,0,.3,1.4c10.6,33.6,10.4,71.1,26.8,102.8,6.5,12.5,15.3,26.9,28.3,33.8,30,16,163.2,19.8,192.7,4.7,43.3-22.2,75.2-138.2,75.4-141.7,8.3,0,77.3.1,85.6,0,.2,3.5,32.1,119.5,75.4,141.7C1198.8,992.9,1332,989,1362,973c13-6.9,21.8-21.3,28.3-33.8,16.4-31.7,16.2-69.2,26.8-102.8a7,7,0,0,0,.3-1.4c12.4.1,60.2,6.9,74.9,9a876,876,0,0,1-16.8,184.2c-5.3,26.5-11.3,53.3-19.7,79.1-7.3,22.5-18.1,37.8-13.1,63,2.8,13.8,10.6,27.2,23.2,33.6,31.8,16.1,82.2-7.6,102.1-32.8,28-35.4,52.4-68.8,89.2-96,63.6-47.1,173.8-89.3,248.5-44.7,18.6,11.1,13,36.5-5.7,43.5-24.5,9.1-25.6,44.6-26.6,66-1.3,28.1-2.7,56.3-16.6,81.5-27.4,50-83.6,71.5-136.3,83.3-58.1,13-120.1,23.6-177.5,2.1-14.1-5.3-27.3-11-42.2-13.8-15.1-2.8-30.5-3.7-45.2-8.5a141.09,141.09,0,0,1-51-29.8c-5,13.3-10.1,26.6-15.1,39.9-33.1,87.7-64.2,176.2-90.9,266-31.6,106.4-56.8,215-70.8,325.2q-5.7,44.85-8.8,90.1c446.9-99.9,781-498.9,781-976C2000,447.7,1552.3,0,1000,0Zm525.5,705.7c-9.5,11-26,14-43.3,13.9,2.4,16.4,6.3,55,6.3,55s-145.4-5.4-198.8-6.1q-103.65-1.35-207,4c-7.1.3-49.4.6-63.4,0q-103.5-5.1-207-4c-49,.6-185.6,6.2-185.6,6.2s12.6-54.5,19.7-78.7c-10.5,0-21.1-.6-31.5-1.6-10-1-20.8-6.5-22.9-17.5-12.1-62.4,29-118.9,62.5-168A469,469,0,0,1,769.6,391c-16-37.8-5-79.3,20.5-110.6,21.8-27.2,55.5-44.4,78-52.4a245.32,245.32,0,0,1,23.9-7.5c29.7-7.7,60.7-11.4,88.7-24.8-2.2-3.1-37.7-27-48.4-41.1-23.5-31.1,9.2-60,37.7-68.7,16-4.8,34.1-8,49.4.4,16.4,9,36.4,52.6,37.9,55.6,22.7-30.6,53.4-82.2,94.9-72.8,38.3,8.6,71.6,59.7,86,93.5,11,25.9,15.4,53.8,12.2,81.1,43.6,9.5,106.4,32.7,133.3,79.5,8.2,15.9,10.5,28.2,10.5,44.6s-6.8,44.1-15.5,63c53.7,20.2,100,57.4,127.8,108.2a241.52,241.52,0,0,1,27.5,86.4C1536.8,647.9,1541.7,686.9,1525.5,705.7Z"
                    ></path>
                  </svg>
                </Icon>
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  ChilliCream GraphQL Platform
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w="full">
                {/* <Circle bg={'gray.900'} size={2} ml={4} /> */}

                <Icon fontSize={24} color={'blue.700'}>
                  <SiApollographql />
                </Icon>
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  Apollo Graphql
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Image
                  width={8}
                  src="https://i7.pngflow.com/pngimage/673/239/png-entity-framework-core-asp-net-core-net-framework-microsoft-blue-text-logo-number-clipart.png"
                  alt=""
                />
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  Dotnet Core
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Icon color={'twitter.500'} fontSize={24}>
                  <SiPostgresql />
                </Icon>

                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  PostgreSql
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Icon color={'red.500'} fontSize={24}>
                  <SiRedis />
                </Icon>

                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  Redis
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Icon color={'green.500'} fontSize={24}>
                  <DiMongodb />
                </Icon>

                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  Mongodb
                </Text>
              </HStack>
            </VStack>
            <VStack w={'50%'} spacing={4}>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Icon color={'black'} fontSize={24}>
                  <SiExpress />
                </Icon>
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  Express.js Framework
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Icon fontSize={24} color="red.400">
                  <SiNestjs />
                </Icon>
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  Nestjs Framework
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Image
                  rounded={'full'}
                  width={8}
                  src="https://codeopinion.com/wp-content/uploads/2017/10/Bitmap-MEDIUM_Entity-Framework-Core-Logo_2colors_Square_Boxed_RGB.png"
                  alt=""
                />
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  EF Core.
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Icon fontSize={24} color="teal.500">
                  <SiPrisma />
                </Icon>
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  Prisma ORM
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Icon color={'blue.500'} fontSize={24}>
                  <SiNeo4J />
                </Icon>

                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  Neo4j
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Icon color={'blue.500'} fontSize={24}>
                  <SiReact />
                </Icon>

                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  React
                </Text>
              </HStack>
              <HStack justifyContent={'flex-start'} w={'full'}>
                <Icon color={'black.500'} fontSize={24}>
                  <TbBrandNextjs />
                </Icon>
                <Text fontSize={8} fontStyle="italic" color={'gray.500'}>
                  Nextjs
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack justifyContent={'start'} w="100%" py={4}>
            <Heading
              letterSpacing={'widest'}
              fontFamily={"'Poppins', sans-serif;"}
              size="sm"
            >
              LANGUAGES
            </Heading>
          </HStack>
          <VStack width={'100%'}>
            <HStack width={'100%'} justifyContent="flex-start" ml={4}>
              <VStack spacing={0}>
                <Text>English</Text>
                <Text fontSize={10} fontStyle={'italic'} color="gray.500">
                  Fluent
                </Text>
              </VStack>
              <VStack spacing={0}>
                <Text>Arabic</Text>
                <Text fontSize={10} fontStyle={'italic'} color="gray.500">
                  native
                </Text>
              </VStack>
            </HStack>
          </VStack>
          <HStack justifyContent={'start'} w="100%" py={4}>
            <Heading
              letterSpacing={'widest'}
              fontFamily={"'Poppins', sans-serif;"}
              size="sm"
            >
              INTRESTS
            </Heading>
          </HStack>
          <VStack width={'100%'}>
            <HStack
              width={'100%'}
              justifyContent="flex-start"
              spacing={6}
              ml={4}
            >
              <VStack spacing={0}>
                <Icon fontSize={24} color={'gray.600'}>
                  <BsMusicNoteBeamed />
                </Icon>
                <Text fontSize={10} fontStyle={'italic'} color="gray.500">
                  Music
                </Text>
              </VStack>
              <VStack spacing={0}>
                <Icon fontSize={24} color={'gray.600'}>
                  <GiAirplaneDeparture />
                </Icon>
                <Text fontSize={10} fontStyle={'italic'} color="gray.500">
                  Travel
                </Text>
              </VStack>
              <VStack spacing={0}>
                <Icon fontSize={24} color={'gray.600'}>
                  <HiOutlineBookOpen />
                </Icon>
                <Text fontSize={10} fontStyle={'italic'} color="gray.500">
                  Reading
                </Text>
              </VStack>
              <VStack spacing={0}>
                <Icon fontSize={24} color={'gray.600'}>
                  <IoMdFitness />
                </Icon>
                <Text fontSize={10} fontStyle={'italic'} color="gray.500">
                  Fitness
                </Text>
              </VStack>
            </HStack>
          </VStack>
          <HStack justifyContent={'start'} w="100%" py={4}>
            <Heading
              letterSpacing={'widest'}
              fontFamily={"'Poppins', sans-serif;"}
              size="sm"
            >
              SOCIAL
            </Heading>
          </HStack>

          <HStack justifyContent={'flex-start'} ml={4} w="full">
            <Link p={2} color={'pink.500'} sx={{ textDecoration: 'none' }}>
              <HStack spacing={4}>
                <AiOutlineInstagram fontSize={16} />
              </HStack>
            </Link>
            <Link p={2} color={'linkedin.800'}>
              <AiFillLinkedin fontSize={16} />
            </Link>
            <Link
              p={2}
              color="facebook.500"
              href="https://facebook.com/amr.soliman.520125"
              target={'_blank'}
            >
              <HStack>
                <FaFacebookF fontSize={16} />
              </HStack>
            </Link>
            <Link p={2} color="twitter.500">
              <HStack>
                <BsTwitter fontSize={16} />
              </HStack>
            </Link>
          </HStack>
        </Flex>
      </Box>
      {/**right side */}
      <Box bg={'#ff00000a'} width="100%">
        <VStack>
          <HStack justifyContent={'start'} w="100%" px={4} mt={4}>
            <Heading
              letterSpacing={'widest'}
              fontFamily={"'Poppins', sans-serif;"}
              size="sm"
            >
              Experience
            </Heading>
          </HStack>

          <VStack w="full">
            <VStack w={'full'} alignItems={'flex-start'} p={2}>
              <HStack alignItems={'center'} justifyContent="center">
                <Circle size={2} bg={'gray.800'} />
                <Text fontSize={14}>Tech Lead/Product consultant</Text>
              </HStack>
              <Text fontSize={12}>
                <span style={{ fontStyle: 'italic', color: 'gray' }}>
                  2021-now |{' '}
                </span>
                <span style={{ fontSize: '10px', fontWeight: 'bold' }}>
                  Edge-pro for information systems
                </span>
              </Text>
              <span
                style={{ fontStyle: 'italic', fontSize: '10px', color: 'gray' }}
              >
                (Tasks/Accomplishments)
              </span>
              <List spacing={0} fontSize={10} maxW="95%" textAlign={'justify'}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Leading development teams, providing solutions, code reviews
                  and offshore coordination as well as architecting solutions to
                  use the latest technologies and best practices.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Design and implementation of rest services in node and dontnet
                  core, migrating front-end legacy javascript code and enhancing
                  developer experience.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Design and implemntation of application specific Api
                  <span style={{ fontSize: '8px' }}>s</span> in graphql,
                  enhancing fontend experience and performance by minimizing
                  rest api calls through grapgQL custom wrappers.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Design and develop token based authentication microservices.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Developed a home-grown 🪴 Graphql based database
                  syncronization app using Apollo server , Prisma and NextJS.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Carry out unit and integration tests in node and dotnet core.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Interviewing and hiring junior developers
                </ListItem>
              </List>
            </VStack>
            <VStack w={'full'} alignItems={'flex-start'} p={2}>
              <HStack alignItems={'center'} justifyContent="center">
                <Circle size={2} bg={'gray.800'} />
                <Text fontSize={14}>Tech Lead</Text>
              </HStack>
              <Text fontSize={12}>
                <span style={{ fontStyle: 'italic', color: 'gray' }}>
                  2020-2021 |{' '}
                </span>
                <span style={{ fontSize: '10px', fontWeight: 'bold' }}>
                  Edge-pro for information systems
                </span>
              </Text>
              <span
                style={{ fontStyle: 'italic', fontSize: '10px', color: 'gray' }}
              >
                (Tasks/Accomplishments)
              </span>
              <List spacing={0} fontSize={10} maxW="95%" textAlign={'justify'}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Leading the development teams for the national spatial data
                  infrastucture project.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Provide public integration webservices to third parties with
                  complete swagger documentation and mock services for testing
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Implementing realtime databases with Graphql subscribtions for
                  specific client neeeds.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Design and implementation of web mapping applications using
                  Hexagon Geospatial technologies, handling and optimizing the
                  visualization of large geospatial datasets using webservices
                  and custom tile servers as well as integerating with
                  geoprocessing servers through rest endpoints (geoserver
                  /Luciad Fusion/Map server)
                </ListItem>
              </List>
            </VStack>
            <VStack w={'full'} alignItems={'flex-start'} p={2}>
              <HStack alignItems={'center'} justifyContent="center">
                <Circle size={2} bg={'gray.800'} />
                <Text fontSize={14}>Training & Customer support manager</Text>
              </HStack>
              <Text fontSize={12}>
                <span style={{ fontStyle: 'italic', color: 'gray' }}>
                  2019-2020 |{' '}
                </span>
                <span style={{ fontSize: '10px', fontWeight: 'bold' }}>
                  Edge-pro for information systems
                </span>
              </Text>
              <span
                style={{ fontStyle: 'italic', fontSize: '10px', color: 'gray' }}
              >
                (Tasks/Accomplishments)
              </span>
              <List spacing={0} fontSize={10} maxW="95%" textAlign={'justify'}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Responsible for the developer training programs,responsible
                  for carrying out online and on primise training and workshops
                  for various company clients , trouble shooting deployment
                  issues and system integeration problems
                </ListItem>
              </List>
            </VStack>

            <VStack w={'full'} alignItems={'flex-start'} p={2}>
              <HStack alignItems={'center'} justifyContent="center">
                <Circle size={2} bg={'gray.800'} />
                <Text fontSize={14}>Assistant Lecturer</Text>
              </HStack>
              <Text fontSize={12}>
                <span style={{ fontStyle: 'italic', color: 'gray' }}>
                  2017-2019 |{' '}
                </span>
                <span style={{ fontSize: '10px', fontWeight: 'bold' }}>
                  Obour higher institutes For engineering and technology.
                </span>
              </Text>
              <span
                style={{ fontStyle: 'italic', fontSize: '10px', color: 'gray' }}
              >
                (Tasks/Accomplishments)
              </span>
              <List spacing={0} fontSize={10} maxW="95%" textAlign={'justify'}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Tasks include class tutorials in:Transportation Modelling,
                  Taffic theory,Computer Simulation, c++, Plane and Topographic
                  surveying, Geodecy, Airport and Highway design . Tasks also
                  included tutorials in Autodesk CIVIL-3d ,Bently
                  Microstation,Terra Solid and PTV Vissim.
                </ListItem>
              </List>
            </VStack>
            <VStack w={'full'} alignItems={'flex-start'} p={2}>
              <HStack alignItems={'center'} justifyContent="center">
                <Circle size={2} bg={'gray.800'} />
                <Text fontSize={14}>Transpaortation Engineer</Text>
              </HStack>
              <Text fontSize={12}>
                <span style={{ fontStyle: 'italic', color: 'gray' }}>
                  2013-2016 |{' '}
                </span>
                <span style={{ fontSize: '10px', fontWeight: 'bold' }}>
                  Ministry of Transport
                </span>
              </Text>
              <span
                style={{ fontStyle: 'italic', fontSize: '10px', color: 'gray' }}
              >
                (Tasks/Accomplishments)
              </span>
              <List spacing={0} fontSize={10} maxW="95%" textAlign={'justify'}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Microsimulation modelling and scenario testing of alternative
                  intersection treatments to mitigate Congestion
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Develop regression based models to predict speed and LOS
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Implementing pavement management system through the analysis
                  of 3d point cloud drone and mobile mapping data.
                </ListItem>
              </List>
            </VStack>
            <VStack w={'full'} alignItems={'flex-start'} p={2}>
              <HStack alignItems={'center'} justifyContent="center">
                <Circle size={2} bg={'gray.800'} />
                <Text fontSize={14}>Technical support Engineer</Text>
              </HStack>
              <Text fontSize={12}>
                <span style={{ fontStyle: 'italic', color: 'gray' }}>
                  2012-2013 |{' '}
                </span>
                <span style={{ fontSize: '10px', fontWeight: 'bold' }}>
                  Ericsson for telecomunication
                </span>
              </Text>
              <span
                style={{ fontStyle: 'italic', fontSize: '10px', color: 'gray' }}
              >
                (Tasks/Accomplishments)
              </span>
              <List spacing={0} fontSize={10} maxW="95%" textAlign={'justify'}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Automation of 3d analysis and modelling of steel communication
                  towers using python and c++, building a structural analysis
                  reporting system and an inventory system using mysql and c++ .
                </ListItem>
              </List>
            </VStack>
            <VStack w={'full'} alignItems={'flex-start'} p={2}>
              <HStack alignItems={'center'} justifyContent="center">
                <Circle size={2} bg={'gray.800'} />
                <Text fontSize={14}>Highway Consultant Engineer</Text>
              </HStack>
              <Text fontSize={12}>
                <span style={{ fontStyle: 'italic', color: 'gray' }}>
                  2011-2012 |{' '}
                </span>
                <span style={{ fontSize: '10px', fontWeight: 'bold' }}>
                  Centre of research and Engineering Consultancy,Fayoum
                  university.
                </span>
              </Text>
              <span
                style={{ fontStyle: 'italic', fontSize: '10px', color: 'gray' }}
              >
                (Tasks/Accomplishments)
              </span>
              <List spacing={0} fontSize={10} maxW="95%" textAlign={'justify'}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="black" />
                  Construction supervision , quantity survey, labratory
                  supervision , quality control land survey supervison.
                </ListItem>
              </List>
            </VStack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  )
}

export default Resume
