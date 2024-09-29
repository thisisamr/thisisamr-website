import { AnimatePresence, motion } from 'framer-motion'
import NextLink from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'

import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { IoLogoGithub } from 'react-icons/io5'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../@/components/ui/dropdown-menu'
import { Container } from './Container'
import Logo from './Logo'
import { ModeToggle } from './ThemeSwitcher'


const Nav: FC<{ path: string }> = props => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false)
      }
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [open])
  return (
    <nav
      className="fixed h-[75px] w-full z-10 backdrop-blur-md dark:bg-[#20202380] text-center"
      {...props}
    >
      <Container className="flex max-w-2xl p-2 items-center">
        <Logo />
        <div className="hidden w-full md:w-auto flex-1 md:flex flex-col md:flex-row justify-center items-center mt-4 md:mt-0 gap-4">
          <NextLink
            href="/posts"
            className=" dark:text-zinc-100 px-4 font-bold transition-colors duration-500 cursor-pointer hover:scale-105 transform ease-in-out py-1 underline-animation"
          >
            Blog
          </NextLink>

          <NextLink
            href="/works"
            className="dark:text-zinc-100 px-4 font-bold transition-colors duration-500 cursor-pointer hover:scale-105 transform ease-in-out py-1 underline-animation"
          >
            Works
          </NextLink>
          <NextLink
            href={'/resume'}
            style={{ textDecoration: 'none' }}
            className="dark:text-zinc-100 px-4 hover:scale-105 font-bold transition transform duration-300 underline-animation"
          >
            Resume
          </NextLink>
          <NextLink
            target="_blank"
            href="https://github.com/thisisamr/thisisamr-website"
            rel='nonreferrer'
          >
            <IoLogoGithub className="dark:text-zinc-100 size-6" />
          </NextLink>
        </div>
        <div className="flex gap-1">
          {/* <ThemeToggleButton /> */}
          <ModeToggle />
          <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger>
              <div className="md:hidden w-[40px] h-[40px] border p-1 rounded-sm m-auto flex justify-center items-center cursor-pointer hover:border-zinc-200/50 transition-color duration-300">
                <RxHamburgerMenu size={20} className="dark:text-white" />
              </div>
            </DropdownMenuTrigger>

            <AnimatePresence>
              {open && (
                <DropdownMenuContent className="mt-2 mr-1 space-y-1 dark:bg-black/95 bg-white/95 w-52">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                  >
                    {menuItems.map((item, i) => {
                      return (
                        <DropdownMenuItem
                          onClick={() => router.push(`/${item.url}`)}
                          className=" outline-none dark:hover:bg-[#1e1e1e]/70 hover:bg-gray-200 transition-colors  ease-in-out p-2 cursor-pointer"
                          key={i}
                        >
                          {item.name}
                        </DropdownMenuItem>
                      )
                    })}
                    <DropdownMenuSeparator className="border mt-1" key={5} />
                    <DropdownMenuItem className="p-2 justify-center" key={6}>
                      <a
                        href="https://github.com/thisisamr/thisisamr-website"
                        target="_blank"
                        rel='noreferrer'
                      >
                        <IoLogoGithub className="dark:text-zinc-100 size-6" />
                      </a>
                    </DropdownMenuItem>
                  </motion.div>
                </DropdownMenuContent>
              )}
            </AnimatePresence>
          </DropdownMenu>
        </div>
      </Container>
    </nav>
  )
}
const menuItems = [{ name: 'About', url: '/' }, { name: 'Works', url: "/works" }, { name: 'Blog', url: "/blog" }, { name: 'Resume', url: '/resume' }]

export default Nav
