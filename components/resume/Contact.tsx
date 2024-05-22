import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosLink } from 'react-icons/io'

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '../../@/components/ui/avatar'
import { MdEmail } from 'react-icons/md'

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '../../@/components/ui/tooltip'
import NextImage from 'next/image'
import { LinkIcon, PhoneIcon } from 'lucide-react'
import { EmailIcon } from '@chakra-ui/icons'
import { AiOutlineGithub } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
export default function Contacts() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-2">
        <Avatar>
          <AvatarImage
            src="/images/amr_2.jpeg"
            className="w-36 h-36 rounded-full ring-2 ring-zinc-500 hover:ring-white transition duration-500 cursor-pointer"
          />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <h1
          className="mt-5 tracking-wide dark:text-zinc-100"

          //   fontFamily={"'Poppins', sans-serif;"}
          //   size={['sm', 'md']}
          //   letterSpacing={1}
        >
          Amr Soliman
        </h1>

        <p
          className="dark:text-zinc-100 text-xs cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-200"
          //   cursor="pointer"
          //   mt={1}
          //   opacity={0.7}
          //   _hover={{ opacity: '1', transition: '.5s' }}
        >
          Full stack Engineer
        </p>
      </div>
      <div className="justify-start md:justify-center w-full md:w-fit">
        <div className="flex  flex-col  text-xs md:text-sm">
          <div className=" flex p-1 gap-4 items-center">
            <HiOutlineLocationMarker
              className="text-zinc-700 dark:text-zinc-400 hover:transform scale-110 transition ease-in-out cursor-pointer text-[18px]"
              onClick={() => {
                window.open(
                  "https://www.google.com/maps/place/30%C2%B002'50.8%22N+31%C2%B014'08.6%22E/@30.0474532,31.2335359,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe07873020ef1df6!8m2!3d30.0474532!4d31.2357192",
                  '_blank'
                )
              }}
            />
            <p className="dark:text-zinc-100">Cairo</p>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <img className="cursor-pointer" src="/eg.png" alt="EG" />
                </TooltipTrigger>
                <TooltipContent className="px-1 bg-zinc-200 rounded-sm duration-0 text-black">
                  Egypt
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex p-1 items-center gap-4 ">
            <FaPhoneAlt className="text-[18px] text-zinc-700 dark:text-zinc-400" />
            <p className="dark:text-zinc-100">(+20 ) 102-524-0571</p>
          </div>
          <div className="flex items-center p-1 gap-4">
            <MdEmail className="text-[18px]  text-zinc-700 dark:text-zinc-400" />
            <p className="dark:text-zinc-100">thisissoliman@protonmail.com</p>
          </div>
          <div className="flex gap-4 p-1 items-center ">
            <IoIosLink className=" text-[18px]  text-zinc-700 dark:text-zinc-400" />
            <p className="dark:text-zinc-100">thisisamr.me</p>
          </div>
          <div className="flex gap-4 p-1 items-center">
            <AiOutlineGithub className="text-[18px] text-zinc-700 dark:text-zinc-400" />
            <p className="dark:text-zinc-100">@thisisamr</p>
          </div>
          <picture className="text-center mt-2">
            <source
              srcSet={'/images/2.png'}
              media="(prefers-color-scheme: dark)"
            />
            <NextImage
              src={resolvedTheme == 'light' ? '/images/1.png' : '/images/2.png'}
              width={100}
              height={35}
              objectFit="contain"
            />
          </picture>
        </div>
      </div>
    </div>
  )
}
