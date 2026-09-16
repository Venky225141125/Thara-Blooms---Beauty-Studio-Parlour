import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { SectionHeading } from './SectionHeading';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const instagramCards = [
    {
      img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=700&auto=format&fit=crop",
      tag: "Bridal Artistry",
      likes: "248"
    },
    {
      img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=700&auto=format&fit=crop",
      tag: "Haute Waves",
      likes: "312"
    },
    {
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=700&auto=format&fit=crop",
      tag: "Rose Quartz Facial",
      likes: "189"
    },
    {
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=700&auto=format&fit=crop",
      tag: "Botanical Hair Spa",
      likes: "275"
    },
    {
      img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=700&auto=format&fit=crop",
      tag: "Soft Glamour",
      likes: "420"
    },
    {
      img: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=700&auto=format&fit=crop",
      tag: "Nourishing Pedicure",
      likes: "164"
    }
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Social Gallery"
          title="Follow the"
          italicWord="Beauty"
          subtitle="Behind-the-scenes transformations, bridal diaries, and daily beauty inspiration on our official feed."
        />

        {/* Instagram Handle & External Link Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 mb-12">
          <div className="flex items-center gap-2 text-sm font-medium text-[#171315]">
            <Instagram className="w-5 h-5 text-[#C96C83]" />
            <span className="font-serif text-lg">{siteConfig.instagram.handle}</span>
          </div>

          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#8D6824] bg-white border border-[#C9A44C]/45 hover:bg-[#FCECEF] hover:border-[#C9A44C] transition-all flex items-center gap-2 shadow-2xs hover:shadow-xs"
          >
            <span>View Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Visual Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramCards.map((card, idx) => (
            <a
              key={idx}
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-xs border border-[#C9A44C]/20 bg-[#FFF7F8]"
            >
              <img
                src={card.img}
                alt={card.tag}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay with Likes and Instagram Icon */}
              <div className="absolute inset-0 bg-[#171315]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-3 text-center">
                <Instagram className="w-6 h-6 text-[#E6CE8A] mb-2" />
                <span className="text-xs font-medium">{card.tag}</span>
                <div className="flex items-center gap-1 text-[11px] text-[#F8DDE3] mt-1">
                  <Heart className="w-3 h-3 fill-[#D98296] text-[#D98296]" />
                  <span>{card.likes}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
