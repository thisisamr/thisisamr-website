import { Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { useEffect, useState } from 'react'
import { RxMoon } from 'react-icons/rx'
import { Button } from '../@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="p-2 ml-4">
          {resolvedTheme == 'dark' && (
            <RxMoon className="text-white text-[20px]" />
          )}
          {resolvedTheme == 'light' && <Sun className="text-yellow-500" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="dark:text-zinc-300 bg-zinc-100 dark:bg-black border-none p-2 mr-4 z-50"
      >
        <DropdownMenuItem
          className=" cursor-pointer px-1 hover:border-none hover:outline-none dark:hover:text-zinc-50 hover:text-black transition-colors duration-300"
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className=" cursor-pointer px-1 hover:border-none hover:outline-none dark:hover:text-zinc-50 hover:text-black transition-colors duration-300"
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className=" cursor-pointer px-1 hover:border-none hover:outline-none dark:hover:text-zinc-50 hover:text-black transition-colors duration-300"
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
