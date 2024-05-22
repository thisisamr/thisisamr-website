import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Main'
import { ThemeProvider } from '../components/ThemeProvider'
import '../styles/globals.css'
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AnimatePresence mode="wait">
        <Layout router={router}>
          <Component {...pageProps} router={router} key={router.route} />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp
