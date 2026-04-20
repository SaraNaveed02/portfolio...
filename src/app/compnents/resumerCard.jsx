import React from 'react';

export default function ResumeCard({ title, years, para }) {
  return (
    <div className="group relative p-6 md:p-8 rounded-[2rem] bg-[#0f172a]/30 border border-slate-800 transition-all duration-500 hover:border-cyan-500/30 hover:bg-[#0f172a]/50">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(0,194,255,0.2)_0%,_transparent_30%)] rounded-[2rem]" />
      {/* 1. Title/Role */}
      <h4 className="text-xl text-gray-300 font-bold mb-2 group-hover:text-white transition-colors">
        {title}
      </h4>

      {/* 2. Years - Highlighted Bold */}
      <h3 className="text-small font-medium text-white mb-6 tracking-tight">
        {years}
      </h3>

      {/* 3. Paragraph */}
      <p className="text-gray-400 leading-relaxed text-small font-light">
        {para}
      </p>

    </div>
  );
}