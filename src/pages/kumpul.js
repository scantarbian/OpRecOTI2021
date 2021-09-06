import * as React from "react"
import { BaseCore } from "../components/Cards";
import { SubmissionForm } from "../components/SubmissionForm";
import Footer from "../components/Footer";
import { randomInteger } from "../lib/utils";
import { motion } from "framer-motion";

const Kumpul = () => {
  const ballVariants = {
    initial: {
      scale: 0,
      x: 0,
      y: 0,
    },
    animate: {
      // scale: 1.1,
      X: 50,
      y: 30,
      transition: {
        duration: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
        yoyo: Infinity,
      },
    },
  };

  return (
    <div className="bg-figma-omahti w-full overflow-hidden">
      <title>Pengumpulan OmahTI 2021</title>
      <main className="static bg-omahti bg-no-repeat bg-cover bg-center lg:h-screen">
        <div className="flex flex-col py-16 space-y-10 text-center items-center mx-4 lg:mx-24 2xl:mx-48">
          <h1
            className="font-black text-4xl lg:text-6xl uppercase
            text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 z-10"
          >
            Unggah Tugas
          </h1>
          <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-10">
            <div className="flex flex-col space-y-6 text-center lg:text-left">
              <h2
                className="font-black text-2xl lg:text-4xl z-10
                text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 leading-loose"
              >Catatan Pengumpulan</h2>
              <BaseCore className="p-4">
                <p className="font-semibold text-lg">Nama berkas yang di unggah harus sesuai dengan format: <b>Divisi_Nama_Angkatan</b> dan dalam format <b>.zip/.rar</b></p>
              </BaseCore>
              <BaseCore className="p-4">
                <p className="font-semibold text-lg">Apabila memilih dua divisi di OmahTI, penugasan di unggah di masing-masing divisi</p>
              </BaseCore>
              <BaseCore className="p-4">
                <p className="font-semibold text-lg">Sebagai cadangan, silahkan kirim file melalui email: <b>oprec@omahti.web.id</b></p>
              </BaseCore> 
            </div>
              <SubmissionForm />
          </div>
        </div>
        <motion.div
          variants={{
            ...ballVariants,
            animate: {
              ...ballVariants.animate,
              x: [randomInteger(), randomInteger(), randomInteger()],
              y: [randomInteger(), randomInteger(), randomInteger()],
            },
          }}
          initial="hidden"
          animate="animate"
          className="absolute bg-gradient-to-tr from-blue-300 to-purple-400 w-32 h-32 rounded-full ml-12"
          style={{ top: "2.5rem" }}
        />
        <motion.div
          variants={{
            ...ballVariants,
            animate: {
              ...ballVariants.animate,
              x: [randomInteger(), randomInteger(), randomInteger()],
              y: [randomInteger(), randomInteger(), randomInteger()],
            },
          }}
          initial="hidden"
          animate="animate"
          className="absolute right-0 bg-gradient-to-tr from-blue-600 to-green-400 w-12 h-12 rounded-full mr-72"
          style={{ top: "10rem" }}
        />
        <motion.div
          variants={{
            ...ballVariants,
            animate: {
              ...ballVariants.animate,
              x: [randomInteger(), randomInteger(), randomInteger()],
              y: [randomInteger(), randomInteger(), randomInteger()],
              transition: {
                ...ballVariants.animate.transition,
                duration: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
              },
            },
          }}
          initial="hidden"
          animate="animate"
          className="absolute bg-gradient-to-bl from-green-900 to-green-300 w-28 h-28 rounded-full ml-24"
          style={{ top: "26rem" }}
        />
        <motion.div
          variants={{
            ...ballVariants,
            animate: {
              ...ballVariants.animate,
              x: [randomInteger(), randomInteger(), randomInteger()],
              y: [randomInteger(), randomInteger(), randomInteger()],
              transition: {
                ...ballVariants.animate.transition,
                duration: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
              },
            },
          }}
          initial="hidden"
          animate="animate"
          className="absolute right-0 bg-gradient-to-br from-yellow-300 to-green-300 w-24 h-24 rounded-full mr-72"
          style={{ top: "32rem" }}
        />
        <motion.div
          variants={{
            ...ballVariants,
            animate: {
              ...ballVariants.animate,
              x: [randomInteger(), randomInteger(), randomInteger()],
              y: [randomInteger(), randomInteger(), randomInteger()],
              transition: {
                ...ballVariants.animate.transition,
                duration: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
              },
            },
          }}
          initial="hidden"
          animate="animate"
          className="absolute bg-gradient-to-bl from-yellow-700 via-yellow-300 to-yellow-700 w-24 h-24 rounded-full ml-52"
          style={{ top: "36rem" }}
        />
        <motion.div
          variants={{
            ...ballVariants,
            animate: {
              ...ballVariants.animate,
              x: [randomInteger(), randomInteger(), randomInteger()],
              y: [randomInteger(), randomInteger(), randomInteger()],
              transition: {
                ...ballVariants.animate.transition,
                duration: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
              },
            },
          }}
          initial="hidden"
          animate="animate"
          className="absolute right-0 bg-gradient-to-tl from-purple-400 to-pink-300 w-32 h-32 rounded-full mr-8"
          style={{ top: "40rem" }}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Kumpul;