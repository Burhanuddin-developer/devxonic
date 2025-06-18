"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FaAndroid,
  FaAppStore,
  FaBars,
  FaCheckCircle,
  FaCloud,
  FaCogs,
  FaDesktop,
  FaGlobe,
  FaMobileAlt,
  FaRegClock,
  FaShopify,
  FaTimes,
  FaTools,
  FaWordpress,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaScreenpal } from "react-icons/fa6";
const serviceTabs = [
  {
    name: "App Development",
    description: [
      {
        label: "Android App Development",
        icon: <FaAndroid/>,
      },
      {
        label: "iOS App Development",
        icon: <FaAppStore />,
      },
      {
        label: "Web App Development",
        icon: <FaDesktop/>,
      },
      {
        label: "Realtime App Development",
        icon: <FaRegClock  />,
      },
      {
        label: "React Native App Development",
        icon: <FaMobileAlt />,
      },
      {
        label: "FullStack App Development",
        icon: <FaCogs />,
      },
    ],
  },
  {
    name: "Web Development & Design",
    description: [
      {
        label: "Wordpress",
        icon: <FaWordpress />,
      },
      {
        label: "Shopify",
        icon: <FaShopify/>,
      },
      {
        label: "Web Development & Design",
        icon: <FaCogs/>,
      },
      {
        label: "Webflow",
        icon: <FaCogs />,
      },
            {
        label: "Website Design",
        icon: <FaGlobe/>,
      },
      {
        label: "Full Stack Web Application Development",
        icon: <FaCogs/>,
      },
      {
        label: "Website Redesign",
        icon: <FaTools />,
      },
                {
        label: "UI/UX",
        icon: <FaGlobe/>,
      },
      {
        label: "Custom Website Design",
        icon: <FaCogs/>,
      },
      {
        label: "Product Research",
        icon: <FaCogs />,
      },
    ],
  },
  {
    name: "Devops",
    description: [
      {
        label: "Technical SEO",
        icon: <FaCheckCircle className="text-purple-600" />,
      },
      {
        label: "On-page Optimization",
        icon: <FaCheckCircle className="text-purple-600" />,
      },
      {
        label: "Keyword Strategy",
        icon: <FaCheckCircle className="text-purple-600" />,
      },
      {
        label: "Performance Tuning",
        icon: <FaCheckCircle className="text-purple-600" />,
      },
    ],
  },
  {
    name: "Industries",
    description: [
      {
        label: "AWS / GCP / Azure Deployment",
        icon: <FaCloud className="text-purple-600" />,
      },
      {
        label: "Serverless Architecture",
        icon: <FaCloud className="text-purple-600" />,
      },
      {
        label: "CI/CD Pipelines",
        icon: <FaCloud className="text-purple-600" />,
      },
      {
        label: "Cloud Migration",
        icon: <FaCloud className="text-purple-600" />,
      },
    ],
  },
];
const Header = () => {
  const router = useRouter();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMouseOnPopup, setIsMouseOnPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const popupCloseTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (popupCloseTimeout.current) clearTimeout(popupCloseTimeout.current);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProjectsOpen(false);
    setIsServicesOpen(false);
  };


  return (
    <header className="relative top-0 left-0 w-full z-50 text-white backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-6 md:px-8 md:py-8">
        <a href="/">
          <Image
            src="https://testweb.devxonic.com/wp-content/uploads/2024/08/devxonic-logo-white-1.png"
            alt="Devxonic Logo"
            width={200}
            height={80}
          />
        </a>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-sm tracking-wide relative items-center">
          <a href="/">Home</a>

          <div
            onMouseEnter={() => {
              if (popupCloseTimeout.current)
                clearTimeout(popupCloseTimeout.current);
              setIsServicesOpen(true);
            }}
            onMouseLeave={() => {
              popupCloseTimeout.current = setTimeout(() => {
                if (!isMouseOnPopup) setIsServicesOpen(false);
              }, 300);
            }}
            className="relative"
          >
            <button aria-haspopup="true" aria-expanded={isServicesOpen}>
              Services
            </button>
{isServicesOpen && (
  <div
    className="absolute top-8 md:left-30 -translate-x-1/2 bg-[#010314]/80 backdrop-blur-md text-white rounded shadow-xl py-4 px-4 md:w-250 md:h-100 text-sm z-50"
    onMouseEnter={() => setIsMouseOnPopup(true)}
    onMouseLeave={() => {
      setIsMouseOnPopup(false);
      popupCloseTimeout.current = setTimeout(() => {
        setIsServicesOpen(false);
      }, 300);
    }}
  >
    <ServiceTabs />
  </div>
)}

          </div>

          <div
            onMouseEnter={() => {
              if (popupCloseTimeout.current)
                clearTimeout(popupCloseTimeout.current);
              setIsProjectsOpen(true);
            }}
            onMouseLeave={() => {
              popupCloseTimeout.current = setTimeout(() => {
                if (!isMouseOnPopup) setIsProjectsOpen(false);
              }, 300);
            }}
            className="relative"
          >
            <button aria-haspopup="true" aria-expanded={isProjectsOpen}>
              Projects
            </button>
            {isProjectsOpen && (
              <div
                className="absolute top-8 left-0 bg-white text-black rounded shadow-lg py-2 w-48 text-sm"
                onMouseEnter={() => setIsMouseOnPopup(true)}
                onMouseLeave={() => {
                  setIsMouseOnPopup(false);
                  popupCloseTimeout.current = setTimeout(() => {
                    setIsProjectsOpen(false);
                  }, 300);
                }}
              >
                <a
                  href="/projects/corporate"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Corporate
                </a>
                <a
                  href="/projects/startups"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Startups
                </a>
                <a
                  href="/projects/ecommerce"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  E-Commerce
                </a>
              </div>
            )}
          </div>

          <button onClick={() => router.push("/About")}>About</button>
          <button onClick={() => router.push("/Blog")}>Blog</button>
           <button onClick={() => router.push("/Contact")}>Contact</button>
        </nav>

        <a
          href="https://calendly.com/contact-devxonic/30min"
          className="hidden md:inline-block ml-4 text-md bg-white text-black text-center px-4 py-1.5 rounded-3xl hover:bg-purple-100 transition w-45"
        >
          Book Appointment
        </a>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111827] text-white px-6 py-4 space-y-4">
          <a href="/" onClick={closeMobileMenu}>
            Home
          </a>
<div>
  <button onClick={() => setIsServicesOpen(!isServicesOpen)}>
    Services
  </button>
  {isServicesOpen && (
    <div className="mt-4 border-t border-gray-700 pt-4">
      <ServiceTabsMobile />
    </div>
  )}
</div>

          <div>
            <button onClick={() => setIsProjectsOpen(!isProjectsOpen)}>
              Projects
            </button>
            {isProjectsOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <a href="/projects/corporate" onClick={closeMobileMenu}>
                  Corporate
                </a>
                <a href="/projects/startups" onClick={closeMobileMenu}>
                  Startups
                </a>
                <a href="/projects/ecommerce" onClick={closeMobileMenu}>
                  E-Commerce
                </a>
              </div>
            )}
          </div>

          <a href="/about" onClick={closeMobileMenu}>
            About
          </a>
          <a href="/blog" onClick={closeMobileMenu}>
            Blog
          </a>
          <a href="/contact" onClick={closeMobileMenu}>
            Contact
          </a>

          <a
            href="https://calendly.com/contact-devxonic/30min"
            className="block text-md bg-white text-black text-center px-4 py-2 rounded-3xl hover:bg-purple-100 transition"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;


const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].name);

  const currentTab = serviceTabs.find((tab) => tab.name === activeTab);

  return (
    <div className="flex w-[700px] p-4 md: mt-15 max-h-[350px] overflow-y-50">
      <div className="w-1/3 pr-60 ">
        {serviceTabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`block md:w-60 text-left px-4 py-5 rounded-2xl mb-2 text-md font-medium transition ${
              tab.name === activeTab
                ? "bg-gradient-to-b from-[#3b0087] to-[#0b0b17] text-white"
                : "text-pink-100/80 hover:bg-gradient-to-t from-[#3b0087] to-[#0b0b17] not-hover:border  border-gray-100"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="w-4/8 pl-6">
        <ul className="space-y-3">
          {currentTab?.description?.map((point, index) => (
            <li key={index} className="flex items-start text-pink-100/250 text-md">
              <span className="mt-1 mr-3 text-lg">{point.icon}</span>
              <span>{point.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const ServiceTabsMobile = () => {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].name);

  const currentTab = serviceTabs.find((tab) => tab.name === activeTab);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {serviceTabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-3 py-1.5 rounded-full text-sm font-semibold ${
              tab.name === activeTab
                ? "bg-white text-black"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <ul className="space-y-2 mt-2">
        {currentTab?.description.map((point, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm">
            <span className="text-purple-400">{point.icon}</span>
            <span>{point.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

