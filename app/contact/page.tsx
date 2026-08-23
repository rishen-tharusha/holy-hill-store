"use client";

import { body, display } from "@/utils/fonts/Fonts";
import ContactHero from "@/components/Contact/ContactHero";
import ContactMethods from "@/components/Contact/ContactMethods";
import FindUs from "@/components/Contact/FindUs";
import ContactInformartion from "@/components/Contact/ContactInformartion";

export default function ContactUsPage() {
    return (
        <div
            className={`${display.variable} ${body.variable} min-h-screen bg-base-50 font-(family-name:--font-body)`}
        >
            <ContactHero />
            <ContactMethods />
            <ContactInformartion />
            <FindUs />
        </div>
    );
}