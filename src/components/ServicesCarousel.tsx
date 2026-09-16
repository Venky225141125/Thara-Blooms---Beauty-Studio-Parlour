import React, { useState, useRef, useEffect, useCallback } from 'react';
import { services } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface ServicesCarouselProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ onOpenBooking }) => {
  const [activeIndex, setActiveIndex] = useState(1); // Center card initially
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Update active index based on scroll position
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    if (closestIdx !== activeIndex) {
      setActiveIndex(closestIdx);
    }
  }, [activeIndex]);

  // Center on active index
  const scrollToCard = useCallback((index: number) => {
    const container = containerRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    const targetScroll = card.offsetLeft - (container.clientWidth / 2 - card.offsetWidth / 2);
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  }, []);

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIndex - 1);
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(services.length - 1, activeIndex + 1);
    scrollToCard(nextIdx);
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

  // Drag interaction handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    // Initial center on card 1 after mount
    const timer = setTimeout(() => {
      scrollToCard(1);
    }, 150);
    return () => clearTimeout(timer);
  }, [scrollToCard]);

  return (
    <div
      className="relative w-full py-8 focus:outline-hidden"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Services curved carousel"
    >
      {/* Desktop Navigation Arrows */}
      <div className="hidden md:flex items-center justify-end gap-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          type="button"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="p-3 rounded-full border border-[#C9A44C]/35 bg-white/80 hover:bg-[#FFFDFC] text-[#8D6824] disabled:opacity-35 disabled:cursor-not-allowed transition-all shadow-2xs hover:shadow-xs hover:-translate-x-0.5 active:translate-x-0"
          aria-label="Previous service"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="text-xs font-serif text-[#655B5E] tracking-widest px-2">
          {activeIndex + 1} / {services.length}
        </span>

        <button
          type="button"
          onClick={handleNext}
          disabled={activeIndex === services.length - 1}
          className="p-3 rounded-full border border-[#C9A44C]/35 bg-white/80 hover:bg-[#FFFDFC] text-[#8D6824] disabled:opacity-35 disabled:cursor-not-allowed transition-all shadow-2xs hover:shadow-xs hover:translate-x-0.5 active:translate-x-0"
          aria-label="Next service"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`flex items-center overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pt-10 pb-12 px-[10vw] sm:px-[15vw] md:px-[20vw] gap-5 sm:gap-7 cursor-${
          isDragging ? 'grabbing' : 'grab'
        }`}
      >
        {services.map((service, idx) => {
          const diff = Math.abs(idx - activeIndex);
          const isCurrent = idx === activeIndex;

          // Mathematical Curve Effect: Center elevated higher, neighbors lower
          let translateY = 'translateY(16px)';
          let scale = 'scale(0.92)';
          let zIndex = 1;
          let opacity = 0.85;

          if (diff === 0) {
            // Active Center Card
            translateY = 'translateY(-24px)';
            scale = 'scale(1.03)';
            zIndex = 10;
            opacity = 1;
          } else if (diff === 1) {
            // Immediate Neighbors
            translateY = 'translateY(0px)';
            scale = 'scale(0.96)';
            zIndex = 5;
            opacity = 0.95;
          }

          return (
            <div
              key={service.id}
              ref={el => (cardRefs.current[idx] = el)}
              onClick={() => {
                if (!isDragging && !isCurrent) {
                  scrollToCard(idx);
                }
              }}
              style={{
                transform: `${translateY} ${scale}`,
                zIndex,
                opacity
              }}
              className="shrink-0 w-[82vw] sm:w-[360px] md:w-[380px] snap-center transition-all duration-500 ease-out select-none"
            >
              <ServiceCard
                service={service}
                isActive={isCurrent}
                onBook={() => onOpenBooking(service.title)}
              />
            </div>
          );
        })}
      </div>

      {/* Mobile Swipe Hint Dots */}
      <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
        {services.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollToCard(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === activeIndex
                ? 'w-6 h-1.5 bg-[#C96C83]'
                : 'w-1.5 h-1.5 bg-[#C9A44C]/35'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
