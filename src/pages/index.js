import * as React from "react"
import Footer from '../components/Footer'
import { Welcome, About, WhatWeDo, ReadyToJoinUs, Timeline, Benefits, Faq } from '../components/Cards'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Homepage = () => {
  return (
    <div>
      <title>Open Recruitment OmahTI 2021</title>
      <Parallax pages={7}
        className="bg-gradient-to-b from-blue-900 via-indigo-900 to-black "
      >
        <ParallaxLayer 
          offset={0}
          speed={0}
          className="flex flex-col justify-center z-10"
        >
          <Welcome />
        </ParallaxLayer>

        <ParallaxLayer offset={0.05} speed={-0.6}><div className="block bg-gradient-to-tr from-yellow-300 to-white w-32 h-32 rounded-full ml-20 " /></ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={-0.2} className="z-20 pointer-events-none"><div className="block float-right bg-gradient-to-bl from-blue-900 to-blue-400 w-20 h-20 rounded-full mr-72" /></ParallaxLayer>
        <ParallaxLayer offset={0.75} speed={0.4}><div className="block float-right bg-gradient-to-tl from-red-700 to-yellow-400 w-40 h-40 rounded-full mr-20" /></ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0.2}><div className="block bg-gradient-to-br from-purple-800 to-black w-28 h-28 rounded-full ml-10" /></ParallaxLayer>

        <ParallaxLayer 
          offset={1}
          speed={0.5}
          className="flex flex-col justify-center z-10"
        >
          <WhatWeDo />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.4}><div className="block float-right bg-gradient-to-tr from-red-700 via-blue-700 to-white w-36 h-36 rounded-full mr-32" /></ParallaxLayer>
        <ParallaxLayer offset={1.15} speed={0.6}><div className="block bg-gradient-to-bl from-green-900 to-green-300 w-28 h-28 rounded-full ml-12" /></ParallaxLayer>
        <ParallaxLayer offset={1.65} speed={-0.2} className="z-20 pointer-events-none"><div className="block bg-gradient-to-tr from-yellow-300 via-red-700 to-black w-32 h-32 rounded-full ml-16" /></ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={0.9}><div className="block float-right bg-gradient-to-br from-yellow-300 to-green-300 w-28 h-28 rounded-full mr-72" /></ParallaxLayer>

        <ParallaxLayer 
          offset={2}
          speed={0.5}
          className="flex flex-col justify-center z-10"
        >
          <Timeline />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3}
          speed={1}
          className="flex flex-col justify-center z-10"
        >
          <About />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={4}
          speed={1}
          className="flex flex-col justify-center z-10"
        >
          <Benefits />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={5}
          speed={1}
          className="flex flex-col justify-center z-10"
        >
          <Faq />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={6}
          speed={1}
          className="flex flex-col justify-between"
        >
          <ReadyToJoinUs/>
          <Footer />
        </ParallaxLayer>
      </Parallax>
      
    </div>
  )
}

export default Homepage
