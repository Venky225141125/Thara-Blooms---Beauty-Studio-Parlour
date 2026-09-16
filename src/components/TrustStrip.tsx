import React from 'react';
import { Sparkles, Shield, Flower2, HeartHandshake } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const pillars = [
    {
      icon: Flower2,
      title: "Botanical Formulations",
      desc: "Gentle, skin-loving elixirs free from harsh chemicals."
    },
    {
      icon: Sparkles,
      title: "Bespoke Artistry",
      desc: "Looks tailored to your facial architecture and personal style."
    },
    {
      icon: Shield,
      title: "Sterile Sanctuary",
      desc: "Hospital-grade sanitization and single-use precision tools."
    },
    {
      icon: HeartHandshake,
      title: "Personalized Care",
      desc: "Attentive consultations that put your comfort first."
    }
  ];

  return (
    <section className="relative py-8 bg-[#FFF7F8] border-y border-[#C9A44C]/18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/60 backdrop-blur-xs border border-[#C9A44C]/15 transition-all duration-300 hover:bg-white/90 hover:shadow-xs"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FCECEF] to-[#F8DDE3] border border-[#F4C7D0] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#C96C83]" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-[#171315]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#655B5E] mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
