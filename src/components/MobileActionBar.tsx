import React from 'react';
import { siteConfig, getWhatsAppBookingUrl } from '../data/siteConfig';
import { Instagram, MessageSquare, Calendar } from 'lucide-react';

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 block sm:hidden bg-white/92 backdrop-blur-xl border-t border-[#C9A44C]/25 shadow-lg px-4 py-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Instagram Button */}
        <a
          href={siteConfig.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[10px] font-semibold tracking-wider uppercase text-[#171315] hover:bg-[#FFF5F7] border border-[#C9A44C]/20 transition-colors"
        >
          <Instagram className="w-4 h-4 text-[#C96C83] mb-0.5" />
          <span>Instagram</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppBookingUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[10px] font-semibold tracking-wider uppercase text-[#58745F] bg-[#58745F]/8 border border-[#58745F]/25 hover:bg-[#58745F]/15 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#58745F] mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[10px] font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#D98296] to-[#C96C83] shadow-xs active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>Book</span>
        </button>
      </div>
    </aside>
  );
};
