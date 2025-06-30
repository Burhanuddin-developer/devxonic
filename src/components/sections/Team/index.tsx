'use client';

import React from 'react';
import { FaLinkedin, FaBehance, FaGlobe } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Syed Ibad Ullah',
    role: 'Founder',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Ibad.jpg.webp', 
    icons: [<FaGlobe key="web" />, <FaLinkedin key="in" />],
  },
  {
    name: 'Maaz Mohiuddin',
    role: 'Chief Marketing Officer (CMO)',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Untitled-3.jpg.webp',
    icons: [<FaGlobe key="web" />, <FaLinkedin key="in" />, <FaBehance key="be" />],
  },
  {
    name: 'Osama Bin Zahid',
    role: 'Chief Financial Officer (CFO)',
    image: 'https://testweb.devxonic.com/wp-content/uploads/2024/08/Web-Potrait.jpg.webp',
    icons: [<FaLinkedin key="in" />],
  },
];

export default function TeamSection() {
  return (
    <section className=" text-white py-16 px-4 bg-gradient-to-t from-[#3b0087] via-[#010314] to-[#010314] page-section">
      <div className="max-w-7xl mx-auto section-container">
        <h2 className="text-4xl md:text-5xl font-light mb-12">
          Meet the <span className="text-white font-medium">professional cyber</span> <br/>team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Image Card */}
              <div className="w-full rounded-2xl overflow-hidden ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover bg-gradient-to-b from-purple-800 to-[#0B0B17]"
                />
              </div>

              {/* Name + Icons */}
              <div className="flex items-center  gap-2 mt-4 flex-wrap">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <div className="flex gap-2 text-2xl text-gray-300 md:ml-10">
                  {member.icons.map((icon, iconIndex) => (
                    <span key={iconIndex} className="hover:text-white transition ">{icon}</span>
                  ))}
                </div>
              </div>

              {/* Role */}
              <p className="text-md text-white-400 md:mt-8">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
