import NextLink from 'next/link'
import { MdChevronRight } from 'react-icons/md'
import { Button } from '../@/components/ui/button'
import { BioSection, BioYear } from '../components/Bio'
import { Container } from '../components/Container'
import Paragraph from '../components/Paragraph'
import Section from '../components/Section'

const Home = () => {
  return (
    <Container className="md:max-w-xl">
      <div className="dark:text-zinc-100 rounded-lg p-3 mb-6 mt-10 text-center bg-zinc-200 dark:bg-zinc-700">
        Hi I&apos;m a full stack Engineer based in Cairo
        <img className="inline ml-2 mr-1" src="/eg.png" alt="" />
      </div>
      <div className="md:flex">
        <div className="flex-1">
          <h1 className="dark:text-zinc-100 text-2xl">Amr Soliman</h1>
          <p className="dark:text-zinc-100">(Engineer/Developer/Gym rat🏋️)</p>
        </div>
        <div className="shrink-0 mt-4 md:mt-0 ml-6 text-center">
          <div className="border-gray-200 border-2 border-solid  w-[100px] h-[100px] inline-block rounded-full overflow-hidden">
            <img
              className="rounded-full object-cover w-full h-full"
              src="/images/amr.JPG"
              alt="Profile image"
            />
          </div>
        </div>
      </div>
      <Section delay={0.1}>
        <Heading title="Work" />
        <Paragraph className="dark:text-zinc-100">
          Hey👋 i&apos;m Amr Soliman <br />
          i&apos;m an Engineer & a full-stack developer based in Egypt, with a
          great passion for building software, services, and learning new stuff.
          when i&apos;m not coding, i&apos;m mostly immersed in music and
          sports.
        </Paragraph>
        <div className="flex my-4 justify-center">
          <NextLink href={'/works'}>
            <Button className="bg-purple-500 font-bold flex">
              <span>My portifolio</span>
              <MdChevronRight />
            </Button>
          </NextLink>
        </div>
      </Section>
      <Section delay={0.2}>
        <Heading title="Bio" />
        <BioSection className="dark:text-zinc-100">
          <BioYear className="dark:text-zinc-100">1987</BioYear>
          Born in Cairo, Egypt.
        </BioSection>
        <BioSection className="dark:text-zinc-100">
          <BioYear className="dark:text-zinc-100">2016</BioYear>
          M.sc in Transportation Engineering & Traffic Simulation
          {/* {
            <a
              className="text-purple-500 hover:no-underline"
              target="_blank"
              href="https://www.fayoum.edu.eg/english/"
            >
              {' '}
              Cairo University, Egypt
            </a>
          } */}
        </BioSection>
        <BioSection className="dark:text-zinc-100">
          <BioYear className="dark:text-zinc-100">2017 to 2019</BioYear>
          <div className="flex flex-col gap-1">
            <span>
              Asst.Lecturer of Transportation Engineering, Traffic theory, and
              Microsimulation.
              <br />
              <span className="font-thin dark:text-zinc-500 text-sm block text-justify">
                I love teaching 🤗 because it forces you to distill your
                knowledge into something crystal that you can explain to
                someone, and it forces you to acknowledge the gaps in your
                knowledge. For me to truly master something I must teach it to
                someone else
              </span>
            </span>
            {/* <ChackraSpan fontSize={'sm'} color="gray.500">
              &quot;i&apos;m extremetly passionate about teaching and
              communicating with others and at the end of the day you feel like
              you have added value, which feels awesome 🤗&quot;
            </ChackraSpan> */}
          </div>
        </BioSection>
        <BioSection className="dark:text-zinc-100">
          <BioYear>2019 to present </BioYear>
          Full-stack Dev/Tech-Lead
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading title="I ♥" />
        <Paragraph className="dark:text-zinc-100">
          Art, Music, Sports , Travel , Technology
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Home

export const Heading = ({ title }: { title: string }) => {
  return (
    <h2 className="dark:text-zinc-100 font-bold underline underline-offset-8 decoration-gray-500 text-2xl mb-4 decoration-4">
      {title}
    </h2>
  )
}
