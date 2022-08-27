import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { FC } from 'react'
import { Props } from '../../types'
import Nav from '../Nav'
const Main: FC<Props> = ({ children, router }) => {
  return (
    <Box as={'main'} pb={8} h="100vh">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>thisisamr - Homepage</title>
      </Head>
      <Nav path={router.asPath} />
      <Container maxW={'container.md'} pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
