import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiLinkedin } from 'react-icons/si'

export default function Social() {
  return (
    <div className=" flex justify-start gap-4 ml-4 w-full items-center">
      <a className="p-2 text-pink-500 no-underline">
        <AiOutlineInstagram fontSize={16} />
      </a>
      <a className="p-2">
        <SiLinkedin className="text-blue-500" fontSize={16} />
      </a>
      <a
        className="p-2"
        href="https://facebook.com/amr.soliman.520125"
        target={'_blank'}
        rel='noreferrer'
      >
        <FaFacebookF className="text-blue-400" fontSize={16} />
      </a>
      <a className="p-2 dark:text-zinc-100">
        <FaXTwitter fontSize={16} />
      </a>
    </div>
  )
}
