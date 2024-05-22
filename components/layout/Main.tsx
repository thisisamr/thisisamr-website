import Head from 'next/head'
import { Container, containerVariants } from '../Container'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { Props } from '../../types'
import Nav from '../Nav'
const Main: FC<Props> = ({ children, router }) => {
  return (
    <main className="min-h-screen pb-8 dark:bg-portifolio">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>thisisamr - Homepage</title>
      </Head>
      <Nav path={router.asPath} />
      <Container className="max-w-4xl pt-14" variant="breakpointPadded">
        {children}
      </Container>
    </main>
  )
}

export default Main
