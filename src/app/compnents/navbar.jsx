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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Resume", href: "#resume" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/sara_naveed_3/",
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sara-naveed-2102a42b6/",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/sara.naveed.828167",
      icon: <FaFacebookF />,
    },
  ];

const handleNavClick = (event, href) => {
  // agar section link hai (#about etc)
  if (href.startsWith("#")) {
    event.preventDefault();

    const targetSection = document.querySelector(href);
    if (!targetSection) return;

    const navbarOffset = 96;
    const targetPosition =
      targetSection.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }

  // mobile menu close ho jaye har case me
  setIsOpen(false);
};

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full bg-black/40 backdrop-blur-md text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between text-white">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" className="w-14 md:w-28" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
            >
              <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
                {link.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* Social Icons Desktop */}
        <div className="hidden lg:flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
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
        className={`lg:hidden fixed top-0 left-0 w-full h-full z-50 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{background: "rgba(0,0,0,0.95)"}}
      >
        <ul className="flex flex-col items-center gap-8 justify-center h-full font-semibold text-white text-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
            >
              <li className="hover:text-blue-500 transition duration-300">
                {link.name}
              </li>
            </Link>
          ))}

          {/* Social icons mobile */}
          <div className="flex gap-4 pt-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                aria-label={social.name}
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