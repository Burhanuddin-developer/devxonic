"use client";

import { useRouter } from "next/navigation";
import { JSX, useEffect, useRef, useState } from "react";
import {
  FaAndroid,
  FaAppStore,
  FaAws,
  FaBars,
  FaBox,
  FaBriefcase,
  FaBroadcastTower,
  FaCalendarAlt,
  FaCloud,
  FaCodeBranch,
  FaCogs,
  FaCube,
  FaDesktop,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaGlasses,
  FaGlobe,
  FaHospital,
  FaJenkins,
  FaLinux,
  FaMobileAlt,
  FaObjectGroup,
  FaPalette,
  FaParking,
  FaPencilRuler,
  FaRegClock,
  FaRobot,
  FaShopify,
  FaSync,
  FaTimes,
  FaTools,
  FaUserTie,
  FaWaveSquare,
  FaWordpress,
  FaWrench,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
type ServiceTabDescription = {
  label: string;
  icon: JSX.Element;
  href?: string;
};

type ServiceTab = {
  name: string;
  description: ServiceTabDescription[];
};

const serviceTabs: ServiceTab[] = [
  {
    name: "App Development",
    description: [
      {
        label: "Android App Development",
        icon: <FaAndroid />,
        href: "/Page/AppDevelopment/Android",
      },
      {
        label: "iOS App Development",
        icon: <FaAppStore />,
        href: "/Page/AppDevelopment/Ios",
      },
      {
        label: "Web App Development",
        icon: <FaDesktop />,
        href: "/Page/WebApps",
      },
      {
        label: "Realtime App Development",
        icon: <FaRegClock />,
        href: "/Page/AppDevelopment/Realtime",
      },
      {
        label: "React Native App Development",
        icon: <FaMobileAlt />,
        href: "/Page/MobileApplication",
      },
      {
        label: "FullStack App Development",
        icon: <FaCogs />,
        href: "/Page/AppDevelopment/FullStack",
      },
    ],
  },
  {
    name: "Web Development & Design",
    description: [
      {
        label: "Wordpress",
        icon: <FaWordpress />,
        href: "/Page/Wordpress",
      },
      {
        label: "Shopify",
        icon: <FaShopify />,
        href: "/Page/Shopify",
      },
      {
        label: "Web Development & Design",
        icon: <FaPalette />,
        href: "/Page/WebDevelopment",
      },
      {
        label: "Webflow",
        icon: <FaWaveSquare />,
        href: "/Page/WebDevelopment/Webflow",
      },
      {
        label: "Website Design",
        icon: <FaGlobe />,
        href: "/Page/WebDevelopment/WebsiteDesign",
      },
      {
        label: "Full Stack Web Application Development",
        icon: <FaCogs />,
        href: "/Page/AppDevelopment/FullStack",
      },
      {
        label: "Website Redesign",
        icon: <FaTools />,
        href: "/Page/WebDevelopment/WebsiteRedesign",
      },
      {
        label: "UI/UX",
        icon: <FaObjectGroup />,
        href: "/Page/WebDevelopment/UiUxDesign",
      },
      {
        label: "Custom Website Design",
        icon: <FaPencilRuler />,
        href: "/Page/WebDevelopment/WebsiteDesign",
      },
      {
        label: "Product Research",
        icon: <FaParking />,
        href: "/Page/WebDevelopment/ProductResearch",
      },
    ],
  },
  {
    name: "Devops",
    description: [
      {
        label: "  AWS",
        icon: <FaAws />,
        href: "/Page/Devops/AWS",
      },
      {
        label: "Azure",
        icon: <FaCloud />,
        href: "/Page/Devops/Azure",
      },
      {
        label: "Kubernetes",
        icon: <FaCube />,
        href: "/Page/Devops/Kubernetes",
      },
      {
        label: "Jenkins",
        icon: <FaJenkins />,
        href: "/Page/Devops/Jenkins",
      },
      {
        label: "Gitlab",
        icon: <FaGitlab />,
        href: "/Page/Devops/Gitlab",
      },
      {
        label: "Github / Github Actions",
        icon: <FaGithub />,
        href: "/Page/Devops/Github",
      },
      {
        label: "Webhooks",
        icon: <FaRobot />,
        href: "/Page/Devops/Webhooks",
      },
      {
        label: "Docker",
        icon: <FaDocker />,
        href: "/Page/Devops/Docker",
      },
      {
        label: "CI/CD",
        icon: <FaCodeBranch />,
        href: "/Page/Devops/CiCd",
      },
      {
        label: "Linux Administration",
        icon: <FaLinux />,
        href: "/Page/Devops/Linux",
      },
      {
        label: "S3 Services",
        icon: <FaBox />,
        href: "/Page/Devops/Services",
      },
      {
        label: "Terraform",
        icon: <FaWrench />,
        href: "/Page/Devops/Terraform",
      },
      {
        label: "Serverless",
        icon: <FaBroadcastTower />,
        href: "/Page/Devops/Serverless",
      },
      {
        label: "GCP",
        icon: <FaCloud />,
        href: "/Page/Devops/GCP",
      },
    ],
  },
  {
    name: "Industries",
    description: [
      {
        label: "  Healthcare App Development",
        icon: <FaHospital />,
        href: "/Page/Industries/Healthcare",
      },
      {
        label: "Booking Management App Development",
        icon: <FaCalendarAlt />,
        href: "/Page/Industries/Booking",
      },
      {
        label: "Job Management App Development",
        icon: <	FaBriefcase />,
        href: "/Page/Industries/JobManagement",
      },
      {
        label: "Freelance Platform App Development",
        icon: <	FaUserTie/>,
        href: "/Page/Industries/FreelancePlatform",
      },
      {
        label: "Social Media App Development",
        icon: <FaYoutube/>,
        href: "/Page/Industries/SocialMedia",
      },
      {
        label: "AR/VR App Develpoment",
        icon: <FaGlasses />,
        href: "/Page/Industries/ARVR",
      },
      {
        label: "Realtime Applications",
        icon: <FaSync/>,
        href: "/Page/Industries/Realtime",
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
                className="absolute top-8 md:left-30 -translate-x-1/2 bg-[#010314]/80 backdrop-blur-md text-white rounded shadow-xl py-4 px-4 md:w-250 md:h-auto text-sm z-50"
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
                className="absolute top-8 left-0 bg-white/80 backdrop-blur-md text-black rounded shadow-lg py-2 w-48 text-md "
                onMouseEnter={() => setIsMouseOnPopup(true)}
                onMouseLeave={() => {
                  setIsMouseOnPopup(false);
                  popupCloseTimeout.current = setTimeout(() => {
                    setIsProjectsOpen(false);
                  }, 300);
                }}
              >
                <button
                  onClick={() => router.push("/Page/MobileApplication")}
                  className="block px-4 py-4 hover:bg-purple-100"
                >
                  Mobile Application
                </button>
                <button
                  onClick={() => router.push("/Page/WebApps")}
                  className="block px-4 py-4 hover:bg-purple-100"
                >
                  Web Apps
                </button>
                <button
                  onClick={() => router.push("/Page/Wordpress")}
                  className="block px-4 py-4 hover:bg-purple-100"
                >
                  Wordpress
                </button>
                <button
                  onClick={() => router.push("/Page/Shopify")}
                  className="block px-4 py-4 hover:bg-purple-100"
                >
                  Shopify
                </button>
                <button
                  onClick={() => router.push("/Page/UiProjects")}
                  className="block px-4 py-4 hover:bg-purple-100"
                >
                  UI Projects
                </button>
              </div>
            )}
          </div>

          <button onClick={() => router.push("/Page/About")}>About</button>
          <button onClick={() => router.push("/Page/Blog")}>Blog</button>
          <button onClick={() => router.push("/Page/Contact")}>Contact</button>
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
    <div className="flex w-auto p-4 max-h-[400px]">
      {/* Left Tabs */}
      <div className="w-1/4  overflow-y-auto">
        {serviceTabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`block w-full text-left px-4 py-5 rounded-2xl mb-2 text-sm font-medium transition ${tab.name === activeTab
                ? "bg-gradient-to-b from-[#3b0087] to-[#0b0b17] text-white "
                : "text-pink-100/80  border border-gray-100 hover:bg-gradient-to-t from-[#3b0087] to-[#0b0b17] "
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Right Content */}
      <div className="w-2/3 pl-4 overflow-y-auto h-auto ">
        <ul className="space-y-3">
          {currentTab?.description?.map((point, index) => (
            <Link
              key={index}
              href={point.href ?? "#"}
              className="flex items-start text-pink-100/250 text-sm"
            >
              <span className="mt-1 mr-3 text-lg">{point.icon}</span>
              <span>{point.label}</span>
            </Link>
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
            className={`px-3 py-1.5 rounded-full text-sm font-semibold ${tab.name === activeTab
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
