import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { BaseCore, Core } from "../components/Cards";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const divisionList = [
  {
    logo: "webdev.png",
    name: "Web Development",
  },
  {
    logo: "datsci.png",
    name: "Data Science",
  },
  {
    logo: "cp.png",
    name: "Competitive Programming",
  },
  {
    logo: "uix.png",
    name: "UI/UX",
  },
  {
    logo: "ma.png",
    name: "Mobile Apps",
  },
  {
    logo: "webdes.png",
    name: "Web Design",
  },
  {
    logo: "cysec.png",
    name: "Cyber Security",
  },
  {
    logo: "gamedev.png",
    name: "Game Development",
  },
];

const Daftar = () => {
  const [division, setDivision] = useState(null);
  return (
    <div className="bg-figma-omahti">
      <title>Pendaftaran OmahTI 2021</title>
      <main className="static bg-omahti bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col items-center pt-16 space-y-4">
          <h1
            className="font-black text-4xl lg:text-8xl leading-tight
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 "
          >
            PENUGASAN
          </h1>
          {divisionList.map((d) => (
            <DivisiMobile name={d.name} logo={d.logo} />
          ))}
          <BaseCore className="hidden xl:flex gap-x-5 lg:gap-x-16 items-center 2xl:pr-32 py-4 px-2 2xl:p-8 sm:p-2 ">
            <div
              className="font-bold text-xl leading-tight text-left w-32 2xl:w-52 lg:text-5xl
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 hidden lg:block "
            >
              <p>
                Pilih
                <br />
                Divisi
              </p>
            </div>
            {divisionList.map((d) => (
              <img
                src={`/divisi-oti/${d.logo}`}
                alt={d.name}
                className="w-10 2xl:w-16"
                onClick={() => setDivision(d.name)}
              />
            ))}
          </BaseCore>
          {division && (
            <Core noAni className="hidden xl:block">
              <span className="text-xl font-bold">{division}</span>
              <iframe
                src={"/pdf/sample.pdf"}
                width="700px"
                height="700px"
              ></iframe>
            </Core>
          )}
          <div className="flex flex-row flex-wrap justify-center xl:justify-between">
            <div className="flex flex-col items-center lg:items-start w-3/5">
              <h2
                className="font-black text-5xl leading-tight
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 text-center lg:text-left"
              >
                Catatan Penugasan
              </h2>
              <BaseCore className="mt-10 w-full p-8">
                <span className="text-xl">
                  Penugasan dikerjakan dalam bentuk dokumen word dan dicompress
                  dalam bentuk zip
                </span>
              </BaseCore>
              <BaseCore className="mt-10 w-full p-8">
                <span className="text-xl">
                  Maksimal pengumpulan tugas sebelum melakukan wawancara
                </span>
              </BaseCore>
              <BaseCore className="mt-10 w-full p-8">
                <span className="text-xl">
                  Jika penugasan menggunakan platform lain seperti Hackerrank,
                  maka cukup melampirkan screenshot dan dimasukkan ke dalam
                  dokumen
                </span>
              </BaseCore>
              <BaseCore className="mt-10 w-full p-8">
                <span className="text-xl">
                  Apabila terdapat coding silahkan disertakan dalam satu file
                  zip
                </span>
              </BaseCore>
            </div>
            <div className="flex flex-col items-center">
              <h2
                className="font-black text-5xl leading-tight
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 text-center lg:text-left"
              >
                Upload Tugas
              </h2>
              <div className="bg-white  flex px-8 py-5 rounded-3xl gap-x-6 mt-10">
                <div className="flex flex-col lg:block">
                  <div
                    className="text-black font-extrabold text-3xl"
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
                <StaticImage
                  src="../assets/image/upload.png"
                  alt="tombol upload"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const DivisiMobile = ({ logo, name }) => {
  const [expanded, setExpanded] = useState(null);
  return (
    <BaseCore
      className="mt-10 w-4/5 p-6 flex flex-col items-center xl:hidden h-auto"
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
          to={`/pdf/sample.pdf`}
          className="px-4 py-1.5 bg-blue-500 font-bold rounded-full text-lg"
        >
          Tugas
        </Link>
      </motion.div>
    </BaseCore>
  );
};

export default Daftar;
