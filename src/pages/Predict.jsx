import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Predict() {
  const [formData, setFormData] = useState({ sqft: "", bedrooms: "" });
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await axios.post("http://localhost:4000/predict", {
        sqft: Number(formData.sqft),
        bedrooms: Number(formData.bedrooms),
      });

      if (res.data?.predicted_price && typeof res.data.predicted_price === "number") {
        setPrice(res.data.predicted_price);
      } else if (res.data?.error) {
        setError(res.data.error);
        setPrice(null);
      } else {
        setError("Unexpected response from server");
        setPrice(null);
      }
    } catch (err) {
      setError("Prediction failed");
      setPrice(null);
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex items-center justify-center px-4 sm:px-6">
      <motion.div
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 text-blue-600"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          House Price Predictor 🏠
        </motion.h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <motion.input
            type="number"
            name="sqft"
            placeholder="Enter Square Footage"
            onChange={handleChange}
            value={formData.sqft}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="number"
            name="bedrooms"
            placeholder="Enter Number of Bedrooms"
            onChange={handleChange}
            value={formData.bedrooms}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Predict Price
          </motion.button>
        </form>

        {error && (
          <motion.div
            className="mt-6 text-center text-red-600 font-semibold text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Error: {error}
          </motion.div>
        )}

        {price !== null && typeof price === "number" && (
          <motion.div
            className="mt-6 text-center text-lg sm:text-xl font-semibold text-green-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Predicted Price: ${price.toFixed(2)}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Predict;
