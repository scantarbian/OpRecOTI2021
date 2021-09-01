import React, { useState } from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useSpring, animated, config } from "@react-spring/web";
import { ChevronDownIcon } from "@heroicons/react/solid";

import Benefit1 from "../assets/svg/benefits/one.svg";
import Benefit2 from "../assets/svg/benefits/two.svg";
import Benefit3 from "../assets/svg/benefits/three.svg";
import Benefit4 from "../assets/svg/benefits/four.svg";

export const Core = ({ children, className, noAni }) => (
  <BaseCore
    className={`flex flex-col space-y-6 text-center items-center mx-4 lg:mx-24 2xl:mx-48 p-8 z-10 ${className}`}
    noAni={noAni}
  >
    {children}
  </BaseCore>
);

export const BaseCore = ({ children, className, noAni, onClick }) => {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 200,
    (x - window.innerWidth / 2) / 400,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [xys, set] = useState([0, 0, 1]);
  const spring = useSpring({ xys, config: config.wobbly });
  return (
    <animated.div
      onClick={onClick}
      style={{ transform: noAni || spring.xys.to(trans) }}
      onMouseLeave={noAni ? () => {} : () => set([0, 0, 1])}
      onMouseMove={
        noAni
          ? () => {}
          : (e) => {
              set(calc(e.clientX, e.clientY));
            }
      }
      className={`
      text-white backdrop-filter backdrop-blur-xl bg-opacity-30 bg-black
      rounded-3xl
      ${className}`}
    >
      {children}
    </animated.div>
  );
};

const benefitsList = [
  {
    icon: <Benefit1 className="w-48 fill-current" />,
    text: "Menambah link dan relasi dalam organisasi terkeren di Ilmu Komputer Universitas Gadjah Mada",
  },
  {
    icon: <Benefit2 className="w-48 fill-current" />,
    text: "Mengikuti pelatihan mingguan dalam divisi yang akan mengasah kemampuan hardskill kamu.",
  },
  {
    icon: <Benefit3 className="w-48 fill-current" />,
    text: "Melakukan kegiatan-kegiatan seru di OmahTI yang dapat melatih softskill kamu",
  },
  {
    icon: <Benefit4 className="w-48 fill-current" />,
    text: "Berkesempatan mengikuti projek untuk mengisi CV dan unjuk kemampuanmu",
  },
];

const faqList = [
  {
    q: "OmahTI isinya cuman belajar doang ya?",
    a: "Tentu enggak dong, di OmahTI kita juga bakalan ngeproker bareng ngelatih softskill, dan juga banyak kegiatan yg fun.",
  },
  {
    q: "Kalo gak ada pengalaman bisa gak sih daftar OmahTI?",
    a: "Bisa banget!! Kita di OmahTI bakalan belajar dari nol bareng-bareng jadi gausah khawatir.",
  },
  {
    q: "Semisal aku anggota divisi ini aku boleh gak belajar ke divisi lain?",
    a: "Oh boleh banget dong! Tinggal ikut aja pelatihan divisi yang lain kamu boleh tanya temen kamu tentang jadwalnya.",
  },
  {
    q: "Pelatihan di OmahTI di mana dan gimana?",
    a: "Jadi nanti kamu akan dilatih sama kepala divisi kamu terkait dengan apa-apa yang perlu dipelajari. Pelatihannya dilaksanain di base OmahTI atau di gedung C atau tempat lain sesuai kesepakatan divisinya.",
  },
  {
    q: "Siapa aja yang boleh daftar OmahTI 2021?",
    a: "Setiap mahasiswa ilmu komputer UGM angkatan 2020 dan 2021 yang berkeinginan untuk mendaftar",
  },
  {
    q: "Apakah nantinya saya bisa kalah saing dengan angkatan atas yang mencoba di tahun kedua?",
    a: "Tentu saja engga, buat angkatan 2021, kalian punya kesempatan yang lebih besar kok buat join di OTI dibanding angkatan 2020",
  },
];

export const Welcome = () => {
  return (
    <Core>
      <StaticImage
        src="../assets/image/logo-oti.png"
        alt="Logo OmahTI UGM"
        className="w-32 z-50"
      />
      <h1
        className="font-black text-4xl lg:text-6xl leading-tight
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400 "
      >
        Open <br />
        Recruitment
      </h1>
      <div className="font-semibold text-lg leading-tight">
        <p>
          Bergabung bersama kami untuk ikut berkontribusi di berbagai bidang IT.{" "}
          <br />
          Tingkatkan skillmu dan belajar bersama kami.
        </p>
        <span className="text-yellow-400">Join OmahTI!</span>
      </div>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <a
          href="https://s.id/OprecMAKOMTI2021"
          className="p-2 px-8 bg-blue-500 font-bold rounded-full text-xl
          transition duration-300 ease-in-out hover:bg-blue-600 focus:bg-blue-400
          transform hover:scale-110 focus:scale-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Daftar</span>
        </a>
        <Link
          to="/daftar"
          className="p-2 px-8 bg-yellow-400 font-bold rounded-full text-xl
          transition duration-300 ease-in-out hover:bg-yellow-600 focus:bg-yellow-300
          transform hover:scale-110 focus:scale-100"
        >
          Tugas
        </Link>
      </div>
    </Core>
  );
};

export const WhatWeDo = () => {
  return (
    <Core>
      <h2
        className="font-black text-3xl lg:text-5xl leading-none
      text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-400"
      >
        WHAT WE DO?
      </h2>
      <p className="font-semibold text-center text-lg">
        Di OmahTI, kita bakal bersama-sama mengasah Hard Skill dan Soft Skill
        melalui program kerja yang pastinya seru banget! Penasaran? Gabung
        makanya!
      </p>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0 items-center">
        <StaticImage
          src="../assets/image/kegiatan/1.jpg"
          alt="Foto Kegiatan OmahTI UGM"
          className="lg:w-1/3 rounded-xl"
        />
        <StaticImage
          src="../assets/image/kegiatan/2.jpg"
          alt="Foto Kegiatan OmahTI UGM"
          className="lg:w-1/3 rounded-xl"
        />
        <StaticImage
          src="../assets/image/kegiatan/3.jpg"
          alt="Foto Kegiatan OmahTI UGM"
          className="lg:w-1/3 rounded-xl"
        />
      </div>
    </Core>
  );
};

export const Timeline = () => {
  return (
    <div className="flex flex-col items-center mx-4 lg:mx-24 2xl:mx-48 z-10">
      <h2
        className="font-black text-5xl leading-none text-center
      text-transparent bg-clip-text bg-gradient-to-bl from-white to-purple-400"
      >
        RECRUITMENT TIMELINE
      </h2>
      <StaticImage
        src="../assets/image/timeline.png"
        alt="Timeline Open Recruitment OmahTI UGM"
        className="w-full lg:w-2/3"
      />
    </div>
  );
};

export const About = () => {
  return (
    <Core>
      <h2
        className="font-black text-3xl lg:text-5xl leading-none
      text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-400"
      >
        ABOUT OMAHTI
      </h2>
      <p className="font-semibold text-justify text-lg">
        Organisasi Mahasiswa Ahli Teknologi Informasi atau lebih dikenal OmahTI
        bermula pada awal September 2002 di Laboratorium Inovasi. Kemudian
        Laboratorium ini berubah nama, sifat dan orientasi kegiatannya. Berdiri
        dengan tujuan sebagai pusat pengembangan potensi mahasiswa Ilmu Komputer
        UGM di bidang Teknologi informasi.
      </p>
    </Core>
  );
};

export const Benefits = () => {
  return (
    <Core>
      <h2
        className="font-black text-3xl lg:text-5xl leading-none
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400"
      >
        BENEFITS
      </h2>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
        {benefitsList.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:w-1/4 space-y-8"
          >
            {benefit.icon}
            <p className="text-center">{benefit.text}</p>
          </div>
        ))}
      </div>
    </Core>
  );
};

export const Dropdown = ({ question, answer }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={`flex flex-col ${isOpen && "border-b-2 border-yellow-400"}`}
    >
      <button
        className={`flex justify-between px-4 py-2 text-2xl font-bold items-center text-left hover:text-yellow-400
      ${isOpen && "text-yellow-400"}`}
        onClick={() => setOpen(!isOpen)}
      >
        {question}
        <ChevronDownIcon className={`w-8 ${
          isOpen ? "transition duration-200 ease-in-out transform rotate-180" : "transition duration-200 ease-in-out transform"
        }`}/>
      </button>
      {isOpen && <div className={`text-left px-4 py-2 text-xl`}>{answer}</div>}
    </div>
  );
};

export const FaqDropdown = () => {
  return (
    <Core>
      <h2
        className="font-black text-3xl lg:text-5xl leading-none
        text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400"
      >
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="flex flex-col space-y-2 w-full">
        {faqList.map((faq, index) => (
          <Dropdown key={index} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </Core>
  );
};

export const Faq = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Core>
      <h2
        className="font-black text-3xl lg:text-5xl leading-none
      text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-400"
      >
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="flex w-full space-x-4">
        <div className="w-1/3 flex flex-col space-y-2 ">
          {faqList.map((faq, index) => (
            <button
              key={`question-${index}`}
              value={index}
              className={`cursor-pointer text-left p-2 border-b-2 border-transparent hover:border-yellow-400
                ${selected === index ? "font-bold border-yellow-400" : null}`}
              onClick={() => {
                setSelected(index);
              }}
            >
              {faq.q}
            </button>
          ))}
        </div>
        <div className="w-2/3">
          {faqList
            .filter((faq, index) => index === selected)
            .map((faq, index) => (
              <div
                key={`answer-${index}`}
                className="flex flex-col text-left space-y-2"
              >
                <h3
                  className="font-black text-3xl
                text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-400"
                >
                  {faq.q}
                </h3>
                <p className="text-xl">{faq.a}</p>
              </div>
            ))}
        </div>
      </div>
    </Core>
  );
};

export const ReadyToJoinUs = () => {
  return (
    <Core>
      <h2
        className="font-black text-3xl lg:text-5xl leading-none
      text-transparent bg-clip-text bg-gradient-to-bl from-white to-purple-400"
      >
        READY TO JOIN US?
      </h2>
      <div className="flex space-x-4 items-center py-4">
        <StaticImage
          src="../assets/image/divisi-oti/datsci.png"
          alt="Data Science"
          className="w-4 lg:w-12"
        />
        <StaticImage
          src="../assets/image/divisi-oti/webdes.png"
          alt="Web Design"
          className="w-4 lg:w-12"
        />
        <StaticImage
          src="../assets/image/divisi-oti/webdev.png"
          alt="Web Development"
          className="w-4 lg:w-12"
        />
        <StaticImage
          src="../assets/image/divisi-oti/cp.png"
          alt="Competitive Programming"
          className="w-4 lg:w-12"
        />
        <StaticImage
          src="../assets/image/divisi-oti/cysec.png"
          alt="Cyber Security"
          className="w-4 lg:w-12"
        />
        <StaticImage
          src="../assets/image/divisi-oti/uix.png"
          alt="User Interface / User Experience"
          className="w-4 lg:w-12"
        />
        <StaticImage
          src="../assets/image/divisi-oti/gamedev.png"
          alt="Game Development"
          className="w-4 lg:w-12"
        />
        <StaticImage
          src="../assets/image/divisi-oti/ma.png"
          alt="Mobile Apps"
          className="w-4 lg:w-12"
        />
      </div>
      <p className="font-semibold text-center text-lg">
        Jangan lupa untuk <span className="text-yellow-400">submit</span>{" "}
        tugasmu sebelum <span className="text-yellow-400">deadline</span>!
      </p>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <a
          href="https://s.id/OprecMAKOMTI2021"
          className="p-2 px-8 bg-blue-500 font-bold rounded-full text-xl
          transition duration-300 ease-in-out hover:bg-blue-600 focus:bg-blue-400
          transform hover:scale-110 focus:scale-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Daftar</span>
        </a>
        <Link
          to="/daftar"
          className="p-2 px-8 bg-yellow-400 font-bold rounded-full text-xl
          transition duration-300 ease-in-out hover:bg-yellow-600 focus:bg-yellow-300
          transform hover:scale-110 focus:scale-100"
        >
          Tugas
        </Link>
      </div>
    </Core>
  );
};
