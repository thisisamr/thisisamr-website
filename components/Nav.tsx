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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../@/components/ui/dropdown-menu'
import { Container } from './Container'
import Logo from './Logo'
import { ModeToggle } from './ThemeSwitcher'

// const LinkItem: FC<{
//   href: Url | String
//   children: string | (JSX.Element | JSX.Element[])
//   path: any
//   target?: string
//   style?: React.CSSProperties
// }> = ({ href, path, children, style }) => {
//   // const active = path == href

//   return (
//     <NextLink href={href as Url} passHref className="p-2 active:text-gray-500">
//       {/* <a
//         className="p-2 active:text-gray-500"
//         // bg={active ? 'grassTeal' : undefined}
//         style={style}
//       > */}
//       {children}
//       {/* </a> */}
//     </NextLink>
//   )
// }

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
                <DropdownMenuContent className="mt-2 mr-1  space-y-1 bg-black/95 w-52">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                  >
                    <DropdownMenuLabel className="italic text-center " key={1}>
                      thisisamr.site
                    </DropdownMenuLabel>
                    <DropdownMenuItem className="p-2 cursor-pointer" key={2}>
                      <NextLink href="/" passHref>
                        <span>About</span>
                      </NextLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push('/blog')}
                      className="p-2 cursor-pointer"
                      key={3}
                    >
                      Blog
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push('/works')}
                      className="p-2 cursor-pointer"
                      key={4}
                    >
                      Works
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="p-2 cursor-pointer"
                      onClick={() => router.push('/resume')}
                    >
                      Resume
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="border" key={5} />
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
          {/* <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <NextLink href="/resume" passHref>
                  <MenuItem as={Link}>Resume</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/thisisamr/thisisamr-website"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box> */}
        </div>
      </Container>
    </nav>
  )
}

export default Nav
