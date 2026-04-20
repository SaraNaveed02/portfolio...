"use client";
import { useState } from "react";
import ProjectCard from "./card";
import project1 from '../../../public/image/project1.png'
import project2 from '../../../public/image/project2.png'
import project3 from '../../../public/image/project3.png'
import project4 from '../../../public/image/project4.png'
import project5 from '../../../public/image/project5.png'

const categories = ["HTML/CSS", "Framer Motion", "Next Js", "React JS", "Supabase","Tailwind"];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="bg-[#020617] text-white py-20 px-4 flex flex-col items-center max-w-7xl">
      {/* Header Section */}
      <div className="max-w-3xl text-center mb-12">
        <h4 className="text-[#00c2ff] uppercase tracking-widest text-sm font-semibold mb-4">
          Latest Portfolio
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Transforming Ideas into Exceptional
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          Business consulting consultants provide expert advice and guidance
          businesses to help them improve their performance, efficiency, and
          organizational
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 border ${
              activeTab === category
                ? "bg-gradient-to-r from-[#003d5b] to-[#001c2b] border-[#00c2ff]/30 text-[#00c2ff] shadow-[0_0_20px_rgba(0,194,255,0.15)]"
                : "bg-[#0f172a]/50 border-slate-800 text-gray-300 hover:border-slate-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <ProjectCard title={"Ecommerce"} image={project5} tags={["Framer Motion","Fake API","Next Js","Tailwind"  ]} link="https://ecommerce-lemon-three-53.vercel.app/" />
        <ProjectCard title={"Student Portal"} image={project2} tags={["NextJs","Html/Css","Tailwind" ,"Supabase" ]} link="https://exam-five-xi-12.vercel.app/" />
        <ProjectCard title={"Country Details"} image={project3} tags={["Fake API","Html/Css","React Js" ]} link="https://countries-details-chi.vercel.app/" />
        <ProjectCard title={"Maree"} image={project1} tags={["Framer Motion","Html/Css","React Js" ]} link="https://react-practice-two-rust.vercel.app/" />
        <ProjectCard title={"KababJess"} image={project4} tags={["Html/Css","Responsive","Javascript" ]} link="https://my-kababjees.netlify.app/" />
      </div>

    </section>
  );
}