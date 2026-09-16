import React from 'react';
import { BorderGlow } from './BorderGlow';
import { ServiceItem } from '../data/services';
import { Clock, Check, Sparkles, ArrowUpRight } from 'lucide-react';

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
    <BorderGlow
      edgeSensitivity={28}
      glowColor="345 65 78"
      backgroundColor="#FFFDFC"
      borderRadius={28}
      glowRadius={30}
      glowIntensity={isActive ? 0.8 : 0.45}
      coneSpread={22}
      animated={false}
      colors={["#EFA9B8", "#E6CE8A", "#F7CDD5"]}
      className={`h-full transition-all duration-300 ${className}`}
    >
      <div className="flex flex-col h-full">
        {/* Card Header Image with Category Badge */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />

          {/* Soft Gradient Mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171315]/40 via-transparent to-black/10" />

          {/* Category Tag */}
          <div className="absolute top-3.5 left-3.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-white/90 backdrop-blur-md text-[#A77A28] border border-[#C9A44C]/30 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D98296]" />
              {service.category}
            </span>
          </div>

          {/* Duration Pill */}
          <div className="absolute bottom-3.5 right-3.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/60 backdrop-blur-md text-white">
              <Clock className="w-3 h-3 text-[#E6CE8A]" />
              {service.duration}
            </span>
          </div>
        </div>

        {/* Card Content Area */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-gradient-to-b from-[#FFFDFC] to-[#FFF7F8]">
          <div>
            {/* Title */}
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#171315] leading-snug group-hover:text-[#C96C83] transition-colors">
              {service.title}
            </h3>

            {/* Tagline */}
            <p className="font-cormorant italic text-sm text-[#D98296] mt-1 font-normal">
              {service.tagline}
            </p>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-[#655B5E] mt-3 leading-relaxed line-clamp-3">
              {service.description}
            </p>

            {/* Signature Treatments Checklist */}
            <div className="mt-4 pt-3.5 border-t border-[#C9A44C]/15 space-y-1.5">
              {service.treatments.slice(0, 3).map((treatment, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#655B5E]">
                  <Check className="w-3.5 h-3.5 text-[#58745F] shrink-0" />
                  <span className="truncate">{treatment}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card Action Button */}
          <div className="mt-6 pt-2">
            <button
              type="button"
              onClick={() => onBook(service.title)}
              className={`w-full py-3 px-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                isActive
                  ? 'bg-gradient-to-r from-[#D98296] to-[#C96C83] text-white shadow-md hover:brightness-105'
                  : 'bg-white hover:bg-[#FCECEF] text-[#8D6824] border border-[#C9A44C]/40 hover:border-[#C9A44C]'
              }`}
            >
              <span>Reserve Ritual</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </BorderGlow>
  );
};
