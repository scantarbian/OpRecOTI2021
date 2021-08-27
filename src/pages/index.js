import * as React from "react";
import Footer from "../components/Footer";
import {
  Welcome,
  About,
  WhatWeDo,
  ReadyToJoinUs,
  Benefits,
  Faq,
} from "../components/Cards";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Timeline } from "../components/Timeline";

const Homepage = () => {
  return (
    <div>
      <title>Open Recruitment OmahTI 2021</title>
      <Parallax
        pages={7}
        className="bg-gradient-to-b from-blue-900 via-indigo-900 to-black "
      >
        <ParallaxLayer
          offset={0}
          speed={0}
          className="flex flex-col justify-center z-10"
        >
          <Welcome />
        </ParallaxLayer>

        <ParallaxLayer offset={0.05} speed={-0.6}>
          <div className="block bg-gradient-to-tr from-yellow-300 to-white w-32 h-32 rounded-full ml-20 " />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          speed={-0.2}
          className="z-20 pointer-events-none"
        >
          <div className="block float-right bg-gradient-to-bl from-blue-900 to-blue-400 w-20 h-20 rounded-full mr-72" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.75} speed={0.4}>
          <div className="block float-right bg-gradient-to-tl from-red-700 to-yellow-400 w-40 h-40 rounded-full mr-20" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0.2}>
          <div className="block bg-gradient-to-br from-purple-800 to-black w-28 h-28 rounded-full ml-10" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          className="flex flex-col justify-center z-10"
        >
          <WhatWeDo />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.4}>
          <div className="block float-right bg-gradient-to-tr from-red-700 via-blue-700 to-white w-36 h-36 rounded-full mr-32" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.15} speed={0.6}>
          <div className="block bg-gradient-to-bl from-green-900 to-green-300 w-28 h-28 rounded-full ml-12" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.65}
          speed={-0.2}
          className="z-20 pointer-events-none"
        >
          <div className="block bg-gradient-to-tr from-yellow-300 via-red-700 to-black w-32 h-32 rounded-full ml-16" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={0.9}>
          <div className="block float-right bg-gradient-to-br from-yellow-300 to-green-300 w-28 h-28 rounded-full mr-72" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          className="flex flex-col justify-center z-10"
        >
          <Timeline />
        </ParallaxLayer>

        <ParallaxLayer offset={2.25} speed={-0.4}>
          <div className="block float-right bg-gradient-to-tr from-red-700 to-red-400 w-20 h-20 rounded-full mr-44" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.75} speed={0.6}>
          <div className="block bg-gradient-to-tr from-purple-700 via-blue-700 to-white w-52 h-52 rounded-full ml-12" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.5}
          className="flex flex-col justify-center z-10"
        >
          <About />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.15}
          speed={0.3}
          className="z-20 pointer-events-none"
        >
          <div className="block bg-gradient-to-br from-yellow-600 to-yellow-300 w-32 h-32 rounded-full ml-72" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.55} speed={0.6}>
          <div className="block float-right bg-gradient-to-bl from-blue-600 to-yellow-300 w-48 h-48 rounded-full mr-6" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.5}
          className="flex flex-col justify-center z-10"
        >
          <Benefits />
        </ParallaxLayer>

        <ParallaxLayer offset={4.05} speed={0.7}>
          <div className="block bg-gradient-to-tr from-blue-600 via-pink-300 to-white w-56 h-56 rounded-full ml-2" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.15}
          speed={0.4}
          className="z-20 pointer-events-none"
        >
          <div className="block float-right bg-gradient-to-tl from-red-900 to-red-400 w-16 h-16 rounded-full mr-96" />
        </ParallaxLayer>
        <ParallaxLayer offset={4.75} speed={0.9}>
          <div className="block float-right bg-gradient-to-tr from-green-400 to-green-700 w-28 h-28 rounded-full mr-20" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0.5}
          className="flex flex-col justify-center z-10"
        >
          <Faq />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5.05}
          speed={-0.2}
          className="z-20 pointer-events-none"
        >
          <div className="block bg-gradient-to-bl from-yellow-700 via-yellow-300 to-yellow-700 w-24 h-24 rounded-full ml-52" />
        </ParallaxLayer>
        <ParallaxLayer offset={5.8} speed={0.9}>
          <div className="block bg-gradient-to-br from-green-500 to-pink-400 w-40 h-40 rounded-full ml-20" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.8}
          speed={0.4}
          className="z-20 pointer-events-none"
        >
          <div className="block float-right bg-gradient-to-tr from-blue-600 to-green-400 w-12 h-12 rounded-full mr-72" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={0.5}
          className="flex flex-col justify-between z-10"
        >
          <ReadyToJoinUs />
          <Footer />
        </ParallaxLayer>

        <ParallaxLayer offset={6.2} speed={0.6}>
          <div className="block float-right bg-gradient-to-tl from-purple-400 to-pink-300 w-32 h-32 rounded-full mr-8" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6.45}
          speed={0.7}
          className="z-20 pointer-events-none"
        >
          <div className="block bg-gradient-to-bl from-blue-600 to-pink-300 w-20 h-20 rounded-full ml-56" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Homepage;
