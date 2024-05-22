import { NextPage } from 'next'
import { Container } from '../components/Container'
import { WorkGridItem } from '../components/GridItem'
import Section from '../components/Section'
import Disney from '../public/works/disney.jpg'
import Hulu from '../public/works/hulu_2.jpeg'
import social from '../public/works/social-dash.png'
import trax from '../public/works/trax.png'
const Works: NextPage = () => {
  return (
    <Container className="mt-10 md:max-w-xl">
      <h2 className="text-[24px] mb-4 font-bold">Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section delay={0.5}>
          <WorkGridItem
            id={'disney-clone'}
            title={'Disney plus+ clone'}
            thumbnail={Disney}
          >
            A clone of Disney plus+ website
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id={'Hulu-clone'} title={'Hulu clone'} thumbnail={Hulu}>
            A clone of Hulu website
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id={'trax'} title={'Trax'} thumbnail={trax}>
            A modern music app inspired by Spotify and build with next js
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id={'social-dash'}
            title={'Awesome-dash'}
            thumbnail={social}
          >
            A public wall made with nesxtjs and prisma.
          </WorkGridItem>
        </Section>
      </div>
    </Container>
  )
}

export default Works
