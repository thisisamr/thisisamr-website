import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { FC } from 'react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'transition',
})

const Section: FC<{ children: JSX.Element | JSX.Element[]; delay: number }> = ({
  children,
  delay = 0,
}) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition="ease-in"
      mb={6}
    >
      {children}
    </StyledDiv>
  )
}

export default Section
