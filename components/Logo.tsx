import { useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

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
  const logosrc = `/images/${useColorModeValue('1.png', '2.png')}`
  return (
    <Link href={'/'}>
      <a>
        <Image
          src={logosrc}
          width={250}
          height={65}
          objectFit="contain"
          alt=""
        />
      </a>
    </Link>
  )
}

export default Logo
