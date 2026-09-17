import React from 'react';
import { siteConfig, getWhatsAppBookingUrl } from '../data/siteConfig';
import { SectionHeading } from './SectionHeading';
import { Phone, Mail, MapPin, Clock, MessageSquare, Instagram, Calendar, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  onOpenBooking: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#FFF7F8] border-t border-[#C9A44C]/18">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-[#FCECEF]/60 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Connect & Reserve"
          title="Let's Make You Feel"
          italicWord="Beautiful"
          subtitle="Reach out directly for custom bridal bookings, hair consultations, or quick queries. We are delighted to assist you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-16 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-md border border-[#C9A44C]/25 shadow-sm space-y-8">
            <h3 className="font-serif text-2xl font-medium text-[#171315]">
              Studio Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FFF5F7] border border-[#F4C7D0] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#C96C83]" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-wider text-[#A77A28] uppercase">
                    Telephone
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="block font-serif text-base text-[#171315] hover:text-[#C96C83] transition-colors mt-0.5"
                  >
                    {siteConfig.contact.displayPhone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FFF5F7] border border-[#F4C7D0] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#C96C83]" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-wider text-[#A77A28] uppercase">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="block text-sm text-[#171315] hover:text-[#C96C83] transition-colors mt-0.5"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FFF5F7] border border-[#F4C7D0] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#C96C83]" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-wider text-[#A77A28] uppercase">
                    Studio Location
                  </span>
                  <p className="text-sm text-[#171315] mt-0.5 leading-relaxed font-medium">
                    {siteConfig.contact.address}, {siteConfig.contact.city}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${siteConfig.contact.address}, ${siteConfig.contact.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#8D6824] hover:text-[#C96C83] mt-1 group"
                  >
                    <span>Get Directions on Map</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FFF5F7] border border-[#F4C7D0] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#C96C83]" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-wider text-[#A77A28] uppercase">
                    Studio Hours
                  </span>
                  <div className="text-xs text-[#655B5E] mt-0.5 space-y-0.5">
                    {siteConfig.hours.map((h, idx) => (
                      <div key={idx} className="flex flex-col justify-between gap-2">
                        <span className="font-medium text-[#171315]">{h.day}:</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Action Buttons */}
            <div className="pt-6 border-t border-[#C9A44C]/20 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="py-3 px-4 rounded-full border border-[#C9A44C]/35 bg-white text-xs font-semibold uppercase tracking-wider text-[#171315] hover:bg-[#FFFDFC] hover:border-[#C9A44C] flex items-center justify-center gap-1.5 transition-all shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A44C]" />
                Call
              </a>

              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-full border border-[#58745F]/35 bg-[#58745F]/5 text-xs font-semibold uppercase tracking-wider text-[#58745F] hover:bg-[#58745F]/15 flex items-center justify-center gap-1.5 transition-all shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#58745F]" />
                WhatsApp
              </a>

              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-full border border-[#D98296]/40 bg-[#FFF5F7] text-xs font-semibold uppercase tracking-wider text-[#C96C83] hover:bg-[#FCECEF] flex items-center justify-center gap-1.5 transition-all shadow-2xs"
              >
                <Instagram className="w-3.5 h-3.5" />
                Instagram
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="py-3 px-4 rounded-full bg-gradient-to-r from-[#D98296] to-[#C96C83] text-xs font-semibold uppercase tracking-wider text-white hover:opacity-95 flex items-center justify-center gap-1.5 transition-all shadow-2xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book
              </button>
            </div>
          </div>

          {/* Right Card: Quick Consultation Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-[#FFFDFC] via-[#FFF7F8] to-[#FCECEF] border border-[#C9A44C]/30 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block text-[10px] font-semibold tracking-widest text-[#A77A28] uppercase mb-2">
                Concierge Care
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#171315]">
                Plan Your Glow
              </h3>
              <p className="text-xs sm:text-sm text-[#655B5E] mt-3 leading-relaxed">
                Whether you desire an all-day bridal package, a restorative hair spa session,
                or a luminous facial before an evening gala, we'd be honored to craft your schedule.
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-white/80 border border-[#C9A44C]/20 text-xs text-[#655B5E] space-y-2">
                <div className="flex items-center gap-2 text-[#171315] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#58745F]" />
                  Instant WhatsApp Booking Available
                </div>
                <p>
                  No complicated forms. Click below to initiate a private chat with our appointment concierge.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98296] to-[#C96C83] hover:from-[#C96C83] hover:to-[#B55970] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2.5 text-center leading-normal"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span className="text-center">Reserve With Appointment Concierge</span>
              </button>

              <a
                href={getWhatsAppBookingUrl("Hi Thara Blooms, I have a quick question about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-[#58745F] border border-[#58745F]/35 bg-white hover:bg-[#58745F]/5 transition-all flex items-center justify-center gap-2.5 text-center leading-normal"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span className="text-center">Direct Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
