import { createPortal } from 'react-dom';

export default function ContributionTooltip({ activeDay, position }) {
  if (!activeDay || !position || typeof document === 'undefined') return null;

  // Format date: e.g. "August 27, 2026"
  const formattedDate = new Date(activeDay.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const contributionText =
    activeDay.contributionCount === 0
      ? 'No contributions'
      : activeDay.contributionCount === 1
      ? '1 contribution'
      : `${activeDay.contributionCount} contributions`;

  // Flip below if cell is too close to the top of the viewport
  const isTooCloseToTop = position.y < 120;
  const topPos = isTooCloseToTop ? (position.bottom || position.y + 12) + 8 : position.y - 8;

  // Clamping horizontally so tooltip doesn't get clipped on mobile or screen edges
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
  const clampedX = Math.max(130, Math.min(screenWidth - 130, position.x));
  const arrowOffset = Math.max(-55, Math.min(55, position.x - clampedX));

  const tooltipElement = (
    <div
      style={{
        left: `${clampedX}px`,
        top: `${topPos}px`,
      }}
      className={`fixed z-[9999] pointer-events-none select-none -translate-x-1/2 ${
        isTooCloseToTop ? 'translate-y-0' : '-translate-y-full'
      } px-3 py-1.5 rounded-xl bg-slate-950/95 dark:bg-slate-900/95 text-white text-[11px] font-sans border border-slate-700/60 shadow-2xl backdrop-blur-md whitespace-nowrap transition-transform duration-75 ease-out`}
    >
      <div className="flex items-center gap-1.5 font-medium">
        <span
          className={`font-bold ${
            activeDay.contributionCount === 0 ? 'text-slate-400' : 'text-emerald-400'
          }`}
        >
          {contributionText}
        </span>
        <span className="text-slate-300">on {formattedDate}</span>
      </div>

      {/* Triangle arrow */}
      <div
        style={{ left: `calc(50% + ${arrowOffset}px)` }}
        className={`absolute -translate-x-1/2 border-4 border-transparent ${
          isTooCloseToTop
            ? 'bottom-full border-b-slate-950/95 dark:border-b-slate-900/95'
            : 'top-full border-t-slate-950/95 dark:border-t-slate-900/95'
        }`}
      />
    </div>
  );

  return createPortal(tooltipElement, document.body);
}

