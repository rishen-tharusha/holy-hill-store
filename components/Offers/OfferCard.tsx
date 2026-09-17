"use client";

import Image from "next/image";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import { fraunces, inter } from "@/utils/fonts/Fonts";

export interface IOffer {
  id: string;
  image: string;
  alt: string;
  showDetails?: boolean;
  name?: string;
  price?: number;
  originalPrice?: number;
}

interface IOfferCardProps {
  offer: IOffer;
  index: number;
}

export default function OfferCard({ offer, index }: IOfferCardProps) {
  return (
    <ScrollReveal
      type={index % 3 === 0 ? "blur" : "fade-up"}
      delay={Math.min(index, 6) * 0.06}
      duration={0.9}
    >
      <article className="group relative aspect-4/5 w-full cursor-pointer overflow-hidden rounded-2xl border border-primary-100 bg-base-100">
        <Image
          src={offer.image}
          alt={offer.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-fill transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          loading="eager"
        />

        {offer.showDetails ? (
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary-900/90 via-primary-900/50 to-transparent p-4 pt-10 sm:p-5 sm:pt-12">
            <p
              className={`${fraunces.className} truncate text-sm italic text-base-50 sm:text-base`}
            >
              {offer.name}
            </p>

            <div className={`${inter.className} mt-1 flex items-center gap-2`}>
              <span className="text-sm font-semibold text-base-50">
                ${offer.price?.toFixed(2)}
              </span>

              {offer.originalPrice ? (
                <span className="text-xs text-base-300 line-through">
                  ${offer.originalPrice.toFixed(2)}
                </span>
              ) : null}
            </div>
          </div>
        ) : null}
      </article>
    </ScrollReveal>
  );
}