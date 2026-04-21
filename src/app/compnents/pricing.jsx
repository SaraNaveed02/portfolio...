"use client";
import React from "react";
import PricingCard from "./pricingComponent";

const PricingSection = () => {
  return (
    <section className="bg-[#05070a] text-white w-full max-w-7xl mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Small heading */}
        <p className="text-cyan-400 tracking-[4px] text-sm font-semibold mb-6">
          My Price plan
        </p>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Enhancing Collaboration
          <br className="hidden md:block" />
          <span className="inline-block mt-2"> between Remote</span>
        </h2>

       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3">
        <PricingCard
          planName="Basic"
          price="80"
          billingCycle="Project"
          features={[
            "Single Page Website (HTML/CSS/Tailwind)",
            "Responsive Design (Mobile Friendly)",
            "Basic Animations (Framer Motion)",
            "Contact Form Integration",
            "Delivery in 3 Days",
          ]}
        />

        <PricingCard
          isFeatured={true}
          planName="Pro"
          price="180"
          billingCycle="Project"
          features={[
            "Multi-Page Website (Next.js + React)",
            "Supabase Integration (Auth/Forms)",
            "Modern UI with Tailwind/Bootstrap",
            "API Integration",
            "Delivery in 5–7 Days",
          ]}
        />

        <PricingCard
          planName="Enterprise"
          price="350"
          billingCycle="Project"
          features={[
            "Full Stack Frontend App (Next.js + Supabase)",
            "Authentication & Database Setup",
            "Dashboard / Admin Panel",
            "Performance Optimization",
            "Priority Support + Revisions",
          ]}
        />
      </div>
    </section>
  );
};

export default PricingSection;
