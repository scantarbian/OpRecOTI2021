import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { BaseCore, Core } from "../components/Cards";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { UploadIcon } from "@heroicons/react/solid";

const divisionList = [
  {
    logo: "webdev.png",
    name: "Web Development",
    file: 'CHALLENGE WEBDEV.pdf'
  },
  {
    logo: "datsci.png",
    name: "Data Science",
    file: 'Soal Data Science.pdf'
  },
  {
    logo: "cp.png",
    name: "Competitive Programming",
    file: 'Penugasan Oprec CP 2021.pdf'
  },
  {
    logo: "uix.png",
    name: "UI/UX",
    file: 'Soal UIUX 2021.pdf'
  },
  {
    logo: "ma.png",
    name: "Mobile Apps",
    file: 'Penugasan Oprec Mobile Apps.pdf'
  },
  {
    logo: "webdes.png",
    name: "Web Design",
    file: 'Penugasan Webdes.pdf'
  },
  {
    logo: "cysec.png",
    name: "Cyber Security",
    file: 'Soal Cyber Security.pdf'
  },
  {
    logo: "gamedev.png",
    name: "Game Development",
    file: 'Soal oprec GAMEDEV.pdf'
  },
];

const Daftar = () => {
  const [division, setDivision] = useState(null);
  return (
    <div className="bg-figma-omahti">
      <title>Penugasan OmahTI 2021</title>
      <main className="static bg-omahti bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col items-center text-center py-16 space-y-10 mx-4 lg:mx-24 2xl:mx-48">
          <h1
            className="font-black text-4xl lg:text-6xl
            text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 "
          >
            PENUGASAN
          </h1>
          {divisionList.map((d) => (
            <DivisiMobile name={d.name} logo={d.logo} />
          ))}
          <BaseCore className="hidden lg:flex items-center p-4 w-full justify-evenly">
            <div
              className="font-bold text-xl leading-tight text-left w-32 lg:text-5xl
              text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 hidden lg:block "
            >
              <p>
                Pilih
                <br />
                Divisi
              </p>
            </div>
            {divisionList.map((d, index) => (
              <div className={`w-14 2xl:w-28 h-14 2xl:h-28 ${division === index ? 'bg-yellow-400' : ''} rounded-lg flex items-center justify-center`}>
                <img
                  src={`/divisi-oti/${d.logo}`}
                  alt={d.name}
                  className="w-10 2xl:w-14"
                  onClick={() => setDivision(index)}
                />
              </div>
            ))}
          </BaseCore>
          {division != null && (
            <Core noAni className="flex flex-col w-full">
              <span className="text-xl font-bold">{divisionList[division].name}</span>
              <iframe
                src={`/pdf/${divisionList[division].file}`}
                className="w-full" style={{ height: '100vh' }}
              ></iframe>
            </Core>
          )}
          <div className="flex flex-col lg:flex-row lg:justify-between space-x-0 space-y-10 lg:space-x-10 lg:space-y-0 w-full">
            <div className="flex flex-col text-center lg:text-left space-y-6 w-full">
              <h2
                className="font-black text-2xl lg:text-4xl leading-loose
                text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 text-center lg:text-left"
              >
                Catatan Penugasan
              </h2>
              <BaseCore className="p-4">
                <p className="font-semibold text-lg">
                  Penugasan dikerjakan dalam bentuk dokumen word dan dicompress
                  dalam bentuk zip.
                </p>
              </BaseCore>
              <BaseCore className="p-4">
                <p className="font-semibold text-lg">
                  Maksimal pengumpulan tugas sebelum melakukan wawancara.
                </p>
              </BaseCore>
              <BaseCore className="p-4">
                <p className="font-semibold text-lg">
                  Jika penugasan menggunakan platform lain seperti Hackerrank,
                  maka cukup melampirkan screenshot dan dimasukkan ke dalam
                  dokumen.
                </p>
              </BaseCore>
              <BaseCore className="p-4">
                <p className="font-semibold text-lg">
                  Apabila terdapat coding silahkan disertakan dalam satu file
                  zip.
                </p>
              </BaseCore>
            </div>
            {/* <div className="flex flex-col items-center space-y-6 text-right">
              <h2
                className="font-black text-2xl lg:text-4xl leading-loose
                text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 text-center lg:text-right"
              >
                Upload Tugas
              </h2>
              <BaseCore className="flex px-8 py-5 rounded-3xl">
                <div className="flex flex-col lg:block">
                  <div
                    className="font-extrabold text-3xl"
                    style={{ fontFamily: "inter" }}
                  >
                    Submit
                  </div>
                  <div
                    className="font-medium mt-2"
                    style={{ fontFamily: "inter" }}
                  >
                    Kumpulkan penugasanmu di link ini
                  </div>
                </div>
                <div className='w-20 h-20 border-4 rounded-xl'>
                  <UploadIcon />
                </div>
              </BaseCore>
            </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const DivisiMobile = ({ logo, name, file }) => {
  const [expanded, setExpanded] = useState(null);
  return (
    <BaseCore
      className="p-4 flex flex-col items-center lg:hidden h-auto w-full"
      onClick={() => {
        setExpanded(expanded === name ? false : name);
        console.log(expanded);
      }}
    >
      <div className="flex flex-row items-center text-left space-x-4 w-full">
        <div className="w-7">
          <img src={`/divisi-oti/${logo}`} />
        </div>
        <span className="text-xl">{name}</span>
      </div>
      <motion.div
        className="grid items-center overflow-hidden"
        animate={{ height: expanded === name ? "5rem" : "0" }}
      >
        <Link
          to={`/pdf/${file}`}
          className="px-4 py-1.5 bg-yellow-400 font-bold rounded-full text-lg"
        >
          Tugas
        </Link>
      </motion.div>
    </BaseCore>
  );
};

export default Daftar;
