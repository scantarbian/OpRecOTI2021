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
      <title>Pendaftaran OmahTI 2021</title>
      <main className="static bg-omahti bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col items-center pt-16 space-y-4 mx-4 lg:mx-24 2xl:mx-48">
          <h1
            className="font-black text-4xl lg:text-8xl leading-tight
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 "
          >
            PENUGASAN
          </h1>
          {divisionList.map((d) => (
            <DivisiMobile name={d.name} logo={d.logo} />
          ))}
          <BaseCore className="hidden lg:flex gap-x-5 2xl:gap-x-16 items-center py-4 px-9 2xl:p-2 w-auto xl:w-5/6 2xl:w-auto justify-evenly">
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
              <div className={`w-14 2xl:w-28 h-14 2xl:h-28 ${division === index ? 'bg-blue-500' : ''} rounded-lg flex items-center justify-center`}>
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
            <Core noAni className="hidden lg:block">
              <span className="text-xl font-bold">{divisionList[division].name}</span>
              <iframe
                src={`/pdf/${divisionList[division].file}`}
                width="700px"
                height="700px"
              ></iframe>
            </Core>
          )}
          <div className="flex flex-row flex-wrap justify-center 2xl:justify-between pb-5 gap-5 2xl:gap-0">
            <div className="flex flex-col items-center lg:items-start w-2/5 2xl:w-3/5">
              <h2
                className="font-black text-5xl leading-tight
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 text-center lg:text-left h-32 lg:h-auto"
              >
                Catatan Penugasan
              </h2>
              <BaseCore className="mt-10 py-8 px-5 w-auto xl:w-4/5">
                <span className="text-xl">
                  Penugasan dikerjakan dalam bentuk dokumen word dan dicompress
                  dalam bentuk zip
                </span>
              </BaseCore>
              <BaseCore className="mt-10 py-8 px-5 w-auto xl:w-4/5">
                <span className="text-xl">
                  Maksimal pengumpulan tugas sebelum melakukan wawancara
                </span>
              </BaseCore>
              <BaseCore className="mt-10  py-8 px-5 w-auto xl:w-4/5">
                <span className="text-xl">
                  Jika penugasan menggunakan platform lain seperti Hackerrank,
                  maka cukup melampirkan screenshot dan dimasukkan ke dalam
                  dokumen
                </span>
              </BaseCore>
              <BaseCore className="mt-10  py-8 px-5 w-auto xl:w-4/5">
                <span className="text-xl">
                  Apabila terdapat coding silahkan disertakan dalam satu file
                  zip
                </span>
              </BaseCore>
            </div>
            <div className="flex flex-col items-center">
              <h2
                className="font-black text-5xl leading-tight
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 text-center lg:text-left h-32 xl:h-auto flex items-center"
              >
                Upload Tugas
              </h2>
              <BaseCore className="flex px-8 py-5 rounded-3xl gap-x-6 mt-10">
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
            </div>
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
      className="mt-10 w-4/5 p-6 flex flex-col items-center lg:hidden h-auto"
      onClick={() => {
        setExpanded(expanded === name ? false : name);
        console.log(expanded);
      }}
    >
      <div className="flex flex-row gap-x-5 w-full">
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
          className="px-4 py-1.5 bg-blue-500 font-bold rounded-full text-lg"
        >
          Tugas
        </Link>
      </motion.div>
    </BaseCore>
  );
};

export default Daftar;
