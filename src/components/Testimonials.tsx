import React from 'react';
import { testimonials } from '../data/testimonials';
import { SectionHeading } from './SectionHeading';
import { Star, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative bg-[#FFF7F8] border-t border-[#C9A44C]/18 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-[#F8DDE3]/40 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Client Reflections"
          title="Loved by Our"
          italicWord="Patrons"
          subtitle="Real reflections from guests who trusted Thara Blooms for life's precious milestones and daily rituals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {testimonials.map(item => (
            <div
              key={item.id}
              className="relative p-7 rounded-[28px] bg-white/90 backdrop-blur-md border border-[#C9A44C]/25 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Floral / Butterfly Accent Watermark */}
              <div className="absolute top-5 right-5 opacity-40">
                <Sparkles className="w-5 h-5 text-[#C9A44C]" />
              </div>

              <div>
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A44C] text-[#C9A44C]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-cormorant italic text-base sm:text-lg text-[#171315] leading-relaxed">
                  "{item.quote}"
                </p>

                {/* Service Tag */}
                <div className="mt-4 inline-block px-2.5 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-[#FFF7F8] text-[#A77A28] border border-[#C9A44C]/20">
                  {item.serviceReceived}
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-[#C9A44C]/15 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#171315]">
                    {item.author}
                  </h4>
                  <span className="text-xs text-[#8D8185]">
                    {item.role}
                  </span>
                </div>
                <span className="text-[10px] text-[#8D8185] tracking-wide">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
