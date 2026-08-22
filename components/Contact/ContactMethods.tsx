import React from 'react'
import { CONTACT_METHODS } from '@/constants/Contact'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import ContactCard from './ContactCard'

export default function ContactMethods() {
  return (
    <section className="px-6 pb-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_METHODS.map((method, i) => (
            <ScrollReveal key={method.id} type="fade-up" delay={i * 0.08}>
              <ContactCard method={method} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
