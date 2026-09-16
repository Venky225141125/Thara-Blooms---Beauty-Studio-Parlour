import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'badge' | 'emblem';
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  className = '',
  isDark = false
}) => {
  // SVG Emblem featuring:
  // - Gold circular line
  // - Feminine silhouette & TB monogram
  // - Soft pink botanical blooms & green leaves
  // - Elegant golden butterfly
  const EmblemSvg = (
    <svg
      viewBox="0 0 120 120"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Thara Blooms Crest"
    >
      <defs>
        <linearGradient id="tbGoldRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A44C" />
          <stop offset="50%" stopColor="#E6CE8A" />
          <stop offset="100%" stopColor="#A77A28" />
        </linearGradient>
        <linearGradient id="tbPetalPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8DDE3" />
          <stop offset="60%" stopColor="#EFA9B8" />
          <stop offset="100%" stopColor="#D98296" />
        </linearGradient>
        <linearGradient id="tbLeafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#829C86" />
          <stop offset="100%" stopColor="#58745F" />
        </linearGradient>
      </defs>

      {/* Decorative Outer Gold Ring */}
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke="url(#tbGoldRing)"
        strokeWidth="1.2"
        strokeDasharray="4 2.5"
        opacity="0.85"
      />
      <circle
        cx="60"
        cy="60"
        r="49"
        stroke="url(#tbGoldRing)"
        strokeWidth="0.8"
        opacity="0.5"
      />

      {/* Soft Rose Center Glow */}
      <circle
        cx="60"
        cy="60"
        r="44"
        fill="#FFF7F8"
        opacity="0.9"
      />

      {/* Stylized Feminine Profile & Hair Silhouette */}
      <path
        d="M52 38C57 36 63 38 66 43C69 47 68 53 66 56C64 58 63 60 64 62C65 64 67 65 67 67C67 71 63 74 61 77C60 78 57 82 53 83C49 84 45 82 43 79C41 75 42 70 44 66C45 63 45 61 44 59C42 56 40 52 41 48C43 42 47 39 52 38Z"
        fill={isDark ? "#FFF5F7" : "#171315"}
        opacity="0.95"
      />

      {/* TB Monogram Integration */}
      <text
        x="63"
        y="65"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="17"
        fontWeight="600"
        fill="url(#tbGoldRing)"
        letterSpacing="0.05em"
      >
        TB
      </text>

      {/* Delicate Pink Floral Cluster */}
      {/* Flower 1 */}
      <g transform="translate(68, 32)">
        <circle cx="0" cy="0" r="4.5" fill="url(#tbPetalPink)" />
        <circle cx="-3" cy="2.5" r="4" fill="url(#tbPetalPink)" opacity="0.9" />
        <circle cx="3" cy="2.5" r="4" fill="url(#tbPetalPink)" opacity="0.9" />
        <circle cx="0" cy="5" r="3.8" fill="url(#tbPetalPink)" opacity="0.95" />
        <circle cx="0" cy="2.5" r="1.5" fill="#E6CE8A" />
      </g>
      {/* Flower 2 */}
      <g transform="translate(76, 44)">
        <circle cx="0" cy="0" r="3.5" fill="url(#tbPetalPink)" />
        <circle cx="2.5" cy="2" r="3" fill="url(#tbPetalPink)" opacity="0.85" />
        <circle cx="-2.5" cy="2" r="3" fill="url(#tbPetalPink)" opacity="0.85" />
        <circle cx="0" cy="1.5" r="1.2" fill="#E6CE8A" />
      </g>

      {/* Green Botanical Leaves */}
      <path
        d="M66 28C69 25 73 26 73 28C73 30 70 33 66 33C65 31 65 29 66 28Z"
        fill="url(#tbLeafGreen)"
      />
      <path
        d="M79 38C82 36 85 38 84 41C83 43 80 43 78 41C78 40 78 39 79 38Z"
        fill="url(#tbLeafGreen)"
        opacity="0.85"
      />
      <path
        d="M48 78C46 81 43 83 41 82C40 80 42 77 45 76C46 76 47 77 48 78Z"
        fill="url(#tbLeafGreen)"
      />

      {/* Elegant Golden Butterfly */}
      <g transform="translate(34, 34) rotate(-15)">
        {/* Top Left Wing */}
        <path
          d="M0 0C-4 -6 -9 -4 -8 1C-7 4 -3 3 0 0Z"
          fill="url(#tbGoldRing)"
          opacity="0.95"
        />
        {/* Bottom Left Wing */}
        <path
          d="M0 0C-3 2 -6 5 -4 7C-2 8 -1 5 0 0Z"
          fill="url(#tbGoldRing)"
          opacity="0.8"
        />
        {/* Top Right Wing */}
        <path
          d="M0 0C3 -6 8 -5 7 1C6 4 2 3 0 0Z"
          fill="url(#tbGoldRing)"
          opacity="0.95"
        />
        {/* Bottom Right Wing */}
        <path
          d="M0 0C2 2 5 6 3 7C1 7 0 4 0 0Z"
          fill="url(#tbGoldRing)"
          opacity="0.8"
        />
        {/* Butterfly body */}
        <ellipse cx="0" cy="1" rx="0.8" ry="3.5" fill="#171315" />
      </g>
    </svg>
  );

  if (variant === 'emblem') {
    return (
      <div className={`relative flex flex-col items-center justify-center ${className}`}>
        <div className="w-28 h-28 md:w-36 md:h-36 drop-shadow-sm">
          {EmblemSvg}
        </div>
        <div className="mt-3 text-center">
          <span className="block font-serif text-xl md:text-2xl tracking-[0.22em] text-[#171315] uppercase font-medium">
            Thara Blooms
          </span>
          <span className="block font-sans text-[10px] md:text-[11px] tracking-[0.28em] text-[#A77A28] uppercase font-semibold mt-1">
            Beauty Studio & Parlour
          </span>
          <span className="block font-cormorant italic text-sm md:text-base text-[#655B5E] mt-0.5">
            Glow with Grace
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 ${className}`}>
        {EmblemSvg}
      </div>
    );
  }

  // Default: Horizontal Header Lockup
  return (
    <div className={`flex items-center gap-3 group transition-transform duration-300 ${className}`}>
      <div className="w-10 h-10 md:w-11 md:h-11 shrink-0 transition-transform duration-500 group-hover:rotate-6">
        {EmblemSvg}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif text-lg md:text-xl font-medium tracking-[0.16em] uppercase transition-colors ${
            isDark ? 'text-white' : 'text-[#171315]'
          }`}>
            Thara Blooms
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-sans text-[9px] tracking-[0.24em] uppercase text-[#A77A28] font-semibold">
            Beauty Studio & Parlour
          </span>
          <span className="hidden sm:inline text-[#D98296] text-[8px]">•</span>
          <span className="hidden sm:inline font-cormorant italic text-[11px] text-[#655B5E]">
            Glow with Grace
          </span>
        </div>
      </div>
    </div>
  );
};
