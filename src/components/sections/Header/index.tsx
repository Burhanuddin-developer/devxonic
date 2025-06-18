"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaCheckCircle,
  FaCloud,
  FaCogs,
  FaGlobe,
  FaMobileAlt,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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
    className="absolute top-8 left-0 backdrop-blur-md bg-gray-100/70 text-black rounded shadow-xl py-4 px-4 w-[720px] text-sm z-50"
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
  const [activeTab, setActiveTab] = useState("App Development");

  const tabs = [
    {
      name: "App Development",
      link: "/services/ui-ux",
      description: [
        {
          label: "Android App Development",
          icon: <FaMobileAlt className="text-purple-600" />,
        },
        {
          label: "iOS App Development",
          icon: <FaMobileAlt className="text-purple-600" />,
        },
        {
          label: "Web App Development",
          icon: <FaGlobe className="text-purple-600" />,
        },
        {
          label: "Realtime App Development",
          icon: <FaCogs className="text-purple-600" />,
        },
        {
          label: "React Native App Development",
          icon: <FaMobileAlt className="text-purple-600" />,
        },
        {
          label: "FullStack App Development",
          icon: <FaCogs className="text-purple-600" />,
        },
      ],
    },
    {
      name: "Web Dev",
      link: "/services/web-dev",
      description: [
        {
          label: "Next.js / React / Vue",
          icon: <FaGlobe className="text-purple-600" />,
        },
        {
          label: "Responsive Web Design",
          icon: <FaGlobe className="text-purple-600" />,
        },
        {
          label: "CMS & Custom Development",
          icon: <FaCogs className="text-purple-600" />,
        },
        {
          label: "API Integration",
          icon: <FaCogs className="text-purple-600" />,
        },
      ],
    },
    {
      name: "SEO",
      link: "/services/seo",
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
      name: "Cloud",
      link: "/services/cloud",
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

  const currentTab = tabs.find((tab) => tab.name === activeTab);

  return (
    <div className="flex w-[700px] min-h-[300px] p-4">
      {/* Left side tabs */}
      <div className="w-1/3 pr-4 border-r border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`block w-full text-left px-4 py-3 rounded-md mb-2 text-md font-medium transition ${
              tab.name === activeTab
                ? "bg-purple-100 text-black"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Right side content */}
      <div className="w-2/3 pl-6">
        <ul className="space-y-3">
          {currentTab?.description?.map((point, index) => (
            <li key={index} className="flex items-start text-gray-800 text-md">
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
  const [activeTab, setActiveTab] = useState("App Development");

  const tabs = [
    {
      name: "App Development",
      description: [
        { label: "Android App Development", icon: <FaMobileAlt /> },
        { label: "iOS App Development", icon: <FaMobileAlt /> },
        { label: "Web App Development", icon: <FaGlobe /> },
        { label: "Realtime App Development", icon: <FaCogs /> },
        { label: "React Native App Development", icon: <FaMobileAlt /> },
        { label: "FullStack App Development", icon: <FaCogs /> },
      ],
    },
    {
      name: "Web Dev",
      description: [
        { label: "Next.js / React / Vue", icon: <FaGlobe /> },
        { label: "Responsive Web Design", icon: <FaGlobe /> },
        { label: "CMS & Custom Development", icon: <FaCogs /> },
        { label: "API Integration", icon: <FaCogs /> },
      ],
    },
    {
      name: "SEO",
      description: [
        { label: "Technical SEO", icon: <FaCheckCircle /> },
        { label: "On-page Optimization", icon: <FaCheckCircle /> },
        { label: "Keyword Strategy", icon: <FaCheckCircle /> },
        { label: "Performance Tuning", icon: <FaCheckCircle /> },
      ],
    },
    {
      name: "Cloud",
      description: [
        { label: "AWS / GCP / Azure Deployment", icon: <FaCloud /> },
        { label: "Serverless Architecture", icon: <FaCloud /> },
        { label: "CI/CD Pipelines", icon: <FaCloud /> },
        { label: "Cloud Migration", icon: <FaCloud /> },
      ],
    },
  ];

  const currentTab = tabs.find((tab) => tab.name === activeTab);

  return (
    <div className="flex flex-col gap-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
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

      {/* Description */}
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
