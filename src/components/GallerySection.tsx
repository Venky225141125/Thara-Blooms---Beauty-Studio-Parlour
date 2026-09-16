import React from 'react';
import { DomeGallery } from './DomeGallery';
import { galleryImages } from '../data/gallery';
import { SectionHeading } from './SectionHeading';
import { Sparkles, Move, MousePointerClick } from 'lucide-react';

export const GallerySection: React.FC = () => {
  return (
    <section
      id="gallery"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, #3A252B 0%, #21181B 55%, #171315 100%)'
      }}
    >
      {/* Subtle Pink Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#EFA9B8]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with Dark Theme Styling */}
        <SectionHeading
          eyebrow="Visual Portfolio"
          title="Moments of"
          italicWord="Beauty"
          subtitle="A glimpse into the Thara Blooms experience. Drag the 3D dome to explore our artistry, and click any tile to view in high definition."
          isDark={true}
        />

        {/* Interactive Gesture Hint Pill */}
        <div className="flex items-center justify-center gap-3 mt-6 mb-8 text-xs text-[#E6CE8A] tracking-wider uppercase">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-[#C9A44C]/30 backdrop-blur-md">
            <Move className="w-3.5 h-3.5 text-[#EFA9B8]" />
            Drag or swipe to rotate
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-[#C9A44C]/30 backdrop-blur-md">
            <MousePointerClick className="w-3.5 h-3.5 text-[#E6CE8A]" />
            Tap image to expand
          </span>
        </div>

        {/* 3D Interactive DomeGallery Container with Responsive Height */}
        <div className="relative w-full h-[520px] sm:h-[600px] md:h-[680px] lg:h-[720px] rounded-[36px] overflow-hidden border border-[#C9A44C]/25 shadow-2xl bg-[#171315]/90">
          <DomeGallery
            images={galleryImages}
            fit={0.48}
            fitBasis="auto"
            minRadius={480}
            maxRadius={850}
            padFactor={0.20}
            overlayBlurColor="#171315"
            maxVerticalRotationDeg={4}
            dragSensitivity={20}
            enlargeTransitionMs={350}
            segments={35}
            dragDampening={0.75}
            openedImageWidth="min(540px, 85vw)"
            openedImageHeight="min(540px, 85vw)"
            imageBorderRadius="20px"
            openedImageBorderRadius="28px"
            grayscale={false}
          />
        </div>
      </div>
    </section>
  );
};
