import React from 'react'
import { Clock } from 'lucide-react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import { useStoreStatus } from "@/utils/hooks/useStoreStatus";

export default function BusinessHours() {
    const status = useStoreStatus();
    return (
        <div className="lg:col-span-3">
            <ScrollReveal type="fade-up" delay={0.1}>
                <div className="relative h-full overflow-hidden rounded-2xl bg-primary-800 p-8 text-base-50">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary-500/10" />

                <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-base-50/10">
                        <Clock className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-(family-name:--font-display) text-2xl font-semibold">
                        Business Hours
                    </h2>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-base-50/10 px-3 py-1.5">
                    <span
                        className={`h-2 w-2 rounded-full ${
                        status.isOpen
                            ? "bg-secondary-400 animate-pulse"
                            : "bg-primary-400"
                        }`}
                    />
                    <span className="text-xs font-medium tracking-wide">
                        {status.label}
                    </span>
                    </div>
                </div>

                <div className="relative z-10 mt-8 space-y-4">
                    <div className="flex items-baseline justify-between border-b border-dashed border-base-50/20 pb-3">
                    <span className="text-sm font-medium uppercase tracking-wider text-base-50/70">
                        Weekdays
                        <span className="ml-2 text-xs font-normal normal-case text-base-50/40">
                        Mon — Fri
                        </span>
                    </span>
                    <span className="font-(family-name:--font-display) text-lg">
                        6:00 AM - 10:00 PM
                    </span>
                    </div>

                    <div className="flex items-baseline justify-between pb-1">
                    <span className="text-sm font-medium uppercase tracking-wider text-base-50/70">
                        Weekends
                        <span className="ml-2 text-xs font-normal normal-case text-base-50/40">
                        Sat — Sun
                        </span>
                    </span>
                    <span className="font-(family-name:--font-display) text-lg">
                        6:00 AM - 10:00 PM
                    </span>
                    </div>
                </div>
                </div>
            </ScrollReveal>
        </div>
    )
}
