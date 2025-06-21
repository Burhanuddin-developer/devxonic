'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}
interface Item {
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface CardGridProps {
  projects: ProjectItem[];
}
interface CardBoxProps {
  projects: Item[];
}

export function CardGrid({ projects }: CardGridProps) {
  const router = useRouter();
  return (
    <section className="bg-[#010314] py-12 px-6 md:px-12 page-section">
      <div className="grid md:grid-cols-2 gap-8 selection-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" rounded-xl overflow-hidden shadow-lg transition hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-5 text-white">
              <p className="text-sm text-gray-400">{project.category}</p>
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
                <button
                  onClick={() => project.link && router.push(project.link)}
                  className="mt-4 px-4 py-2 bg-white text-black rounded-full  text-sm hover:bg-gray-300"
                >
                  View Project
                </button>
              </div>
              <p className="text-sm mt-5 text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CardBox({ projects }: CardBoxProps) {
  const router = useRouter();
  return (
    <section className="bg-[#010314] py-12 px-6 md:px-12 page-section">
      <div className="grid md:grid-cols-2 gap-8 selection-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" rounded-xl overflow-hidden shadow-lg transition hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-5 text-white">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
             
              </div>
              <p className="text-sm mt-5 text-gray-300">{project.description}</p>
            </div>
               <button
                onClick={() => project.link && router.push(project.link)}
                  className="mt-4 px-4 py-2 bg-white text-black rounded-full  text-sm hover:bg-gray-300"
                >
                  View Project
                </button>
          </div>
        ))}
      </div>
    </section>
  );
}
