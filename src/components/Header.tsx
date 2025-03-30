import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVLINKS } from "@/constants";
import { useActiveLinkContext } from "@/context/active-link-context";

import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

export default function Header() {
  const { setActiveLink, setTimeOfLastClick, activeLink } =
    useActiveLinkContext();
  const [menuOpen, setMenuOpen] = useState(false);

 

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };


  return (
    <header className="z-50 fixed top-0 left-0 w-full bg-white">
      {/* Top Bar */}
      <div className="bg-white">
        <div className="justify-end hidden lg:flex  items-center py-2 text-sm">
          <img src="/rec.png" alt="" className="w-[1086px] absolute" />
          <div className="flex relative text-white justify-between w-[990px] px-10">
            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 w-full font-bold">
                <IoCallSharp className="text-secondary h-[24px] w-[24px]" />
                <span>+61 450 545 073</span>
                <span>|</span>
                <IoMdMail className="text-secondary h-[24px] w-[24px]" />
                <span>Info@skillspotaustralia.edu.au</span>
              </div>
            </div>
            {/* Social Media & Login */}
            <div className="flex items-center space-x-5">
              <FaFacebookF className="hover:text-gray-300 cursor-pointer transition duration-300 h-[20px]" />
              <FaWhatsapp className="hover:text-gray-300 cursor-pointer transition duration-300 h-[20px] w-[24px]" />
              <FaLinkedinIn className="hover:text-gray-300 cursor-pointer transition duration-300 h-[20px] w-[24px]" />
              <FaInstagram className="hover:text-gray-300 cursor-pointer transition duration-300 h-[20px] w-[24px]" />
            </div>
            
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg lg:px-20 px-4">
        <div className="flex justify-between items-center h-[55px]">
          {/* Logo */}
          <a
            href="/"
            onClick={() => {
              setActiveLink("Home");
              setTimeOfLastClick(Date.now());
            }}
          >
            <img
              src="secure.png"
              alt="Logo"
              className=" w-20  h-12 lg:w-[140px] lg:h-[95px] object-contain lg:-mt-10"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex flex-1 justify-end gap-20">
            <ul className="flex gap-28 items-center">
              {NAVLINKS.map((link) => (
                <motion.li
                  className={`font-bold cursor-pointer hover:text-primary ${
                    activeLink === link.name ? "text-primary" : "text-text"
                  }`}
                  key={link.path}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <a
                    href={link.path}
                    className="font-overpass font-bold uppercase text-[15px] leading-[15px]"
                    onClick={() => {
                      setActiveLink(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden bg-gray-200 overflow-hidden"
            >
              <ul className="flex flex-col gap-4 items-center py-4">
                {NAVLINKS.map((link) => (
                  <motion.li
                    className="text-zinc-700 font-bold cursor-pointer hover:text-primary"
                    key={link.path}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={linkVariants}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <a
                      href={link.path}
                      onClick={() => {
                        setActiveLink(link.name);
                        setTimeOfLastClick(Date.now());
                        setMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
