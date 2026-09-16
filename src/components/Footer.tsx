import React from 'react';
import { Logo } from './Logo';
import { siteConfig, getWhatsAppBookingUrl } from '../data/siteConfig';
import { Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#171315] text-[#FBF7F5] pt-16 pb-24 md:pb-16 border-t border-[#C9A44C]/30 overflow-hidden">
      {/* Background Subtle Floral Aura */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#D98296]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <Logo isDark={true} />
            <p className="text-xs sm:text-sm text-[#8D8185] max-w-sm leading-relaxed mt-2 font-normal">
              {siteConfig.description}
            </p>
            <div className="pt-2">
              <span className="font-cormorant italic text-lg text-[#E6CE8A]">
                "{siteConfig.tagline}"
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#E6CE8A] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E0D0D5]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services & Treatments
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  The Studio Experience
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Reflections
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-4 space-y-3 text-xs text-[#E0D0D5]">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-[#E6CE8A] mb-4">
              Studio Parlour
            </h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C9A44C] shrink-0 mt-0.5" />
              <span>{siteConfig.contact.address}, {siteConfig.contact.city}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#C9A44C] shrink-0" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                {siteConfig.contact.displayPhone}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#C9A44C] shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="pt-3 flex items-center gap-3">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-[#C96C83]/30 border border-white/10 hover:border-[#C96C83] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#E6CE8A]" />
              </a>

              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#58745F]/30 border border-white/10 hover:border-[#58745F] text-[11px] text-[#E0D0D5] hover:text-white transition-colors"
              >
                WhatsApp Concierge
              </a>
            </div>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8D8185]">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#D98296] fill-[#D98296]" />
            <span>for timeless elegance</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
