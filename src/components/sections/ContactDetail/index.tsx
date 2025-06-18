'use client';

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <div className="bg-[#080717] text-white px-8 py-20 flex flex-col lg:flex-row gap-60  items-center min-h-screen">
      {/* Left Column */}
      <div className="max-w-md w-full">
        <h2 className="text-4xl font-light">
          Get in <span className="font-semibold">touch</span>
        </h2>
        <p className="text-sm text-gray-300 mt-4 leading-relaxed">
          We’d love to hear from you! Whether you have a question, need support, or want to discuss how we can help your business grow, our team is here to assist you.
        </p>

        {/* Contact Info */}
        <div className="mt-8 space-y-6">
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-lg mt-1" />
            <div>
              <h4 className="font-semibold">Phone Number</h4>
              <p className="text-sm text-gray-300">+92 (318) 102 1744</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-lg mt-1" />
            <div>
              <h4 className="font-semibold">Email Address</h4>
              <p className="text-sm text-gray-300">contact@testweb.dexonic.com</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10">
          <h4 className="text-2xl font-semibold">Follow Us</h4>
          <div className="flex gap-4 mt-4">
            {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn].map((Icon, idx) => (
              <a key={idx} href="#" className="p-2 rounded-full border border-white hover:bg-white hover:text-black transition">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Form Box */}
      <div className="w-full max-w-xl">
        <div className="bg-gradient-to-t from-[#3b0087] via-[#0b0b17] p-[2px] rounded-3xl border-t-1 border-gray-500 md:h-140 shadow-lg">
          <form className=" p-15 rounded-2xl space-y-5 md:mt-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" placeholder="First Name" className="w-full px-4 py-2 rounded-full bg-transparent border border-gray-500 focus:outline-none text-sm" />
              <input type="text" placeholder="Last Name" className="w-full px-4 py-2 rounded-full bg-transparent border border-gray-500 focus:outline-none text-sm" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-full bg-transparent border border-gray-500 focus:outline-none text-sm" />
              <input type="text" placeholder="Your Phone" className="w-full px-4 py-2 rounded-full bg-transparent border border-gray-500 focus:outline-none text-sm" />
            </div>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-4xl resize-none focus:outline-none text-sm"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition text-sm"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
