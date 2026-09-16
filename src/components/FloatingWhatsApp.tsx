import React from 'react';
import { getWhatsAppBookingUrl } from '../data/siteConfig';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Contact Concierge"
      className="fixed right-5 sm:right-6 bottom-20 md:bottom-7 z-40 hidden sm:block"
    >
      <a
        href={getWhatsAppBookingUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#58745F] text-white shadow-xl hover:bg-[#475e4d] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80"
        aria-label="Chat directly on WhatsApp with Thara Blooms concierge"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full border-2 border-[#58745F]/50 animate-ping opacity-60 pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />

        {/* Hover Tooltip on Desktop */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#171315]/95 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-white/10 hidden md:block">
          Chat with Concierge
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#171315]/95" />
        </div>
      </a>
    </aside>
  );
};
