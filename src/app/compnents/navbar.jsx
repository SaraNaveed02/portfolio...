"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import logo from "../../../public/image/logo.png";
import Link from "next/link";
import Image from "next/image";
import "../styleComponents/style.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Resume", href: "#resume" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/sara_naveed_3/", icon: <FaInstagram /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sara-naveed-2102a42b6/", icon: <FaLinkedinIn /> },
    { name: "Facebook", href: "https://www.facebook.com/sara.naveed.828167", icon: <FaFacebookF /> },
  ];

  const handleNavClick = (event, href) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      const targetSection = document.querySelector(href);
      if (targetSection) {
        const navbarOffset = 96;
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarOffset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    // Fixed: Added z-[100] to the header itself so the menu inside it isn't capped by a lower z-index
    <header className="fixed top-0 inset-x-0 z-[100] w-full bg-black/80 backdrop-blur-md text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" className="w-14 md:w-28" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 font-semibold">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={(event) => handleNavClick(event, link.href)}>
              <li className="hover:text-blue-500 transition duration-300 cursor-pointer">{link.name}</li>
            </Link>
          ))}
        </ul>

        {/* Social Icons Desktop */}
        <div className="hidden lg:flex gap-3">
          {socialLinks.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="icon text-xl">
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden z-[110] relative" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* FIXED MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 w-screen h-screen bg-black transition-transform duration-300 ease-in-out flex flex-col items-center justify-center ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: 105 }}
      >
        <ul className="flex flex-col items-center gap-6 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-bold text-white hover:text-blue-500 transition-colors block py-1"
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Social icons mobile */}
          <div className="flex gap-6 mt-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-blue-500 transition-all text-xl"
                onClick={() => setIsOpen(false)}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;