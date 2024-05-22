import { MdCheckCircle } from 'react-icons/md'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from '../../@/components/ui/card'
import { useRouter } from 'next/router'
import { Job } from './data'
export default function Experience({ job }: { job: Job }) {
  const router = useRouter()
  return (
    <div>
      <Card
        className="p-1  rounded-md border-none hover:scale-105 transition-transform duration-300 hover:border-white cursor-pointer"
        onClick={() => {
          router.push('/resume/projects')
        }}
      >
        <CardTitle className="ml-4 mb-2 font-thin text-md tracking-wider dark:text-white">
          {job.title}
        </CardTitle>
        <CardDescription className="text-xs mb-2 flex flex-col gap-1">
          <span>
            <span className="text-zinc-500 italic">{job.period} |</span>
            <span className="font-bold dark:text-zinc-100">
              {' '}
              {job.Employer}
            </span>
          </span>
          <span className="text-zinc-500 italic text-tiny">
            (Tasks/Accomplishments)
          </span>
        </CardDescription>
        <CardContent className="block text-justify">
          {job.tasks.map((task, index) => {
            return <ListItem key={index} task={task} />
          })}
        </CardContent>
      </Card>
    </div>
  )
}
const tasks = [
  'Leading development teams, providing solutions, code reviews and offshore coordination as well as architecting solutions to use the latest technologies and best practices.',
  'Design and implementation of rest services in node and dontnet core, migrating front-end legacy javascript code and enhancing developer experience.',
  'Design and implemntation of application specific Apis in graphql, enhancing fontend experience and performance by minimizing rest api calls through grapgQL custom wrappers',
  'Design and develop token based authentication microservices.',
  'Developed a home-grown 🪴 Graphql based database syncronization app using Apollo server , Prisma and NextJS.',
  'Carry out unit and integration tests in node and dotnet core.',
  'Interviewing and hiring junior developers',
]
const ListItem = ({ task }: { task: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <MdCheckCircle className="flex-shrink-0 h-3 w-3 mt-1 dark:text-white" />
      <span className="text-tiny dark:text-zinc-200">{task}</span>
    </li>
  )
}
