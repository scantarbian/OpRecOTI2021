import * as React from "react"
import Footer from '../components/Footer'
import { Welcome, About, WhatWeDo, ReadyToJoinUs, Timeline, Benefits, Faq } from '../components/Cards'

const HomepageAlt = () => {
  return (
    <div>
      <title>Open Recruitment OmahTI 2021</title>
      <main className="static ">
        <div className="flex flex-col pt-16 space-y-32 bg-gradient-to-b from-blue-900 via-indigo-900 to-black">
          <Welcome />
          <WhatWeDo />
          <Timeline />
          <About />
          <Benefits />
          <Faq />
          <ReadyToJoinUs />
          <Footer />
        </div>
        <div className="absolute bg-gradient-to-tr from-yellow-300 to-white w-32 h-32 rounded-full ml-10" style={{top: '30px'}}/>
        <div className="absolute bg-gradient-to-br from-purple-800 to-black w-28 h-28 rounded-full ml-10" style={{top: '384px'}}/>
        <div className="absolute bg-gradient-to-bl from-green-900 to-green-300 w-28 h-28 rounded-full ml-12" style={{top: '592px'}}/>
        <div className="absolute bg-gradient-to-tr from-yellow-300 via-red-700 to-black w-32 h-32 rounded-full ml-16 z-20" style={{top: '1040px'}}/>
        <div className="absolute right-0 bg-gradient-to-bl from-blue-900 to-blue-400 w-20 h-20 rounded-full mr-96 z-20" style={{top: '130px'}}/>
        <div className="absolute right-0 bg-gradient-to-tl from-red-700 to-yellow-400 w-40 h-40 rounded-full mr-10" style={{top: '390px'}}/>
        <div className="absolute right-0 bg-gradient-to-tr from-red-700 via-blue-700 to-white w-36 h-36 rounded-full mr-32" style={{top: '582px'}}/>
        <div className="absolute right-0 bg-gradient-to-br from-yellow-300 to-green-300 w-28 h-28 rounded-full mr-72" style={{top: '1064px'}}/>
      </main>
    </div>
  )
}

export default HomepageAlt
