"use client";
import React from 'react';

// A curated selection of SVG paths for the icons.
// Using paths directly avoids installing the full FontAwesome library.
const ICONS = {
  microchip: "M14 2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM9 4v1H7V4h2zm-2 2v1H5V6h2zm-2 2v1H3V8h2zm0 2v1H3v-1h2zm0 2v1H3v-1h2zm2 2v1H5v-1h2zm2 0v1H7v-1h2zm2-2v1H9v-1h2zm0-2v1H9v-1h2zm0-2v1H9V8h2zm2-2v1h-2V6h2z",
  robot: "M11 2a1 1 0 0 1 1 1v1h2V3a1 1 0 0 1 1-1zM5 2a1 1 0 0 1 1 1v1h2V3a1 1 0 0 1 1-1zm6 5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1V7zM6 9h4v2H6V9z",
  brain: "M9.5 2a2.5 2.5 0 0 0-2.475 2.095A6.5 6.5 0 0 0 1 8.5v2a.5.5 0 0 0 .5.5h1.15a.5.5 0 0 0 .493-.405 4.5 4.5 0 0 1 4.352-3.595A4.5 4.5 0 0 1 12 9.5a.5.5 0 0 0 .5.5h1.15a.5.5 0 0 0 .493-.405 4.5 4.5 0 0 1 4.352-3.595A4.5 4.5 0 0 1 23 9.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5v-2A6.5 6.5 0 0 0 18.975 4.095 2.5 2.5 0 0 0 16.5 2a2.5 2.5 0 0 0-2.475 2.095A6.5 6.5 0 0 0 9.5 2zM1 9.5a5.5 5.5 0 0 1 5.5-5.5A5.5 5.5 0 0 1 12 9.5a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 1 9.5zm15.5-5.5a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 11 9.5a5.5 5.5 0 0 1 5.5-5.5z",
  code: "M4.5 5.5a.5.5 0 0 1 0 1L1.707 9.5l2.793 2.999a.5.5 0 1 1-.707.708l-3.147-3.353a.5.5 0 0 1 0-.708l3.147-3.353a.5.5 0 0 1 .707 0zm7 0a.5.5 0 0 0 0 1l2.793 2.999-2.793 2.999a.5.5 0 1 0 .707.708l3.147-3.353a.5.5 0 0 0 0-.708l-3.147-3.353a.5.5 0 0 0-.707 0z",
  shield: "M8 0c-.23 0-.45.02-.67.05C3.95.28.5 3.88.5 8.25c0 4.12 3.1 7.57 7.03 8.18.22.03.44.05.67.05s.45-.02.67-.05C12.4.8 15.5 12.37 15.5 8.25 15.5 3.88 12.05.28 8.67.05 8.45.02 8.23 0 8 0zm0 1.14c.19 0 .38.01.56.04 2.9.26 5.44 2.8 5.44 5.91 0 3.1-2.55 5.65-5.44 5.91-.18.03-.37.04-.56.04s-.38-.01-.56-.04C4.55 12.8 2 10.25 2 7.1c0-3.1 2.55-5.65 5.44-5.91C7.62 1.15 7.81 1.14 8 1.14z",
  key: "M12.5 0a5.5 5.5 0 0 0-5.5 5.5V7H6v1H5v1H4v1H3v1H2v1H1v2h1v1h1v1h1v1h1v1h1v1h1v-1h.5v-1h.5v-1h.5v-1h.5v-1h.5v-1h.5a5.5 5.5 0 1 0 0-11zm-1 1a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z",
  bolt: "M6 0a.5.5 0 0 1 .5.5v4.793L11.293.5a.5.5 0 0 1 .707.707L7.207 6H11.5a.5.5 0 0 1 .354.854l-8 8a.5.5 0 0 1-.708-.708L7.207 10H2.5a.5.5 0 0 1-.354-.854l8-8A.5.5 0 0 1 6 0z",
  gear: "M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0zM13.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM8.75 1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zM2.25 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6.5 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z",
};

const PALETTE = {
  mint: '#66FFCC',
  violet: '#7A00F5',
  grey: 'rgba(77, 77, 77, 0.5)', // Use RGBA for opacity control
};

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const generateIcons = (count: number) => {
  const iconKeys = Object.keys(ICONS);
  const paletteKeys = Object.values(PALETTE);

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    path: ICONS[iconKeys[Math.floor(random(0, iconKeys.length))] as keyof typeof ICONS],
    color: paletteKeys[Math.floor(random(0, paletteKeys.length))],
    size: random(20, 50),
    style: {
      top: `${random(-10, 90)}%`,
      left: `${random(-10, 90)}%`,
      animationDuration: `${random(20, 35)}s`,
      animationDelay: `${random(0, 20)}s`,
    },
  }));
};

const TechBackground = () => {
  // Memoize the generated icons so they don't re-randomize on every render
  const icons = React.useMemo(() => generateIcons(15), []);

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden" aria-hidden="true">
      {icons.map(icon => (
        <div
          key={icon.id}
          className="tech-icon"
          style={{
            ...icon.style,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            backgroundColor: icon.color,
            WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="${icon.path}" /></svg>')`,
            maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="${icon.path}" /></svg>')`,
          }}
        />
      ))}
    </div>
  );
};

export default TechBackground;
