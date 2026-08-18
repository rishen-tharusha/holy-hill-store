import React from 'react'
import { HillMark } from '../layout/Navbar';

interface ILogoContainerProps {
    closeMenu: () => void;
}

export default function LogoContainer({ closeMenu } : ILogoContainerProps) {
  return (
    <a
        href="#home"
        onClick={closeMenu}
        className="relative z-60 flex shrink-0 items-center gap-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 sm:gap-3"
    >
        <HillMark />

        <span className="flex flex-col leading-none">
            <span className="font-serif text-base tracking-tight text-primary-800 sm:text-xl">
                Holy Hill
            </span>

            <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.3em] text-secondary-600 sm:text-[11px] sm:tracking-[0.35em]">
                Premier
            </span>
        </span>
    </a>
  )
}
