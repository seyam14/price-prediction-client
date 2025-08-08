import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-8 mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} PricePredictor. All rights reserved.
          </p>
          <div className="mt-2 flex gap-4 justify-center md:justify-start text-gray-400">
            <a href="#" className="hover:text-indigo-400 transition">Privacy</a>
            <a href="#" className="hover:text-indigo-400 transition">Terms</a>
            <a href="#" className="hover:text-indigo-400 transition">Support</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-gray-400">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
