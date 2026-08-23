import React from 'react'
import { MapPin, Navigation } from 'lucide-react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import { STORE_ADDRESS, MAPS_DIRECTIONS_URL } from '@/constants/Contact'

export default function AddressCard() {
    return (
        <div className="lg:col-span-2">
            <ScrollReveal type="fade-up">
                <div className="flex h-full flex-col justify-between rounded-2xl border border-primary-100 bg-base-50 p-8">
                    <div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600">
                            <MapPin className="h-5 w-5" strokeWidth={1.75} />
                        </div>
                        <h2 className="mt-6 font-(family-name:--font-display) text-2xl font-semibold text-primary-800">
                            Visit the store
                        </h2>
                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-500">
                            {STORE_ADDRESS}
                        </p>
                    </div>

                    <a
                        href={MAPS_DIRECTIONS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-primary-200 px-5 py-2.5 text-sm font-medium text-primary-700 transition-colors duration-200 hover:border-secondary-400 hover:text-secondary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400"
                    >
                        Get Directions
                        <Navigation className="h-4 w-4" strokeWidth={1.75} />
                    </a>
                </div>
            </ScrollReveal>
        </div>
    )
}
