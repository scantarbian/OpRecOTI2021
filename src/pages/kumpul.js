import * as React from "react"
import { BaseCore } from "../components/Cards";
import { SubmissionForm } from "../components/SubmissionForm";
import Footer from "../components/Footer";

const Kumpul = () => {
  return (
    <div className="bg-figma-omahti w-full overflow-hidden">
      <title>Pengumpulan OmahTI 2021</title>
      <main className="static bg-omahti bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col py-16 space-y-10 text-center items-center mx-4 lg:mx-24 2xl:mx-48">
          <h1
            className="font-black text-4xl lg:text-6xl uppercase
            text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 "
          >
            Unggah Tugas
          </h1>
          <div className="flex justify-between space-x-10 ">
            <div className="flex flex-col space-y-6 text-left">
              <h2
                className="font-black text-2xl lg:text-4xl 
                text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 leading-loose"
              >Catatan Pengumpulan</h2>
              <BaseCore className="p-4">
                <p className="font-semibold text-lg">Nama berkas yang di unggah harus sesuai dengan format: <b>Divisi_Nama_Angkatan</b></p>
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
      </main>
      <Footer />
    </div>
  )
}

export default Kumpul;