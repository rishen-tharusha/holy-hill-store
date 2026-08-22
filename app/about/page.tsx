'use client'

import { inter } from '@/utils/fonts/Fonts'
import AboutHero from '@/components/About/Hero'
import Mission from '@/components/About/Mission'
import WhyUs from '@/components/About/WhyUs'
import Departments from '@/components/About/Departments'
import Community from '@/components/About/Community'

export default function AboutPage() {
  return (
    <div className={`${inter.className} min-h-screen bg-base-50`}>
        {/* Hero */}
        <AboutHero />      

        {/* Mission */}
        <Mission />

        {/* Why choose us */}
        <WhyUs />

        {/* Departments — the store directory board */}
        <Departments />

        {/* Community CTA */}
        <Community />
    </div>
  )
}