import * as React from "react"

import Facebook from "../assets/svg/soc-med/facebook.svg"
import Instagram from "../assets/svg/soc-med/instagram.svg"
import Line from "../assets/svg/soc-med/line.svg"
import LinkedIn from "../assets/svg/soc-med/linkedin.svg"
import Twitter from "../assets/svg/soc-med/twitter.svg"
import YouTube from "../assets/svg/soc-med/youtube.svg"

const socialMedias = [
  {
    icon: <Instagram className="h-4" />,
    target: "https://instagram.com/omahti_ugm"
  },
  {
    icon: <Line className="h-4" />,
    target: "https://page.line.me/fpf3818n"
  },
  {
    icon: <Facebook className="h-4" />,
    target: "https://facebook.com/omahti.ugm"
  },
  {
    icon: <YouTube className="h-4" />,
    target: "https://www.youtube.com/channel/UCsUepzJsS0WPlhuIDk64vXw"
  },
  {
    icon: <Twitter className="h-4" />,
    target: "https://twitter.com/omahti_ugm"
  },
  {
    icon: <LinkedIn className="h-4" />,
    target: "https://www.linkedin.com/company/omahti/"
  }
]

const Button = ({ children, target }) => {
  return (
    <a href={target || "/"} className="bg-white rounded-lg p-2 transform hover:scale-110">
      {children}
    </a>
  )
}

const Footer = () => {
  return (
    <footer className="bg-black py-8 px-4 lg:px-24 2xl:px-48 text-white flex flex-col space-y-4 text-center lg:text-left z-10">
      <span className="text-3xl font-bold">OmahTI UGM | Himakom UGM</span>
      <span>Gedung Fakultas MIPA UGM Sekip Utara, <br />Bulaksumur, Sinduadi, Mlati, Sleman, DI Yogyakarta</span>   
      <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-2 lg:space-y-0">
        <span>Copyright 2021 <b>OmahTI UGM</b></span>
        <div className="flex space-x-2">
          {socialMedias.map(({ icon, target }) => (
            <Button key={target} target={target}>
              {icon}
            </Button>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer