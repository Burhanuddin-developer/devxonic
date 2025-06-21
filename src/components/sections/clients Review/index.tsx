'use client';

import Image from 'next/image';
import React from 'react';
const testimonials = [
    {
        text: "Devxonic’s professionalism and technical prowess were evident from day one. They took the time to understand our vision and delivered a product that perfectly aligns with our goals. The project was completed on time and within budget, which is rare in today’s fast-paced tech environment. We are thrilled with the results!",
        name: "Zeeshan Khan",
        title: "Owner of PPG",
        image: "/assets/images/Zeeshan.jpg.webp"  // public path
    },
    {
        text: "Devxonic delivered beyond our expectations. Their ability to understand our complex requirements and implement them flawlessly was remarkable. The team was professional, responsive, and committed to delivering a top-notch solution. Our app’s performance and user engagement have significantly improved since partnering with them",
        name: "Henry K",
        title: "News Blogger",
        image: "/assets/images/Henery.jpg.webp"  // public path
    }
];


const ReviewsSection = () => {
    return (
        <div className="min-h-screen bg-[#0b0b17] text-white px-4 md:px-30 py-16 md:py-24 page-section">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 selection-container">
                Reviews from <span className="font-semibold">our clients</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                {testimonials.map((item, index) => (
                    <div key={index}>
                        {/* Individual divider for each testimonial */}
                        <div className="border-b border-gray-600 mb-10"></div>

                        <div className="text-5xl text-gray-400 mb-4 leading-none">
                            <Image
                                src="https://testweb.devxonic.com/wp-content/uploads/2024/08/quote_Asset-3.png.webp"
                                alt={item.name}
                                width={50}
                                height={50}
                                className="rounded-full object-cover"
                            />
                        </div>
                        <p className="text-base sm:text-lg md:text-xl italic text-gray-300">{item.text}</p>
                        <div className="flex items-center mt-8">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={60}
                                height={60}
                                className="rounded-full object-cover"
                            />
                            <div className="ml-4">
                                <p className="font-medium text-base sm:text-lg">{item.name}</p>
                                <p className="text-sm text-gray-400">{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;
