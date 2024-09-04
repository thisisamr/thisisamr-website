import { NextPage } from 'next'
import { Container } from '../components/Container'
import { WorkGridItem } from '../components/GridItem'
import Section from '../components/Section'
import Disney from '../public/works/disney.jpg'
import Hulu from '../public/works/hulu_2.jpeg'
import social from '../public/works/social-dash.png'
import trax from '../public/works/trax.png'
import tiny from '../public/works/tiny-trail-banner.jpg'
let works = [
  {
    id: 'tiny-trail',
    title: 'Tiny Trail',
    thumb: tiny,
    description: 'A fast url shortener made with Go and Redis',
  },
  {
    id: 'disney-clone',
    title: 'Desney plus+ clone',
    thumb: Disney,
    description: 'A clone of Disney plus+ website',
  },
  {
    id: 'Hulu-clone',
    title: 'Hulu clone',
    thumb: Hulu,
    description: 'A clone of Hulu website',
  },
  {
    id: 'trax',
    title: 'Trax',
    thumb: trax,
    description:
      'A modern music app inspired by Spotify and build with Nextjs and Prisma',
  },
  {
    id: 'social-dash',
    title: 'Awesome-dash',
    thumb: social,
    description: 'A public wall made with nextjs and prisma.',
  },
]
const Works: NextPage = () => {
  return (
    <Container className="mt-10 md:max-w-xl">
      <h2 className="text-[24px] mb-4 font-bold">Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {works.map((project, i) => {
          return (
            <Section delay={0.5} key={i}>
              <WorkGridItem
                id={project.id}
                title={project.title}
                thumbnail={project.thumb}
              >
                {project.description}
              </WorkGridItem>
            </Section>
          )
        })}
      </div>
    </Container>
  )
}

export default Works
