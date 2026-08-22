import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import { fraunces } from '@/utils/fonts/Fonts'

export default function Mission() {
  return (
        <section id="mission" className="scroll-mt-24 bg-base-600">
            <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
                <ScrollReveal>
                    <span className="text-sm font-semibold tracking-[0.2em] text-secondary-600">
                        OUR MISSION
                    </span>
                    <p
                        className={`${fraunces.className} mt-6 text-2xl italic leading-snug text-primary-700 sm:text-3xl lg:text-4xl`}
                    >
                        &ldquo;To provide our community with the finest quality products
                        at unbeatable prices, while delivering exceptional customer
                        service with a smile — every single day.&rdquo;
                    </p>
                    <span className="mx-auto mt-8 block h-1 w-16 rounded-full bg-secondary-500" />
                </ScrollReveal>
            </div>
        </section>
  )
}
