import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { useInView } from "react-intersection-observer";
import loadable from "@loadable/component";

const { useMediaQuery } = loadable.lib(() => import("react-responsive"));

const TimelineData = [
  {
    title: "Publish Soal",
    date: "1 September 2021",
    color: "#28DBAD",
    image: "Image1",
    left: false,
  },
  {
    title: "Pengerjaan Tugas",
    date: "2-12 Spetember 2021",
    color: "#4524D2",
    image: "Image2",
    left: true,
  },
  {
    title: "Wawancara",
    date: "10-15 September 2021",
    color: "#A5A6F6",
    image: "Image3",
    left: false,
  },
  {
    title: "Pengumuman",
    date: "24 September 2021",
    color: "#A044E3",
    image: "Image4",
    left: true,
  },
  {
    title: "First Gathering",
    date: "2 Oktober 2021",
    color: "#FC69D0",
    image: "Image5",
    left: false,
  },
];

export const Timeline = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const data = useStaticQuery(graphql`
    query {
      Image1: file(relativePath: { eq: "image/timeline-icons/image1.png" }) {
        childImageSharp {
          fluid(maxWidth: 175) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image2: file(relativePath: { eq: "image/timeline-icons/image2.png" }) {
        childImageSharp {
          fluid(maxWidth: 175) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image3: file(relativePath: { eq: "image/timeline-icons/image3.png" }) {
        childImageSharp {
          fluid(maxWidth: 175) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image4: file(relativePath: { eq: "image/timeline-icons/image4.png" }) {
        childImageSharp {
          fluid(maxWidth: 175) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image5: file(relativePath: { eq: "image/timeline-icons/image5.png" }) {
        childImageSharp {
          fluid(maxWidth: 175) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="flex flex-col items-center px-16">
      <h1
        className="font-black text-3xl lg:text-5xl leading-none text-center
      text-transparent bg-clip-text bg-gradient-to-bl from-white to-purple-400"
      >
        RECRUITMENT TIMELINE
      </h1>
      {TimelineData.map((item, index) => (
        <TimelineGraphic
          key={index}
          title={item.title}
          date={item.date}
          color={item.color}
          left={item.left}
          isDesktopOrLaptop={isDesktopOrLaptop}
          isTabletOrMobile={isTabletOrMobile}
        >
          <Img
            fluid={data[item.image].childImageSharp.fluid}
            alt="icon timeline"
          />
        </TimelineGraphic>
      ))}
    </div>
  );
};

const TimelineGraphic = ({
  title,
  date,
  color,
  left,
  children,
  isDesktopOrLaptop,
  isTabletOrMobile,
}) => {
  const [iconRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-15%",
  });

  if (isTabletOrMobile) {
    console.log("tablet");
  } else {
    console.log("desktop");
  }

  const animate = useAnimation();

  useEffect(() => {
    if (inView) {
      animate.start("visible");
    }
  }, [animate, inView]);

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
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-auto w-full">
      <div className="flex flex-row items-center">
        {left && (
          <>
            <div
              className={`${isTabletOrMobile ? "w-4" : "w-60"} order-last`}
            />
            <div
              className={`flex flex-col ${
                isTabletOrMobile ? "w-4" : "w-60"
              } items-end`}
            >
              <span
                style={{ fontFamily: "Inter" }}
                className={`${
                  isTabletOrMobile ? "text-xs" : "text-4xl"
                } font-bold text-white`}
              >
                {title}
              </span>
              <span
                style={{ fontFamily: "Inter" }}
                className={`${
                  isTabletOrMobile ? "text-xs" : "text-lg"
                } font-normal text-white`}
              >
                {date}
              </span>
            </div>
          </>
        )}
        {isDesktopOrLaptop ? (
          <svg
            ref={iconRef}
            width="469"
            height="239"
            viewBox="0 0 469 239"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              animate={animate}
              initial="hidden"
              variants={svgVariants}
              d={
                left
                  ? "M234 7V96.9433C174.062 96.9433 125.472 145.533 125.472 205.47H51.51"
                  : "M235 7V96.9433C294.938 96.9433 343.528 145.533 343.528 205.47H417.49"
              }
              stroke={color}
              stroke-width="8"
              stroke-linecap="round"
            />
            <motion.path
              initial="hidden"
              animate={animate}
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeIn",
                    delay: 1,
                  },
                },
              }}
              d={
                left
                  ? "M51.5049 219.991C43.4996 219.991 37.0099 213.501 37.0099 205.495C37.0099 197.49 43.4996 191 51.5049 191C59.5103 191 66 197.49 66 205.495C66 213.501 59.5103 219.991 51.5049 219.991Z"
                  : "M417.495 219.991C425.5 219.991 431.99 213.501 431.99 205.495C431.99 197.49 425.5 191 417.495 191C409.49 191 403 197.49 403 205.495C403 213.501 409.49 219.991 417.495 219.991Z"
              }
              fill={color}
            />
          </svg>
        ) : (
          <svg
            ref={iconRef}
            width="228"
            height="116"
            viewBox="0 0 228 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <motion.path
                animate={animate}
                initial="hidden"
                variants={svgVariants}
                d={
                  left
                    ? "M113.757 3.39749V47.052C84.6184 47.052 60.9971 70.635 60.9971 99.726H25.041"
                    : "M114.243 3.39749V47.052C143.382 47.052 167.003 70.635 167.003 99.726H202.959"
                }
                stroke={color}
                stroke-width="8"
                stroke-linecap="round"
              />
              <motion.path
                animate={animate}
                initial="hidden"
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeIn",
                      delay: 1,
                    },
                  },
                }}
                d={
                  left
                    ? "M25.0386 106.774C21.1468 106.774 17.992 103.624 17.992 99.7384C17.992 95.8528 21.1468 92.7029 25.0386 92.7029C28.9303 92.7029 32.0852 95.8528 32.0852 99.7384C32.0852 103.624 28.9303 106.774 25.0386 106.774Z"
                    : "M202.961 106.774C206.853 106.774 210.008 103.624 210.008 99.7384C210.008 95.8528 206.853 92.7029 202.961 92.7029C199.07 92.7029 195.915 95.8528 195.915 99.7384C195.915 103.624 199.07 106.774 202.961 106.774Z"
                }
                fill={color}
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="228" height="116" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
        {left || (
          <>
            <div
              className={`${isTabletOrMobile ? "w-7" : "w-60"} order-first`}
            />
            <div
              className={`flex flex-col flex-grow-0 ${
                isTabletOrMobile ? "w-8" : "w-60"
              }`}
            >
              <span
                style={{ fontFamily: "Inter" }}
                className={`${
                  isTabletOrMobile ? "text-xs" : "text-4xl"
                } font-bold text-white`}
              >
                {title}
              </span>
              <span
                style={{ fontFamily: "Inter" }}
                className={`${
                  isTabletOrMobile ? "text-xs" : "text-lg"
                } font-normal text-white`}
              >
                {date}
              </span>
            </div>
          </>
        )}
      </div>
      <motion.div
        // className={`absolute ${isTabletOrMobile ? "w-20" : "w-40"}`}
        style={{
          position: "absolute",
          width: "10vw",
        }}
        initial="hidden"
        animate={animate}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          visible: {
            opacity: 1,
            y: isTabletOrMobile ? 40 : 80,
            transition: {
              duration: 1,
              delay: 1,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
