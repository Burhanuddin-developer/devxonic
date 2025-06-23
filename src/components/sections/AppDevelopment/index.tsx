'use client';

import { JSX } from 'react';

export interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  link?: string;
}

interface ServiceGridProps {
  services: ServiceCardProps[];
  sectionTitle?: string;
}

export default function AppDevelopment({ services, sectionTitle }: ServiceGridProps) {
  return (
    <div className="min-h-screen text-white py-16 px-4 md:px-16 page-section">
      {sectionTitle && <h2 className="text-3xl font-bold mb-10">{sectionTitle}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 section-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-xl p-6 border border-white hover:bg-gradient-to-t hover:from-[#3b0087] hover:via-[#0b0b17]"
          >
            <div className="mb-4 text-3xl">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-md mb-4">{service.description}</p>
            <a
              href={service.link || '#'}
              className="text-md font-medium text-white flex items-center gap-2 hover:underline"
            >
              Read More <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
