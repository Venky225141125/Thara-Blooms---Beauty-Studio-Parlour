import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesCarousel } from './components/ServicesCarousel';
import { SectionHeading } from './components/SectionHeading';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { GallerySection } from './components/GallerySection';
import { TreatmentsMenu } from './components/TreatmentsMenu';
import { Testimonials } from './components/Testimonials';
import { InstagramSection } from './components/InstagramSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileActionBar } from './components/MobileActionBar';
import { BookingModal } from './components/BookingModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceTitle?: string) => {
    setPreselectedService(serviceTitle);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setPreselectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFC] text-[#171315] font-sans relative selection:bg-[#F4C7D0] selection:text-[#171315] overflow-x-hidden">
      {/* Premium Custom Curve Cursor for Desktop pointer */}
      <CustomCursor />

      {/* 1. Sticky Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* 2. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Trust / Introduction Strip */}
        <TrustStrip />

        {/* 4. Services Section (Curved Horizontal Carousel + BorderGlow Cards) */}
        <section id="services" className="py-20 md:py-28 relative bg-[#FFFDFC] overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#FCECEF]/40 blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-4">
            <SectionHeading
              eyebrow="Signature Offerings"
              title="Beauty, Tailored to"
              italicWord="You"
              subtitle="Curated treatments blending modern technique with restorative touch. Scroll horizontally to explore our signature rituals."
            />
          </div>

          <ServicesCarousel onOpenBooking={handleOpenBooking} />
        </section>

        {/* 5. About Thara Blooms Section */}
        <About />

        {/* 6. Signature Experience Section */}
        <Experience onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Dome Gallery (Dark Editorial Contrast Section) */}
        <GallerySection />

        {/* 8. Beauty Services / Treatments Menu */}
        <TreatmentsMenu onOpenBooking={handleOpenBooking} />

        {/* 9. Testimonials Section */}
        <Testimonials />

        {/* 10. Instagram Section */}
        <InstagramSection />

        {/* 11. Contact / Booking Section */}
        <Contact onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating WhatsApp Concierge Button */}
      <FloatingWhatsApp />

      {/* 14. Mobile Bottom Action Bar */}
      <MobileActionBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking & Concierge Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialService={preselectedService}
      />
    </div>
  );
}
