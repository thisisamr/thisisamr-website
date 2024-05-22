import { motion } from 'framer-motion'
import { FC } from 'react'

const Section: FC<{ children: JSX.Element | JSX.Element[]; delay: number }> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: delay }}
      style={{ marginBottom: '24px' }}
    >
      {children}
    </motion.div>
  )
}

export default Section
