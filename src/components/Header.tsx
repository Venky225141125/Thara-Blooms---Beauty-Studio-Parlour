import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { siteConfig, getWhatsAppBookingUrl } from '../data/siteConfig';
import { Menu, X, Instagram, Calendar, Phone, Clock, ArrowRight, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2.5 bg-white/80 backdrop-blur-xl shadow-xs border-b border-[#C9A44C]/20'
            : 'py-4 md:py-5 bg-white/65 backdrop-blur-md border-b border-[#C9A44C]/12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center focus:outline-hidden group"
            aria-label="Thara Blooms Home"
          >
            {/* Mobile: Full brand logo with emblem & typography */}
            <div className="block sm:hidden">
              <Logo variant="long-logo" size="xs" className="h-8 xs:h-9 max-w-[170px] xs:max-w-[210px]" />
            </div>
            <div className="hidden sm:block">
              <Logo variant="long-logo" size="sm" />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Main navigation">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm font-medium tracking-wide text-[#655B5E] hover:text-[#171315] relative py-1 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D98296] to-[#C9A44C] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Instagram Link */}
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-[#655B5E] hover:text-[#C96C83] rounded-full border border-neutral-200/80 hover:border-[#F4C7D0] transition-colors"
              aria-label="Visit Thara Blooms on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* WhatsApp Direct Link */}
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wider text-[#58745F] rounded-full border border-[#58745F]/30 hover:bg-[#58745F]/10 transition-colors uppercase"
              aria-label="Chat on WhatsApp"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#58745F] animate-pulse" />
              WhatsApp
            </a>

            {/* Book Appointment CTA */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#D98296] to-[#C96C83] hover:from-[#C96C83] hover:to-[#B55970] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </button>
          </div>

          {/* Mobile & Tablet Quick Actions Cluster */}
          <div className="flex lg:hidden items-center gap-1.5 xs:gap-2">
            {/* Direct WhatsApp Quick Chat */}
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xs:flex items-center justify-center p-2 text-[#58745F] hover:text-[#3B5441] rounded-full border border-[#58745F]/25 bg-[#58745F]/5 active:scale-95 transition-all"
              aria-label="WhatsApp quick chat"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Compact Book Appointment CTA Pill */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="flex items-center gap-1.5 px-3 py-1.5 xs:px-3.5 xs:py-2 rounded-full text-[10.5px] xs:text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#D98296] to-[#C96C83] hover:from-[#C96C83] hover:to-[#B55970] shadow-xs active:scale-95 transition-all"
            >
              <Calendar className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
              <span>Book</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171315] hover:text-[#C96C83] rounded-xl hover:bg-[#FCECEF] transition-colors focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Elegant Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#FFFDFC]/98 backdrop-blur-2xl flex flex-col lg:hidden animate-in fade-in duration-200 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-[#F4C7D0]/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-[#E6CE8A]/20 blur-3xl pointer-events-none" />

          {/* Top Bar inside Overlay: Logo & Close Button */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-5 sm:px-6 py-4 bg-[#FFFDFC]/90 backdrop-blur-md border-b border-[#C9A44C]/15">
            <Logo variant="long-logo" size="xs" className="h-8 max-w-[170px]" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#171315] rounded-xl hover:bg-[#FCECEF] transition-colors focus:outline-hidden"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Inner Content with generous bottom padding so it is never cut off by MobileActionBar or screen edge */}
          <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-28 sm:pb-12 min-h-max space-y-8">
            {/* Top Logo and Navigation Links List */}
            <div className="flex flex-col space-y-4">
              {/* Stacked Emblem */}
              <div className="flex justify-center pb-2">
                <Logo variant="logo-top-text-bottom" size="sm" />
              </div>

              <span className="text-[10px] tracking-[0.26em] uppercase font-semibold text-[#A77A28]">
                Navigation
              </span>
              {navLinks.map(link => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left font-serif text-2xl sm:text-3xl text-[#171315] hover:text-[#C96C83] transition-colors py-1 flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A44C] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Footer Details */}
            <div className="border-t border-[#C9A44C]/20 pt-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#655B5E]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C9A44C]" />
                  <span>Mon – Sun (Open Daily)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C9A44C]" />
                  <span>{siteConfig.contact.displayPhone}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#C9A44C]/35 text-xs font-semibold uppercase tracking-wider text-[#171315] bg-white/70"
                >
                  <Instagram className="w-4 h-4 text-[#C96C83]" />
                  Instagram
                </a>
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#58745F]/40 text-xs font-semibold uppercase tracking-wider text-[#58745F] bg-[#58745F]/5"
                >
                  WhatsApp
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-full text-center text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#D98296] to-[#C96C83] shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
