import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

/*const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`*/
const Logo = () => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }
  const logosrc = `/images/${resolvedTheme == 'light' ? '1.png' : '2.png'}`
  return (
    <Link href={'/'}>
      <Image
        src={logosrc}
        width={200}
        height={65}
        className="max-h-[65px]"
        alt="logo"
      />
    </Link>
  )
}

export default Logo
