import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Logo } from './Logo';
import { Sparkles, Heart, Flower2, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#FFFDFC] overflow-hidden">
      {/* Soft Ambient Floral Blobs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#FCECEF]/45 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#E6CE8A]/15 blur-[70px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-[32px] overflow-hidden shadow-xl border border-[#C9A44C]/25 bg-white aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=900&auto=format&fit=crop"
                  alt="Thara Blooms Studio Interior"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171315]/45 via-transparent to-transparent" />

                {/* Floating caption pill on bottom-left, guaranteed zero collision */}
                <div className="absolute bottom-5 left-5 max-w-[210px] sm:max-w-[240px] p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#C9A44C]/35 shadow-lg z-10 text-left">
                  <span className="font-serif text-xs sm:text-sm text-[#110E10] font-semibold block leading-tight">
                    A Sanctuary for the Senses
                  </span>
                  <span className="font-cormorant italic text-xs text-[#C96C83] block mt-1 leading-snug">
                    Thoughtful hospitality in every ritual
                  </span>
                </div>
              </div>

              {/* Offset Overlapping Detail Frame */}
              <div className="hidden sm:block absolute -bottom-6 -right-4 md:-right-6 w-44 md:w-50 h-56 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 group">
                <img
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop"
                  alt="Botanical skincare detail"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Decorative Gold Seal */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFFDFC] to-[#FCECEF] p-1.5 shadow-md border border-[#C9A44C]/35 flex items-center justify-center">
                <Logo variant="short-logo" size="md" />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy & Pillars */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#C9A44C]" />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#A77A28]">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#171315] leading-[1.2]">
              Where beauty meets <br />
              <span className="font-cormorant italic font-normal text-[#D98296]">
                confidence.
              </span>
            </h2>

            <div className="flex gap-4 mt-6">
              {/* Decorative Gold Vertical Line */}
              <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-[#C9A44C] via-[#E6CE8A] to-transparent" />

              <div className="space-y-4 text-base sm:text-lg text-[#655B5E] leading-relaxed font-normal">
                <p>
                  At Thara Blooms, we believe true beauty is not about transformation into someone else,
                  but a gentle unfolding of the grace and radiance already within you.
                </p>
                <p className="text-sm sm:text-base text-[#8D8185]">
                  Our parlour is designed as an unhurried haven where modern cosmetology merges with
                  botanical gentleness. From bespoke pre-bridal rituals to everyday hair nourishment,
                  each appointment is a personalized self-care ceremony.
                </p>
              </div>
            </div>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
              <div className="p-4 rounded-2xl bg-[#FFF7F8] border border-[#C9A44C]/15">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#58745F]" />
                  <span className="font-serif text-sm font-semibold text-[#171315]">
                    Skin-First Approach
                  </span>
                </div>
                <p className="text-xs text-[#655B5E] mt-1.5 leading-relaxed">
                  Focusing on skin vitality and barrier health before applying artistry.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF7F8] border border-[#C9A44C]/15">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#58745F]" />
                  <span className="font-serif text-sm font-semibold text-[#171315]">
                    Unhurried Sessions
                  </span>
                </div>
                <p className="text-xs text-[#655B5E] mt-1.5 leading-relaxed">
                  Generous time buffers so you never feel rushed or processed.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF7F8] border border-[#C9A44C]/15">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#58745F]" />
                  <span className="font-serif text-sm font-semibold text-[#171315]">
                    Clean Formulations
                  </span>
                </div>
                <p className="text-xs text-[#655B5E] mt-1.5 leading-relaxed">
                  Selected botanical oils, cruelty-free cosmetics, and gentle actives.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF7F8] border border-[#C9A44C]/15">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#58745F]" />
                  <span className="font-serif text-sm font-semibold text-[#171315]">
                    Artisanal Mastery
                  </span>
                </div>
                <p className="text-xs text-[#655B5E] mt-1.5 leading-relaxed">
                  Continuous master-class training in current global beauty trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
