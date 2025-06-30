'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const clients = [
  { img: '/assets/images/ship.png.webp', name: 'Shipleap' },
  { img: '/assets/images/approach.svg', name: 'Approach' },
  { img: '/assets/images/Washta-300x74.webp', name: 'Washta' },
  { img: '/assets/images/ristonic.svg', name: 'Ristonic' },
  { img: '/assets/images/mwrid.svg', name: 'Murid' },
  { img: '/assets/images/radiant.svg', name: 'Radiant' },
  { img: '/assets/images/alan.svg', name: 'Alan Manevitz' },
];

const getVisibleSlides = () => {
  if (typeof window === 'undefined') return 1;
  if (window.innerWidth >= 1200) return 4;
  if (window.innerWidth >= 768) return 3;
  return 1;
};

export default function TrustedClients() {
  const [isMounted, setIsMounted] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [index, setIndex] = useState(2);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTime = 500;

  useEffect(() => {
    setVisibleSlides(getVisibleSlides());
    setIndex(getVisibleSlides() + 1);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const handleResize = () => {
      const newVisible = getVisibleSlides();
      setVisibleSlides(newVisible);
      setIndex(newVisible + 1);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    startAutoPlay();
    return () => stopAutoPlay();
  }, [index, visibleSlides, isMounted]);

  const slides = [
    ...clients.slice(-visibleSlides),
    ...clients,
    ...clients.slice(0, visibleSlides),
  ];

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!isMounted || !sliderRef.current) return;
    sliderRef.current.style.transition = `transform ${transitionTime}ms ease`;
    sliderRef.current.style.transform = `translateX(-${index * (60 / slides.length)}%)`;
  }, [index, slides.length, isMounted]);

  const handleTransitionEnd = () => {
    if (!sliderRef.current) return;
    if (index >= slides.length - visibleSlides) {
      sliderRef.current.style.transition = 'none';
      sliderRef.current.style.transform = `translateX(-${visibleSlides * (100 / slides.length)}%)`;
      setIndex(visibleSlides);
    }
    if (index <= 0) {
      sliderRef.current.style.transition = 'none';
      sliderRef.current.style.transform = `translateX(-${(slides.length - visibleSlides * 2) * (100 / slides.length)}%)`;
      setIndex(slides.length - visibleSlides * 2);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="py-16 px-4 text-white overflow-hidden page-section">
      {/* Title with fade-in on scroll */}
      <motion.div
        className="text-center mb-12 selection-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold">
          <span className="text-gray-400">Trusted </span>Clients
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Join the ranks of more than 100 satisfied clients who rely on us for their software and digital needs.
          Our commitment to excellence is reflected in our high-quality solutions
        </p>
      </motion.div>

      <div
        className="relative w-full overflow-hidden group"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <div
          ref={sliderRef}
          className="flex w-full gap-2"
          style={{ width: `${(60 / visibleSlides) * slides.length}%` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((client, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center flex-shrink-0"
              style={{ width: `${80 / slides.length}%` }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <Image
                  src={client.img}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="sm:w-40 md:w-28 lg:w-32 object-contain mb-4"
                />
              </motion.div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIndex(prev => prev - 1)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2  bg-opacity-50 rounded-full p-2 z-10"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={() => setIndex(prev => prev + 1)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2  bg-opacity-50 rounded-full p-2 z-10"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
