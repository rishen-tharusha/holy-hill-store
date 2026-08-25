import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import { fraunces } from '@/utils/fonts/Fonts'
import { MapPin, ArrowRight } from 'lucide-react'

export default function Community() {
  return (
        <section className="bg-secondary-500">
            <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
                <ScrollReveal>
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                        <MapPin className="h-7 w-7 text-white" strokeWidth={1.75} />
                    </div>
                    <h2 className={`${fraunces.className} text-3xl text-white sm:text-4xl`}>
                        Proudly part of Holly Hill
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-white/90">
                        HollyHill Store isn&apos;t just somewhere to shop — it&apos;s
                        part of the neighbourhood. Every loaf, every coffee, every
                        parcel sent is in service of the community we call home.
                    </p>
                    <a
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-secondary-700 transition hover:bg-primary-700 hover:text-base-50"
                    >
                        Find our store
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </ScrollReveal>
            </div>
        </section>
  )
}
