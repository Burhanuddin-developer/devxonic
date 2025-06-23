// app/components/ServiceGrid.tsx
'use client';

import { JSX } from 'react';
import { FaAndroid, FaApple, FaGlobe, FaClock, FaReact, FaLayerGroup } from 'react-icons/fa';

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: ServiceCardProps[] = [
  {
    icon: <FaAndroid/>,
    title: 'Android App Development',
    description: 'We transform your digital vision into reality with cutting-edge web development and customized solutions.',
  },
  {
    icon: <FaApple/>,
    title: 'iOS App Development',
    description: 'We offer bespoke app development services, crafting unique solutions from the ground up.',
  },
  {
    icon: <FaGlobe/>,
    title: 'Web App Development',
    description: 'Utilizing frameworks like React Native and Flutter, we build cross-platform applications that run smoothly.',
  },
  {
    icon: <FaClock />,
    title: 'Realtime App Development',
    description: 'We transform your digital vision into reality with cutting-edge web development and customized solutions.',
  },
  {
    icon: <FaReact/>,
    title: 'React Native App Development',
    description: 'We offer bespoke app development services, crafting unique solutions from the ground up.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'FullStack App Development',
    description: 'Utilizing frameworks like React Native and Flutter, we build cross-platform applications that run smoothly.',
  },
];

export default function AppDevelopment() {
  return (
    <div className=" min-h-screen text-white py-16 px-4 md:px-16 page-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 section-container">
        {services.map((service, index) => (
          <div key={index} className=" rounded-xl p-6 md:h-70  border border-white  hover:bg-gradient-to-t hover:from-[#3b0087] hover:via-[#0b0b17]">
            <div className="mb-4 text-3xl">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-md mb-4">{service.description}</p>
            <a href="#" className="text-md font-medium text-white flex items-center gap-2 hover:underline">
              Read More <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
