import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  isDark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  italicWord,
  subtitle,
  align = 'center',
  isDark = false,
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {/* Eyebrow */}
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-px bg-[#C9A44C]/60" />
          <span className="text-[11px] md:text-xs tracking-[0.22em] uppercase font-semibold text-[#A77A28]">
            {eyebrow}
          </span>
          <span className="w-6 h-px bg-[#C9A44C]/60" />
        </div>
      )}

      {/* Main Heading */}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-medium leading-[1.18] tracking-tight ${
          isDark ? 'text-[#FFF7F8]' : 'text-[#171315]'
        }`}
      >
        {title}{' '}
        {italicWord && (
          <span className="font-cormorant italic font-normal text-[#D98296] inline-block">
            {italicWord}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-[#E0D0D5]' : 'text-[#655B5E]'
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative Champagne Underline */}
      <div className={`mt-5 flex items-center gap-1.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C9A44C]/70 to-transparent" />
        <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A44C]" />
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C9A44C]/70 to-transparent" />
      </div>
    </div>
  );
};
