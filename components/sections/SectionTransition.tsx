/**
 * SectionTransition Component
 * Minimal tech lines + AI neural patterns transition
 * Professional, modern, and elegant - inspired by Perplexity/Cursor AI/Anthropic
 * Mobile-first, responsive, and accessible
 * 
 * Creates a subtle technological visual bridge between sections
 * with minimal opacity (3-7%) and slow animations (15-20s)
 */

interface SectionTransitionProps {
  className?: string;
}

export default function SectionTransition({ className = "" }: SectionTransitionProps) {
  return (
    <div 
      className={`relative w-full overflow-hidden ${className}`}
      aria-hidden="true"
      role="presentation"
      style={{
        height: 'clamp(200px, 20vw, 300px)',
      }}
    >
      {/* Tech Lines + AI Neural Patterns Background */}
      <div 
        className="absolute inset-0 w-full h-full section-transition-bg"
        style={{
          background: `
            /* AI Neural Patterns - subtle radial gradients */
            radial-gradient(circle at 30% 20%, rgba(102, 255, 204, 0.06), transparent 70%),
            radial-gradient(circle at 70% 80%, rgba(120, 0, 255, 0.04), transparent 75%),
            /* Minimal Tech Lines - horizontal subtle lines */
            url("data:image/svg+xml,%3Csvg width='240' height='240' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='20' x2='240' y2='20' stroke='%23999999' stroke-opacity='0.12' stroke-width='1'/%3E%3Cline x1='0' y1='60' x2='240' y2='60' stroke='%23999999' stroke-opacity='0.08' stroke-width='1'/%3E%3Cline x1='0' y1='100' x2='240' y2='100' stroke='%23999999' stroke-opacity='0.06' stroke-width='1'/%3E%3Cline x1='0' y1='140' x2='240' y2='140' stroke='%23999999' stroke-opacity='0.05' stroke-width='1'/%3E%3C/svg%3E"),
            /* Smooth gradient transition from white to white */
            linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)
          `,
          backgroundSize: 'cover, cover, 240px 240px, 100% 100%',
          opacity: 0.5,
        }}
      />
    </div>
  );
}

