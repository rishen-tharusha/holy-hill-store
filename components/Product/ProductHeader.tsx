import React from 'react'
import { Sparkles, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react'

export interface IProductHeaderProps {
    eyebrow: String;
    title: String;
    viewAllHref?: string;
    scrollByAmountRight: () => void;
    scrollByAmountLeft: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
}

export default function ProductHeader({ eyebrow, title, viewAllHref, scrollByAmountRight, canScrollPrev, canScrollNext, scrollByAmountLeft }: IProductHeaderProps) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-700">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
                {eyebrow}
            </span>

            <h2
                id="new-arrivals-heading"
                className="mt-4 font-serif text-3xl leading-tight text-primary-800 sm:text-4xl"
            >
                {title}
            </h2>
        </div>

        <div className="flex items-center justify-between gap-4 sm:justify-end">
        <a
            href={viewAllHref}
            className="group inline-flex items-center gap-1.5 rounded-full text-sm font-medium text-primary-700 transition-colors duration-200 hover:text-secondary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2"
        >
            View all

            <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={2}
            />
        </a>

            {/* Desktop nav arrows */}
            <div className="hidden items-center gap-2 sm:flex">
                <button
                    type="button"
                    onClick={scrollByAmountLeft}
                    disabled={canScrollPrev}
                    aria-label="Scroll to previous products"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 text-primary-700 transition-colors duration-200 hover:border-primary-800 hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-30"
                >
                <ChevronLeft
                    className="h-4 w-4"
                    strokeWidth={2}
                />
                </button>

                <button
                    type="button"
                    onClick={scrollByAmountRight}
                    disabled={canScrollNext}
                    aria-label="Scroll to next products"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 text-primary-700 transition-colors duration-200 hover:border-primary-800 hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-30"
                >
                    <ChevronRight
                        className="h-4 w-4"
                        strokeWidth={2}
                    />
                </button>
            </div>
        </div>
    </div>
  )
}
