// app/components/BlogSection.tsx
'use client';

import React from 'react';
import { Heading } from '../../components/base/heading'; 
import Header from '@/components/sections/Header';
import Vision from '@/components/sections/Your Vision';
import Footer from '@/components/sections/Footer';
import BlogPost from '@/components/sections/blog articles/blogPosts';

export default function BlogSection() {
  return (
    <>
    <Header />
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-t from-[#3b0087] via-[#0b0b17]  text-white px-4">
      <Heading
        title="Blog & News"
        description="Stay informed with the latest insights and trends in technology and development. Our blogs offer expert advice, industry updates."
        className="max-w-2xl" />
    </section>
    <BlogPost/>
    <Vision/>
    <Footer/>
    </>
  );
}
