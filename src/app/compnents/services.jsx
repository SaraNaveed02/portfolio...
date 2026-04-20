"use client";
import React from "react";
import { motion } from "framer-motion";
import image from "../../../public/image/image2.jpg";
import Image from "next/image";
const ServiceSection = () => {
  return (
    <section className="bg-[#05070a] text-white py-20 px-6 md:px-12 max-w-7xl">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-[#00c2ff] uppercase tracking-widest text-sm font-semibold">
          Latest Service
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
          Inspiring The World One <br /> Project
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Business consulting consultants provide expert advice and guidance to
          businesses to help them improve their performance, efficiency, and
          organizational success.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Card: Text Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-1 justify-center items-center gap-5">
          {/* first card */}
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0 }}
            whileHover={{ rotateY: 15, rotate: -0.5 }}
            className="flex flex-col justify-between items-center gap-5"
          >
            {/* Card Template (Isi structure ko teeno cards ke liye use karein) */}
            <div className="relative group p-10 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-center min-h-[220px] overflow-hidden transition-all duration-500">
              {/* Corrected Glow Effect Layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_bottom,_rgba(0,194,255,0.40)_0%,_transparent_70%)]" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  <span className="text-[#00c2ff] mr-2">01.</span> A Portfolio
                  of Creativity
                </h3>
                <p className="text-gray-400 leading-relaxed text-md">
                  Business consulting consultants provide expert advice and
                  guidance to businesses to help them improve their performance
                  efficiency.
                </p>
              </div>
            </div>

            {/* Repeat for Card 02 and 03 with same structure... */}
          </motion.div>
          {/* second card */}
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0 }}
            whileHover={{ rotateY: 15, rotate: -0.5 }}
            className="relative group p-10 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-center min-h-[220px] overflow-hidden transition-all duration-500"
          >
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_bottom,_rgba(0,194,255,0.40)_0%,_transparent_70%)]" />

            <h3 className="text-2xl font-bold mb-6">
              <span className="text-[#00c2ff] mr-2">02.</span> My Portfolio of
              Innovation
            </h3>
            <p className="text-gray-400 leading-relaxed text-md">
              My work is driven by the belief that thoughtful design and
              strategic planning can empower brands, transform businesses
            </p>
          </motion.div>
          {/* third card */}
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0 }}
            whileHover={{ rotateY: 15, rotate: -0.5 }}
            className="relative group p-10 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-center min-h-[220px] overflow-hidden transition-all duration-500"
          >
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_bottom,_rgba(0,194,255,0.40)_0%,_transparent_80%)]" />

            <h3 className="text-2xl font-bold mb-6">
              <span className="text-[#00c2ff] mr-2">03.</span> A Showcase of My
              Projects
            </h3>
            <p className="text-gray-400 leading-relaxed text-md">
              In this portfolio, you’ll find a curated selection of projects
              that highlight my skills in [Main Areas, e.g., responsive web
              design]
            </p>
          </motion.div>
        </div>

        {/* Right Card: Image Focus */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 p-[1px] h-[400px]  md:h-[700px] ">
          <div className="bg-black h-full w-full rounded-[23px] overflow-hidden relative">
            {/* Replace with your actual image path */}
            <Image
              src={image}
              alt="Consultant"
              className="w-full h-fit object-cover"
            />
            {/* Gradient Overlay for that blue tint in the corner */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
