"use client";

import React from 'react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  // 1. Move the handler here, inside the main component but outside the return
  

  return (
    <section className="bg-[#05070a] relative w-full max-w-7xl mx-auto my-5 text-white py-20 px-6 overflow-hidden rounded-4xl">
      {/* Top Left Glow Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-600/70 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text & Info */}
        <div className="space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Get Ready To <br /> 
            <span className="text-white">Create Great</span>
          </h2>

          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">E-mail:</p>
                <p className="text-lg font-medium">saranaveed306@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location:</p>
                <p className="text-lg font-medium">Gulshan-e-Maymar, Karachi, Pakistan</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Contact:</p>
                <p className="text-lg font-medium">+923071222800</p>
              </div>
            </div>
          </div>
        </div>

       {/* Right Side: Form */}
<div className="bg-transparent">
  <p className="uppercase tracking-widest text-sm font-bold mb-8">Get in touch</p>
  
  {/* Added your Formspree endpoint here */}
  <form 
    action="https://formspree.io/f/xbdqkwng" 
    method="POST" 
    className="space-y-4"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input 
        type="text" 
        name="name" // Required for Formspree
        placeholder="Your Name" 
        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-white"
        required
      />
      <input 
        type="text" 
        name="phone" // Required for Formspree
        placeholder="Phone Number" 
        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-white"
      />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input 
        type="email" 
        name="email" // Required for Formspree
        placeholder="Your Email" 
        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-white"
        required
      />
      <input 
        type="text" 
        name="subject" // Required for Formspree
        placeholder="Subject" 
        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-white"
      />
    </div>

    <textarea 
      name="message" // Required for Formspree
      rows={6} 
      placeholder="Your Message" 
      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none text-white"
      required
    />

    <button 
      type="submit" 
      className="w-full bg-[#1da1f2] hover:bg-blue-500 text-white font-bold py-5 rounded-full flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
    >
      Appointment Now <ArrowRight className="w-5 h-5" />
    </button>
  </form>
</div>
      </div>
    </section>
  );
};

export default ContactSection;