import React, { useState } from 'react';
import { services, ServiceItem } from '../data/services';
import { SectionHeading } from './SectionHeading';
import { Clock, Check, Sparkles, ArrowRight } from 'lucide-react';

interface TreatmentsMenuProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const TreatmentsMenu: React.FC<TreatmentsMenuProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Bridal', 'Skincare', 'Hair', 'Makeup', 'Nails & Spa', 'Grooming'];

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section className="py-20 md:py-28 relative bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Treatment Menu"
          title="Beauty, Tailored to"
          italicWord="You"
          subtitle="Explore our complete suite of specialized treatments. Every session begins with a customized personal consultation."
        />

        {/* Category Pill Filter Bar */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-10 mb-14">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#171315] text-[#FFFDFC] shadow-sm'
                  : 'bg-[#FFF7F8] hover:bg-[#FCECEF] text-[#655B5E] border border-[#C9A44C]/25'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-[26px] bg-white border border-[#C9A44C]/20 shadow-xs hover:shadow-md transition-all duration-300 hover:border-[#D98296]/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest text-[#A77A28] uppercase">
                      {service.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#171315] mt-0.5">
                      {service.title}
                    </h3>
                  </div>

                  <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#FFF7F8] text-[#8D8185] border border-[#C9A44C]/20">
                    <Clock className="w-3 h-3 text-[#C9A44C]" />
                    {service.duration}
                  </span>
                </div>

                <p className="font-cormorant italic text-sm text-[#D98296] mt-1">
                  {service.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#655B5E] mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Treatment Highlights */}
                <div className="mt-4 pt-3 border-t border-[#C9A44C]/15 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.treatments.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-[#655B5E]">
                      <Sparkles className="w-3 h-3 text-[#C9A44C] shrink-0" />
                      <span className="truncate">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C9A44C]/15 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[#8D8185]">
                  Custom consultation included
                </span>
                <button
                  type="button"
                  onClick={() => onOpenBooking(service.title)}
                  className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8D6824] hover:text-white bg-[#FFF5F7] hover:bg-[#D98296] border border-[#C9A44C]/35 transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">Book Ritual</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
