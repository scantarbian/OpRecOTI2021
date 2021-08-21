import * as React from "react"

const Core = ({ children }) => {
  return (
    <div className="flex flex-col space-y-4 text-center items-center p-8 rounded-3xl
      border-2
      backdrop-filter backdrop-blur-lg bg-opacity-25 bg-black">
      {children}
    </div>
  )
}

export const Welcome = () => {
  return (
    <Core>
      <h1 className="font-bold text-5xl leading-none
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400">Open<br/>Recruitment</h1>
      <div className="font-medium">
        <p>Bergabung bersama kami untuk ikut berkontribusi di berbagai bidang IT. Tingkatkan skillmu dan belajar bersama kami,</p>
        <span className="text-yellow-500">Join OmahTI!</span>
      </div>
      <button className="p-2 px-8 bg-blue-500 font-bold rounded-full">
        Daftar
      </button>
    </Core>
  )
}

export const About = () => {
  return (
    <Core>
      <h1 className="font-bold text-5xl leading-none
      text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-400">ABOUT OMAHTI</h1>
      <p className="font-medium"> 
        Organisasi Mahasiswa Ahli Teknologi Informasi atau lebih dikenal OmahTI bermula pada awal September 2002 di Laboratorium Inovasi. 
        Kemudian Laboratorium ini berubah nama, sifat dan orientasi kegiatannya. 
        Berdiri dengan tujuan sebagai pusat pengembangan potensi mahasiswa Ilmu Komputer UGM di bidang Teknologi informasi.
      </p>
    </Core>
  )
}