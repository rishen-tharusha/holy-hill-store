"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DEFAULT_PRODUCTS, IProduct } from "@/constants/NewArrivals";
import ProductCard from "../Product/ProductCard";
import ProductHeader from "../Product/ProductHeader";

interface INewArrivalsProps {
  products?: IProduct[];
  eyebrow?: string;
  title?: string;
  viewAllHref?: string;
}

export default function NewArrivals({
  products = DEFAULT_PRODUCTS,
  eyebrow = "Just Landed",
  title = "New Arrivals",
  viewAllHref = "#shop",
}: INewArrivalsProps) {
  const trackRef = useRef<HTMLUListElement | null>(null);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;

    if (!el) return;

    setCanScrollPrev(el.scrollLeft > 8);

    setCanScrollNext(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 8
    );
  }, []);

  useEffect(() => {
    updateScrollState();

    const el = trackRef.current;

    if (!el) return;

    el.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByAmount = (direction: number) => {
    const el = trackRef.current;

    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-card]");

    const step = card
      ? card.getBoundingClientRect().width + 20
      : el.clientWidth * 0.8;

    el.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="new-arrivals-heading"
      className="bg-base-50 py-16 sm:py-20 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <ProductHeader 
            viewAllHref={viewAllHref}
            scrollByAmountLeft={() => scrollByAmount(-1)}
            scrollByAmountRight={() => scrollByAmount(1)}
            canScrollPrev={!canScrollPrev}
            canScrollNext={!canScrollNext}
            eyebrow={eyebrow}
            title={title}
        />

        {/* Carousel */}
        <div className="relative mt-10">
          {/* Edge fades */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-2 bg-linear-to-r from-base-50 to-transparent sm:block"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-linear-to-l from-base-50 to-transparent sm:block"
          />

          <ul
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product) => (
              <li
                key={product.id}
                data-card
                className="w-[68%] shrink-0 snap-start xs:w-[58%] sm:w-[42%] md:w-[31%] lg:w-[23.5%]"
              >
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

