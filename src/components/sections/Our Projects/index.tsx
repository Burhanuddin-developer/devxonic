'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Washta',
    description: 'Washta Software is a comprehensive showcase of lumper delivery, packaging, and machine operator services.',
    image: '/assets/images/washta.jpeg',
    alt: 'Washta Project',
    reverse: false,
  },
  {
    title: 'Kickers',
    description: 'Kickers is a comprehensive mobile application designed to simplify the process of car and home maintenance by connecting users with trusted service providers.',
    image: '/assets/images/kickers.jpeg',
    alt: 'Kickers Project',
    reverse: true,
  },
  {
    title: 'Ristonic',
    description: 'Ristonic is a comprehensive mobile application designed to simplify the process of car and home maintenance by connecting users with trusted service providers.',
    image: '/assets/images/ristonic.jpg',
    alt: 'Ristonic Project',
    reverse: false,
  },
  {
    title: 'AlanMD Medical App',
    description: 'AlanMD is an innovative mobile application designed to bridge the gap between patients, doctors, and nurses by providing a seamless platform for online consultations.',
    image: '/assets/images/alan_medical.png',
    alt: 'AlanMD Project',
    reverse: true,
  },
];

export default function Projects() {
  return (
    <section className=" text-white py-20 px-6 md:px-20 page-section">
      {/* Title with fade-in */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-16 selection-container"
      >
        <h2 className="text-4xl font-light">
          Our <span className="font-bold">Projects</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Blend cutting-edge technology with creative solutions, delivering exceptional results tailored to your needs. From concept to execution, we turn innovative ideas into powerful digital experiences. Our team is committed to excellence, ensuring every project meets the highest standards of quality, performance, and user satisfaction.
        </p>
      </motion.div>

      {/* Projects with fade-in */}
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }} // stagger delay
          className={`flex flex-col md:flex-row items-center mb-16 ${project.reverse ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg mb-8 md:mb-0 md:mx-12">
            <Image
              src={project.image}
              alt={project.alt}
              className="w-full h-auto object-cover"
              width={800}
              height={500}
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-400 mb-6">{project.description}</p>
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:scale-105 transition">
              View Project
            </button>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
