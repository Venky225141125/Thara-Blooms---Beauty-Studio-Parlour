import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Coffee, Compass, Sparkles, Smile, ArrowRight } from 'lucide-react';

interface ExperienceProps {
  onOpenBooking: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: "01",
      icon: Coffee,
      title: "Warm Welcome & Herbal Elixir",
      desc: "Step into our serene studio where chilled rose-hibiscus or warm jasmine infusion welcomes you into a tranquil mindset."
    },
    {
      step: "02",
      icon: Compass,
      title: "Attentive Personal Diagnostic",
      desc: "We analyze your skin undertones, lifestyle needs, and occasion lighting to customize formulations specifically for you."
    },
    {
      step: "03",
      icon: Sparkles,
      title: "The Botanical Beauty Ritual",
      desc: "Sink into plush comfort as certified artisans perform your treatment using soothing techniques and premium products."
    },
    {
      step: "04",
      icon: Smile,
      title: "Flawless Reveal & Home Guidance",
      desc: "Admire your natural radiance with mirror checks under daylight balanced lights, accompanied by personalized maintenance tips."
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#FFF7F8] border-y border-[#C9A44C]/18 overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#F8DDE3]/40 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-[#E6CE8A]/15 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="The Thara Blooms Ritual"
          title="A Gentle, Unhurried"
          italicWord="Experience"
          subtitle="From your first step into our studio to the radiant reveal, we craft every moment with genuine hospitality and care."
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-7 rounded-[26px] bg-white/80 backdrop-blur-md border border-[#C9A44C]/25 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 group"
              >
                {/* Step indicator watermark */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF5F7] border border-[#F4C7D0] flex items-center justify-center group-hover:bg-[#FCECEF] transition-colors">
                    <Icon className="w-6 h-6 text-[#C96C83]" />
                  </div>
                  <span className="font-serif text-3xl font-light text-[#C9A44C]/40 group-hover:text-[#C9A44C] transition-colors">
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-[#171315] leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#655B5E] mt-2.5 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C9A44C]/15 flex items-center text-xs font-semibold text-[#8D6824] uppercase tracking-wider">
                  <span>Step {item.step}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-[30px] bg-gradient-to-r from-white via-[#FFFDFC] to-white border border-[#C9A44C]/35 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#171315]">
              Ready to experience Thara Blooms?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#655B5E] mt-1">
              Personalized appointments available for styling, skincare, and bridal consultations.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="shrink-0 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98296] to-[#C96C83] hover:from-[#C96C83] hover:to-[#B55970] shadow-sm hover:shadow-md transition-all flex items-center gap-2"
          >
            <span>Reserve Your Slot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
