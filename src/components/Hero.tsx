import React, { useState } from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../data/siteConfig';
import { Calendar, Sparkles, ChevronDown, Heart, ShieldCheck, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Subtle low-intensity cursor parallax for decorative elements
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-24 flex flex-col justify-start lg:justify-center overflow-hidden bg-gradient-to-b from-[#FFFDFC] via-[#FFF5F7] to-[#FCECEF]"
    >
      {/* Layered Atmospheric Ambient Glows */}
      <div
        className="absolute top-12 left-1/4 w-[380px] h-[380px] rounded-full bg-[#F4C7D0]/35 blur-[75px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px)`
        }}
      />
      <div
        className="absolute bottom-16 right-1/4 w-[420px] h-[420px] rounded-full bg-[#E6CE8A]/18 blur-[85px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${-mouseOffset.x * 0.6}px, ${-mouseOffset.y * 0.6}px)`
        }}
      />

      {/* Decorative Gold Arcs & Rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
        <svg
          className="absolute -top-24 -right-24 w-[550px] h-[550px]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="250" cy="250" r="240" stroke="#C9A44C" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="250" cy="250" r="210" stroke="#E6CE8A" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2 sm:mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Typography & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#C9A44C]/35 backdrop-blur-md shadow-2xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D98296] animate-ping" />
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.24em] font-semibold text-[#8D6824] uppercase">
                {siteConfig.businessName} • Studio & Parlour
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight text-[#171315] leading-[1.1] mb-6">
              Glow with <br className="hidden sm:inline" />
              <span className="font-cormorant italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D98296] via-[#C96C83] to-[#A77A28]">
                Grace
              </span>
            </h1>

            {/* Supporting Tagline & Mission */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-[#655B5E] max-w-xl font-normal leading-relaxed mb-8">
              Beauty, elegance, and self-care — thoughtfully designed around you.
              Experience couture bridal styling, restorative hair therapies, and personalized botanical skin rituals.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#D98296] to-[#C96C83] hover:from-[#C96C83] hover:to-[#B55970] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-4 h-4" />
                Book An Appointment
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-[#8D6824] border border-[#C9A44C]/50 hover:border-[#C9A44C] bg-white/70 hover:bg-[#FFFDFC] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#C9A44C]" />
                Explore Services
              </a>
            </div>

            {/* Trust highlights below CTA */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-[#C9A44C]/20 w-full max-w-lg">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif text-lg sm:text-xl font-semibold text-[#171315]">100%</span>
                <span className="text-[11px] sm:text-xs text-[#8D8185] tracking-wide">Custom Consult</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif text-lg sm:text-xl font-semibold text-[#171315]">Premium</span>
                <span className="text-[11px] sm:text-xs text-[#8D8185] tracking-wide">Botanical Care</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif text-lg sm:text-xl font-semibold text-[#171315]">Certified</span>
                <span className="text-[11px] sm:text-xs text-[#8D8185] tracking-wide">Beauty Artisans</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Emblem, Imagery, and Floating Accents */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Background Aura */}
            <div className="relative w-full max-w-[420px] aspect-4/5 sm:aspect-square flex items-center justify-center">
              {/* Outer Decorative Rotating Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#C9A44C]/35 animate-[spin_45s_linear_infinite]" />
              <div className="absolute inset-3 rounded-full border border-[#E6CE8A]/30" />

              {/* Main Rounded Luxury Photo Card */}
              <div className="relative w-4/5 h-4/5 rounded-[36px] overflow-hidden shadow-xl border-2 border-white/80 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop"
                  alt="Thara Blooms Haute Beauty Model"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gentle Gradient Wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171315]/50 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/85 backdrop-blur-md border border-[#C9A44C]/25 text-center">
                  <span className="block font-serif text-sm font-medium text-[#171315]">
                    Thara Blooms Studio
                  </span>
                  <span className="block font-cormorant italic text-xs text-[#D98296]">
                    Where Elegance Blossoms
                  </span>
                </div>
              </div>

              {/* Floating Element 1: Brand Emblem Badge (Top Left) */}
              <div
                className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 rounded-full shadow-lg border border-[#C9A44C]/35 animate-soft-float"
                style={{
                  transform: `translate(${mouseOffset.x * -0.5}px, ${mouseOffset.y * -0.5}px)`
                }}
              >
                <Logo variant="short-logo" size="md" />
              </div>

              {/* Floating Element 2: Golden Butterfly & Flower Accent (Bottom Right) */}
              <div
                className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#EFA9B8]/50 animate-soft-float-delayed flex items-center gap-2.5"
                style={{
                  transform: `translate(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px)`
                }}
              >
                <div className="w-8 h-8 rounded-full bg-[#FFF7F8] flex items-center justify-center border border-[#F4C7D0]">
                  <Sparkles className="w-4 h-4 text-[#C9A44C]" />
                </div>
                <div>
                  <span className="block font-serif text-xs font-semibold text-[#171315]">Artisanal Glow</span>
                  <span className="block text-[10px] text-[#655B5E]">Tailored with Love</span>
                </div>
              </div>

              {/* Floating Element 3: Botanical Rose Petal Accent (Top Right) */}
              <div
                className="absolute top-12 -right-4 sm:-right-8 w-12 h-12 rounded-full bg-gradient-to-br from-[#FFFDFC] to-[#FCECEF] p-2.5 shadow-md border border-[#C9A44C]/20 flex items-center justify-center animate-soft-float"
                style={{
                  transform: `translate(${mouseOffset.x * 0.6}px, ${mouseOffset.y * 0.6}px)`
                }}
              >
                <Heart className="w-5 h-5 text-[#D98296] fill-[#D98296]/25" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#services"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#8D8185] hover:text-[#C9A44C] transition-colors group"
        aria-label="Scroll down to services"
      >
        <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-medium">
          Explore
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#D98296]" />
      </a>
    </section>
  );
};
