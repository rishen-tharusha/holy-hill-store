import React from 'react'
import { ArrowRight, Star, Truck, BadgeCheck } from 'lucide-react'
import { CATEGORIES, TRUST_POINTS } from "@/constants/Hero";

function Rating() {
  return (
    <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-secondary-500 text-secondary-500"
          />
        ))}
      </div>
      <p className="text-sm text-primary-500">
        <span className="font-semibold text-primary-800">Reliable service</span>{" "}
        whenever you need it
      </p>
    </div>
  )
}


function Category() {
  return (
    <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
      {CATEGORIES.map((cat) => (
        <a
          key={cat.label}
          href={cat.href}
          className="inline-flex items-center gap-2 rounded-full bg-base-600 px-4 py-2 text-sm text-primary-700 transition-colors duration-200 hover:bg-secondary-100 hover:text-secondary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500"
        >
          <cat.icon className="h-4 w-4 shrink-0" strokeWidth={2} />
          {cat.label}
        </a>
      ))}
    </div>
  )
}

export function RatingFloatingCard() {
  return (
    <div className="absolute -bottom-4 -left-2 flex items-center gap-3 rounded-2xl bg-base-50 p-3.5 shadow-xl shadow-primary-900/10 sm:-bottom-6 sm:-left-6 sm:p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-50">
        <BadgeCheck className="h-5 w-5 text-secondary-500" />
      </div>
      <div className="leading-tight gap-y-4">
        <p className="text-sm font-semibold text-primary-800">
          Quality Products
        </p>
        <p className="text-xs text-primary-400">Carefully selected for you</p>
      </div>
    </div>
  )
}

export function ShippingFloatingCard() {
  return (
    <div className="absolute -top-4 -right-2 flex items-center gap-3 rounded-2xl bg-base-50 p-3.5 shadow-xl shadow-primary-900/10 sm:-top-6 sm:-right-6 sm:p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-50">
        <Truck className="h-5 w-5 text-secondary-600" strokeWidth={2} />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-semibold text-primary-800">
          Fast Delivery
        </p>
        <p className="text-xs text-primary-400">Your order, on its way.</p>
      </div>
    </div>
  )
}

export function TrustStrips() {
  return (
    <section className="border-y border-primary-100 bg-base-600">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-10 sm:grid-cols-4 sm:px-8 lg:px-10">
        {TRUST_POINTS.map((point) => (
          <div
            key={point.label}
            className="flex flex-col items-center gap-2.5 text-center sm:flex-row sm:gap-3 sm:text-left"
          >
            <point.icon
              className="h-5 w-5 shrink-0 text-secondary-600"
              strokeWidth={2}
            />
            <span className="text-sm font-medium text-primary-700">
              {point.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Hero() {
    return (
        <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-700">
                Holy Hill Premier
            </span>

            <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-primary-800 sm:text-5xl lg:text-6xl">
                Everything you need,
                <br />
                all in one place
            </h1>

            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-primary-500 lg:mx-0">
                Discover thoughtfully selected products, quality essentials, and everyday
                favorites — all in one place.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                    href="/offers"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-800 px-7 py-3.5 text-sm font-medium text-base-50 transition-colors duration-300 hover:bg-secondary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 sm:w-auto"
                >
                    View Monthly Offers
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </a>
                <a
                    href="/about"
                    className="inline-flex w-full items-center justify-center rounded-full border border-primary-200 px-7 py-3.5 text-sm font-medium text-primary-700 transition-colors duration-300 hover:border-primary-800 hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 sm:w-auto"
                >
                    Our Story
                </a>
            </div>

            <Rating />

            <Category />
        </div>
    )
}
