"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import {motion} from 'framer-motion'

const Button = ({ value ,}) => {
  return (
    <motion.div className="relative group w-fit mt-5">
      <motion.button className="flex   items-center gap-2 border border-white/30 px-8 py-3.5 rounded-full font-semibold bg-linear-to-tr from-gray-500 via-black to-gray-500 backdrop-blur-sm text-white transition-all hover:bg-linear-to-tr hover:from-cyan-500 hover:via-transparent hover:to-cyan-500  hover:border-cyan-500 "
     initial={{ x: 0 }}  
     whileHover={{x:15}} 
    transition={{ 
       duration: 0.3,            
       ease: "easeInOut" ,
      
     }}
     
>
        {value}

        <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4/5 h-[1px] pointer-events-none"></div>
      </motion.button>
    </motion.div>
  );
};

export default Button;
