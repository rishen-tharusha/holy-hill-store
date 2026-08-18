"use client";

import React, { useEffect, useState } from "react";

import { NAV_LINKS } from "@/constants/NavLinks";
import MobileNavigation from "../Header/MobileNavigation";
import LogoContainer from "../Header/LogoContainer";
import MobileMenuButton from "../Header/MobileMenuButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const solid = scrolled || isOpen;

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-primary-100 bg-base-50/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <LogoContainer closeMenu={closeMenu} />

        <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-sm py-1 text-[15px] font-medium text-primary-600 transition-colors duration-200 hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 after:absolute after:-bottom-0.5 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-secondary-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center rounded-full bg-primary-800 px-6 py-2.5 text-[15px] font-medium text-base-50 transition-colors duration-300 hover:bg-secondary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 lg:inline-flex"
        >
          Contact Us
        </a>

        <MobileMenuButton 
            onPress={() => setIsOpen((value) => !value)}
            isOpen={isOpen}
        />
      </nav>

      <MobileNavigation 
        closeMenu={closeMenu}
        isOpen={isOpen}
      />
    </header>
  );
}

export function HillMark() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle
        cx="24"
        cy="9"
        r="3.5"
        className="fill-secondary-500"
      />

      <path
        d="M2 25 L12 12 L18 19 L23 13 L32 25 Z"
        className="fill-primary-800"
      />

      <path
        d="M2 25 L12 12 L15 15.5 L8 25 Z"
        className="fill-primary-600"
        opacity="0.5"
      />
    </svg>
  );
}