"use client";

import ImageGallery from "@/components/base/image";
import { FaTable, FaFilter, FaChartLine } from "react-icons/fa";

export default function RistonicApplication() {
  const cards = [
        {
            icon: <FaChartLine className="text-3xl mb-4" />,
            title: "Real-Time Data Analytics",
            description:
                "The dashboard offers real-time analytics for quick, informed decisions. It supports line, pie, and bar charts to visualize trends and performance.",
        },
        {
            icon: <FaTable className="text-3xl mb-4" />,
            title: "Comprehensive Asset Tables",
            description:
                "Users can view detailed, sortable tables for easy access to all asset information.",
            bg: "bg-black text-white",
        },
        {
            icon: <FaFilter className="text-3xl mb-4" />,
            title: "Advanced Filtering Options",
            description:
                "Ristonic’s Asset Manager provides advanced, real-time filtering to effortlessly sort and manage assets by category, status, location, and more.",
            bg: "bg-black text-white",
        },
    ];

  const images = [
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2024/12/16_ipad_mockup-1536x864.jpg.webp",
      alt: "Soccer Player",
      width: 800,
      height: 500,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2024/12/17_ipad_mockup-1536x864.jpg.webp",
      alt: "Login UI",
      width: 850,
      height: 500,
    },
  ];
  const Profile = [
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Login-1536x864.png",
      alt: "Soccer Player",
      width: 450,
      height: 300,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Login-1-1536x864.png",
      alt: "Login UI",
      width: 450,
      height: 300,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Login-2-1536x864.png",
      alt: "Sign Up UI",
      width: 450,
      height: 300,
    },
  ];
  const Field = [
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Home-Page-1919x2048.png",
      alt: "Soccer Player",
      width: 650,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Employee-Apply.png",
      alt: "Login UI",
      width: 650,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Home-Page-1.png",
      alt: "Sign Up UI",
      width: 650,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Resturant-to-find-People-Map-1919x2048.png",
      alt: "Player Personality UI",
      width: 650,
      height: 200,
    },
  ];
  const Settings = [
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Group-29-1.png",
      alt: "Soccer Player",
      width: 600,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Home-Page-2-1885x2048.png",
      alt: "Login UI",
      width: 600,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Group-2710.png",
      alt: "Sign Up UI",
      width: 600,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Group-2724-1.png",
      alt: "Player Personality UI",
      width: 600,
      height: 200,
    },
  ];
  const Security = [
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Dashboard-3-1536x864.png",
      alt: "Soccer Player",
      width: 600,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Dashboard-1536x864.png",
      alt: "Login UI",
      width: 600,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Dashboard-1-1536x864.png",
      alt: "Sign Up UI",
      width: 600,
      height: 200,
    },
    {
      src: "https://testweb.devxonic.com/wp-content/uploads/2025/04/Dashboard-2-1-1536x864.png",
      alt: "Player Personality UI",
      width: 600,
      height: 200,
    },
  ];
  return (
    <section className=" text-white px-6 py-16 page-section">
      <div className=" text-white min-h-screen py-16 px-6 md:px-20">
        <h1 className="text-4xl font-bold mb-6">Overview</h1>
        <p className="text-md mb-10 max-w-4xl">
          Asset Manager app offers a seamless, cross-platform solution for
          efficient asset management, combining real-time analytics with a
          customizable dashboard. Designed for businesses and individuals alike,
          it enhances decision-making and streamlines asset tracking across
          devices.
        </p>

        <div className="space-y-6  mb-16 max-w-5xl">
          <div className="flex flex-col md:flex-row ">
            <strong className="md:w-60 text-lg">Introduction:</strong>
            <p className="md:w-2xl">
              Asset Manager is a sophisticated mobile application designed to
              help businesses and individuals efficiently track and manage their
              assets through a dynamic and user-friendly dashboard. This
              application was developed using React Native, making it available
              on both the App Store and Play Store, ensuring broad accessibility
              and a consistent user experience across devices.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-start">
            <strong className="md:w-60 text-lg">Dashboard Overview:</strong>
            <p className="md:w-2xl">
              The core of the Asset Manager app is its powerful dashboard, which
              presents multiple analytics, tables, and filters. The dashboard
              allows users to gain insights into their assets through real-time
              data visualization. Whether it’s tracking asset performance or
              monitoring key metrics, users can customize their view to focus on
              the data most relevant to them.
            </p>
          </div>
        </div>
        
                <div className="grid md:grid-cols-3 gap-8 md:w-240">
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
        title="Join Ristonic Now"
        images={images}
        className="grid md:grid-cols-2 gap-4"
      />
      <ImageGallery
        title="Login Screen"
        images={Profile}
        className="grid md:grid-cols-3 gap-4"
      />
      <ImageGallery
        title="Worker Home Screen"
        images={Field}
        className="grid md:grid-cols-2 gap-4"
      />
      <ImageGallery
        title="Worker Home Screen"
        images={Settings}
        className="grid md:grid-cols-2 gap-4"
      />
      <ImageGallery
        title="Admin Screen"
        images={Security}
        className="grid md:grid-cols-2 gap-4"
      />
      <div className=" border-b-1 border-gray-500">
        <h2 className="text-3xl md:text-5xl font-bold mt-20">Conclusion</h2>
        <p className="text-gray-300 leading-relaxed mt-8 mb-30">
          Devxonic’s development of the Asset Manager application highlights its
          expertise in creating robust, user-centric mobile solutions. By
          leveraging React Native, the app delivers a seamless experience across
          platforms while providing powerful tools for asset management. Whether
          you are a business owner or an individual managing personal assets,
          the Asset Manager app provides the insights and control you need to
          optimize your asset management processes.
        </p>
      </div>
    </section>
  );
}
