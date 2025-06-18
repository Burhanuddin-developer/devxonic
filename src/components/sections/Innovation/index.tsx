'use client';
import React from 'react';
import { FaLeaf, FaCube, FaArrowUp } from 'react-icons/fa6';
import Image from 'next/image';

export default function Innovation() {
  return (
    <div className="bg-[#0b0b17] text-white py-20 px-6 lg:px-24">
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        {/* Left side */}
        <div className="flex flex-col items-start gap-6 flex-1">
          {/* Icon + gradient box row */}
          <div className="flex gap-4">
            {/* Left: icons + image */}
            <div className="flex flex-col gap-12">
              <div className="flex gap-8 ml-8">
                <div className="bg-[#1c1c29] p-3 rounded-xl">
                  <FaLeaf className="text-white text-5xl" />
                </div>
                <div className="bg-[#1c1c29] p-3 rounded-xl">
                  <FaCube className="text-white text-5xl" />
                </div>
                <div className="bg-[#1c1c29] p-3 rounded-xl">
                  <FaArrowUp className="text-white text-5xl" />
                </div>
              </div>

              <div className="bg-gray-300 rounded-3xl overflow-hidden w-80 h-52">
                <Image
                  src="/assets/images/using-modern-technologies.jpg"
                  alt="Woman"
                  width={288}
                  height={208}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Right: gradient play box */}
            <div className="bg-gradient-to-b from-transparent to-[#6e4cff] ml-2 w-48 h-85 rounded-xl flex items-center justify-center border-t border-white/80">
              <div className="w-12 h-12 bg-[#1c1c29] rounded-full flex items-center justify-center">
                <div className="text-white text-xl">▶</div>
              </div>
            </div>
          </div>

          {/* Bottom full-width image */}
          <div className="rounded-xl overflow-hidden w-full h-48">
            <Image
              src="/assets/images/female-developer-checking.avif"
              alt="Coding"
              width={400}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right side (Text content) */}
        <div className="p-8 rounded-3xl flex flex-col justify-between flex-1">
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold leading-tight">
              Empowering <span className="text-white font-bold">Innovation</span>,<br />
              Building the <span className="text-white font-bold">Future</span><br />
              Together
            </h2>

            <div className="flex flex-col md:flex-row gap-6 text-md text-gray-300">
              <p className="md:w-1/2">
                At <strong>Devxonic</strong>, we believe in the transformative power of technology
                to drive innovation and success. Our journey began with a simple
                mission: to empower businesses with cutting-edge digital solutions
                that are not only functional but also future-proof.
              </p>
              <p className="md:w-1/2">
                Our team of experts is dedicated to staying ahead of industry trends,
                ensuring that we provide our clients with the tools they need to stay
                competitive in an ever-evolving digital landscape.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
