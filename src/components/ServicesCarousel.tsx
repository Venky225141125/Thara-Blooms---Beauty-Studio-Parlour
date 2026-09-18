import React, { useState, useEffect, useCallback, useRef } from 'react';
import { services } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { ChevronLeft, ChevronRight, Sparkles, Compass } from 'lucide-react';

interface ServicesCarouselProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ onOpenBooking }) => {
  const total = services.length;

  // Continuous virtual position (float during drag or animation)
  const [scrollPos, setScrollPos] = useState<number>(0);
  const scrollPosRef = useRef<number>(0);

  // Normalized integer index for indicators (0 to total - 1)
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Drag tracking refs
  const pointerStartX = useRef<number | null>(null);
  const startScrollPos = useRef<number>(0);
  const lastPointerX = useRef<number>(0);
  const lastPointerTime = useRef<number>(0);
  const velocity = useRef<number>(0);
  const hasMovedSignificantly = useRef<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive half-circle curve parameters
  const getCurveParams = useCallback(() => {
    if (typeof window === 'undefined') {
      return { angleStep: 26, radiusX: 620, radiusY: 75, radiusZ: 320, stepPx: 260 };
    }
    const w = window.innerWidth;
    if (w < 640) {
      // Mobile: tuned radius and angles so all 5 cards curve gracefully within viewport
      return { angleStep: 22, radiusX: 380, radiusY: 45, radiusZ: 190, stepPx: 175 };
    }
    if (w < 1024) {
      // Tablet
      return { angleStep: 24, radiusX: 500, radiusY: 60, radiusZ: 250, stepPx: 220 };
    }
    // Desktop
    return { angleStep: 26, radiusX: 620, radiusY: 75, radiusZ: 320, stepPx: 260 };
  }, []);

  // Smooth animation to a target index position
  const animateTo = useCallback((target: number) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    const start = scrollPosRef.current;
    const diff = target - start;
    if (Math.abs(diff) < 0.001) {
      const normalized = ((Math.round(target) % total) + total) % total;
      setScrollPos(normalized);
      scrollPosRef.current = normalized;
      setCurrentIndex(normalized);
      return;
    }

    const duration = Math.min(680, Math.max(340, Math.abs(diff) * 220));
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      const nextPos = start + diff * eased;

      setScrollPos(nextPos);
      scrollPosRef.current = nextPos;

      const norm = ((Math.round(nextPos) % total) + total) % total;
      setCurrentIndex(norm);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        const finalNormalized = ((Math.round(target) % total) + total) % total;
        setScrollPos(finalNormalized);
        scrollPosRef.current = finalNormalized;
        setCurrentIndex(finalNormalized);
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);
  }, [total]);

  // Arrow controls
  const handleNext = useCallback(() => {
    animateTo(Math.round(scrollPosRef.current) + 1);
  }, [animateTo]);

  const handlePrev = useCallback(() => {
    animateTo(Math.round(scrollPosRef.current) - 1);
  }, [animateTo]);

  // Indicator dot jump (chooses the shortest path around circular items)
  const handleDotClick = useCallback((targetIdx: number) => {
    const currentNormalized = ((Math.round(scrollPosRef.current) % total) + total) % total;
    let diff = targetIdx - currentNormalized;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    animateTo(Math.round(scrollPosRef.current) + diff);
  }, [total, animateTo]);

  // Auto-rotation when idle
  useEffect(() => {
    if (isHovered || isDragging) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7500);
    return () => clearInterval(timer);
  }, [isHovered, isDragging, handleNext]);

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Pointer Down (Mouse or Touch)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button, a')) return;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    pointerStartX.current = e.clientX;
    startScrollPos.current = scrollPosRef.current;
    lastPointerX.current = e.clientX;
    lastPointerTime.current = performance.now();
    velocity.current = 0;
    hasMovedSignificantly.current = false;
    setIsDragging(true);
  };

  // Pointer Move: Continuous, multi-card fluid drag along the curve
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || pointerStartX.current === null) return;

    const now = performance.now();
    const dt = now - lastPointerTime.current;
    const dx = e.clientX - lastPointerX.current;

    if (dt > 10) {
      velocity.current = dx / dt; // px per ms
      lastPointerX.current = e.clientX;
      lastPointerTime.current = now;
    }

    const totalDeltaPx = e.clientX - pointerStartX.current;
    if (Math.abs(totalDeltaPx) > 6) {
      hasMovedSignificantly.current = true;
    }

    const { stepPx } = getCurveParams();
    const deltaIndices = totalDeltaPx / stepPx;
    const newPos = startScrollPos.current - deltaIndices;

    setScrollPos(newPos);
    scrollPosRef.current = newPos;

    const normalized = ((Math.round(newPos) % total) + total) % total;
    setCurrentIndex(normalized);
  };

  // Pointer Up: Release with momentum & snap to nearest integer
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // ignore
    }

    setIsDragging(false);
    pointerStartX.current = null;

    const { stepPx } = getCurveParams();
    const vIndicesPerSec = (velocity.current * 1000) / stepPx;
    const momentum = Math.max(-2.5, Math.min(2.5, vIndicesPerSec * 0.24));
    const predicted = scrollPosRef.current - momentum;
    const target = Math.round(predicted);

    animateTo(target);

    setTimeout(() => {
      hasMovedSignificantly.current = false;
    }, 60);
  };

  // Calculate 5 primary visible offerings along the curved half-circle arc:
  // Slots:
  // -2: Outer Sub-Left
  // -1: Immediate Sub-Left
  //  0: Main Center Card (Apex of the curve)
  // +1: Immediate Sub-Right
  // +2: Outer Sub-Right
  // -3 and +3: Smooth buffer cards entering/exiting the arc
  const baseIndex = Math.floor(scrollPos);
  const fraction = scrollPos - baseIndex;
  const slots = [-3, -2, -1, 0, 1, 2, 3];

  const visibleCards = slots.map(k => {
    const serviceIndex = ((baseIndex + k) % total + total) % total;
    const service = services[serviceIndex];
    const dist = k - fraction; // continuous distance from the center
    const absDist = Math.abs(dist);

    return {
      slot: k,
      service,
      serviceIndex,
      dist,
      absDist,
    };
  });

  const curveParams = getCurveParams();

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full py-4 sm:py-8 select-none focus:outline-hidden touch-pan-y ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      role="region"
      aria-label="Signature Offerings Curved Half-Circle Carousel"
    >
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[950px] h-[380px] rounded-full bg-[#FCECEF]/45 blur-[120px] pointer-events-none" />

      {/* Floating Previous and Next Arrow Controls */}
      <div className="flex items-center justify-between absolute inset-x-2 sm:inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 pointer-events-none z-50">
        <button
          type="button"
          onClick={handlePrev}
          className="pointer-events-auto w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/95 hover:bg-white text-[#171315] hover:text-[#C96C83] border border-[#C9A44C]/35 shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous Offering"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="pointer-events-auto w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/95 hover:bg-white text-[#171315] hover:text-[#C96C83] border border-[#C9A44C]/35 shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next Offering"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* 3D Half-Circle Stage Container */}
      <div
        style={{
          perspective: '1300px',
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full max-w-7xl mx-auto min-h-[500px] sm:min-h-[550px] md:min-h-[600px] flex items-center justify-center overflow-hidden px-2 sm:px-4"
      >
        {visibleCards.map(({ slot, service, dist, absDist }) => {
          const isCenter = absDist < 0.35;
          const isImmediateSub = absDist >= 0.35 && absDist < 1.45;
          const isOuterSub = absDist >= 1.45 && absDist < 2.45;

          // Continuous angle along the half-circle arc
          const angleDeg = dist * curveParams.angleStep;
          const angleRad = (angleDeg * Math.PI) / 180;

          // 3D Semicircular / Half-Circle Arc coordinates:
          // X: along the horizontal curve
          const translateX = curveParams.radiusX * Math.sin(angleRad);
          // Y: curved vertical arch (cards subtly drape along the curve)
          const translateY = curveParams.radiusY * (1 - Math.cos(angleRad));
          // Z: recedes back into 3D depth along the semi-circle
          const translateZ = -curveParams.radiusZ * (1 - Math.cos(angleRad));

          // 3D rotations: cards face inward toward the viewer along the curve
          const rotateY = -angleDeg * 0.88;
          // Subtle arc inclination tilt
          const rotateZ = -angleDeg * 0.12;

          // Scale smoothly decreases as cards move around the curve
          const scale = Math.max(0.55, 1 - absDist * 0.13);

          // Continuous opacity fading along the edges of the arc
          let opacity = 1;
          if (absDist > 2.5) {
            opacity = Math.max(0, 1 - (absDist - 2.5) / 0.5) * 0.35;
          } else if (absDist > 1.4) {
            opacity = 0.65 - (absDist - 1.4) * 0.25;
          } else if (absDist > 0.35) {
            opacity = 0.90 - (absDist - 0.35) * 0.24;
          }

          // Layering z-index based on optical distance
          const zIndex = isCenter ? 40 : isImmediateSub ? 30 : isOuterSub ? 20 : 10;

          return (
            <div
              key={`card-${slot}-${service.id}`}
              onClick={() => {
                if (hasMovedSignificantly.current) return;
                // If clicking an off-center card on the arc, animate it right to center
                if (absDist >= 0.35) {
                  const target = Math.round(scrollPosRef.current + dist);
                  animateTo(target);
                }
              }}
              style={{
                transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                opacity,
                zIndex,
                transformOrigin: 'center center',
                backfaceVisibility: 'hidden',
              }}
              className={`absolute transform-gpu transition-shadow duration-300 ${
                isCenter
                  ? 'w-[280px] sm:w-[330px] md:w-[370px] h-[460px] sm:h-[500px] md:h-[540px] shadow-[0_25px_60px_-15px_rgba(201,164,76,0.38),0_15px_30px_-10px_rgba(17,14,16,0.28)] ring-2 ring-[#C9A44C]/75 rounded-[30px] sm:rounded-[34px] cursor-grab active:cursor-grabbing'
                  : isImmediateSub
                  ? 'w-[260px] sm:w-[310px] md:w-[340px] h-[430px] sm:h-[470px] md:h-[500px] brightness-90 hover:brightness-100 hover:opacity-100 rounded-[26px] sm:rounded-[30px] cursor-pointer shadow-xl'
                  : 'w-[240px] sm:w-[280px] md:w-[310px] h-[400px] sm:h-[440px] md:h-[470px] brightness-75 hover:brightness-95 hover:opacity-85 rounded-[22px] sm:rounded-[26px] cursor-pointer shadow-lg'
              }`}
            >
              <ServiceCard
                service={service}
                isActive={isCenter}
                onBook={title => {
                  if (hasMovedSignificantly.current) return;
                  onOpenBooking(title);
                }}
                className="h-full pointer-events-auto"
              />
            </div>
          );
        })}
      </div>

      {/* Interactive Indicators & Active Ritual Name */}
      <div className="flex flex-col items-center justify-center gap-3 mt-4 sm:mt-6">
        {/* Active Ritual Label */}
        <div className="flex items-center gap-2 text-xs text-[#655B5E]">
          <Sparkles className="w-3.5 h-3.5 text-[#D98296]" />
          <span className="font-serif font-medium text-[#110E10] text-sm">
            {services[currentIndex]?.title}
          </span>
          <span className="text-[#C9A44C]">•</span>
          <span className="text-[11px] font-sans font-medium">
            {currentIndex + 1} of {total}
          </span>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Ritual carousel indicators">
          {services.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={idx === currentIndex}
              aria-label={`Jump to ${item.title}`}
              onClick={() => handleDotClick(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-gradient-to-r from-[#D98296] to-[#C9A44C]'
                  : 'w-2 bg-[#C9A44C]/30 hover:bg-[#C9A44C]/60'
              }`}
            />
          ))}
        </div>

        {/* Half-Circle Curved Drag Navigation Hint */}
        <div className="flex items-center gap-1.5 text-[11px] text-[#A77A28] tracking-wider uppercase font-semibold mt-0.5">
          <Compass className="w-3.5 h-3.5" />
          <span>Drag along the curved arc to browse offerings • Tap side cards to focus</span>
        </div>
      </div>
    </div>
  );
};
