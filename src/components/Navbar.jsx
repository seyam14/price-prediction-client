import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Predict", path: "/predict" },
  ];

  return (
    <motion.nav
      className="fixed w-full z-50 backdrop-blur-md bg-white/70 shadow-lg border-b border-white/20"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold text-indigo-600 tracking-wide hover:text-indigo-700 transition"
          >
            Price<span className="text-gray-800">Predictor</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                to={link.path}
                className="text-gray-700 hover:text-indigo-600 transition duration-300"
              >
                {link.name}
              </Link>
              {/* Underline Animation */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-gray-700 hover:text-indigo-600 transition"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white/90 backdrop-blur-lg px-4 pb-4 shadow-md border-t border-gray-200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-3 pt-3">
              {links.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="block text-gray-700 hover:text-indigo-600 transition"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
