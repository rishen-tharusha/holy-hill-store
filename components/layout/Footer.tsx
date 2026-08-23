import React from "react";
import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { CONTACT } from '@/constants/Contact';
import { QUICK_LINKS } from "@/constants/NavLinks";
import SocialTabs from "../Social/SocialTabs";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-700 bg-primary-800 text-base-100">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="max-w-xs">
            <a href="#home" className="group inline-flex items-center gap-3">
              <Image 
                src="/images/logos/Footer-Logo.png"
                width={200}
                height={80}
                alt="Logo"
                className="h-16 w-auto"
              />
              
            </a>
            <p className="mt-4 text-sm leading-relaxed text-primary-300">
              Discover quality products, thoughtful selections, and a shopping experience made for you.
            </p>

            <SocialTabs />            
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">
              Explore
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-200 transition-colors duration-200 hover:text-secondary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">
              Get in Touch
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-primary-200">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-secondary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 rounded-sm"
                >
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={2} />
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2.5 break-all transition-colors duration-200 hover:text-secondary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 rounded-sm"
                >
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={2} />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  className="inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-secondary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 rounded-sm"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={2} />
                  <span>WhatsApp us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-primary-700 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-primary-400">
            &copy; {year} Holy Hill Premier. All rights reserved.
          </p>
          <p className="text-xs text-primary-400">Quality products. Better shopping.</p>
        </div>
      </div>
    </footer>
  );
}