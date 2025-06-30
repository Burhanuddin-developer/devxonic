'use client';

import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ReusableCardProps {
  title1: string;
  highlight1: string;
  title2: string;
  highlight2: string;
  subtitle: string;
  paragraphs: string[];
  primaryBtnLabel: string;
  onPrimaryClick?: () => void;
  secondaryBtnLabel: string;
  onSecondaryClick?: () => void;
  className?: string;
}

export default function Card({
  title1,
  highlight1,
  title2,
  highlight2,
  subtitle,
  paragraphs,
  primaryBtnLabel,
  onPrimaryClick,
  secondaryBtnLabel,
  onSecondaryClick,
  className , // optional className
}: ReusableCardProps) {
  return (
    <div className={`page-section`}>
      <div className={`${className} w-full bg-gradient-to-b from-[#0b0b17] via-[#0b0b17] to-[#7146e7] rounded-3xl p-10 text-center shadow-2xl border border-gray-700 section-container`}>
        <motion.div

          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl mt-6 md:text-2xl lg:text-3xl font-semibold text-gray-400 mb-2 leading-snug">
            {title1} <span className="text-white">{highlight1}</span>
          </h1>
          <h1 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-400 mb-2 leading-snug">
            {title2} <span className="text-white">{highlight2}</span>
          </h1>
        </motion.div>

        <p className="text-base md:text-md text-gray-300 mb-3 mt-6">
          {subtitle}
        </p>

        <div className="text-base md:text-sm text-gray-300 mb-6 space-y-2 mt-5">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={onPrimaryClick}
            className="bg-white text-black py-3 px-10 rounded-full font-medium hover:scale-105 transition text-md"
          >
            {primaryBtnLabel}
          </button>
          <button
            onClick={onSecondaryClick}
            className="flex items-center gap-3 text-white py-3 px-10 rounded-full hover:scale-105 transition text-md"
          >
            <FaPhoneAlt /> {secondaryBtnLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
