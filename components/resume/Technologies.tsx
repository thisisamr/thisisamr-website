import { IconType } from 'react-icons'
import { FaNodeJs } from 'react-icons/fa'
import {
  SiActix,
  SiApollographql,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiRedis
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Technologies = () => {
  return (
    <div className=" flex w-full">
      <div className="flex flex-col w-1/2 gap-4">
        {technologies_left.map((item, index) => {
          return (
            <Technology
              key={index}
              Icon={item.technologyIcon}
              Technology={item.technology_title}
              color={item.color}
            />
          )
        })}
      </div>

      <div className="flex flex-col w-1/2 gap-4">
        {technologies_right.map((item, index) => {
          return (
            <Technology
              key={index}
              Icon={item.technologyIcon}
              Technology={item.technology_title}
              color={item.color}
            />
          )
        })}
      </div>
    </div>
  )
}

const Technology = ({
  Technology,
  Icon,
  color,
}: {
  Technology: string
  Icon: IconType
  color: string
}) => {
  return (
    <div className="flex justify-start w-full gap-1 items-center">
      <Icon className={`text-[24px] ${color}`} />
      <p className="text-[10px] italic dark:text-gray-400">{Technology}</p>
    </div>
  )
}

// Custom Icon for ChilliCream GraphQL Platform
const ChilliCreamIcon = () => (
  <svg viewBox="0 0 24 24" focusable="false" className="size-6">
    <svg
      id="badc975a-58b2-46ff-b5d2-37f3c7a2c6f6"
      viewBox="0 0 2000 2000"
      color="pink"
    >
      <path
        fill="red"
        id="a984a27a-1d44-4be6-b319-64a55bff99f0"
        d="M1000,0C447.7,0,0,447.7,0,1000c0,507.4,378,926.6,867.7,991.3-61.8-95.7-101.3-204.4-136.6-312.1-43.2-132-68.8-268.9-92.8-405.5-2.1-12.1-7.6-57.8-22.6-61.9-16.3-4.5-34.3,33.8-45,42.6-17.9,14.7-37.9,26.2-57.8,37.9-13.6,8-28.1,18.8-43.4,25.2-18.5,11.7-41.7,16.5-64.2,17.5-37.4,1.8-79.4,1-113.8-15.3-35.5-16.9-60.6-52.4-86.5-80.8-16.3-17.9-32.7-35.8-49-53.8-12.8-14-29-38-50.7-31.2-9.5,3-17.2.2-22.3-5.3-10.2-8-15-23.5-3.4-35.5,63.7-65.8,161.4-91.8,248.4-60.5,47,16.9,77.2,47.3,113.4,79.8,32.5,29.1,79.9,37.5,120.9,23.4,13.6-4.7,42.2-15.5,47.4-29.8,7.3-19.8-5.1-62.6-6-84.3a1087.81,1087.81,0,0,1,10.7-199.2s59.7-7.5,70.4-7.5a7,7,0,0,0,.3,1.4c10.6,33.6,10.4,71.1,26.8,102.8,6.5,12.5,15.3,26.9,28.3,33.8,30,16,163.2,19.8,192.7,4.7,43.3-22.2,75.2-138.2,75.4-141.7,8.3,0,77.3.1,85.6,0,.2,3.5,32.1,119.5,75.4,141.7C1198.8,992.9,1332,989,1362,973c13-6.9,21.8-21.3,28.3-33.8,16.4-31.7,16.2-69.2,26.8-102.8a7,7,0,0,0,.3-1.4c12.4.1,60.2,6.9,74.9,9a876,876,0,0,1-16.8,184.2c-5.3,26.5-11.3,53.3-19.7,79.1-7.3,22.5-18.1,37.8-13.1,63,2.8,13.8,10.6,27.2,23.2,33.6,31.8,16.1,82.2-7.6,102.1-32.8,28-35.4,52.4-68.8,89.2-96,63.6-47.1,173.8-89.3,248.5-44.7,18.6,11.1,13,36.5-5.7,43.5-24.5,9.1-25.6,44.6-26.6,66-1.3,28.1-2.7,56.3-16.6,81.5-27.4,50-83.6,71.5-136.3,83.3-58.1,13-120.1,23.6-177.5,2.1-14.1-5.3-27.3-11-42.2-13.8-15.1-2.8-30.5-3.7-45.2-8.5a141.09,141.09,0,0,1-51-29.8c-5,13.3-10.1,26.6-15.1,39.9-33.1,87.7-64.2,176.2-90.9,266-31.6,106.4-56.8,215-70.8,325.2q-5.7,44.85-8.8,90.1c446.9-99.9,781-498.9,781-976C2000,447.7,1552.3,0,1000,0Zm525.5,705.7c-9.5,11-26,14-43.3,13.9,2.4,16.4,6.3,55,6.3,55s-145.4-5.4-198.8-6.1q-103.65-1.35-207,4c-7.1.3-49.4.6-63.4,0q-103.5-5.1-207-4c-49,.6-185.6,6.2-185.6,6.2s12.6-54.5,19.7-78.7c-10.5,0-21.1-.6-31.5-1.6-10-1-20.8-6.5-22.9-17.5-12.1-62.4,29-118.9,62.5-168A469,469,0,0,1,769.6,391c-16-37.8-5-79.3,20.5-110.6,21.8-27.2,55.5-44.4,78-52.4a245.32,245.32,0,0,1,23.9-7.5c29.7-7.7,60.7-11.4,88.7-24.8-2.2-3.1-37.7-27-48.4-41.1-23.5-31.1,9.2-60,37.7-68.7,16-4.8,34.1-8,49.4.4,16.4,9,36.4,52.6,37.9,55.6,22.7-30.6,53.4-82.2,94.9-72.8,38.3,8.6,71.6,59.7,86,93.5,11,25.9,15.4,53.8,12.2,81.1,43.6,9.5,106.4,32.7,133.3,79.5,8.2,15.9,10.5,28.2,10.5,44.6s-6.8,44.1-15.5,63c53.7,20.2,100,57.4,127.8,108.2a241.52,241.52,0,0,1,27.5,86.4C1536.8,647.9,1541.7,686.9,1525.5,705.7Z"
      ></path>
    </svg>
  </svg>
)

// Custom Icon for Dotnet Core
const DotnetCoreIcon = () => (
  <text x="0" y="15" fill="blue">
    <span className="text-sm text-purple-700">.NET</span>
    <span className="text-purple-600">Core</span>
  </text>
)

// Custom Icon for EF Core
const EFCoreIcon = () => (
  <text x="0" y="15" fill="green" className="text-blue-600">
    EF Core
  </text>
)

const technologies_left = [
  {
    technology_title: 'Node',
    technologyIcon: FaNodeJs,
    color: 'text-green-400',
  },
  {
    technology_title: 'ChilliCream GraphQL Platform',
    technologyIcon: ChilliCreamIcon,
    color: 'text-pink-400',
  },
  {
    technology_title: 'Apollo GraphQL',
    technologyIcon: SiApollographql,
    color: 'text-blue-700',
  },
  {
    technology_title: 'Dotnet Core',
    technologyIcon: DotnetCoreIcon,
    color: 'text-blue-500',
  },
  {
    technology_title: 'PostgreSQL',
    technologyIcon: SiPostgresql,
    color: 'text-blue-500',
  },
  {
    technology_title: 'Redis',
    technologyIcon: SiRedis,
    color: 'text-red-500',
  },
  //   {
  //     technology_title: 'MongoDB',
  //     technologyIcon: DiMongodb,
  //     color: 'text-green-500',
  //   },
]

const technologies_right = [
  {
    technology_title: 'Express.js',
    technologyIcon: SiExpress,
    color: 'dark:text-white',
  },
  {
    technology_title: 'NestJS',
    technologyIcon: SiNestjs,
    color: 'text-red-400',
  },
  {
    technology_title: 'EF Core',
    technologyIcon: EFCoreIcon,
    color: 'text-blue-500',
  }, // Image used, no direct icon component
  {
    technology_title: 'Prisma ORM',
    technologyIcon: SiPrisma,
    color: 'text-teal-500',
  },
  //   {
  //     technology_title: 'Neo4j',
  //     technologyIcon: SiNeo4J,
  //     color: 'text-blue-500',
  //   },
  {
    technology_title: 'Actix',
    technologyIcon: SiActix,
    color: 'text-blue-500',
  },
  {
    technology_title: 'Next.js',
    technologyIcon: TbBrandNextjs,
    color: 'dark:text-white',
  },
]
export default Technologies
