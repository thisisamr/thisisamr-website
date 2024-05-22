import { Global } from '@emotion/react'
import Image from 'next/image'
import NextLink from 'next/link'
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
    <div className="w-full flex justify-center">
      <div className="cursor-pointer">
        <Image
          src={thumbnail}
          alt={title}
          placeholder="blur"
          loading="lazy"
          className="grid-item-thumbnail"
        />
        <a href={href} target="_blank">
          <span className="mt-2">{title}</span>
        </a>
        <span className="text-[14px]">{children}</span>
      </div>
    </div>
  )
}

export const WorkGridItem: FC<gridProps> = ({
  children,
  id,
  title,
  thumbnail,
}) => {
  return (
    <div className="flex w-full justify-center">
      <NextLink href={`/works/${id}`}>
        <div className="cursor-pointer flex flex-col">
          <Image
            src={thumbnail}
            className="grid-item-thumbnail"
            alt={title}
            placeholder="blur"
          />
          <a href={`/works/${id}`} target="_blank">
            <span className="mt-2 text-[18px]">{title}</span>
          </a>
          <span className="mt-2 text-[14px] text-zinc-300">{children}</span>
        </div>
      </NextLink>
    </div>
  )
}
export const GridItemStyle = () => {
  return <Global styles={`.grid-item-thumbnail{border-radius:12px}`} />
}
