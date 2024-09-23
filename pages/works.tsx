import { NextPage } from 'next'
import { Container } from '../components/Container'
import { WorkGridItem } from '../components/GridItem'
import Section from '../components/Section'
import Disney from '../public/works/disney.jpg'
import Hulu from '../public/works/hulu_2.jpeg'
import social from '../public/works/social-dash.png'
// import trax from '../public/works/trax.png'
import issue from '../public/works/issue-tracker.png'
import tiny from '../public/works/tiny-trail-banner.jpg'
import animeplanet from '../public/works/anime.png'
let works = [
  {
    id: 'tiny-trail',
    title: 'Tiny Trail',
    thumb: tiny,
    description: 'A fast url shortener made with Go and Redis',
    link: "https://github.com/thisisamr/tiny-trail"
  },
  {
    id: 'disney-clone',
    title: 'Desney plus+ clone',
    thumb: Disney,
    description: 'A clone of Disney plus+ website',
    link: "https://disney-clone-iota.vercel.app/"
  },
  {
    id: 'Hulu-clone',
    title: 'Hulu clone',
    thumb: Hulu,
    description: 'A clone of Hulu website',
    link: "http://hulu-clone-asolyma.vercel.app/"
  },
  // {
  //   id: 'trax',
  //   title: 'Trax',
  //   thumb: trax,
  //   description:
  //     'A modern music app inspired by Spotify and build with Nextjs and Prisma',
  //   link: ""
  // },
  {
    id: 'social-dash',
    title: 'Awesome-dash',
    thumb: social,
    description: 'A public wall made with nextjs and prisma.',
    link: "https://social-dashboard-fullstack.vercel.app/"
  },
  {
    id: 'anime-planet',
    title: "AnimePlanet",
    thumb: animeplanet, description: 'Discover your favorite anime effortlessly with our sleek, infinite scrolling interface.',
    link: 'https://anime-planet-opal.vercel.app/'
  }
  , {
    id: "Issue-tracker",
    title: "Issue Tracker",
    thumb: issue, description: "An issue Tracker application build with Nextjs", link: "https://issue-tracker-web-delta.vercel.app/"
  }
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
                link={project.link}
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
