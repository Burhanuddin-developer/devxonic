"use client";

import ImageGallery from "@/components/base/image";
import { FaCar, FaTags, FaTools } from "react-icons/fa";

export default function WashtaApplication() {
    const cards = [
        {
            icon: <FaCar className="text-3xl mb-4" />,
            title: "Comprehensive Car Maintenance Services",
            description:
                "Otobucks provides a range of automotive services—like engine diagnostics, oil changes, tire services, transmission repair, and battery replacement—letting users easily book appointments with trusted local mechanics.",
        },
        {
            icon: <FaTools className="text-3xl mb-4" />,
            title: "Home Maintenance and Handyman Services",
            description:
                "Otobucks connects users with skilled handymen for services like smart home setups, plumbing, cleaning, and renovations, simplifying home maintenance by eliminating the search for trusted providers.",
            bg: "bg-black text-white",
        },
        {
            icon: <FaTags className="text-3xl mb-4" />,
            title: "Price Comparison and Ratings",
            description:
                "Users can compare prices and ratings from various service providers, ensuring transparency and value for money. Otobucks also offers exclusive rewards and discounts, making it a cost-effective choice for maintenance services.",
            bg: "bg-black text-white",
        },
    ];
    const images = [
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Login-4-1536x864.png",
            alt: "Soccer Player",
            width: 800,
            height: 500,
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Login-OTP-1536x864.png",
            alt: "Login UI",
            width: 850,
            height: 500,
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Signup-1-1536x864.png",
            alt: "Soccer Player",
            width: 800,
            height: 500,
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Signup-Business-Details-1536x864.png",
            alt: "Login UI",
            width: 850,
            height: 500,
        },
    ];
    const Field = [
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Dashboard-4-1536x864.png",
            alt: "Soccer Player",
            width: 850,
            height: 500,
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Orders-1536x864.png",
            alt: "Login UI",
            width: 850,
            height: 500,
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Invoices-1536x864.png",
            alt: "Sign Up UI",
            width: 850,
            height: 500,
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Rating-and-Reviews-1536x864.png",
            alt: "Sign Up UI",
            width: 850,
            height: 500,
        },
    ];

    const Settings = [
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Services-1536x864.png",
            alt: "Soccer Player",
            width: 600,
            height: 200,
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Services-Add-Service-1536x864.png",
            alt: "Login UI",
            width: 600,
            height: 200,
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Group-1-1-1536x864.png",
            alt: "Sign Up UI",
            width: 600,
            height: 200,
        },
        {
            src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Group-1-1-1-1536x864.png",
            alt: "Player Personality UI",
            width: 600,
            height: 200,
        },
    ];

    return (
        <section className=" text-white px-6 py-16 page-section">
            <div className="px-6 py-16 text-white min-h-screen">
                <h2 className="text-4xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-300 mb-12 max-w-3xl">
                    Washhat is a car washing app that features a comprehensive dashboard to
                    efficiently manage Shops, Invoices, Orders, Ratings, and Reviews. The
                    dashboard provides real-time insights and control over daily operations,
                    helping admins and business owners track performance, customer feedback,
                    and service flow.
                </p>

                <div className="grid md:grid-cols-3 gap-8 md:ml-8  md:w-240">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className={`rounded-2xl p-10 border border-gray-700 hover:shadow-lg transition bg-gradient-to-b  hover:from-black hover:via-black via-20% hover:to-purple-700`}
                        >
                            <div className="ml-22 mb-6">{card.icon}</div>
                            <h3 className="text-md font-bold text-center mb-8">{card.title}</h3>
                            <p className="text-md text-gray-300 text-center">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <ImageGallery
                title="Join the Largest PC Gaming Chats"
                images={images}
                className="grid md:grid-cols-2 gap-4"
            />
            <ImageGallery
                title="Main Screen"
                images={Field}
                className="grid md:grid-cols-2 gap-4"
            />
            <ImageGallery
                title="Services"
                images={Settings}
                className="grid md:grid-cols-2 gap-4"
            />
            <div className=" border-b-1 border-gray-500">
                <h2 className="text-3xl md:text-5xl font-bold mt-20">Conclusion</h2>
                <p className="text-gray-300 leading-relaxed mt-8 mb-30">
                    With its organized and user-friendly dashboard, Washat ensures streamlined car wash management, enhanced customer satisfaction, and data-driven decision-making—all in one place.
                </p>
            </div>
        </section>
    );
}
