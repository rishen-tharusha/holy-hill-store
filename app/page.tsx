import Hero from "@/components/home/Hero";
import { RatingFloatingCard, ShippingFloatingCard, TrustStrips } from "@/components/home/Hero";
import ProductList from "@/components/Product/ProductList";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { EVERY_DAY_DEALS, NEW_ARRIVALS, MONTHLY_PROMOTIONS } from "@/constants/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-50">
      <section
        id="home"
        className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-105 w-105 rounded-full bg-secondary-200/40 blur-3xl sm:h-140 sm:w-140"
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <Hero />

          <div className="relative mx-2 sm:mx-4 lg:mx-0">
            <div className="relative overflow-hidden rounded-4xl bg-linear-to-b from-base-200 to-base-500 sm:rounded-[2.5rem]">
              <Image
                src="/images/hero/Hero-Logo-02.jpeg"
                alt="Featured collection"
                width={600}
                height={720}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <RatingFloatingCard />

            {/* <ShippingFloatingCard /> */}
          </div>
        </div>
      </section>

      <ScrollReveal type="fade-up" duration={1.6} delay={0.1}>
        <ProductList
          products={MONTHLY_PROMOTIONS}
          title="Monthly Promotions"
          eyebrow="Limited-Time Offers"
          isViewAllVisible
          viewAllHref="/offers"
        />
      </ScrollReveal>

      <ScrollReveal type="fade-up" duration={1.5} delay={0.15}>
        <ProductList
          products={EVERY_DAY_DEALS}
          title="Every Day Deals"
          eyebrow="Refreshed Daily"
          id="deals"
        />
      </ScrollReveal>

      <ScrollReveal type="fade-up" duration={1.5} delay={0.15}>
        <ProductList
          products={NEW_ARRIVALS}
          title="New Arrivals"
          eyebrow="Just Landed"
          id="arrivals"
        />
      </ScrollReveal>

      <TrustStrips />
    </div>
  );
}