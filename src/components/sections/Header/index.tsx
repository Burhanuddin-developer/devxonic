'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  const router = useRouter();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMouseOnPopup, setIsMouseOnPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let popupCloseTimeout: string | number | NodeJS.Timeout | undefined;

  useEffect(() => {
    return () => {
      clearTimeout(popupCloseTimeout);
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
              clearTimeout(popupCloseTimeout);
              setIsServicesOpen(true);
            }}
            onMouseLeave={() => {
              popupCloseTimeout = setTimeout(() => {
                if (!isMouseOnPopup) setIsServicesOpen(false);
              }, 300);
            }}
            className="relative"
          >
            <button>Service</button>
            {isServicesOpen && (
              <div
                className="absolute top-8 left-0 bg-white text-black rounded shadow-lg py-2 w-48 text-sm"
                onMouseEnter={() => setIsMouseOnPopup(true)}
                onMouseLeave={() => {
                  setIsMouseOnPopup(false);
                  popupCloseTimeout = setTimeout(() => {
                    setIsServicesOpen(false);
                  }, 300);
                }}
              >
                <a href="/services/ui-ux" className="block px-4 py-2 hover:bg-purple-100">UI/UX Design</a>
                <a href="/services/web-dev" className="block px-4 py-2 hover:bg-purple-100">Web Development</a>
                <a href="/services/seo" className="block px-4 py-2 hover:bg-purple-100">SEO</a>
                <a href="/services/cloud" className="block px-4 py-2 hover:bg-purple-100">Cloud Services</a>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => {
              clearTimeout(popupCloseTimeout);
              setIsProjectsOpen(true);
            }}
            onMouseLeave={() => {
              popupCloseTimeout = setTimeout(() => {
                if (!isMouseOnPopup) setIsProjectsOpen(false);
              }, 300);
            }}
            className="relative"
          >
            <button>Projects</button>
            {isProjectsOpen && (
              <div
                className="absolute top-8 left-0 bg-white text-black rounded shadow-lg py-2 w-48 text-sm"
                onMouseEnter={() => setIsMouseOnPopup(true)}
                onMouseLeave={() => {
                  setIsMouseOnPopup(false);
                  popupCloseTimeout = setTimeout(() => {
                    setIsProjectsOpen(false);
                  }, 300);
                }}
              >
                <a href="/projects/corporate" className="block px-4 py-2 hover:bg-purple-100">Corporate</a>
                <a href="/projects/startups" className="block px-4 py-2 hover:bg-purple-100">Startups</a>
                <a href="/projects/ecommerce" className="block px-4 py-2 hover:bg-purple-100">E-Commerce</a>
              </div>
            )}
          </div>

          <a href="/about">About</a>
         <button onClick={() => router.push('/Blog')}>Blog</button>
          <a href="/contact">Contact</a>
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
          <a href="/" onClick={closeMobileMenu}>Home</a>

          <div>
            <button onClick={() => setIsServicesOpen(!isServicesOpen)}>Services</button>
            {isServicesOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <a href="/services/ui-ux" onClick={closeMobileMenu}>UI/UX Design</a>
                <a href="/services/web-dev" onClick={closeMobileMenu}>Web Development</a>
                <a href="/services/seo" onClick={closeMobileMenu}>SEO</a>
                <a href="/services/cloud" onClick={closeMobileMenu}>Cloud Services</a>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => setIsProjectsOpen(!isProjectsOpen)}>Projects</button>
            {isProjectsOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <a href="/projects/corporate" onClick={closeMobileMenu}>Corporate</a>
                <a href="/projects/startups" onClick={closeMobileMenu}>Startups</a>
                <a href="/projects/ecommerce" onClick={closeMobileMenu}>E-Commerce</a>
              </div>
            )}
          </div>

          <a href="/about" onClick={closeMobileMenu}>About</a>
          <a href="/blog" onClick={closeMobileMenu}>Blog</a>
          <a href="/contact" onClick={closeMobileMenu}>Contact</a>

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
