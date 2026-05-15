"use client";
import Image from "next/image";
import prommgramingImg from "../../../public/ProgrammingImage/programmingRed.png";
import Button from "../components/Button";
import Link from "next/link";
export default function Home() {
  return (
    <main className="HomeContainer w-full h-full">
      <section className="w-full xl:pl-[72px] pt-12 xs:pt-20 sm:pt-[120px] mb-20">
        <div className="textContainer w-full flex xl:space-x-2 flex-col xl:flex-row justify-center xl:justify-normal items-center gap-5 xs:gap-9 sm:gap-14">
          <div className="2xl:pl-4 HeroHeading w-full xl:w-[45%] font-dm-serif-display text-[90px] xs:text-[110px] sm:text-[150px] md:text-[190px] lg:text-[220px] xl:text-[180px] 2xl:text-[210px] leading-[90px] xs:leading-[120px] sm:leading-[135px] md:leading-[170px] text-main-text flex justify-center flex-col items-center xl:block">
            <h1 className="inline-block">ABOUT</h1>
            <div className="flex md:mt-6">
              <h1>ME.</h1>
              <Image
                loading="eager"
                src={prommgramingImg}
                alt="Programming screen"
                className="mt-[-17px] xs:mt-[-22px] sm:mt-[-30px] md:mt-[-32px] ml-[-20px] xs:ml-[-30px] sm:ml-[-40px] w-[130px] h-[130px] xs:w-[170px] sm:w-[200px] xs:h-[170px] sm:h-[200px] md:w-[250px] md:h-[250px] rotate-[21deg]"
              />
            </div>
          </div>
          <div className="para w-[85%] xs:w-[80%] sm:w-[74%] lg:w-[69%] xl:w-[48%] text-sm sm:text-base md:text-[17px] lg:text-[19px] leading-7 md:leading-9 2xl:text-[20px] tracking-[1px] font-roboto text-main-para">
            <p>
              I am a skilled full-stack web developer with expertise in crafting
              responsive and dynamic web applications using HTML, CSS, and
              JavaScript. <br /> Proficient in modern frameworks like React.js,
              Next.js, and Tailwind CSS, I specialize in creating seamless and
              intuitive user experiences. <br /> My focus lies in building
              efficient, scalable, and high-performing web applications tailored
              to meet client needs. <br /> With a passion for clean code and
              modern design, I bring ideas to life with precision and
              creativity.
            </p>
          </div>
        </div>
        <div className="btn w-full flex justify-center items-center mt-10 sm:mt-20">
          <Link href={"/projects"}>
            <Button btnText="Projects" />
          </Link>
        </div>
      </section>
    </main>
  );
}
