import * as React from "react"
import Footer from '../components/Footer'
import { Welcome, About } from '../components/Cards'

const IndexPage = () => {
  return (
    <div className="text-white">
      <title>Open Recruitment OmahTI 2021</title>
      <main className="flex flex-col py-16 px-24 space-y-16">
        <Welcome />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
