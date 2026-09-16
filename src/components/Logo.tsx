import React, { useState } from 'react';

export type LogoVariant =
  | 'short-logo'
  | 'long-logo'
  | 'logo-top-text-bottom'
  | 'short'
  | 'long'
  | 'top-bottom'
  | 'horizontal'
  | 'badge'
  | 'emblem';

export interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  isDark?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'long-logo',
  className = '',
  isDark = false,
  size = 'md',
  alt = 'Thara Blooms - Beauty Studio & Parlour'
}) => {
  const [imgError, setImgError] = useState(false);

  // Normalize variants
  const isShort = variant === 'short-logo' || variant === 'short' || variant === 'badge';
  const isStacked = variant === 'logo-top-text-bottom' || variant === 'top-bottom' || variant === 'emblem';
  const isLong = !isShort && !isStacked; // default 'long-logo'

  // 1. SHORT-LOGO (Circular Crest Only)
  if (isShort) {
    const sizeClasses = {
      xs: 'w-8 h-8',
      sm: 'w-10 h-10 sm:w-12 sm:h-12',
      md: 'w-14 h-14 md:w-16 md:h-16',
      lg: 'w-20 h-20 md:w-24 md:h-24',
      xl: 'w-32 h-32 md:w-36 md:h-36'
    }[size];

    const src = imgError ? '/short-logo.svg' : '/short-logo.png';

    return (
      <div className={`relative shrink-0 select-none ${sizeClasses} ${className}`}>
        <img
          src={src}
          onError={() => setImgError(true)}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain rounded-full drop-shadow-xs"
        />
      </div>
    );
  }

  // 2. LOGO-TOP-TEXT-BOTTOM (Logo on top, Text on bottom)
  if (isStacked) {
    const sizeClasses = {
      xs: 'w-36 max-w-full',
      sm: 'w-48 sm:w-52 max-w-full',
      md: 'w-60 sm:w-68 max-w-full',
      lg: 'w-72 sm:w-80 max-w-full',
      xl: 'w-88 sm:w-96 max-w-full'
    }[size];

    const src = isDark
      ? imgError
        ? '/logo-top-text-bottom-dark.svg'
        : '/logo-top-text-bottom-dark.png'
      : imgError
      ? '/logo-top-text-bottom.svg'
      : '/logo-top-text-bottom.png';

    return (
      <div
        className={`flex flex-col items-center justify-center text-center select-none ${sizeClasses} ${className}`}
      >
        <img
          src={src}
          onError={() => setImgError(true)}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain transition-all duration-300 drop-shadow-xs"
        />
      </div>
    );
  }

  // 3. LONG-LOGO (Logo on left, Text on right)
  const heightClasses = {
    xs: 'h-8 sm:h-9',
    sm: 'h-10 sm:h-12 md:h-13',
    md: 'h-12 sm:h-14 md:h-16',
    lg: 'h-16 sm:h-20 md:h-24',
    xl: 'h-24 sm:h-28 md:h-32'
  }[size];

  const src = isDark
    ? imgError
      ? '/long-logo-dark.svg'
      : '/long-logo-dark.png'
    : imgError
    ? '/long-logo.svg'
    : '/long-logo.png';

  return (
    <div
      className={`relative flex items-center select-none ${heightClasses} ${className}`}
    >
      <img
        src={src}
        onError={() => setImgError(true)}
        alt={alt}
        referrerPolicy="no-referrer"
        className="h-full w-auto object-contain transition-all duration-300 drop-shadow-xs"
      />
    </div>
  );
};

