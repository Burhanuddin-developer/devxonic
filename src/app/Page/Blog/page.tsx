// app/components/BlogSection.tsx
'use client';

import React from 'react';
import Header from '@/components/sections/Header';
import Vision from '@/components/sections/Your Vision';
import Footer from '@/components/sections/Footer';
import BlogPost from '@/components/sections/blog articles/blogPosts';
import { Heading } from '@/components/base/heading';

export default function BlogSection() {
  return (
    <>
    <Header />

      <Heading
        title="Blog & News"
        description="Stay informed with the latest insights and trends in technology and development. Our blogs offer expert advice, industry updates."
        className="md:w-6xl justify-center" />
    
    <BlogPost/>
    <Vision/>
    <Footer/>
    </>
  );
}
