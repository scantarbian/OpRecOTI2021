import * as React from "react";
import Footer from "../components/Footer";
import { Timeline } from "../components/Timeline";
import {
  Welcome,
  About,
  WhatWeDo,
  ReadyToJoinUs,
  Benefits,
  Faq,
} from "../components/Cards";
import { motion } from "framer-motion";

const HomepageAlt = () => {
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
    <div className="bg-gradient-to-b from-blue-900 via-indigo-900 to-black">
      <title>Open Recruitment OmahTI 2021</title>
      <main className="static bg-omahti bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col pt-16 space-y-32 ">
          <Welcome />
          <WhatWeDo />
          <Timeline />
          <About />
          <Benefits />
          <Faq />
          <ReadyToJoinUs />
          <Footer />
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
          className="absolute bg-gradient-to-tr from-yellow-300 to-white w-32 h-32 rounded-full ml-10"
          style={{ top: "1rem" }}
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
          className="absolute right-0 bg-gradient-to-bl from-blue-900 to-blue-400 w-20 h-20 rounded-full mr-96 z-20"
          style={{ top: "8rem" }}
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
          className="absolute right-0 bg-gradient-to-tl from-red-700 to-yellow-400 w-32 h-32 rounded-full mr-10"
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
          className="absolute bg-gradient-to-br from-purple-800 to-black w-28 h-28 rounded-full ml-16"
          style={{ top: "27rem" }}
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
          className="absolute right-0 bg-gradient-to-tr from-red-700 via-blue-700 to-white w-36 h-36 rounded-full mr-32"
          style={{ top: "34rem" }}
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
          className="absolute bg-gradient-to-bl from-green-900 to-green-300 w-28 h-28 rounded-full ml-12"
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
          className="absolute bg-gradient-to-tr from-yellow-300 via-red-700 to-black w-32 h-32 rounded-full ml-14 z-20"
          style={{ top: "65rem" }}
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
          className="absolute right-0 bg-gradient-to-br from-yellow-300 to-green-300 w-28 h-28 rounded-full mr-72"
          style={{ top: "66rem" }}
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
          className="absolute right-0 bg-gradient-to-tr from-red-700 to-red-400 w-20 h-20 rounded-full mr-44"
          style={{ top: "96rem" }}
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
          className="absolute bg-gradient-to-tr from-purple-700 via-blue-700 to-white w-52 h-52 rounded-full ml-12"
          style={{ top: "120rem" }}
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
          className="absolute bg-gradient-to-br from-yellow-600 to-yellow-300 w-32 h-32 rounded-full ml-72 z-20"
          style={{ top: "157rem" }}
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
          className="absolute right-0 bg-gradient-to-bl from-blue-600 to-yellow-300 w-48 h-48 rounded-full mr-6"
          style={{ top: "167rem" }}
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
          className="absolute bg-gradient-to-tr from-blue-600 via-pink-300 to-white w-56 h-56 rounded-full ml-2"
          style={{ top: "178rem" }}
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
          className="absolute right-0 bg-gradient-to-tl from-red-900 to-red-400 w-16 h-16 rounded-full mr-96 z-20"
          style={{ top: "182rem" }}
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
          className="absolute right-0 bg-gradient-to-tr from-green-400 to-green-700 w-28 h-28 rounded-full mr-20"
          style={{ top: "208rem" }}
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
          className="absolute bg-gradient-to-bl from-yellow-700 via-yellow-300 to-yellow-700 w-24 h-24 rounded-full ml-52 z-20"
          style={{ top: "218rem" }}
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
          className="absolute right-0 bg-gradient-to-tr from-blue-600 to-green-400 w-12 h-12 rounded-full mr-72 z-20"
          style={{ top: "249rem" }}
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
          className="absolute bg-gradient-to-br from-green-500 to-pink-400 w-40 h-40 rounded-full ml-20"
          style={{ top: "244rem" }}
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
          style={{ top: "264rem" }}
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
          className="absolute bg-gradient-to-bl from-blue-600 to-pink-300 w-20 h-20 rounded-full ml-56 z-20"
          style={{ top: "282rem" }}
        />
      </main>
    </div>
  );
};

function randomInteger() {
  return Math.floor(Math.random() * (30 - -100 + 1)) + -100;
}

export default HomepageAlt;
