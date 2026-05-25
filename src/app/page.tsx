"use client";
import Link from "next/link";
import profilePic from "@/app/images/profilebw.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="HomeContainer w-full h-full ">
      <section className="w-full pl-4 xs:pl-6 sm:pl-8 md:pl-15 lg:px-18 flex flex-col-reverse items-center justify-center md:flex-row md:items-start md:justify-between mb-20">
        <motion.div initial={{ translateX: -180, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="HeroHeading pt-12 md:pt-20 xl:pt-30 w-full md:w-[70%] font-dm-serif-display text-[50px] leading-13 xs:text-[60px] xs:leading-16 sm:text-[70px] sm:leading-18 md:text-[90px] md:leading-22 lg:text-[125px] lg:leading-32 xl:text-[130px] xl:leading-33 text-main-text">
          <h1>Hi, I&apos;m</h1>
          <div className="sm:max-w-145 md:max-w-221.5 Name">
            <h1 className="inline-block">Aliyan Aqeel</h1>
            <p className="text-[24px] xs:text-[30px] sm:text-[22px] md:text-[30px] lg:text-[34px] mt-3 md:mt-6 lg:mt-10 leading-6 h-8">
              Full-Stack Web Developer.
            </p>
          </div>
          <p className="max-w-225 text-sm leading-6 xs:text-[16px] sm:text-[17px] xs:leading-8 font-roboto font-normal text-main-para mt-5 xs:mt-6 sm:mt-0 md:mt-8 ">
            I am a skilled full-stack web developer with expertise in crafting
            responsive and dynamic web applications using HTML, CSS, and
            JavaScript. Proficient in modern frameworks like React.js, Next.js,
            and Tailwind CSS, I create seamless user experiences while ensuring
            performance and scalability.{" "}
            <Link
              className="underline tracking-[1px] text-main-text font-medium"
              href="/about"
            >
              More about me.
            </Link>
          </p>
        </motion.div>
        <motion.div initial={{ translateY: -150, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="Image -ml-4 xs:-ml-7.5 mt-16 md:ml-0 md:mt-10 2xl:mr-5 w-70 h-70 sm:h-80 sm:w-80 md:w-90 md:h-90 xl:w-105 xl:h-105 rounded-full sm:self-start md:self-auto flex justify-center items-center saturate-0 overflow-hidden">
           <Image
            loading="eager"
            src={profilePic}
            alt="Aliyan Aqeel"
            className="h-70 w-50 sm:h-80 sm:w-55 md:h-90 md:w-62.5 xl:h-105 xl:w-75 rounded-l-4xl"
          />
        </motion.div>
      </section>
    </main>
  );
}
