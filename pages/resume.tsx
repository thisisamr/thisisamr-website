import Contacts from '../components/resume/Contact'
import { experience } from '../components/resume/data'
import Education from '../components/resume/Education'
import Experience from '../components/resume/Experience'
import Intrests from '../components/resume/Intrests'
import Languages from '../components/resume/Languages'
import Skills from '../components/resume/Skills'
import Social from '../components/resume/Social'
import Technologies from '../components/resume/Technologies'
const Resume = () => {
  return (
    <div className=" flex flex-col md:flex-row mt-5">
      <div className="md:w-3/4">
        <div className="flex flex-col justify-around items-center">
          <Contacts />
          <div className=" w-full py-4">
            <h2 className="tracking-widest font-bold dark:text-zinc-100">
              EDUCATION
            </h2>
          </div>
          <Education />
          <div className=" w-full py-4">
            <h2 className="tracking-widest font-bold dark:text-zinc-100">
              SKILLS
            </h2>
          </div>
          <Skills />

          <div className=" w-full py-4">
            <h2 className="tracking-widest font-bold dark:text-zinc-100">
              TECHNOLOGIES
            </h2>
          </div>
          <Technologies />
          <div className=" w-full py-4">
            <h2 className="tracking-widest font-bold dark:text-zinc-100">
              LANGUAGES
            </h2>
          </div>
          <Languages />
          <div className=" w-full py-4">
            <h2 className="tracking-widest font-bold dark:text-zinc-100">
              INTRESTS
            </h2>
          </div>

          <Intrests />
          <div className="w-full py-4">
            <h2 className="tracking-widest font-bold dark:text-zinc-100">
              SOCIAL
            </h2>
          </div>

          <Social />
        </div>
      </div>
      {/******************************************************************************************************* */}
      {/**right side */}
      <div className="w-full">
        <div className="flex flex-col">
          <div className="w-full py-4">
            <h2 className="dark:text-zinc-100 tracking-widest text-sm  font-bold">
              Experience
            </h2>
          </div>

          <div className="flex flex-col w-full gap-2">
            <Experience job={experience.tech_lead_product_consultant} />
            <Experience job={experience.tech_lead} />
            <Experience job={experience.training_manager} />
            <Experience job={experience.assistant_lecturer} />
            <Experience job={experience.Transportation_engineer} />
            <Experience job={experience.Technical_support_Engineer} />
            <Experience job={experience.Highway_Consultant_Engineer} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
