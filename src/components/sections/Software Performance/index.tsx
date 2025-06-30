'use client';

import React from 'react';
import { FaLaptopCode, FaDesktop, FaServer, FaIndustry } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'We transform your digital vision into reality with cutting-edge web development and customized solutions.',
    icon: <FaLaptopCode size={30} />,
    gradient: true,
  },
  {
    title: 'Web Development & Design',
    description: 'We offer bespoke app development services, crafting unique solutions from the ground up.',
    icon: <FaDesktop size={30} />,
  },
  {
    title: 'Devops',
    description: 'Utilizing frameworks like React Native and Flutter, we build cross-platform applications that run smoothly.',
    icon: <FaServer size={30} />,
  },
  {
    title: 'Industries',
    description: 'Utilizing frameworks like React Native and Flutter, we build cross-platform applications that run smoothly.',
    icon: <FaIndustry size={30} />,
  },
];

export default function SoftwarePerformance() {
  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4 text-white page-section">
      <motion.h2
        className="text-5xl font-semibold mb-12 text-center selection-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <span className="text-gray-400">Swift and </span>
        <span className="text-white font-bold">Dependable Software </span><br />
        <span className="text-gray-400">Performance</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="
              group relative rounded-xl p-10 border border-white-700 
              flex flex-col justify-between transition-all duration-500
              bg-transparent hover:bg-gradient-to-t hover:from-[#3b0087] hover:via-[#0b0b17]
            "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-3">{service.icon}</div>
            <h3 className="font-semibold mb-3 text-xl">{service.title}</h3>
            <p className="text-base mb-5 text-gray-300">{service.description}</p>
            <div className="flex items-center gap-1 text-sm font-semibold">
              Read More <span>→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
