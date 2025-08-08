import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50"></div>

      {/* Content */}
      <div className="relative text-center max-w-3xl space-y-6 text-white">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug drop-shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Predict Prices with Confidence
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-xl mx-auto drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Upload your data and get accurate machine learning-based predictions in seconds.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <Link
            to="/predict"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700 transition transform hover:scale-105 shadow-lg"
          >
            Start Predicting
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
