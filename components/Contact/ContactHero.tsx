import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-24 sm:pt-32 lg:px-12">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-secondary-100 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 top-40 h-56 w-56 rounded-full bg-primary-100 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <ScrollReveal type="fade-up">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-secondary-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-600">
              Contact Us
            </span>
            <span className="h-px w-8 bg-secondary-400" />
          </div>
        </ScrollReveal>

        <ScrollReveal type="fade-up" delay={0.1}>
          <h1 className="font-(family-name:--font-display) text-4xl font-semibold leading-tight text-primary-800 sm:text-5xl lg:text-6xl">
            However you like to reach us,
            <span className="text-secondary-500"> we&apos;re listening.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal type="fade-up" delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-500 sm:text-lg">
            Questions about an order, a product, or just want to say hello?
            Pick whatever feels easiest — we usually reply within the hours.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
