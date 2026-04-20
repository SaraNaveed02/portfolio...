"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import logo from "../../../public/image/logo.png";
import Link from "next/link";
import Image from "next/image";
import "../styleComponents/style.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Resume", href: "/resume" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full xl:max-w-7xl z-50 bg-black/40 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between text-white">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" className="w-14 md:w-28" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 font-semibold">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
                {link.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* Social Icons Desktop */}
        <div className="hidden lg:flex gap-3">
          <Link href="#" className="icon">
            <FaInstagram />
          </Link>
          <Link href="#" className="icon">
            <FaLinkedinIn />
          </Link>
          <Link href="#" className="icon">
            <FaFacebookF />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 bg-black/90 backdrop-blur-lg font-semibold">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={()=>setIsOpen(false)}>
              <li className="hover:text-blue-500 transition duration-300">
                {link.name}
              </li>
            </Link>
          ))}

          {/* Social icons mobile */}
          <div className="flex gap-4 pt-4">
            <a href="https://www.instagram.com/sara_naveed_3/" target="_blank" className="icon">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/sara-naveed-2102a42b6/"target="_blank"  className="icon">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/sara.naveed.828167" target="_blank" className="icon">
              <FaFacebookF />
            </a>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;