import React from 'react'
import { Menu, X } from "lucide-react";

interface IMobileMenuButtonProps {
    isOpen: boolean;
    onPress: () => void;
}

export default function MobileMenuButton({ isOpen, onPress } : IMobileMenuButtonProps) {
  return (
    <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={onPress}
        className="relative z-60 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-primary-800 transition-colors hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 lg:hidden"
    >
        <span className="sr-only">
            {isOpen ? "Close menu" : "Open menu"}
        </span>

        {isOpen ? (
            <X
                size={25}
                strokeWidth={1.8}
                aria-hidden="true"
            />
        ) : (
            <Menu
                size={25}
                strokeWidth={1.8}
                aria-hidden="true"
            />
        )}
    </button>
  )
}
