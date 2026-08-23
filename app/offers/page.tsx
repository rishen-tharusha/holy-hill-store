"use client";

import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { fraunces, inter } from "@/utils/fonts/Fonts";
import OfferCard from "@/components/Offers/OfferCard";
import { OFFERS, MONTHS } from "@/constants/Offers";

export default function MonthlyOffersPage() {
  const now = useMemo(() => new Date(), []);
  const [monthIndex] = useState<number>(now.getMonth());

  return (
    <div className={`${inter.className} min-h-screen bg-base-50`}>
      {/* Hero */}
      <section className="border-b border-primary-100 px-6 pb-10 pt-16 sm:px-10 sm:pt-20 lg:px-16">
        <ScrollReveal type="fade-down" duration={0.9}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-secondary-600">
                <Sparkles className="h-3.5 w-3.5" />
                {MONTHS[monthIndex]}
              </p>
              <h1
                className={`${fraunces.className} mt-4 text-5xl italic leading-none text-primary-800 sm:text-6xl lg:text-7xl`}
              >
                Monthly Offers
                <span className="text-secondary-500">.</span>
              </h1>
              <p className="mt-4 max-w-md text-sm text-primary-500 sm:text-base">
                A curated edit of this month&apos;s best prices — refreshed
                every four weeks, gone when the month ends.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Offer grid */}
      <section className="px-6 py-10 sm:px-10 lg:px-16">
        {OFFERS.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {OFFERS.map((offer, index) => (
              <OfferCard key={offer.id} offer={offer} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-primary-200 py-20 text-center">
            <p className={`${fraunces.className} text-xl italic text-primary-700`}>
              Nothing here yet
            </p>
            <p className="text-sm text-primary-500">
              Try a different category — new offers land every month.
            </p>
          </div>
        )}
      </section>

      {/* CTA banner */}
      <section className="px-6 pb-16 sm:px-10 lg:px-16">
        <ScrollReveal type="scale-up" duration={0.9}>
          <div className="relative overflow-hidden rounded-3xl bg-primary-800 px-8 py-12 text-center sm:px-16 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary-600/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-secondary-500/20 blur-3xl"
            />
            <p
              className={`${fraunces.className} relative text-3xl italic text-base-50 sm:text-4xl`}
            >
              Every offer, in one place.
            </p>
            <p className="relative mx-auto mt-3 max-w-md text-sm text-primary-300">
              Browse the full catalog and filter by category, price, or what
              just dropped.
            </p>
            <p className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-secondary-500 px-6 py-3 text-sm font-semibold text-base-50">
              Visit our shop
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}