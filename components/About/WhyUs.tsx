import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import { fraunces } from '@/utils/fonts/Fonts'
import { whyUs } from '@/constants/About'

export default function WhyUs() {
  return (
    <section className="bg-base-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <ScrollReveal>
                <span className="text-sm font-semibold tracking-[0.2em] text-secondary-600">
                    WHY HOLLYHILL
                </span>
                <h2 className={`${fraunces.className} mt-4 text-3xl text-primary-700 sm:text-4xl`}>
                    What keeps regulars coming back
                </h2>
            </ScrollReveal>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {whyUs.map((item, i) => {
                    const Icon = item.icon
                    return (
                        <ScrollReveal key={item.title} delay={i * 0.08}>
                            <div className="h-full rounded-2xl border border-base-700 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <div className="mb-3 h-1 w-10 border-t-4 border-dashed border-secondary-200" />
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-50 text-secondary-600">
                                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                                </div>
                                <h3 className={`${fraunces.className} text-xl font-semibold text-primary-700`}>
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-primary-500">{item.desc}</p>
                            </div>
                        </ScrollReveal>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
