'use client';

import React from 'react';
import Image from 'next/image';
import { FaSearch, FaCogs, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StatCounter from '@/components/base/StatCounter';

const steps = [
  {
    id: 1,
    icon: <FaSearch size={20} />,
    title: 'Discovery & Strategy',
    description:
      'We analyze your business and market to craft a detailed strategy that guides the project.',
  },
  {
    id: 2,
    icon: <FaCogs size={20} />,
    title: 'Design & Development',
    description:
      'Our team designs and builds tailored solutions using the latest technologies and best practices.',
  },
  {
    id: 3,
    icon: <FaRocket size={20} />,
    title: 'Testing & Launch',
    description:
      'We rigorously test to ensure quality and provide ongoing support for optimal performance.',
  },
];

const stats = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 200, suffix: '+', label: 'Software Built' },
  { value: 150, suffix: '+', label: 'Clients Served' },
  { value: 20, suffix: '+', label: 'Team Members' },
];

const Expertise = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="min-h-screen bg-[#0b0b17] text-white px-4 py-20 space-y-16">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
        {/* Left - Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/assets/images/man.jpeg"
              alt="Expertise"
              width={600}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          className="w-75 lg:w-1/2 space-y-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight space-y-2 text-center lg:text-left">
            <div>Your Vision,</div>
            <div className="font-semibold">Our Expertise,</div>
            <div className="font-bold">Perfect Harmony</div>
          </h2>

          <p className="text-gray-400 leading-relaxed text-center lg:text-left">
            Our approach is designed to seamlessly integrate your goals with our technical prowess. We
            prioritize understanding your unique needs and then leverage our extensive experience to craft
            tailored solutions that exceed expectations.
          </p>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex flex-col sm:flex-row sm:items-start items-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Step Number + Icon */}
                <div className="flex items-center gap-3">
                  <span className="text-sm md:text-lg text-gray-400">Step 0{step.id}</span>
                  <div className="bg-[#1c1c2e] p-3 rounded-full text-white">{step.icon}</div>
                </div>

                {/* Step Box */}
                <div className="border border-gray-700 p-4 rounded-lg w-full sm:w-auto hover:shadow-lg transition">
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <StatCounter stats={stats} />
    </div>
  );
};

export default Expertise;
