"use client";

import Button from "../components/Button";
const page = () => {
  return (
    <main className="w-full">
      <section className="w-full sm:pl-[30px] md:pl-[60px] lg:pl-[90px] pt-10 xs:pt-[70px] flex justify-center flex-col items-center sm:block mb-20">
        <div className="heading uppercase text-[60px] xs:text-[90px] sm:text-[110px] md:text-[140px] lg:text-[170px] font-dm-serif-display">
          <h1>CONTACT.</h1>
        </div>
        <div className="formConatiner font-roboto sm:pl-[20px] w-full sm:w-auto">
          <form
            action="#"
            className="w-full sm:w-auto flex flex-col items-center justify-center sm:block"
          >
            <h4 className="font-medium text-[20px] xs:text-[28px] mb-6">
              Get In Touch:
            </h4>
            <div className="w-full sm:w-auto inputs flex flex-col gap-6 xs:gap-4 justify-center items-center sm:justify-normal sm:items-start text-sm xs:text-base ">
              <label
                htmlFor="name"
                className="w-[62%]  sm:w-[55%] md:w-[48.5%] lg:w-[40%] xl:w-1/3"
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="py-2 border-b-[1px] px-1 border-b-gray-500 w-full placeholder:text-main-para "
                />
              </label>
              <label
                htmlFor="email"
                className="w-[62%]  sm:w-[55%] md:w-[48.5%] lg:w-[40%] xl:w-1/3"
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="py-2 border-b-[1px] px-1 border-b-gray-500 w-full placeholder:text-main-para "
                />
              </label>
              <label
                htmlFor="message"
                className="w-[62%] sm:w-[55%] md:w-[48.5%] lg:w-[40%] xl:w-1/3"
              >
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  placeholder="Your Message"
                  className="border-b-[1px] px-1 border-b-gray-500 w-full placeholder:text-main-para "
                ></textarea>
              </label>
            </div>
            <div className="btnContainer mt-10">
              <Button btnText="submit" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default page;
