'use client';

import React from 'react';
import Image from 'next/image';
const blogPosts = [
  {
    id: 1,
    image: '/assets/images/mobile.png.webp',  
    title: 'Mastering Multilingual Apps: Next.js Internationalization with Next-Intl',
  },
  {
    id: 2,
    image: '/assets/images/mobile.png.webp',  
    title: 'The Cost of Mobile Development in 2024: A Comprehensive Overview',
  },
  {
    id: 3,
    image: '/assets/images/Authorization.png.webp', 
    title: 'Handling Authentication and Authorization in Node.js',
  },
];

const BlogSection = () => {
  return (
    <div className="min-h-[75vh] bg-[#0b0b17] text-white px-4 sm:px-8 py-12 page-section">
      {/* Heading */}
      <div className="text-center mb-16 selection-container">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-light">
          Latest blog <span className="font-semibold">articles about</span> <br />
          <span className="font-bold">technology trends</span>
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {blogPosts.map((post) => (
          <div key={post.id} className="w-full md:w-90 flex flex-col">
            <div className="rounded-xl overflow-hidden mb-4">
              <Image
                src={post.image}
                alt={post.title}
                width={200}
                height={180}
                className="w-full h-[180px] object-cover"
              />
            </div>
            <div className="px-1">
              <h3 className="text-md md:text-lg  mb-2">{post.title}</h3>
              <a href="#" className="text-sm font-semibold mt-2 hover:underline">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
