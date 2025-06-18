'use client';

import StatCounter from '@/components/base/StatCounter';
import React from 'react';
import { FaShieldAlt, FaLightbulb, FaStar, FaUsers, FaEye, FaHeart } from 'react-icons/fa';

const values = [
  {
    icon: <FaShieldAlt className="text-gray-400 text-2xl mb-3" />,
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and transparency in everything we do.',
  },
  {
    icon: <FaLightbulb className="text-gray-400 text-2xl mb-3" />,
    title: 'Innovation',
    description: 'Continuously pushing the boundaries to create cutting-edge solutions that drive success.',
  },
  {
    icon: <FaStar className="text-gray-400 text-2xl mb-3" />,
    title: 'Excellence',
    description: 'Striving for perfection in every project, delivering outstanding quality and results.',
  },
  {
    icon: <FaUsers className="text-gray-400 text-2xl mb-3" />,
    title: 'Collaboration',
    description: 'Working closely with our clients and partners to achieve shared goals and success.',
  },
  {
    icon: <FaEye className="text-gray-400 text-2xl mb-3" />,
    title: 'Accountability',
    description: 'Taking full responsibility for our actions and delivering on our promises.',
  },
  {
    icon: <FaHeart className="text-gray-400 text-2xl mb-3" />,
    title: 'Empathy',
    description: 'Understanding our clients’ needs and challenges to create solutions that truly resonate.',
  },
];
const stats = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 200, suffix: '+', label: 'Software Built' },
  { value: 150, suffix: '+', label: 'Clients Served' },
  { value: 20, suffix: '+', label: 'Team Members' },
];
export default function ValuesSection() {
  return (
    <><section className="bg-[#0b0b17] text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-semibold mb-12 leading-snug">
                  <span className="text-gray-400">Guided by</span>{' '}
                  <span className="text-white font-bold">Values, Driven by</span><br />
                  <span className="text-white font-bold"> Excellence</span>
              </h2>


              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {values.map((item, idx) => (
                      <div
                          key={idx}
                          className="border border-white rounded-3xl p-6 md:h-55 hover:shadow-lg transition duration-300 text-left"
                      >
                          <div className="flex items-center gap-3 mb-2 md:mt-5 md: ml-5">
                              {item.icon}
                              <h3 className="text-md font-light text-white">{item.title}</h3>
                          </div>
                          <p className="text-md text-gray-400 md: mt-8 md: pl-8">{item.description}</p>
                      </div>
                  ))}
              </div>
          </div>
          <StatCounter stats={stats} />
      </section></>
  );
}
