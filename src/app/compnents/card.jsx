import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ProjectCard  ({ title, image, tags, link }) {
  return (
    <div className="group relative w-full max-w-[500px] bg-[#020617] border border-slate-800 rounded-[2.5rem] p-6 transition-all duration-500 hover:border-cyan-500/50">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_bottom,_rgba(0,194,255,0.40)_0%,_transparent_40%)] rounded-4xl" />
      
      {/* 1. Image Container */}
      <div className="relative overflow-hidden rounded-[2rem] bg-black mb-8">
        <Image 
          src={image} 
          alt={title} 
          className="w-full h-[300px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* 2. Content Section */}
      <div className="px-2">
        <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          {/* Tags */}
          <div className="flex gap-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-5 py-2 text-sm text-gray-400 font-black border border-slate-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
        </div>
         <div className='m-2 w-fit bg-linear-to-'>
         <a 
            href={link} 
            className="flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-full font-semibold bg-linear-to-tr from-gray-500 via-black to-gray-500 backdrop-blur-sm text-white transition-all hover:bg-linear-to-tr hover:from-cyan-500 hover:via-transparent hover:to-cyan-500  hover:border-cyan-500 transition-all duration-300"
          >
            View Details
            <ArrowRight size={16} />
          </a>
         </div>
      </div>

      {/* Background Glow (Aapka favorite effect) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(0,194,255,0.05)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
};

