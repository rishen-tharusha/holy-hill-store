"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/constants/NavLinks";
import MobileNavigation from "../Header/MobileNavigation";
import LogoContainer from "../Header/LogoContainer";
import MobileMenuButton from "../Header/MobileMenuButton";

export default function Navbar() {
  const pathname = usePathname();

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
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-sm py-1 text-[15px] font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 after:absolute after:-bottom-0.5 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:bg-secondary-500 after:transition-all after:duration-300 ${
                    isActive
                      ? "text-primary-800 after:w-full"
                      : "text-primary-600 hover:text-primary-800 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="/contact"
          className="hidden items-center rounded-full bg-primary-800 px-6 py-2.5 text-[15px] font-medium text-base-50 transition-colors duration-300 hover:bg-secondary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 lg:inline-flex"
        >
          Contact Us
        </a>

        <MobileMenuButton
          onPress={() => setIsOpen((value) => !value)}
          isOpen={isOpen}
        />
      </nav>

      <MobileNavigation closeMenu={closeMenu} isOpen={isOpen} />
    </header>
  );
}