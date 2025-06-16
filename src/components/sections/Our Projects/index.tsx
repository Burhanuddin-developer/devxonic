'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import washta from '../../../../public/assets/images/washta.jpeg';
import kickers from '../../../../public/assets/images/kickers.jpeg';
import rishtonic from '../../../../public/assets/images/ristonic.jpg';
import medical from '../../../../public/assets/images/alan_medical.png';

const projects = [
  {
    title: 'Washta',
    description: 'Washta Software is a comprehensive showcase of lumper delivery, packaging, and machine operator services.',
    image: washta,
    alt: 'Washta Project',
    reverse: false,
  },
  {
    title: 'Kickers',
    description: 'Kickers is a comprehensive mobile application designed to simplify the process of car and home maintenance by connecting users with trusted service providers.',
    image: kickers,
    alt: 'Kickers Project',
    reverse: true,
  },
  {
    title: 'Ristonic',
    description: 'Ristonic is a comprehensive mobile application designed to simplify the process of car and home maintenance by connecting users with trusted service providers.',
    image: rishtonic,
    alt: 'Ristonic Project',
    reverse: false,
  },
  {
    title: 'AlanMD Medical App',
    description: 'AlanMD is an innovative mobile application designed to bridge the gap between patients, doctors, and nurses by providing a seamless platform for online consultations.',
    image: medical,
    alt: 'AlanMD Project',
    reverse: true,
  },
];

export default function Projects() {
  return (
    <section className="bg-[#0b0b17] text-white py-20 px-6 md:px-20">
      {/* Title with fade-in */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-16"
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
