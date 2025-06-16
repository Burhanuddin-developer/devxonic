'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#0b0b17] flex items-center justify-center p-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
         <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
      
        
        {/* Left Images */}
        <div className="flex flex-col gap-8">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src='/assests/images/female-developer-checking.avif' // replace with your image path
              alt="woman using tablet"
              width={500}
              height={300}
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <Image
              src='/assets/images/female-developer-checking.avif' // replace with your image path
              alt="coding"
              width={500}
              height={200}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>         
        </motion.div>
{/* Right Content */}
    <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration:3,ease: "easeOut" }}
        viewport={{ once: true }}
      >
<div className="text-white">
  <h1 className="text-5xl font-light leading-snug">
    Intuitive <span className="font-medium">Software</span><br />
    Solutions, <span className="font-medium">Stunning</span><br/> Results
  </h1>

  <div className="mt-8 flex flex-col md:flex-row gap-8 text-sm leading-relaxed text-gray-300">
    <p className="md:w-1/2">
      Devxonic delivers high-quality mobile app development, desktop solutions, and web applications.
    </p>
    <p className="md:w-1/2">
      We also offer expert web design and development to ensure your entire digital ecosystem is optimized and effective.
    </p>
  </div>

  <button className="mt-10 bg-white text-black font-medium py-3 px-8 rounded-full shadow-lg hover:scale-105 transition">
    Learn More
  </button>
</div>
</motion.div>
      </div>

    </div>
  );
};

export default HeroSection;
