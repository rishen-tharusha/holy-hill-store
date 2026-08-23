import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import { departments } from '@/constants/About'
import { fraunces } from '@/utils/fonts/Fonts'

export default function Departments() {
  return (
        <section id="departments" className="scroll-mt-24 bg-base-600">
            <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
                <ScrollReveal>
                    <span className="text-sm font-semibold tracking-[0.2em] text-secondary-600">
                        AROUND THE STORE
                    </span>
                    <h2 className={`font-serif mt-4 text-3xl text-primary-700 sm:text-4xl`}>
                        Every aisle has something good
                    </h2>
                    <p className="mt-4 text-primary-500">
                        Discover what makes each section of HollyHill Store special.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                    <div className="relative mt-14 rounded-4xl border-4 border-primary-700 bg-white p-4 shadow-xl sm:p-8">
                        <span className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full bg-primary-700" />
                        <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full bg-primary-700" />
                        <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 rounded-full bg-primary-700" />
                        <span className="absolute -bottom-1.5 -right-1.5 h-3 w-3 rounded-full bg-primary-700" />

                        <div className="divide-y divide-base-700">
                            {departments.map((dept) => {
                                const Icon = dept.icon
                                return (
                                    <div
                                        key={dept.number}
                                        className="group flex flex-col gap-6 rounded-xl px-2 py-6 transition hover:bg-base-500 my-2 sm:flex-row sm:items-center sm:gap-6 sm:px-4"
                                    >
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary-50 text-secondary-600 transition group-hover:bg-secondary-500 group-hover:text-white">
                                            <Icon className="h-7 w-7" strokeWidth={1.75} />
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold tracking-[0.2em] text-secondary-600">
                                                AISLE {dept.number} — {dept.tag.toUpperCase()}
                                            </span>
                                            <h3 className={`${fraunces.className} mt-1 text-lg text-primary-700 sm:text-xl`}>
                                                {dept.title}
                                            </h3>
                                            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-primary-500 sm:text-base">
                                                {dept.desc}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
  )
}
