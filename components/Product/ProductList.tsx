"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IProduct } from "@/constants/ProductList";
import { getCardWidth } from "@/utils/helpers/productUtils";
import ProductCard from "./ProductCard";
import ProductHeader from "./ProductHeader";

interface IProductListProps {
  products: IProduct[];
  eyebrow?: string;
  title?: string;
  viewAllHref?: string;
  isViewAllVisible?: boolean;
  id?: string;
}

export default function ProductList({
  products = [],
  eyebrow = "",
  title = "",
  viewAllHref = "",
  isViewAllVisible = false,
  id = ""
}: IProductListProps) {
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
      className="bg-base-50 py-6 sm:py-10 lg:py-8"
      id={id || undefined}
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
            productsLength={Number(products.length)}
            isViewAllVisible={isViewAllVisible}
        />

        {/* Carousel */}
        <div className="relative md:mt-10">
          {/* Edge fades */}
          {isViewAllVisible ? (
            <>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-2 bg-linear-to-r from-base-50 to-transparent sm:block"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-linear-to-l from-base-50 to-transparent sm:block"
              />
            </>
          ): null}

          <ul
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product) => (
              <li
                key={product.id}
                data-card
                className={`shrink-0 snap-start ${getCardWidth(products.length)}`}
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

