/**
 * WaveSeparator Component
 * Professional wave separator with animated layers
 * Smooth transitions between sections with solid base layer
 */

import { memo } from 'react';

interface WaveSeparatorProps {
  nextBg?: string;
  className?: string;
}

function WaveSeparator({ 
  nextBg = "#FFFFFF",
  className = ""
}: WaveSeparatorProps) {
  return (
    <div className={`relative w-full overflow-hidden wave-separator ${className}`} style={{ transform: 'translateZ(0)', zIndex: 0 }}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" 
        preserveAspectRatio="none" 
        shapeRendering="geometricPrecision"
        className="block w-full h-[120px] sm:h-[160px]"
        style={{ transform: 'translateZ(0)', display: 'block' }}
        aria-hidden="true"
      >
        <defs>
          <path 
            id="wave-separator-path" 
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" 
          />
        </defs>
        <g className="wave-separator-group">
          {/* Layer 1 - Top layer (slowest) */}
          <use 
            xlinkHref="#wave-separator-path" 
            x="48" 
            y="0" 
            fill="rgba(255,255,255,0.7)"
            className="wave-separator-layer-1"
          />
          {/* Layer 2 */}
          <use 
            xlinkHref="#wave-separator-path" 
            x="48" 
            y="3" 
            fill="rgba(255,255,255,0.5)"
            className="wave-separator-layer-2"
          />
          {/* Layer 3 */}
          <use 
            xlinkHref="#wave-separator-path" 
            x="48" 
            y="5" 
            fill="rgba(255,255,255,0.3)"
            className="wave-separator-layer-3"
          />
          {/* Layer 4 - Base layer (solid, matches next section background) */}
          <use 
            xlinkHref="#wave-separator-path" 
            x="48" 
            y="7" 
            fill={nextBg}
            className="wave-separator-layer-4"
          />
        </g>
      </svg>
    </div>
  );
}

export default memo(WaveSeparator);
