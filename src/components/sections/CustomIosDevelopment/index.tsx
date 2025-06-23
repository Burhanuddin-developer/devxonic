'use client';

import { FaCheckCircle, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function CustomIosDevelopment() {
    return (
        <div className="bg-[#0b0b17] text-white min-h-screen py-16 px-4 md:px-20 page-section">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 section-container">
                {/* Left/Main Section */}
                <div className="lg:col-span-2 space-y-8">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        <span className="text-gray-400">Custom</span> iOS App <span className="text-white">Development</span>
                    </h1>
                    <p className="text-gray-300">
                        We craft tailored iOS applications built to match your specific business goals, ensuring a unique and impactful user experience across Apple devices.
                    </p>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Service Overview</h2>
                        <p className="text-gray-300 mb-6">
                            Our goal is to help you build apps that not only meet the high standards of Apple’s App Store but also provide a superior user experience for your audience.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'Intuitive UI/UX Design',
                                    desc: 'Our design team focuses on clean, user-friendly interfaces that deliver seamless navigation and engaging interactions, aligned with Apple’s design guidelines.'
                                },
                                {
                                    title: 'iPhone & iPad App Solutions',
                                    desc: 'We develop responsive apps optimized for both iPhone and iPad, ensuring consistent performance, layout, and usability across different screen sizes.'
                                },
                                {
                                    title: 'App Store Deployment & Optimization',
                                    desc: 'From preparing your app for launch to ensuring it meets all App Store requirements, we handle the entire submission process to maximize visibility and approval success.'
                                },
                                {
                                    title: 'Ongoing Maintenance & Upgrades',
                                    desc: 'We provide continuous support, regular updates, and performance enhancements to keep your app secure, bug-free, and aligned with the latest iOS versions.'
                                },
                                {
                                    title: 'API Integration & Backend Development',
                                    desc: 'We integrate powerful third-party APIs and build reliable backend systems to enhance your app’s functionality, speed, and connectivity.'
                                }
                            ].map((item, idx) => (
                                <div key={idx}>
                                    <FaCheckCircle className='text-3xl md:mb-6' />
                                    <div className="flex items-start gap-2 mb-2">
                                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                                    </div>
                                    <p className="text-md text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-400 mt-6">
                            Devxonic’s iOS App Development services are designed to help you create cutting-edge applications that stand out in the App Store and provide an exceptional experience for iOS users.
                        </p>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-10">
                    {/* Get a Quote */}
                    <div className=" p-6 rounded-4xl border border-gray-500">
                        <h3 className="text-xl font-semibold mb-4">Get a Quote</h3>
                        <p className="text-gray-400 mb-5 text-sm">
                            Get Your Custom Quote Today. Let’s Bring Your Vision to Life!
                        </p>
                        <form className="space-y-3">
                            <input type="text" placeholder="Name" className="w-full bg-transparent border border-gray-600 rounded-3xl px-4 py-3 text-sm focus:outline-none " />
                            <input type="email" placeholder="Email" className="w-full bg-transparent border border-gray-600 rounded-3xl px-4 py-3 text-sm focus:outline-none" />
                            <input type="tel" placeholder="Phone" className="w-full bg-transparent border border-gray-600 rounded-3xl px-4 py-3 text-sm focus:outline-none" />
                            <button type="submit" className="w-full bg-white text-black  py-3 rounded-3xl hover:bg-gray-200 transition">Submit Form</button>
                        </form>
                    </div>

                    {/* Document Detail */}
                    <div className=" p-6 rounded-4xl border border-gray-500">
                        <h3 className="text-2xl  font-semibold mb-4">Document Detail</h3>
                        <p className="text-md text-gray-400 mb-6">
                            Aenean laoreet nunc eget est ultricies faucibus ultricies facilisis.
                        </p>
                        <div className="space-y-5 mb-4">
                            <button className="md:w-45 border rounded-3xl px-2 py-3 bg-white text-black text-sm font-semibold hover:bg-[#9a9ace] transition">📁 Company Profile</button>
                            <button className="w-45 border rounded-3xl px-4 py-3 bg-white text-black text-sm font-semibold hover:bg-[#9a9ace] transition">📄 Company Report</button>
                        </div>
                    </div>
                    <div className="max-w-sm  rounded-3xl overflow-hidden text-white bg-gradient-to-t from-[#3b0087] via-[#0b0b17] border border-gray-500">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-6 mt-4">Get in Touch</h2>
                            <p className="text-md text-gray-400 mb-6">
                                We’d love to hear from you! Whether you have a question
                            </p>

                            {/* Phone */}
                            <div className="flex items-start mb-8">
                                <div className="p-2 rounded-4xl border border-gray-500 mr-4">
                                    <FaPhoneAlt className="text-white text-xl" />
                                </div>
                                <div>
                                    <p className="text-2xl text-white">Phone Number</p>
                                    <p className=" text-gray-400">+92 318 1021744</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start mb-6">
                                <div className="rounded-4xl border border-gray-500 p-2 mr-4">
                                    <FaEnvelope className="text-white text-xl" />
                                </div>
                                <div>
                                    <p className="text-2xl text-white">Email Address</p>
                                    <p className=" text-gray-400">contact@testweb.devxonic.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
