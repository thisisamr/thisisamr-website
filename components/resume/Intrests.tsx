import { IconType } from 'react-icons'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { GiAirplaneDeparture } from 'react-icons/gi'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { IoMdFitness } from 'react-icons/io'

export default function Intrests() {
  return (
    <div className="w-full">
      <div className="flex w-full justify-start gap-6 ml-4">
        {intrests.map((intrest, index) => {
          return (
            <Intrest Icon={intrest.icon} title={intrest.title} key={index} />
          )
        })}
      </div>
    </div>
  )
}

const Intrest = ({ title, Icon }: { title: string; Icon: IconType }) => {
  return (
    <div className=" flex flex-col gap-0 items-center">
      {/* <Icon fontSize={24} color={useColorModeValue('gray.600', 'gray.200')}> */}
      <Icon className="w-[24px] h-[24px] text-gray-600 dark:text-gray-200" />

      <span className="text-[12px] italic text-gray-500">{title}</span>
    </div>
  )
}
const intrests = [
  {
    title: 'music',
    icon: BsMusicNoteBeamed,
  },
  { title: 'travel', icon: GiAirplaneDeparture },
  { title: 'Reading', icon: HiOutlineBookOpen },
  { title: 'Fitness', icon: IoMdFitness },
]
