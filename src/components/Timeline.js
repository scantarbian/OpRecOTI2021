import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export const Timeline = () => {
  const svgVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      strokeWidth: 8,
      strokeLinecap: "round",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      strokeWidth: 8,
      strokeLinecap: "round",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="flex flex-col items-center px-16">
      <h1
        className="font-black text-5xl leading-none
      text-transparent bg-clip-text bg-gradient-to-bl from-white to-purple-400"
      >
        RECRUITMENT TIMELINE
      </h1>
      <StaticImage
        src="../assets/image/timeline.png"
        alt="Timeline Open Recruitment OmahTI UGM"
        className="w-2/3"
      />
      <svg
        width="303"
        height="161"
        viewBox="0 0 303 161"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          d="M152 5V69.352C194.328 69.352 228.642 104.116 228.642 147H280.873"
          stroke="#28DBAD"
          stroke-width="8"
          stroke-linecap="round"
        />
        <path
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          d="M289.362 156C293.98 156 297.724 152.194 297.724 147.5C297.724 142.806 293.98 139 289.362 139C284.744 139 281 142.806 281 147.5C281 152.194 284.744 156 289.362 156Z"
          fill="#28DBAD"
        />
      </svg>
      <svg
        width="303"
        height="161"
        viewBox="0 0 303 161"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M151 5V69.352C108.672 69.352 74.3584 104.116 74.3584 147H22.1266"
          stroke="#4524D2"
          stroke-width="8"
          stroke-linecap="round"
        />
        <path
          d="M13.638 156C9.01977 156 5.27597 152.194 5.27597 147.5C5.27597 142.806 9.01977 139 13.638 139C18.2562 139 22 142.806 22 147.5C22 152.194 18.2562 156 13.638 156Z"
          fill="#4524D2"
        />
      </svg>
      <TimelineArrow color={"#A5A6F6"} />
      <TimelineArrow color={"#A044E3"} left />
      <TimelineArrow color={"#FC69D0"} />
    </div>
  );
};

const TimelineArrow = ({ color, left }) => {
  const svgVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      strokeWidth: 8,
      strokeLinecap: "round",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      strokeWidth: 8,
      strokeLinecap: "round",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="flex flex-row items-end">
      {left && (
        <span style={{ fontFamily: "Inter" }} className="relative">
          First Gathering
        </span>
      )}
      <svg
        width="303"
        height="161"
        viewBox="0 0 303 161"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          d={
            left
              ? "M151 5V69.352C108.672 69.352 74.3584 104.116 74.3584 147H22.1266"
              : "M152 5V69.352C194.328 69.352 228.642 104.116 228.642 147H280.873"
          }
          stroke={color}
          stroke-width="8"
          stroke-linecap="round"
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          d={
            left
              ? "M13.638 156C9.01977 156 5.27597 152.194 5.27597 147.5C5.27597 142.806 9.01977 139 13.638 139C18.2562 139 22 142.806 22 147.5C22 152.194 18.2562 156 13.638 156Z"
              : "M289.362 156C293.98 156 297.724 152.194 297.724 147.5C297.724 142.806 293.98 139 289.362 139C284.744 139 281 142.806 281 147.5C281 152.194 284.744 156 289.362 156Z"
          }
          fill={color}
        />
      </svg>
      {left || (
        <span style={{ fontFamily: "Inter", fontWeight: 400 }}>
          First Gathering
        </span>
      )}
    </div>
  );
};
