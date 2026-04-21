import ResumeCard from './resumerCard'

const ExperienceHeader=()=> {
    return (
      <section className="bg-[#020617] text-white py-16 px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sub-heading */}
          <h4 className="text-[#00c2ff] uppercase tracking-[0.2em] text-sm font-bold mb-4">
            Education & Experience
          </h4>
  
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Empowering Creativity <br className="hidden md:block" />
            <span className="inline-block mt-2">through</span>
          </h2>
  
          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Business consulting consultants provide expert advice and guidance
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-3">
            <ResumeCard title={'Scentico'} years={"January-2026 to April-2026"}  para={"Developed the frontend for Scentico’s premium e-commerce store, focusing on Next.js performance, cinematic animations, and seamless user journeys."}/>
            <ResumeCard title={'Virtual University of Pakistan'} years={"Present"}  para={"Software Engineering student focused on modern web development and building real-world projects to strengthen practical skills."}/>
            <ResumeCard title={'SMIT ( saylani)'} years={"January-2025 to present"}  para={"Learning Modern Web and App Development from Saylani, focusing on building responsive websites and real-world projects to strengthen practical frontend skills."}/>
        </div>
      </section>
    );
  }

  export default ExperienceHeader