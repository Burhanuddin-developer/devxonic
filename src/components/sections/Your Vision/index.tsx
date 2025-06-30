'use client';

import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <div className="page-section">
      <div className="w-full md:h-120 bg-gradient-to-b from-[#0b0b17] via-[#0b0b17] to-[#693de2] rounded-3xl p-15 text-center shadow-2xl border border-gray-700 section-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-400 mb-2 leading-snug">
            Ignite <span className="text-white">Your Vision</span>
          </h1>
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-400 mb-2 leading-snug">
            Start Your <span className="text-white">Journey with Us!</span>
          </h1>
        </motion.div>

        <p className="text-base md:text-md text-gray-300 mt-6">
          Ready to take your digital presence to the next level?
        </p>

        <div className="text-base md:text-md text-gray-300 mt-5 mb-6 space-y-2">
          <p>Contact <span className="text-white">DEVXONIC</span> today and let’s collaborate to bring your ideas to life.</p>
          <p>We’re here to turn your goals into groundbreaking solutions. Your adventure begins now!</p>
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-white text-black py-2 px-10 rounded-full font-medium hover:scale-105 transition text-md">
            Get Started
          </button>
          <button className="flex items-center gap-3 text-white py-2 px-10 rounded-full hover:scale-105 transition text-md">
            <FaPhoneAlt /> Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
