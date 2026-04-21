import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ProjectCard  ({ title, image, tags, link }) {
  return (
    <div className="group relative max-w-7xl min-w-0 bg-[#020617] border border-slate-800 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-6 transition-all duration-500 hover:border-cyan-500/50 h-full flex flex-col">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_bottom,_rgba(0,194,255,0.40)_0%,_transparent_40%)] rounded-4xl" />
      
      {/* 1. Image Container */}
      <div className="relative shrink-0 aspect-[4/3] sm:aspect-video overflow-hidden rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] bg-black mb-4 sm:mb-8">
        <Image 
          src={image} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* 2. Content Section */}
      <div className="px-0 sm:px-2 flex flex-col flex-1 min-h-0">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-6 group-hover:text-cyan-400 transition-colors break-words">
          {title}
        </h3>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 min-w-0">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm text-gray-400 font-black border border-slate-800 rounded-full max-w-[min(100%,14rem)] sm:max-w-none text-center leading-tight"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
        </div>
         <div className="mt-auto pt-4 sm:pt-6 sm:m-2 w-full sm:w-fit">
         <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto min-h-[44px] items-center justify-center gap-2 px-5 py-3 sm:px-6 border border-slate-700 rounded-full text-sm sm:text-base font-semibold bg-gradient-to-tr from-gray-500 via-black to-gray-500 backdrop-blur-sm text-white transition-all hover:bg-gradient-to-tr hover:from-cyan-500 hover:via-transparent hover:to-cyan-500 hover:border-cyan-500 duration-300"
          >
            View Details
            <ArrowRight size={16} className="shrink-0" aria-hidden />
          </a>
         </div>
      </div>

      {/* Background Glow (Aapka favorite effect) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(0,194,255,0.05)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
};

