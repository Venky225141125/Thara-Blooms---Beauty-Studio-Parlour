export interface BusinessHours {
  day: string;
  time: string;
}

export interface SiteConfig {
  businessName: string;
  legalName: string;
  tagline: string;
  description: string;
  contact: {
    phone: string;
    displayPhone: string;
    email: string;
    address: string;
    city: string;
  };
  whatsapp: {
    phone: string;
    message: string;
  };
  instagram: {
    handle: string;
    url: string;
  };
  hours: BusinessHours[];
  booking: {
    url: string; // If empty or not set, opens WhatsApp directly
  };
  social: {
    instagram: string;
    whatsapp: string;
    facebook?: string;
    pinterest?: string;
  };
}

export const siteConfig: SiteConfig = {
  businessName: "Thara Blooms",
  legalName: "Thara Blooms Beauty Studio & Parlour",
  tagline: "Glow with Grace",
  description: "Bespoke beauty rituals, bridal couture artistry, rejuvenating skin care, and luxury hair styling thoughtfully curated around you.",
  
  contact: {
    phone: "+1234567890", // Configurable WhatsApp/Tel
    displayPhone: "+1 (234) 567-890",
    email: "contact@tharablooms.com",
    address: "Boutique Lane, Luxury Arcade, Suite 104",
    city: "City Center"
  },

  whatsapp: {
    phone: "+1234567890",
    message: "Hi Thara Blooms, I would like to book an appointment with you."
  },

  instagram: {
    handle: "@tharablooms",
    url: "https://instagram.com/tharablooms"
  },

  hours: [
    { day: "Monday – Friday", time: "09:30 AM – 08:00 PM" },
    { day: "Saturday", time: "09:00 AM – 08:30 PM" },
    { day: "Sunday", time: "10:00 AM – 06:00 PM" }
  ],

  booking: {
    url: "" // When empty, system seamlessly launches pre-filled WhatsApp concierge booking
  },

  social: {
    instagram: "https://instagram.com/tharablooms",
    whatsapp: "https://wa.me/+1234567890",
    facebook: "https://facebook.com/tharablooms",
    pinterest: "https://pinterest.com/tharablooms"
  }
};

export const getWhatsAppBookingUrl = (customMessage?: string) => {
  const msg = customMessage || siteConfig.whatsapp.message;
  const cleanPhone = siteConfig.whatsapp.phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
};

export const getBookingActionUrl = (customMessage?: string) => {
  if (siteConfig.booking.url && siteConfig.booking.url.trim() !== "") {
    return siteConfig.booking.url;
  }
  return getWhatsAppBookingUrl(customMessage);
};
