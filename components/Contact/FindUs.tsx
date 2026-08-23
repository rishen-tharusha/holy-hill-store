import React from 'react'
import { MapPin } from 'lucide-react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import SectionLabel from './SectionLabel'
import { STORE_ADDRESS, MAPS_EMBED_SRC } from '@/constants/Contact'

export default function FindUs() {
  return (
    <section className="px-6 pb-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal type="fade-up">
          <SectionLabel>Find Us</SectionLabel>
        </ScrollReveal>

        <ScrollReveal type="fade-up" delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-primary-100 bg-base-50 p-2 shadow-sm">
            <div className="absolute left-6 top-6 z-10 hidden rounded-full bg-base-50/95 px-4 py-2 shadow-md backdrop-blur sm:flex sm:items-center sm:gap-2">
              <MapPin className="h-4 w-4 text-secondary-600" strokeWidth={2} />
              <span className="text-sm font-medium text-primary-700">
                {STORE_ADDRESS}
              </span>
            </div>

            <iframe
              title="Store location on Google Maps"
              src={MAPS_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-95 w-full rounded-2xl grayscale-15 sm:h-110"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
