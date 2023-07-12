import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div
        className="h-full w-full bg-gradient-to-r 
      from-primary/10 via-black/30 to-black/10"
      >
        <div
          className="text-center flex flex-col justify-center 
        xl:pt-40 xl:text-left h-full container mx-auto"
        >
          {/* title */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 "
          >
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4 text-accent">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Web Designer", 2000]}
                speed={50}
                className=""
                wrapper="span"
                repeat={Infinity}
              />
            </div>
          </motion.div>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            An enthusiastic front end Developer. Aming to use Knowledges of
            programming , system analysis , Graphic Design to achieve the goals
            and success career.
          </motion.p>
          {/* btn
          <div className="flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div> */}
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
          xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        {/* particle */}
        <ParticlesContainer />
        {/* avatarimg */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full max-w-[600px] max-h-[620px] absolute
          -bottom-20 lg:bottom-0 lg:right-[5%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
