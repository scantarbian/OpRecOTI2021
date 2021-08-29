import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { BaseCore } from "../components/Cards";
import { motion } from "framer-motion";

const division = [
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
    logo: "cysec.png",
    name: "Cyber Security",
  },
  {
    logo: "gamedev.png",
    name: "Game Development",
  },
];

const Daftar = () => {
  return (
    <div className="bg-figma-omahti w-full">
      <title>Pendaftaran OmahTI 2021</title>
      <main className="static bg-omahti bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col items-center pt-16 space-y-4 pb-12">
          <h1
            className="font-black text-4xl lg:text-8xl leading-tight
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 "
          >
            PENUGASAN
          </h1>
          {division.map((d) => (
            <Divisi name={d.name} logo={d.logo} />
          ))}
          <BaseCore className="hidden lg:flex gap-x-5 lg:gap-x-16 items-center lg:pr-32 py-4 px-2 lg:p-8 sm:p-2 ">
            <div
              className="font-bold text-xl leading-tight text-left w-32 lg:w-52 font-black text-xl lg:text-5xl leading-tight
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 hidden lg:block "
            >
              <p>
                Pilih
                <br />
                Divisi
              </p>
            </div>
            <StaticImage
              src="../assets/image/divisi-oti/cp.png"
              alt="Competitive Programming"
              className="w-6 lg:w-16"
            />
            <StaticImage
              src="../assets/image/divisi-oti/webdev.png"
              alt="Web Development"
              className="w-6 lg:w-16"
            />
            <StaticImage
              src="../assets/image/divisi-oti/datsci.png"
              alt="Data Science"
              className="w-6 lg:w-16"
            />
            <StaticImage
              src="../assets/image/divisi-oti/uix.png"
              alt="User Interface / User Experience"
              className="w-6 lg:w-16"
            />
            <StaticImage
              src="../assets/image/divisi-oti/ma.png"
              alt="Mobile Apps"
              className="w-6 lg:w-16"
            />
            <StaticImage
              src="../assets/image/divisi-oti/webdes.png"
              alt="Web Design"
              className="w-6 lg:w-16"
            />
            <StaticImage
              src="../assets/image/divisi-oti/cysec.png"
              alt="Cyber Security"
              className="w-6 lg:w-16"
            />
            <StaticImage
              src="../assets/image/divisi-oti/gamedev.png"
              alt="Game Development"
              className="w-6 lg:w-16"
            />
          </BaseCore>
          {/* <Core noAni>
            <iframe
              src={"/pdf/sample.pdf"}
              width="700px"
              height="700px"
            ></iframe>
          </Core> */}
          <div className="flex flex-row flex-wrap justify-center lg:justify-between">
            <div className="flex flex-col items-center lg:items-start">
              <h2
                className="font-black text-5xl leading-tight
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 text-center lg:text-left"
              >
                Catatan Penugasan
              </h2>
              <BaseCore className="mt-10 w-4/5 p-8">
                <span className="text-xl">
                  Penugasan dikerjakan dalam bentuk dokumen word dan dicompress
                  dalam bentuk zip
                </span>
              </BaseCore>
              <BaseCore className="mt-10 w-4/5 p-8">
                <span className="text-xl">
                  Maksimal pengumpulan tugas sebelum melakukan wawancara
                </span>
              </BaseCore>
              <BaseCore className="mt-10 w-4/5 p-8">
                <span className="text-xl">
                  Jika penugasan menggunakan platform lain seperti Hackerrank,
                  maka cukup melampirkan screenshot dan dimasukkan ke dalam
                  dokumen
                </span>
              </BaseCore>
              <BaseCore className="mt-10 w-4/5 p-8">
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
                <div className="flex flex-col hidden lg:block">
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
    </div>
  );
};

const Divisi = ({ logo, name }) => {
  const [expanded, setExpanded] = useState(null);
  return (
    <BaseCore
      className="mt-10 w-4/5 p-8 flex flex-col gap-y-5 items-center lg:hidden h-auto"
      onClick={() => {
        setExpanded(expanded === name ? false : name);
        console.log(expanded);
      }}
    >
      <div className="flex flex-row gap-x-2 w-full">
        <div className="w-7">
          <img src={`/divisi-oti/${logo}`} />
        </div>
        <span className="text-xl">{name}</span>
      </div>
      <div>
        <motion.a
          href="/pdf/sample.pdf"
          className="h-0 py-1.5 px-8 bg-blue-500 font-bold rounded-full text-xl"
          animate={{ height: expanded === name ? "100%" : "0%" }}
        >
          Daftar
        </motion.a>
      </div>
    </BaseCore>
  );
};

export default Daftar;
