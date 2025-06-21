'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";


const BlogPost = () => {
  const router = useRouter();
  const blogPosts = [
  {
    id: 1,
    image: '/assets/images/mobile.png.webp',
    category:'Mobile Development',
    title: 'Mastering Multilingual Apps: Next.js Internationalization with Next-Intl',
    description: 'Mastering Multilingual Apps: Next.js Internationalization with Next-Intl Introduction to Next.js Internationalization with Next-Intl In a…',
    onClick: () => router.push('./DevelopmentLanguage'), 
  },
  {
    id: 2,
    image: '/assets/images/mobile.png.webp',
    category:'Mobile Development',
    title: 'The Cost of Mobile Development in 2024: A Comprehensive Overview',
    description: 'The Cost of Mobile Development in 2024: A Comprehensive Overview [iawp_view_counter] Introduction to Mobile Development…',
    onClick: () => router.push('./DevelopmentLanguage'), 
  },
  {
    id: 3,
    image: '/assets/images/Authorization.png.webp',
    category:'Web Development',
    title: 'Handling Authentication and Authorization in Node.js',
    description: 'Handling Authentication and Authorization in Node.js [iawp_view_counter] Introduction In today’s world of web and mobile…',
   onClick: () => router.push('./DevelopmentLanguage'), 
  },
  {
    id: 4,
    image: '/assets/images/challenges.png',
    category:'Web Development',
    title: 'The Biggest Challenges in IT and How to Overcome Them',
    description: 'The Biggest Challenges in IT and How to Overcome Them [iawp_view_counter] Introduction In the ever-evolving…',
    onClick: () => router.push('./DevelopmentLanguage'), 
  },
  {
    id: 5,
    image: '/assets/images/language.png',
    category:'Web Development',
    title: 'Top Development Language Trends in IT You Need to Know in 2024',
    description: 'Top Development Language Trends in IT You Need to Know in 2024 Introduction The IT…',
   onClick: () => router.push('./Blog/DevelopmentLanguage'), 
  },
  {
    id: 6,
    image: '/assets/images/testing.png',
    category:'Web Development',
    title: 'Understanding the Impact of Performance Testing on Application Success',
    description: 'Understanding the Impact of Performance Testing on Application Success Introduction   Performance testing is an…',
   onClick: () => router.push('./Blog/Performance'), 
  },
];
  return (
    <div className="page-section bg-[#0b0b17] text-white">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="rounded-xl overflow-hidden shadow-md"
            onClick={post.onClick}
            style={{ cursor: 'pointer' }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={700}
              height={300}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-400">{post.category}</p>
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
