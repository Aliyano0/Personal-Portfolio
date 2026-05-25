"use client";
import Image from "next/image";
import prommgramingImg from "../../../public/ProgrammingImage/programmingRed.png";
import Button from "../components/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import SkillsSection from "../components/SkillsSection";


export default function Home() {
  return (
    <main className="HomeContainer w-full">
      <section className="w-full xl:pl-18 pt-12 sm:pt-20 xl:pt-30 mb-20">
        <div className="textContainer w-full flex xl:space-x-2 flex-col xl:flex-row justify-center xl:justify-normal items-center gap-5 xs:gap-2 sm:gap-10 xl:gap-14">
          <div className="2xl:pl-4 HeroHeading w-full xl:w-[45%] font-dm-serif-display text-[90px] sm:text-[150px] md:text-[160px] xl:text-[180px] leading-22.5 sm:leading-32 text-main-text flex justify-center flex-col items-center xl:block">
            <h1 className="inline-block">ABOUT</h1>
            <div className="flex md:mt-6">
              <h1>ME.</h1>
              <motion.div 
              initial={{ rotate: -1 }} animate={{ rotate: 21 }} 
              transition={{ delay: 0.3, duration: 1.5, ease: "easeInOut", type:"spring", stiffness: 300 }}
              className="-mt-4.25 sm:-mt-7.5 md:-mt-5 -ml-5  sm:-ml-10 w-32.5 h-32.5 xs:h-35 sm:w-50  sm:h-50"
              >
              <Image
                loading="eager"
                src={prommgramingImg}
                alt="Programming screen"
                // className="-mt-4.25 xs:-mt-5.5 sm:-mt-7.5 md:-mt-8 -ml-5 xs:-ml-7.5 sm:-ml-10 w-32.5 h-32.5 xs:w-42.5 sm:w-50 xs:h-42.5 sm:h-50 md:w-62.5 md:h-62.5"
              />
              </motion.div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.8 }}
            className="para w-[85%] sm:w-[74%] lg:w-[69%] xl:w-[48%] text-sm sm:text-base md:text-[17px] lg:text-[19px] leading-7 md:leading-9 2xl:text-[20px] tracking-[1px] font-roboto text-main-para"
          >
            <p>
              <span> I am a skilled full-stack web developer with expertise in crafting responsive and dynamic web applications using HTML, CSS, and JavaScript. 
              </span> <br /> 
              <span className="mt-px block"> Proficient in modern frameworks like React.js, Next.js, and Tailwind CSS, I specialize in creating seamless and intuitive user experiences.</span> <br /> 
              <span className="mt-px block">My focus lies in building
              efficient, scalable, and high-performing web applications tailored
              to meet client needs. </span><br /> 
              <span className="mt-px block">With a passion for clean code and modern design, I bring ideas to life with precision and
              creativity.</span>
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }} // Starting state (invisible and lower)
      whileInView={{ opacity: 1, y: 0 }} // End state when in view
      viewport={{ once: true, amount: 0.5 }} // Configure how it triggers
      transition={{ duration: 0.8 }} // Speed of animation
        >
          <SkillsSection />
        </motion.div>



        <div className="btn w-full flex justify-center items-center mt-10 sm:mt-20">
          <Link href={"/projects"}>
            <Button btnText="Projects" />
          </Link>
        </div>
      </section>
    </main>
  );
}
