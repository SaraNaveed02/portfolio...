"use client";
import { Megaphone, Pencil } from "lucide-react";
import {motion} from 'framer-motion'
import Button from "./Button";

export default function AboutSection() {
  return (
    <section className="bg-[#020617] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-10 max-w-7xl overflow-x-hidden">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center max-w-7xl">
        
        {/* Left Side: Experience Card */}
        <div className="relative overflow-hidden w-full max-w-[340px] sm:max-w-[400px] min-h-[360px] sm:min-h-[500px] rounded-3xl border border-white/10 bg-[#020617] flex flex-col items-center justify-center mx-auto lg:mx-0">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400/40 blur-[80px] rounded-full"></div>
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] pointer-events-none"></div>

          <div className="relative z-10 text-center px-4">
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-bold text-white tracking-tighter">1+</h2>
            <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight uppercase">
              Years Of <br /> Experience
            </p>
          </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="space-y-8">
          <div className="space-y-4">
            <small className="text-cyan-400 font-bold uppercase tracking-widest text-sm">
              About Me
            </small>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Boost Business Strategic <br /> Solutions with Us
            </h3>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Business consulting consultants provide expert advice and guidance
              to businesses to help them improve their performance and structure.
            </p>
          </div>

          {/* Sub-Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Small Card 1 - Corrected Layout */}
            <motion.div className="relative overflow-hidden w-full min-h-[200px] sm:min-h-[250px] rounded-3xl border border-white/10 bg-[#020617] p-5 sm:p-8 flex flex-col justify-center"
             initial={{rotate:0}}
             whileHover={{rotate:2}}>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400/30 blur-[50px] rounded-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                    <Pencil size={20} className="text-white" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white uppercase">Business</h2>
                </div>
                <p className="text-gray-300 text-sm leading-snug">
                  Each one showcases our commitment to quality.
                </p>
              </div>
            </motion.div>

            {/* Small Card 2 - Corrected Layout */}
            <motion.div className="relative overflow-hidden w-full min-h-[200px] sm:min-h-[250px] rounded-3xl border border-white/10 bg-[#020617] p-5 sm:p-8 flex flex-col justify-center" 
            initial={{rotate:0}}
            whileHover={{rotate:2}}
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400/30 blur-[50px] rounded-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                    <Megaphone size={20} className="text-white" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white uppercase">Consulting</h2>
                </div>
                <p className="text-gray-300 text-sm leading-snug">
                  Business consulting allows us to provide expert strategic advice.
                </p>
              </div>
            </motion.div>
<Button value={"Read More About Me  ↓" }/>
          </div>
        </div>
      </div>
    </section>
  );
}