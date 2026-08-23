import { useState } from "react";
import { IContactMethod } from "@/constants/Contact";
import { Check, Copy } from "lucide-react";

export default function ContactCard({ method }: { method: IContactMethod }) {
  const [copied, setCopied] = useState(false);
  const Icon = method.icon;

  const handleCopy = async (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <a
      href={method.href}
      target={method.href.startsWith("http") ? "_blank" : undefined}
      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-primary-100 bg-base-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary-200 hover:shadow-lg hover:shadow-secondary-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-secondary-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-700 text-base-50 transition-colors duration-300 group-hover:bg-secondary-500">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>

        {method.copyValue && (
          <button
            type="button"
            onClick={(e) => handleCopy(e, method.copyValue as string)}
            aria-label={`Copy ${method.label}`}
            className="flex h-8 w-8 items-center justify-center cursor-pointer rounded-full text-primary-400 opacity-0 transition-all duration-200 hover:bg-primary-50 hover:text-secondary-600 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400"
          >
            {copied ? (
              <Check className="h-4 w-4 text-secondary-600" strokeWidth={2} />
            ) : (
              <Copy className="h-4 w-4" strokeWidth={1.75} />
            )}
          </button>
        )}
      </div>

      <div className="relative z-10 mt-6">
        <p className="text-xs font-medium uppercase tracking-wider text-primary-400">
          {method.label}
        </p>
        <p className="mt-1.5 truncate text-lg font-semibold text-primary-800">
          {method.value}
        </p>
      </div>
    </a>
  );
}