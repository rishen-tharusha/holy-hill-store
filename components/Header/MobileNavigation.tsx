import React from 'react'
import { NAV_LINKS } from '@/constants/NavLinks'

interface IMobileNavigationProps {
    isOpen: Boolean;
    closeMenu: () => void;
}

export default function MobileNavigation({ isOpen, closeMenu} : IMobileNavigationProps) {
  return (
    <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 h-dvh w-full bg-base-50 transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full w-full flex-col justify-center overflow-y-auto px-6 pb-20 sm:px-10">
          <ul className="flex flex-col gap-6 sm:gap-8">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen
                    ? `${index * 70 + 100}ms`
                    : "0ms",
                }}
              >
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block w-fit rounded-sm py-1 font-serif text-3xl text-primary-800 transition-colors hover:text-secondary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 sm:text-4xl"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Mobile CTA */}
            <li
              className={`pt-3 transition-all duration-500 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen
                  ? `${NAV_LINKS.length * 70 + 100}ms`
                  : "0ms",
              }}
            >
              <a
                href="/contact"
                onClick={closeMenu}
                className="inline-flex items-center rounded-full bg-primary-800 px-7 py-3 text-base font-medium text-base-50 transition-colors hover:bg-secondary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
  )
}
