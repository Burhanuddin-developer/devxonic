'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="page-section text-white pt-24 pb-10">
      <div className="section-container grid md:grid-cols-4 grid-cols-1 gap-20">
        {/* Logo and Description */}
        <div className="flex flex-col md:w-2/2">
          <div className="mb-6">
            <Image
              src="https://testweb.devxonic.com/wp-content/uploads/2024/08/devxonic-logo-white-1.png"
              alt="devxonic"
              width={500}
              height={100}
              className="w-full h-20 "
            />
          </div>
          <p className="text-sm mb-6 max-w-xs">
            Tailoring Digital Excellence for Your Unique Vision
          </p>
          <div className="flex space-x-3">
            <div className="border rounded-full p-3">
              <FaFacebookF />
            </div>
            <div className="border rounded-full p-3">
              <FaInstagram />
            </div>
            <div className="border rounded-full p-3">
              <FaXTwitter />
            </div>
            <div className="border rounded-full p-3">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4 text-lg">Address</h3>
          <p className="text-sm">
            Block 15 Gulberg Town,<br />
            Karachi, Sindh, Pakistan
          </p>

          <h3 className="font-semibold mt-6 mb-2 text-lg">Contact</h3>
          <p className="text-sm mb-1">+92 (21) 335 158 09</p>
          <p className="text-sm">contact@testweb.devxonic.com</p>
        </div>

        {/* Explore */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4 text-lg">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Team</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4 text-lg">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="section-container mt-24 text-center">
        <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="px-6 py-3 w-full md:w-96 text-white focus:outline-none border rounded-3xl bg-transparent border-white"
          />
          <button className="bg-white text-black px-8 py-3 rounded-full">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="section-container mt-20 pt-6  text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between">
        <p className="mb-2 md:mb-0">
          Copyright 2024 © <span className="font-semibold text-white">devxonic.</span>
        </p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Privacy policy</a>
          <a href="#" className="hover:text-white">Terms & Services</a>
        </div>
      </div>
    </footer>
  );
}
