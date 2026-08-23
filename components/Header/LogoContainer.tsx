"use client";

import Image from "next/image";

interface ILogoContainerProps {
  closeMenu: () => void;
}

export default function LogoContainer({
  closeMenu,
}: ILogoContainerProps) {
  return (
    <a
      href="#home"
      onClick={closeMenu}
      className="relative z-60 flex w-40 shrink-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500"
    >
        <Image
            src="/images/logos/Top-Logo.png"
            width={200}
            height={80}
            alt="Logo"
            className="h-16 w-auto"
            loading="eager"
        />
    </a>
  );
}