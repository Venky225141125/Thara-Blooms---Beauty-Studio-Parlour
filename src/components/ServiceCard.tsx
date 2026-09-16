import React from 'react';
import { ServiceItem } from '../data/services';
import { Clock, Sparkles, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  isActive?: boolean;
  onBook: (serviceTitle: string) => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isActive = false,
  onBook,
  className = ''
}) => {
  return (
    <div
      className={`relative w-full h-full rounded-[28px] sm:rounded-[32px] overflow-hidden select-none group border transition-all duration-500 bg-[#171315] ${
        isActive
          ? 'border-[#C9A44C]/80 shadow-[0_24px_50px_-10px_rgba(201,164,76,0.35),0_18px_35px_-8px_rgba(17,14,16,0.25)] ring-1 ring-[#E6CE8A]/50'
          : 'border-[#C9A44C]/25 shadow-lg hover:border-[#C9A44C]/50'
      } ${className}`}
    >
      {/* Background Image (Full-bleed covering the entire card) */}
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        referrerPolicy="no-referrer"
        className={`w-full h-full object-cover object-center transition-all duration-700 ${
          isActive
            ? 'scale-105 brightness-[0.98]'
            : 'scale-100 brightness-[0.78] group-hover:brightness-[0.9]'
        }`}
      />

      {/* Atmospheric Scrim Gradients (ensures typography is always crisp and luxurious) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isActive
            ? 'bg-gradient-to-t from-[#110E10]/95 via-[#110E10]/40 to-black/15'
            : 'bg-gradient-to-t from-[#110E10]/90 via-[#110E10]/50 to-black/25'
        }`}
      />

      {/* Top Floating Category & Duration Pills */}
      <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between z-10">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] uppercase font-semibold tracking-wider backdrop-blur-md border transition-all ${
            isActive
              ? 'bg-[#110E10]/75 text-[#E6CE8A] border-[#C9A44C]/50 shadow-xs'
              : 'bg-black/55 text-[#F8DDE3]/90 border-white/15'
          }`}
        >
          <Sparkles className="w-3 h-3 text-[#D98296]" />
          {service.category}
        </span>

        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-black/60 backdrop-blur-md text-[#F8DDE3] border border-white/15">
          <Clock className="w-3 h-3 text-[#E6CE8A]" />
          {service.duration}
        </span>
      </div>

      {/* Center & Lower Editorial Typography */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex flex-col justify-end z-10 text-left">
        {/* Eyebrow label */}
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-[#E6CE8A] opacity-95 mb-1.5 block">
          {service.category} RITUAL
        </span>

        {/* Large Prominent Title */}
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-semibold text-white tracking-tight leading-tight drop-shadow-md">
          {service.title}
        </h3>

        {/* Tagline / Subtitle */}
        <p className="font-cormorant italic text-sm sm:text-base text-[#FCECEF] mt-1 line-clamp-1">
          {service.tagline}
        </p>

        {/* Expanded Description & Action on Active Card */}
        {isActive && (
          <div className="mt-4 pt-3.5 border-t border-white/20 animate-in fade-in duration-300">
            <p className="text-xs sm:text-sm text-[#F0E6E8] leading-relaxed line-clamp-2 mb-4 font-normal">
              {service.description}
            </p>

            <button
              type="button"
              onClick={e => {
                e.stopPropagation();
                onBook(service.title);
              }}
              className="w-full py-3 px-4 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#D98296] via-[#C96C83] to-[#B55970] hover:brightness-110 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
            >
              <span>Reserve This Ritual</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Inactive Card Click Indicator */}
        {!isActive && (
          <div className="mt-2 text-[10px] sm:text-[11px] text-[#E6CE8A] uppercase tracking-widest font-semibold opacity-85 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            <span>Tap to View</span>
            <span className="text-xs">→</span>
          </div>
        )}
      </div>
    </div>
  );
};
