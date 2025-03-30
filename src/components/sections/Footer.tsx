import React from "react";
// import { motion } from "framer-motion";
// import { PiPhoneFill } from "react-icons/pi";
import { IoCall, IoMail } from "react-icons/io5";
// import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="font-bold bg-[#F4ECE6] h-auto px-8 py-10 lg:px-20 lg:py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Logo and Description */}
      <div className="flex flex-col items-center lg:items-start lg:w-full ">
        <img src="/logo.png" alt="Nexus" className="w-[112px] h-[105px]" />
        <p className="text-[#6C757D] text-center lg:text-left text-sm lg:text-base">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col items-center ">
        <h3 className="text-2xl font-bold font-overpass text-secondary mb-4 text-center lg:text-left">
          Quick <span className="text-black">Link</span>
        </h3>
        <ul className="space-y-2 text-gray-600 text-sm lg:text-base">
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#software">Software</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#appointment">Meeting</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>

      {/* Quick Contact */}
      <div className="flex flex-col items-center ">
        <h3 className="text-2xl font-bold font-overpass text-secondary mb-4 text-center lg:text-left">
          Quick <span className="text-black">Contact</span>
        </h3>
        <p className="flex items-center mb-4 text-gray-600 text-sm lg:text-base">
          <FaLocationDot className="text-secondary mr-3" /> Jorpati,Kathmandu
        </p>
        <p className="flex items-center mb-4 text-gray-600 text-sm lg:text-base">
          <IoCall className="text-secondary mr-3" /> +977 9840031548
        </p>
        <p className="flex items-center mb-4 text-gray-600 text-sm lg:text-base">
          <IoMail className="text-secondary mr-3" /> nexusacc@gmail.com
        </p>
      </div>

      {/* Social Media and QR Code */}
      <div className="flex flex-col items-center ">
        <h3 className="text-2xl font-bold font-overpass text-secondary mb-4 text-center lg:text-left">
          Let's <span className="text-black">Get Social</span>
        </h3>
        <div className="flex space-x-4 mb-4 text-2xl">
          <FaFacebookF className="text-blue-700" />
          <FaInstagram className="text-orange-700" />
          <FaLinkedin className="text-blue-700" />
          <FaTwitter className="text-blue-500" />
          <FaWhatsapp className="text-green-800" />
        </div>
        <img
          src="/QR.png"
          alt="QR"
          className="mb-4 max-w-[100px] lg:max-w-[150px]  "
        />
        <button className="w-full max-w-[115px] h-[38px] bg-secondary hover:bg-primary rounded-lg text-white font-overpass text-sm lg:text-base">
          Call Us Today
        </button>
      </div>
    </div>
  );
};

export default Footer;
