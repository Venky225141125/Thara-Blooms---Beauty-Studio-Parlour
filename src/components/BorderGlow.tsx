import React, { useRef, useState, useCallback } from 'react';
import './BorderGlow.css';

interface BorderGlowProps {
  children: React.ReactNode;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  className?: string;
  onClick?: () => void;
}

export const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  edgeSensitivity = 28,
  glowColor = "345 65 78",
  backgroundColor = "#FFFDFC",
  borderRadius = 28,
  glowRadius = 30,
  glowIntensity = 0.65,
  coneSpread = 22,
  animated = false,
  colors = ["#EFA9B8", "#E6CE8A", "#F7CDD5"],
  className = "",
  onClick
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate proximity to closest edge
    const distToLeft = x;
    const distToRight = rect.width - x;
    const distToTop = y;
    const distToBottom = rect.height - y;
    const minEdgeDist = Math.min(distToLeft, distToRight, distToTop, distToBottom);

    // Compute angle from card center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angleRad = Math.atan2(y - centerY, x - centerX);
    const angleDeg = (angleRad * (180 / Math.PI) + 360) % 360;

    // Normalize glow intensity based on proximity to edge
    const edgeFactor = Math.max(0, 1 - minEdgeDist / (rect.width * (edgeSensitivity / 100)));
    const calculatedOpacity = Math.min(glowIntensity, edgeFactor * glowIntensity + 0.2);

    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
    el.style.setProperty('--angle', `${angleDeg}deg`);
    el.style.setProperty('--glow-opacity', `${calculatedOpacity}`);
  }, [edgeSensitivity, glowIntensity]);

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
    const el = containerRef.current;
    if (el) {
      el.style.setProperty('--glow-opacity', `${glowIntensity * 0.5}`);
    }
  }, [glowIntensity]);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    const el = containerRef.current;
    if (el) {
      el.style.setProperty('--glow-opacity', '0');
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`border-glow-container ${className}`}
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        ['--bg-color' as any]: backgroundColor,
        ['--border-radius' as any]: `${borderRadius}px`,
        ['--glow-radius' as any]: `${glowRadius}px`,
        ['--cone-spread' as any]: `${coneSpread}px`,
        ['--color-1' as any]: colors[0] || "#EFA9B8",
        ['--color-2' as any]: colors[1] || "#E6CE8A",
        ['--color-3' as any]: colors[2] || "#F7CDD5",
      }}
    >
      {/* Mesh glow underlay */}
      <div className="border-glow-mesh" aria-hidden="true" />
      {/* Focused sharp border ring */}
      <div className="border-glow-mesh-line" aria-hidden="true" />
      {/* Static subtle outline */}
      <div className="border-glow-outline" aria-hidden="true" />
      {/* Inner card surface */}
      <div className="border-glow-inner">
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;
