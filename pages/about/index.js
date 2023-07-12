import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "- Perfect Group Company",
        stage: "Graphic & Web Design - 2023 - present",
      },
      {
        title: "- PPN Perfect Property",
        stage: "Graphic Design - 2020 - 2022",
      },
      {
        title: "- Phuket Boatlagoon",
        stage: "Trainee - 2019 - 2019",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Information System - Prince of Songkla University",
        stage: "2015 - 2019",
      },
      {
        title: "Srinakorn Foundation School",
        stage: "2013 - 2015",
      },

    ],
  },
];

import Avatar1 from "../../components/Avatar1";
import Circles from "../../components/Circles";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { icons } from "react-icons";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4">
                About <span className="text-accent">Me</span>
              </span>
            </div>
          </motion.div>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            An enthusiastic front end Developer. Aming to use Knowledges of
            programming , system analysis , Graphic Design to achieve the goals
            and success career.
          </motion.p>
          <div className=" flex flex-row max-w-max gap-x-10 items-center justify-center mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            <button className="btn rounded-full">
              <a href="mailto:Natthawatpetphan@gmail.com">Contact Me</a>
            </button>
            <a href="#" className="">My Portfolio <BsArrowRight className="text-accent text-[26px]" /></a>
          </div>
        </div>
              {/* avatarimg */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[250px] max-w-[450px] max-h-[650px] opacity-50"
      >
        <Avatar1 />
      </motion.div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[350px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize
              xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1
              after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icon */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
