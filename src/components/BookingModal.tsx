import React, { useState, useEffect } from 'react';
import { services } from '../data/services';
import { siteConfig, getBookingActionUrl, getWhatsAppBookingUrl } from '../data/siteConfig';
import { X, Calendar, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialService || services[0]?.title || 'Signature Glow Facials'
  );
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('Morning (10 AM - 1 PM)');
  const [fullName, setFullName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (siteConfig.booking.url && siteConfig.booking.url.trim() !== '') {
      window.open(siteConfig.booking.url, '_blank', 'noopener,noreferrer');
      onClose();
      return;
    }

    // Compose formatted WhatsApp message
    let message = `Hi Thara Blooms! I would like to reserve an appointment:`;
    message += `\n• Service: ${selectedService}`;
    if (preferredDate) message += `\n• Preferred Date: ${preferredDate}`;
    message += `\n• Preferred Time: ${preferredTime}`;
    if (fullName.trim()) message += `\n• Guest Name: ${fullName}`;
    if (notes.trim()) message += `\n• Notes: ${notes}`;

    const url = getWhatsAppBookingUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-[32px] bg-white border border-[#C9A44C]/35 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#FFFDFC] via-[#FFF7F8] to-[#FCECEF] border-b border-[#C9A44C]/20 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D98296]" />
              <span className="text-[10px] uppercase font-semibold tracking-widest text-[#A77A28]">
                Appointment Concierge
              </span>
            </div>
            <h3 id="booking-modal-title" className="font-serif text-2xl sm:text-3xl font-medium text-[#171315]">
              Reserve Your Ritual
            </h3>
            <p className="text-xs text-[#655B5E] mt-1">
              Personalized one-on-one attention at Thara Blooms
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#8D8185] hover:text-[#171315] transition-colors focus:outline-hidden"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 overflow-y-auto space-y-5">
          {/* Select Service */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#171315] mb-2">
              Select Ritual or Service
            </label>
            <select
              value={selectedService}
              onChange={e => setSelectedService(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-[#FFFDFC] border border-[#C9A44C]/30 text-xs sm:text-sm text-[#171315] focus:outline-hidden focus:border-[#C9A44C] focus:ring-1 focus:ring-[#C9A44C]"
            >
              {services.map(s => (
                <option key={s.id} value={s.title}>
                  {s.title} ({s.category} • {s.duration})
                </option>
              ))}
            </select>
          </div>

          {/* Date & Time Slot Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#171315] mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={e => setPreferredDate(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#FFFDFC] border border-[#C9A44C]/30 text-xs sm:text-sm text-[#171315] focus:outline-hidden focus:border-[#C9A44C]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#171315] mb-2">
                Preferred Time Slot
              </label>
              <select
                value={preferredTime}
                onChange={e => setPreferredTime(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#FFFDFC] border border-[#C9A44C]/30 text-xs sm:text-sm text-[#171315] focus:outline-hidden focus:border-[#C9A44C]"
              >
                <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
              </select>
            </div>
          </div>

          {/* Guest Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#171315] mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. Radhika Sharma"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-[#FFFDFC] border border-[#C9A44C]/30 text-xs sm:text-sm text-[#171315] focus:outline-hidden focus:border-[#C9A44C]"
            />
          </div>

          {/* Notes or Bridal Inquiries */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#171315] mb-2">
              Occasion or Special Requests (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Wedding reception on 24th Oct, looking for soft glam and saree draping..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDFC] border border-[#C9A44C]/30 text-xs sm:text-sm text-[#171315] focus:outline-hidden focus:border-[#C9A44C]"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#D98296] to-[#C96C83] hover:from-[#C96C83] hover:to-[#B55970] shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Confirm & Connect with Concierge</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[11px] text-[#8D8185] mt-2.5">
              Directly opens WhatsApp with your pre-filled reservation details.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
