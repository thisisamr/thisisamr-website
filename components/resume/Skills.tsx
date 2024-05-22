import { IconType } from 'react-icons'
import { CgCPlusPlus } from 'react-icons/cg'
import { FaRust } from 'react-icons/fa'
import { SiCsharp, SiJavascript, SiTypescript } from 'react-icons/si'
import { TbSql } from 'react-icons/tb'

export default function Skills() {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-1/2 gap-2">
        {myskills_left.map((item, index) => {
          return (
            <Skill
              Icon={item.skillIcon}
              color={item.color}
              skill={item.skill_title}
              key={index}
            />
          )
        })}
      </div>
      <div className="flex flex-col w-1/2 gap-2">
        {myskills_right.map((item, index) => {
          return (
            <Skill
              Icon={item.skillIcon}
              color={item.color}
              skill={item.skill_title}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

const Skill = ({
  skill,
  Icon,
  color,
}: {
  skill: string
  Icon: IconType
  color: string
}) => {
  return (
    <div className="flex justify-start w-full gap-1 items-center">
      <Icon className={`text-[24px] ${color}`} />
      <p className="text-[10px] italic dark:text-gray-400">{skill}</p>
    </div>
  )
}

const myskills_left = [
  { skill_title: 'C++', skillIcon: CgCPlusPlus, color: 'text-blue-500' },
  { skill_title: 'Cshap', skillIcon: SiCsharp, color: 'text-purple-500' },
  { skill_title: 'Rust', skillIcon: FaRust, color: 'text-orange-500' },
]
const myskills_right = [
  {
    skill_title: 'Typescript',
    skillIcon: SiTypescript,
    color: 'text-blue-400',
  },
  {
    skill_title: 'JavaScript',
    skillIcon: SiJavascript,
    color: 'text-yellow-500',
  },
  { skill_title: '', skillIcon: TbSql, color: 'text-pink-500' },
]
