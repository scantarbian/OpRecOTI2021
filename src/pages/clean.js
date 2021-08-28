import * as React from "react"
import Footer from '../components/Footer'
import { Timeline } from "../components/Timeline"
import { Welcome, About, WhatWeDo, ReadyToJoinUs, Benefits, Faq } from '../components/Cards'

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
        <div className="absolute bg-gradient-to-tr from-yellow-300 to-white w-32 h-32 rounded-full ml-10" style={{top: '2%'}}/>
        <div className="absolute right-0 bg-gradient-to-bl from-blue-900 to-blue-400 w-20 h-20 rounded-full mr-96 z-20" style={{top: '17%'}}/>
        <div className="absolute right-0 bg-gradient-to-tl from-red-700 to-yellow-400 w-32 h-32 rounded-full mr-10" style={{top: '66%'}}/>
        <div className="absolute bg-gradient-to-br from-purple-800 to-black w-28 h-28 rounded-full ml-16" style={{top: '67%'}}/>

        <div className="absolute right-0 bg-gradient-to-tr from-red-700 via-blue-700 to-white w-36 h-36 rounded-full mr-32" style={{top: '89%'}}/>
        <div className="absolute bg-gradient-to-bl from-green-900 to-green-300 w-28 h-28 rounded-full ml-12" style={{top: '92%'}}/>
        <div className="absolute bg-gradient-to-tr from-yellow-300 via-red-700 to-black w-32 h-32 rounded-full ml-14 z-20" style={{top: '162%'}}/>
        <div className="absolute right-0 bg-gradient-to-br from-yellow-300 to-green-300 w-28 h-28 rounded-full mr-72" style={{top: '160%'}}/>

        <div className="absolute right-0 bg-gradient-to-tr from-red-700 to-red-400 w-20 h-20 rounded-full mr-44" style={{top: '220%'}}/>
        <div className="absolute bg-gradient-to-tr from-purple-700 via-blue-700 to-white w-52 h-52 rounded-full ml-12" style={{top: '260%'}}/>

        <div className="absolute bg-gradient-to-br from-yellow-600 to-yellow-300 w-32 h-32 rounded-full ml-72 z-20" style={{top: '348%'}}/>
        <div className="absolute right-0 bg-gradient-to-bl from-blue-600 to-yellow-300 w-48 h-48 rounded-full mr-6" style={{top: '372%'}}/>

        <div className="absolute bg-gradient-to-tr from-blue-600 via-pink-300 to-white w-56 h-56 rounded-full ml-2" style={{top: '390%'}}/>
        <div className="absolute right-0 bg-gradient-to-tl from-red-900 to-red-400 w-16 h-16 rounded-full mr-96 z-20" style={{top: '412%'}}/>
        <div className="absolute right-0 bg-gradient-to-tr from-green-400 to-green-700 w-28 h-28 rounded-full mr-20" style={{top: '472%'}}/>

        <div className="absolute bg-gradient-to-bl from-yellow-700 via-yellow-300 to-yellow-700 w-24 h-24 rounded-full ml-52 z-20" style={{top: '496%'}}/>
        <div className="absolute right-0 bg-gradient-to-tr from-blue-600 to-green-400 w-12 h-12 rounded-full mr-72 z-20" style={{top: '576%'}}/>
        <div className="absolute bg-gradient-to-br from-green-500 to-pink-400 w-40 h-40 rounded-full ml-20" style={{top: '562%'}}/> 

        <div className="absolute right-0 bg-gradient-to-tl from-purple-400 to-pink-300 w-32 h-32 rounded-full mr-8" style={{top: '622%'}}/>
        <div className="absolute bg-gradient-to-bl from-blue-600 to-pink-300 w-20 h-20 rounded-full ml-56 z-20" style={{top: '646%'}}/>
      </main>
    </div>
  )
}

export default HomepageAlt
