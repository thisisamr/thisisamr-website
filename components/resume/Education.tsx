import { FaCircle } from 'react-icons/fa'

export default function Education() {
  return (
    <>
      {/* <div className="flex justify-start w-full py-4">
        <h1 className="tracking-widest text-sm font-bold ">EDUCATION</h1>
      </div> */}
      <Deg deg={degrees.masters_degree_transportation} />
      <Deg deg={degrees.bachelors_degree_civil} />
    </>
  )
}

const Deg = (props: Degree) => {
  const { deg } = props
  const { degree, degree_name, location, university, year } = deg
  return (
    <div className="flex flex-col items-start w-full p-2">
      <div className="flex">
        <div className="flex flex-col items-start">
          <div className="flex justify-center items-center gap-2">
            <FaCircle className="dark:text-gray-200 rounded-full size-2" />
            <p className="text-[15px]">
              <span className="font-bold dark:text-zinc-100">{degree}</span>{' '}
              <span className="ml-1 text-[12px] dark:text-zinc-400">
                {degree_name}
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <p className="text-[14px] ml-4 dark:text-gray-100">{university}</p>
            <p className="italic text-[10px] text-gray-500">
              {year} , {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const degrees = {
  masters_degree_transportation: {
    degree: 'M.sc',
    degree_name: 'Transportation & Traffic Simulation',
    year: '2016',
    university: 'Fayoum University',
    location: 'Egypt',
  },

  bachelors_degree_civil: {
    degree: 'b.sc',
    degree_name: 'Civil Engineering',
    year: '2011',
    university: 'Cairo University',
    location: 'Egypt',
  },
}

export interface Degree {
  deg: {
    degree: string
    degree_name: string
    year: string
    university: string
    location: string
  }
}
