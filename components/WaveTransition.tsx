/**
 * WaveTransition Component
 * Animated wave transition effect between sections
 * Creates a parallax effect with multiple wave layers moving at different speeds
 */

import { memo } from 'react';

interface WaveTransitionProps {
  className?: string;
  fillColor?: string;
  height?: number;
}

function WaveTransition({ 
  className = "", 
  fillColor = "#FFFFFF",
  height = 150 
}: WaveTransitionProps) {
  return (
    <div className={`wave-container ${className}`}>
      <svg 
        className="waves" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" 
        preserveAspectRatio="none" 
        shapeRendering="auto"
        style={{ height: `${height}px` }}
      >
        <defs>
          <path 
            id="gentle-wave" 
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" 
          />
        </defs>
        <g className="animated-wave-group">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill={fillColor} />
        </g>
      </svg>
    </div>
  );
}

export default memo(WaveTransition);
