import Image from "next/image";
import profilePic from "@/app/images/profilebw.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="HomeContainer w-full h-full ">
      <section className="w-full pl-4 xs:pl-8 md:pl-15 lg:px-18 flex flex-col-reverse items-center justify-center md:flex-row md:items-start md:justify-between mb-20">
        <div className="HeroHeading pt-12 md:pt-20 lg:pt-25 xl:pt-30 w-full md:w-[70%] font-dm-serif-display text-[80px] leading-20 xs:text-[105px] xs:leading-27.5 md:text-[120px] md:leading-30 lg:text-[160px] lg:leading-40 text-main-text">
          <h1>Hello, I&apos;m</h1>
          <div className="sm:max-w-145 md:max-w-221.5 Name sm:flex md:block lg1336:flex flex-col justify-center items-center">
            <h1 className="inline-block">Aliyan Aqeel</h1>
            <p className="text-[24px] xs:text-[30px] sm:text-[22px] md:text-[30px] lg:text-[34px] mt-3 md:mt-10 leading-6 lg1336:text-center sm:-translate-x-1.25 sm:-translate-y-5 md:translate-x-0 md:translate-y-0 lg1336:-translate-x-1.25 lg1336:-translate-y-1.25 lg1336:mt-0 h-8">
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
        </div>
        <div className="Image -ml-4 xs:-ml-7.5 mt-16 md:ml-0 md:mt-10 2xl:mr-5 w-70 h-70 xs:w-90 xs:h-90 lg:w-105 lg:h-105 rounded-full xs:self-start md:self-auto flex justify-center items-center saturate-0 overflow-hidden">
          <Image
            src={profilePic}
            alt="Aliyan Aqeel"
            className="h-70 w-50 xs:h-90 xs:w-62.5 lg:h-105 lg:w-75"
          />
        </div>
      </section>
    </main>
  );
}
