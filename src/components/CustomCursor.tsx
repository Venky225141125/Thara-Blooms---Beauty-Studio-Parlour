import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer & hover
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, [role="button"], input, select, textarea, .border-glow-container');
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const updateTrail = () => {
      setTrailPos(prev => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22
        };
      });
      rafId = requestAnimationFrame(updateTrail);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-99999 overflow-hidden hidden md:block">
      {/* Outer Smooth Trailing Ring with Champagne-Pink Gradient */}
      <div
        className="fixed rounded-full pointer-events-none transition-[width,height,opacity,border-color] duration-200 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          width: isHovered ? '48px' : '26px',
          height: isHovered ? '48px' : '26px',
          border: isHovered
            ? '1.5px solid rgba(201, 164, 76, 0.8)'
            : '1px solid rgba(217, 130, 150, 0.45)',
          background: isHovered
            ? 'radial-gradient(circle, rgba(244, 199, 208, 0.2) 0%, rgba(230, 206, 138, 0.1) 100%)'
            : 'transparent',
          boxShadow: isHovered
            ? '0 0 15px rgba(239, 169, 184, 0.35)'
            : 'none',
        }}
      />

      {/* Central Sharp Dot */}
      <div
        className="fixed rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '6px' : '4px',
          height: isHovered ? '6px' : '4px',
          backgroundColor: isHovered ? '#C9A44C' : '#D98296',
        }}
      />
    </div>
  );
};
