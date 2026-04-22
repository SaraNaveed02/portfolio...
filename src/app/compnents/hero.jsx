"use client";
import React, { useEffect, useState } from "react";
import heroImage from "../../../public/image/heroimage.png";
import Image from "next/image";
import Button from "./Button";
import {motion} from 'framer-motion'

const Heropage = () => {
  const title = [
    "Frontend Developer.",
    "Web Designer.",
    "UI Developer.",
    "Client-Side Developer.",
  ];
  const paragraph =
    "A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth.";

  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = title[currentTitle];

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setSpeed(120);
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setSpeed(50);
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % title.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle, speed, title]);

  return (
    <div className="relative min-h-full w-full max-w-7xl mx-auto flex items-center px-4 sm:px-6 lg:px-10 pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="heroimage"
          fill
          className="object-cover w-full h-full brightness-50"
        />
      </div>

      {/* Content */}
      <motion.div
       initial={{ y: 300, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 text-white w-full max-w-5xl">
        <small 
           className="text-xs sm:text-sm font-extralight uppercase tracking-widest">
          Hello
        </small>
        <h1 
           className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mt-4 sm:mt-5">
          I'm Sara Naveed
        </h1>
        <div className="flex flex-wrap items-baseline gap-2 sm:gap-4 text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-3 sm:mt-4 max-w-3xl">
          <span className="text-white">A</span>
          <p className="w-1/2 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent border-r-4 border-cyan-400 pr-2 animate-typewriter">
            {displayText}
          </p>
        </div>
        <div className="mt-6 sm:mt-9 w-full sm:w-4/5 md:w-1/2">
          <p className="text-sm sm:text-base md:text-[17px] font-extralight font-mono tracking-wide">
            {paragraph}
          </p>
        </div>
        <div>
          <Button value="View Portfolio ->" />
        </div>
      </motion.div>
    </div>
  );
};

export default Heropage;
