"use client";

/**
 * TechBackground Component
 * Elegant animated tech icons background
 * Pure CSS animations, ultra-low opacity, high performance
 * Inspired by Apple/Anthropic/Perplexity/Cursor AI aesthetics
 */

import { useEffect, useRef } from 'react';

interface TechBackgroundProps {
  className?: string;
  iconCount?: number;
}

// SVG Icon paths - Simplified tech icons
const techIcons = [
  // Microchip icon
  { 
    path: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    viewBox: "0 0 24 24"
  },
  // Robot icon
  {
    path: "M9 3a1 1 0 000 2h2a1 1 0 100-2H9zM4 5a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM8 10a1 1 0 100 2h8a1 1 0 100-2H8zM6 15a1 1 0 100 2h2a1 1 0 100-2H6zM16 15a1 1 0 100 2h2a1 1 0 100-2h-2z",
    viewBox: "0 0 20 20"
  },
  // Network/Wired icon
  {
    path: "M6 6a2 2 0 114 0 2 2 0 01-4 0zM14 6a2 2 0 114 0 2 2 0 01-4 0zM6 18a2 2 0 114 0 2 2 0 01-4 0zM14 18a2 2 0 114 0 2 2 0 01-4 0zM2 12h20M10 6v12M14 6v12",
    viewBox: "0 0 24 24"
  },
  // Brain icon
  {
    path: "M9.5 2A2.5 2.5 0 007 4.5v15a2.5 2.5 0 005 0v-15A2.5 2.5 0 009.5 2zM14.5 2A2.5 2.5 0 0012 4.5v15a2.5 2.5 0 005 0v-15A2.5 2.5 0 0014.5 2z",
    viewBox: "0 0 20 20"
  },
  // Cloud icon
  {
    path: "M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z",
    viewBox: "0 0 20 20"
  },
  // Gear icon
  {
    path: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    viewBox: "0 0 20 20"
  },
  // Code icon
  {
    path: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z",
    viewBox: "0 0 20 20"
  },
  // Key icon
  {
    path: "M18 8a6 6 0 01-7.743 5.743L10 14l-4 4-4-4 4-4 .257-.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",
    viewBox: "0 0 20 20"
  },
  // Shield icon
  {
    path: "M10 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-7-4z",
    viewBox: "0 0 20 20"
  },
  // Bolt/Lightning icon
  {
    path: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
    viewBox: "0 0 20 20"
  },
];

const colors = [
  '#66FFCC', // mint
  '#7A00F5', // violet
  '#4D4D4D', // dark gray
];

export default function TechBackground({ className = "", iconCount = 8 }: TechBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure icons are distributed randomly on mount
    if (containerRef.current) {
      const icons = containerRef.current.querySelectorAll('.tech-icon');
      icons.forEach((icon) => {
        const delay = Math.random() * 5;
        (icon as HTMLElement).style.animationDelay = `${delay}s`;
      });
    }
  }, []);

  // Select random icons
  const selectedIcons = [];
  for (let i = 0; i < iconCount; i++) {
    const randomIcon = techIcons[Math.floor(Math.random() * techIcons.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomSize = 24 + Math.random() * 36; // 24-60px
    const randomLeft = Math.random() * 100; // 0-100%
    const randomTop = Math.random() * 100; // 0-100%
    const randomAnimationDuration = 20 + Math.random() * 15; // 20-35s
    const randomOpacity = 0.03 + Math.random() * 0.05; // 0.03-0.08
    
    selectedIcons.push({
      icon: randomIcon,
      color: randomColor,
      size: randomSize,
      left: randomLeft,
      top: randomTop,
      duration: randomAnimationDuration,
      opacity: randomOpacity,
    });
  }

  return (
    <div 
      ref={containerRef}
      className={`tech-background-icons absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {selectedIcons.map((item, index) => (
        <svg
          key={index}
          className="tech-icon"
          width={item.size}
          height={item.size}
          viewBox={item.icon.viewBox || "0 0 24 24"}
          fill="none"
          stroke={item.color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            position: 'absolute',
            left: `${item.left}%`,
            top: `${item.top}%`,
            opacity: item.opacity,
            filter: 'blur(0.5px)',
            animation: `techIconFall ${item.duration}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <path d={item.icon.path} />
        </svg>
      ))}
    </div>
  );
}
