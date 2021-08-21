import * as React from "react"

const Footer = () => {
  return (
    <footer className="bg-black py-8 px-20 text-white flex flex-col space-y-4">
      <span className="text-3xl font-bold">OmahTI UGM | Himakom UGM</span>
      <span>Gedung Fakultas MIPA UGM Sekip Utara, <br />Bulaksumur, Sinduadi, Mlati, Sleman, DI Yogyakarta</span>   
      <div className="flex justify-between">
        <span>Copyright 2021 <b>OmahTI UGM</b></span>
        <div className="flex space-x-2">
          <a href="https://www.instagram.com/omahtiugm/" target="_blank" rel="noopener noreferrer">

          </a>
          <a href="https://www.facebook.com/omahtiugm/" target="_blank" rel="noopener noreferrer">

          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer