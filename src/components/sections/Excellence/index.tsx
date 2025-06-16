'use client'

import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

const expertiseItems = [
  {
    title: 'Expert Team',
    description:
      'Our talented developers and designers bring deep industry knowledge and innovative approaches to every project.',
  },
  {
    title: 'Client Centric',
    description:
      'We focus on your specific needs and goals, ensuring our solutions are perfectly aligned with your vision.',
  },
  {
    title: 'Cutting-Edge Technology',
    description:
      'We utilize the latest tools and technologies to deliver modern, efficient solutions.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Our rigorous testing and quality checks ensure that every project meets the highest standards.',
  },
  {
    title: 'Transparent Communication',
    description:
      'We believe in open and transparent communication at every stage of the project for maximum client satisfaction.',
  },
  {
    title: 'Ongoing Support',
    description:
      'We offer continuous support and maintenance to ensure your solutions remain up-to-date and optimized.',
  },
]

export default function ExcellenceSection() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#3b0087] via-[#0b0b17] to-[#0b0b17] text-white px-4 sm:px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#8b8b8b] leading-snug">
            Unleash <span className="font-semibold text-white">Excellence</span> with <br />
            Our Proven <span className="font-semibold text-white">Expertise</span>
          </h1>
          <p className="text-[#aaaaaa] text-sm sm:text-base md:text-lg leading-relaxed">
            We blend innovation with experience to deliver outstanding digital solutions.
            <br />
            Our expert team is dedicated to understanding your unique needs.
          </p>
        </motion.div>

        {/* Grid Section */}
        <motion.div
          className="border-t border-gray-800 pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {expertiseItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <FaCheckCircle className="text-[#aaaaaa] text-3xl md:text-4xl" />
              <div>
                <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-3">{item.title}</h3>
                <p className="text-[#aaaaaa] text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
