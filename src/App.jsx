import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Predict from "./pages/Predict";

function App() {
  const location = useLocation();

  // Page transition animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Fixed navbar on top */}
      <Navbar />

      {/* Main content with padding for navbar height */}
      <div className="pt-16 flex-grow px-3 sm:px-4 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-full"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/predict" element={<Predict />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}

export default App;
