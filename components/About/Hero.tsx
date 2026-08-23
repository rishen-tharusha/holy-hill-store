import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import { quickFacts, heroTiles } from '@/constants/About'
import { ArrowRight } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <ScrollReveal>
                    <div className="mb-6 inline-flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary-500" />
                        <span className="text-sm font-semibold tracking-[0.2em] text-secondary-600">
                            PORTSMOUTH&apos;S LOCAL FAVOURITE
                        </span>
                    </div>
                    <h1
                        className={`font-serif text-4xl leading-[1.1] text-primary-700 sm:text-5xl lg:text-6xl`}
                    >
                        Your corner of Portsmouth, done properly.
                    </h1>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-500">
                        HollyHill Store is a family-run shop stacked with fresh bakes,
                        barista coffee and everything in between — because your
                        favourites should always be close to home.
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <a
                            href="#departments"
                            className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-secondary-700"
                        >
                            Explore our departments
                            <ArrowRight className="h-4 w-4" />
                        </a>
                        <a
                            href="#mission"
                            className="inline-flex items-center gap-2 rounded-full border border-primary-200 px-6 py-3 text-sm font-semibold text-primary-700 transition hover:border-primary-400 hover:bg-base-600"
                        >
                            Our mission
                        </a>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-3">
                        {quickFacts.map((fact) => (
                            <span
                                key={fact}
                                className="rounded-full border border-base-800 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-primary-600"
                            >
                                {fact}
                            </span>
                        ))}
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                    <div className="grid grid-cols-2 gap-4 lg:h-130 lg:grid-cols-4 lg:grid-rows-3">
                        {heroTiles.map((tile, i) => {
                            const Icon = tile.icon
                            const mobileSpan = i === heroTiles.length - 1 ? 'col-span-2' : 'col-span-1'
                            return (
                            <div
                                key={tile.label}
                                className={`${mobileSpan} row-span-1 ${tile.span} ${tile.bg} ${tile.text} flex min-h-27.5 flex-col justify-between rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
                            >
                                <Icon className={`h-7 w-7 ${tile.iconColor}`} strokeWidth={1.75} />
                                <span className="text-sm font-semibold">{tile.label}</span>
                            </div>
                            )
                        })}
                    </div>
                </ScrollReveal>
            </div>
        </div>
    </section>
  )
}
