import React, { useState } from 'react';

export default function BorderGlow({
  children,
  className = "",
  colors = ['#3b82f6', '#60a5fa', '#eab308'],
  glowRadius = 30,
  glowIntensity = 1,
  backgroundColor = "#0a0f1d",
  borderRadius = 20,
}) {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group overflow-hidden ${className}`}
      style={{ borderRadius: `${borderRadius}px` }}
    >
      {/* Dynamic Cursor Edge Glow Layer */}
      <div
        className="pointer-events-none absolute -inset-[1px] transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? glowIntensity : 0.35,
          background: `radial-gradient(${glowRadius * 4}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${colors.join(', ')}, transparent 70%)`,
        }}
      />

      {/* Base Border Outline */}
      <div
        className="pointer-events-none absolute inset-0 z-0 border border-white/10 transition-colors duration-300 group-hover:border-transparent"
        style={{ borderRadius: `${borderRadius}px` }}
      />

      {/* Inner Content Card */}
      <div
        className="relative z-10 w-full h-full"
        style={{
          backgroundColor,
          borderRadius: `${borderRadius - 1}px`,
          margin: '1px',
        }}
      >
        {children}
      </div>
    </div>
  );
}