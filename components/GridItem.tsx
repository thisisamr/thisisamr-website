import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { FC } from 'react'
export interface gridProps {
  children: any
  id?: any
  href?: any
  title: any
  thumbnail: any
}
export const GridItem: FC<gridProps> = ({
  children,
  href,
  title,
  thumbnail,
}) => {
  return (
    <Box w="100%" display={'flex'} justifyContent="center">
      <LinkBox cursor={'pointer'}>
        <Image
          src={thumbnail}
          alt={title}
          placeholder="blur"
          loading="lazy"
          className="grid-item-thumbnail"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem: FC<gridProps> = ({
  children,
  id,
  title,
  thumbnail,
}) => {
  return (
    <Box w="100%" justifyContent="center" display={'flex'}>
      <NextLink href={`/works/${id}`}>
        <LinkBox cursor={'pointer'}>
          <Image
            src={thumbnail}
            className="grid-item-thumbnail"
            alt={title}
            placeholder="blur"
          />
          <LinkOverlay href={`/works/${id}`} target="_blank">
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text mt={2} fontSize={14}>
            {children}
          </Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}
export const GridItemStyle = () => {
  return <Global styles={`.grid-item-thumbnail{border-radius:12px}`} />
}
