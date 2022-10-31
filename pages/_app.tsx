import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/Main'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode="wait">
        <Layout router={router}>
          <Component {...pageProps} router={router} key={router.route} />
        </Layout>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
