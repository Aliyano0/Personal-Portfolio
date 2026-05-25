"use client";
import { motion } from "framer-motion";

interface IButton {
  btnText: string;
}



const Button = ({ btnText }: IButton) => {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.90 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className=" hover:cursor-pointer px-10 py-4 md:px-12 md:py-5 bg-main-text text-white hover:text-black hover:bg-white hover:border hover:border-black uppercase font-roboto transition-all duration-200 shadow-2xl hover:shadow-none text-base md:text-[18px] tracking-[1px]"
    >
      {btnText}
    </motion.button>
  );
};

export default Button;
