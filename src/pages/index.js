import * as React from "react"
import Footer from '../components/Footer'
import { Welcome, About, WhatWeDo, ReadyToJoinUs } from '../components/Cards'

const IndexPage = () => {
  return (
    <div className="text-white bg-gradient-to-b from-blue-900 via-indigo-900 to-black">
      <title>Open Recruitment OmahTI 2021</title>
      <main className="flex flex-col py-16 px-24 space-y-16">
        <Welcome />
        <WhatWeDo />
        <About />
        <ReadyToJoinUs />
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
