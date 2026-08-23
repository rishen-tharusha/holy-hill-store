import React from 'react'
import { CONTACT } from '@/constants/Contact';
import { QUICK_LINKS } from "@/constants/NavLinks";
import { SocialLink } from './SocialLink';
import { Mail, MessageCircle, Phone } from "lucide-react";
import { FacebookMark } from './SocialIcons/FacebookMark';

export default function SocialTabs() {
  return (
      <div className="mt-6 flex items-center gap-3">
          <SocialLink href={CONTACT.whatsappHref} label="Chat on WhatsApp">
            <MessageCircle className="h-4.5 w-4.5" strokeWidth={2} />
          </SocialLink>
          <SocialLink href={CONTACT.facebookHref} label="Visit our Facebook page">
            <FacebookMark className="h-7 w-7 mr-1" />
          </SocialLink>
          <SocialLink href={CONTACT.phoneHref} label="Call us">
            <Phone className="h-4.5 w-4.5" strokeWidth={2} />
          </SocialLink>
          <SocialLink href={`mailto:${CONTACT.email}`} label="Email us">
            <Mail className="h-4.5 w-4.5" strokeWidth={2} />
          </SocialLink>
      </div>
  )
}
