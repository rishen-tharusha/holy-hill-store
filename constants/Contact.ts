import { Phone, Mail, MessageCircle, type LucideIcon } from "lucide-react";
import { FacebookMark } from "@/components/Social/SocialIcons/FacebookMark";
import type { ComponentType } from "react";

export const CONTACT = {
  phoneDisplay: "+44 787 952 7577",
  phoneHref: "https://chat.whatsapp.com/LVrhsOf56zBGGgXQ6gtNBF",
  email: "hollyhillstore@gmail.com",
  whatsappHref: "https://wa.me/447879527577",
  facebookHref: "https://www.facebook.com/share/1CYd9hYct1/?mibextid=wwXIfr",
};

export interface IContactMethod {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: LucideIcon | ComponentType<{ className?: string }>;
  copyValue?: string;
}

export const CONTACT_METHODS: IContactMethod[] = [
  {
    id: "phone",
    label: "Call Us",
    value: "+44 7879 527577",
    href: "tel:+447879527577",
    icon: Phone,
    copyValue: "+44 7879 527577",
  },
  {
    id: "email",
    label: "Email Us",
    value: "hollyhillstore@gmail.com",
    href: "mailto:hollyhillstore@gmail.com",
    icon: Mail,
    copyValue: "hollyhillstore@gmail.com",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/447879527577",
    icon: MessageCircle,
  },
  {
    id: "facebook",
    label: "Facebook",
    value: "https://www.facebook.com/share/1CYd9hYct1/?mibextid=wwXIfr",
    href: "https://www.facebook.com/share/1CYd9hYct1/?mibextid=wwXIfr",
    icon: FacebookMark,
  },
];

export const STORE_ADDRESS = "Holly Hill CONVENIENCE STORE, 66-68 Barnes Ln, Sarisbury Green, Southampton SO31 7BT, United Kingdom";

export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  STORE_ADDRESS
)}&output=embed`;

export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  STORE_ADDRESS
)}`;