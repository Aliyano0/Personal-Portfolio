"use client";
import {motion} from "motion/react";
import Image from "next/image";


const AnimatedHeroImage = () => {
    return (
        <motion.div initial={{ translateY: -180, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
         
        </motion.div>
    );

};

export default AnimatedHeroImage;