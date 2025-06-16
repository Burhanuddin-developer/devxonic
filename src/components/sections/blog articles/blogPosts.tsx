'use client';

import React from 'react';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    image: '/assets/images/mobile.png.webp',
    title: 'Mastering Multilingual Apps: Next.js Internationalization with Next-Intl',
    description: 'Mastering Multilingual Apps: Next.js Internationalization with Next-Intl Introduction to Next.js Internationalization with Next-Intl In a…',
  },
  {
    id: 2,
    image: '/assets/images/mobile.png.webp',
    title: 'The Cost of Mobile Development in 2024: A Comprehensive Overview',
    description: 'The Cost of Mobile Development in 2024: A Comprehensive Overview [iawp_view_counter] Introduction to Mobile Development…',
  },
  {
    id: 3,
    image: '/assets/images/Authorization.png.webp',
    title: 'Handling Authentication and Authorization in Node.js',
    description: 'Handling Authentication and Authorization in Node.js [iawp_view_counter] Introduction In today’s world of web and mobile…',
  },
  {
    id: 4,
    image: '/assets/images/challenges.png',
    title: 'The Biggest Challenges in IT and How to Overcome Them',
    description: 'The Biggest Challenges in IT and How to Overcome Them [iawp_view_counter] Introduction In the ever-evolving…',
  },
  {
    id: 5,
    image: '/assets/images/language.png',
    title: 'Top Development Language Trends in IT You Need to Know in 2024',
    description: 'Top Development Language Trends in IT You Need to Know in 2024 Introduction The IT…',
  },
  {
    id: 6,
    image: '/assets/images/testing.png',
    title: 'Understanding the Impact of Performance Testing on Application Success',
    description: 'Understanding the Impact of Performance Testing on Application Success Introduction   Performance testing is an…',
  },
];

const BlogPost = () => {
  return (
    <div className="min-h-[75vh] bg-[#0b0b17] text-white px-4 sm:px-8 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-300 md:mx-20 w-100 mx-8">
        {blogPosts.map((post) => (
          <div key={post.id} className=" rounded-xl overflow-hidden shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              width={700}
              height={300}
              className="w-full h-[220px] "
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm font-light">{post.description || 'No description provided.'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
