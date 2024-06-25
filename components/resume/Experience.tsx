import { useRouter } from 'next/router'
import { MdCheckCircle } from 'react-icons/md'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '../../@/components/ui/card'
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
const ListItem = ({ task }: { task: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <MdCheckCircle className="flex-shrink-0 h-3 w-3 mt-1 dark:text-white" />
      <span className="text-tiny dark:text-zinc-200">{task}</span>
    </li>
  )
}
