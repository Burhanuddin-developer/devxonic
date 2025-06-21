"use client";
import React from "react";
import { FaLeaf, FaCube, FaArrowUp } from "react-icons/fa6";
import Image from "next/image";

export default function Innovation() {
  return (
    <div className="bg-[#0b0b17] text-white py-20 px-6 lg:px-24 page-section">
      <div className="flex flex-col-reverse md:flex-row gap-10 items-stretch section-container">
        {/* Right side (Text content) — shows first on small, right on large */}
        <div className="order-3 md:order-2 p-4 sm:p-8 rounded-3xl flex flex-col justify-between flex-1">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-semibold leading-tight md:text-left">
              Empowering{" "}
              <span className="text-white font-bold">Innovation</span>,<br />
              Building the <span className="text-white font-bold">Future</span>
              <br />
              Together
            </h2>

            <div className="flex flex-col md:flex-row gap-6 text-md text-gray-300">
              <p className="md:w-1/2">
                At <strong>Devxonic</strong>, we believe in the transformative
                power of technology to drive innovation and success. Our journey
                began with a simple mission: to empower businesses with
                cutting-edge digital solutions that are not only functional but
                also future-proof.
              </p>
              <p className="md:w-1/2">
                Our team of experts is dedicated to staying ahead of industry
                trends, ensuring that we provide our clients with the tools they
                need to stay competitive in an ever-evolving digital landscape.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center md:text-left">
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Left side (images + icons) — shows second on small, left on large */}
        <div className="order-2 md:order-1 flex flex-col items-start gap-6 flex-1">
          <div className="flex flex-col sm:flex-row gap-4 w-full items-center sm:items-start">
            {/* Icons + image stack */}
            {/* Icons + image stack */}
            <div className="flex flex-col gap-8 items-center sm:items-start">
              <div className="flex gap-4 sm:gap-8 justify-center sm:justify-start">
                <div className="bg-[#1c1c29] p-3 rounded-xl">
                  <FaLeaf className="text-white text-3xl sm:text-5xl" />
                </div>
                <div className="bg-[#1c1c29] p-3 rounded-xl">
                  <FaCube className="text-white text-3xl sm:text-5xl" />
                </div>
                <div className="bg-[#1c1c29] p-3 rounded-xl">
                  <FaArrowUp className="text-white text-3xl sm:text-5xl" />
                </div>
              </div>

              {/* Image below icons */}
              <div className="bg-gray-300 sm:w-80  mx-auto sm:mx-0 rounded-xl overflow-hidden w-full h-60 sm:h-54">
                <Image
                  src="/assets/images/using-modern-technologies.jpg"
                  alt="Woman"
                  width={540}
                  height={176}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Gradient play box */}
            <div className="bg-gradient-to-b from-transparent to-[#6e4cff] w-full sm:w-48 h-32 sm:h-85 rounded-xl flex items-center justify-center border-t border-white/80 mx-auto sm:ml-2 mt-4 sm:mt-0">
              <div className="w-12 h-12 bg-[#1c1c29] rounded-full flex items-center justify-center">
                <div className="text-white text-xl">▶</div>
              </div>
            </div>
          </div>

          {/* Bottom full-width image */}
   
<div className="rounded-xl overflow-hidden w-full h-48 sm:h-64">
  <Image
    src="/assets/images/female-developer-checking.avif"
    alt="Coding"
    width={800}
    height={256}
    className="object-cover w-full h-full"
  />
</div>

        </div>
      </div>
    </div>
  );
}
