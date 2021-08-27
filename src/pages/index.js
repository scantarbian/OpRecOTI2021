import * as React from "react"
import Footer from '../components/Footer'
import { Welcome, About, WhatWeDo, ReadyToJoinUs, Timeline, Benefits, Faq } from '../components/Cards'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Homepage = () => {
  return (
    <div>
      <title>Open Recruitment OmahTI 2021</title>
      <Parallax pages={8}
        className="bg-gradient-to-b from-blue-900 via-indigo-900 to-black "
      >
        <ParallaxLayer 
          offset={0}
          speed={0.5}
          className="py-16 px-24 flex flex-col justify-center"
        >
          <Welcome />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1}
          speed={0.5}
          className="py-16 px-24 flex flex-col justify-center"
        >
          <WhatWeDo />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2}
          speed={0.5}
          className="py-16 px-24 flex flex-col justify-center"
        >
          <Timeline />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3}
          speed={0.5}
          className="py-16 px-24 flex flex-col justify-center"
        >
          <About />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={4}
          speed={0.5}
          className="py-16 px-24 flex flex-col justify-center"
        >
          <Benefits />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={5}
          speed={0.5}
          className="py-16 px-24 flex flex-col justify-center"
        >
          <Faq />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={6}
          speed={0.5}
          className="py-16 px-24 flex flex-col justify-between"
        >
          <ReadyToJoinUs />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={7}
          speed={0.5}
          className="flex flex-col justify-end"
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Homepage
