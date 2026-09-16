import React, { useState, useRef, useEffect, useCallback } from 'react';
import { services } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface ServicesCarouselProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ onOpenBooking }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMouseDown = useRef(false);
  const mouseStartX = useRef(0);
  const scrollStartX = useRef(0);
  const hasDragged = useRef(false);
  const rafId = useRef<number | null>(null);

  const total = services.length;

  // Center a specific card smoothly
  const scrollToCard = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const container = scrollContainerRef.current;
    const targetCard = cardRefs.current[index];
    if (!container || !targetCard) return;

    const containerCenter = container.clientWidth / 2;
    const cardCenter = targetCard.offsetLeft + targetCard.offsetWidth / 2;
    const targetScrollLeft = cardCenter - containerCenter;

    container.scrollTo({
      left: targetScrollLeft,
      behavior
    });
    setActiveIndex(index);
  }, []);

  // Update active index based on card closest to center
  const updateCenterCard = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  // Handle scroll events with requestAnimationFrame
  const handleScroll = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      updateCenterCard();
    });
  };

  // On initial mount, center the first or second card
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToCard(1, 'auto');
    }, 150);
    return () => {
      clearTimeout(timer);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [scrollToCard]);

  // Mouse Drag-To-Scroll Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    isMouseDown.current = true;
    hasDragged.current = false;
    mouseStartX.current = e.pageX - container.offsetLeft;
    scrollStartX.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const currentX = e.pageX - container.offsetLeft;
    const walk = (currentX - mouseStartX.current) * 1.6;

    if (Math.abs(walk) > 5) {
      hasDragged.current = true;
    }

    container.scrollLeft = scrollStartX.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isMouseDown.current) return;
    isMouseDown.current = false;
    // Allow snap after dragging
    setTimeout(() => {
      hasDragged.current = false;
    }, 50);
  };

  // Left & Right navigation helpers
  const handlePrev = () => {
    const nextIndex = activeIndex > 0 ? activeIndex - 1 : total - 1;
    scrollToCard(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = activeIndex < total - 1 ? activeIndex + 1 : 0;
    scrollToCard(nextIndex);
  };

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

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative w-full py-6 md:py-10 select-none focus:outline-hidden"
      role="region"
      aria-label="Horizontally Scrollable Services Showcase"
    >
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[360px] rounded-full bg-[#FCECEF]/40 blur-[110px] pointer-events-none" />

      {/* Floating Left/Right Navigation Arrows for quick scrolling */}
      <div className="hidden sm:flex items-center justify-between absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 pointer-events-none z-30">
        <button
          type="button"
          onClick={handlePrev}
          className="pointer-events-auto w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/90 hover:bg-white text-[#171315] hover:text-[#C96C83] border border-[#C9A44C]/35 shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous Ritual"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="pointer-events-auto w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/90 hover:bg-white text-[#171315] hover:text-[#C96C83] border border-[#C9A44C]/35 shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next Ritual"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className="flex items-center gap-5 sm:gap-8 overflow-x-auto py-10 no-scrollbar cursor-grab active:cursor-grabbing px-[calc(50vw-135px)] sm:px-[calc(50vw-170px)] md:px-[calc(50vw-195px)] lg:px-[calc(50vw-210px)] xl:px-[calc(50%-200px)]"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {services.map((service, index) => {
          const isFocused = index === activeIndex;
          const isAdjacent = Math.abs(index - activeIndex) === 1;

          return (
            <div
              key={service.id}
              ref={el => {
                cardRefs.current[index] = el;
              }}
              style={{ scrollSnapAlign: 'center' }}
              onClick={() => {
                if (!hasDragged.current) {
                  scrollToCard(index);
                }
              }}
              className={`shrink-0 transition-all duration-500 ease-out transform-gpu cursor-pointer ${
                isFocused
                  ? 'w-[280px] sm:w-[340px] md:w-[390px] lg:w-[410px] h-[450px] sm:h-[490px] md:h-[530px] scale-100 sm:scale-105 opacity-100 z-20 shadow-[0_25px_60px_-15px_rgba(201,164,76,0.35),0_15px_30px_-10px_rgba(17,14,16,0.25)] ring-2 ring-[#C9A44C]/60 rounded-[30px] sm:rounded-[34px]'
                  : isAdjacent
                  ? 'w-[270px] sm:w-[320px] md:w-[360px] lg:w-[380px] h-[430px] sm:h-[470px] md:h-[500px] scale-90 sm:scale-92 opacity-75 sm:opacity-85 z-10 brightness-90 hover:opacity-95 rounded-[26px] sm:rounded-[30px]'
                  : 'w-[250px] sm:w-[300px] md:w-[330px] lg:w-[350px] h-[410px] sm:h-[440px] md:h-[470px] scale-80 sm:scale-85 opacity-45 sm:opacity-55 z-0 brightness-75 hover:opacity-80 rounded-[24px] sm:rounded-[28px]'
              }`}
            >
              <ServiceCard
                service={service}
                isActive={isFocused}
                onBook={title => onOpenBooking(title)}
                className="h-full"
              />
            </div>
          );
        })}
      </div>

      {/* Interactive Bottom Indicator Dots & Counter */}
      <div className="flex flex-col items-center justify-center gap-3 mt-4">
        {/* Active ritual label */}
        <div className="flex items-center gap-2 text-xs text-[#655B5E]">
          <Sparkles className="w-3.5 h-3.5 text-[#D98296]" />
          <span className="font-serif font-medium text-[#110E10]">
            {services[activeIndex]?.title}
          </span>
          <span className="text-[#C9A44C]">•</span>
          <span className="text-[11px] font-sans font-medium">
            {activeIndex + 1} of {total}
          </span>
        </div>

        {/* Indicator Pills */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Ritual carousel indicators">
          {services.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={`Go to ${item.title}`}
              onClick={() => scrollToCard(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'w-8 bg-gradient-to-r from-[#D98296] to-[#C9A44C]'
                  : 'w-2 bg-[#C9A44C]/30 hover:bg-[#C9A44C]/60'
              }`}
            />
          ))}
        </div>

        {/* User scroll/swipe hint */}
        <p className="text-[11px] text-[#A77A28] tracking-wider uppercase font-semibold mt-1">
          ← Scroll or swipe horizontally to explore all rituals →
        </p>
      </div>
    </div>
  );
};
