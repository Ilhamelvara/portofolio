import { useState, useEffect } from 'react';
import ContributionTooltip from './ContributionTooltip';
import ContributionLegend from './ContributionLegend';

export default function ContributionCalendar({ weeks, months }) {
  const [activeDay, setActiveDay] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, bottom: 0 });

  // Dismiss tooltip on scroll or resize so it never lingers in stale position
  useEffect(() => {
    if (!activeDay) return;

    const handleDismiss = () => {
      setActiveDay(null);
    };

    window.addEventListener('scroll', handleDismiss, { passive: true, capture: true });
    window.addEventListener('resize', handleDismiss, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleDismiss, { capture: true });
      window.removeEventListener('resize', handleDismiss);
    };
  }, [activeDay]);

  const handleMouseEnter = (day, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setActiveDay(day);
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top,
      bottom: rect.bottom,
    });
  };

  const handleMouseLeave = () => {
    setActiveDay(null);
  };

  // Helper for color scale based on GitHub API color or fallback
  const getDayColor = (day) => {
    if (!day) return 'bg-transparent';
    if (day.contributionCount === 0) {
      return 'bg-slate-800/20 dark:bg-slate-800/40 border border-slate-700/15 hover:border-indigo-400/50';
    }
    // High-visibility green color scale
    if (day.contributionCount <= 2) {
      return 'bg-[#9be9a8] dark:bg-[#0e4429] border border-[#0e4429]/40 hover:ring-2 hover:ring-emerald-400';
    }
    if (day.contributionCount <= 5) {
      return 'bg-[#40c463] dark:bg-[#006d32] border border-[#006d32]/40 hover:ring-2 hover:ring-emerald-400';
    }
    if (day.contributionCount <= 9) {
      return 'bg-[#30a14e] dark:bg-[#26a641] border border-[#26a641]/40 hover:ring-2 hover:ring-emerald-400';
    }
    return 'bg-[#216e39] dark:bg-[#39d353] border border-[#39d353]/40 hover:ring-2 hover:ring-emerald-400 shadow-sm shadow-emerald-500/20';
  };

  return (
    <div className="space-y-4">
      {/* Scrollable Calendar Canvas */}
      <div
        className="overflow-x-auto pb-2 pt-1 scrollbar-thin"
        onScroll={() => {
          if (activeDay) setActiveDay(null);
        }}
      >
        <div className="min-w-[760px] max-w-full">
          {/* Months Row Header */}
          <div className="flex text-[11px] text-text-secondary font-mono mb-2.5 pl-8">
            {months && months.length > 0 ? (
              months.map((m, idx) => (
                <div
                  key={`${m.name}-${idx}`}
                  style={{ width: `${(m.totalWeeks || 4) * 14.5}px` }}
                  className="truncate"
                >
                  {m.name}
                </div>
              ))
            ) : (
              <div className="flex justify-between w-full pr-4">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            )}
          </div>

          {/* Grid Rows (7 weekdays x weeks) */}
          <div className="flex gap-1.5">
            {/* Weekday indicators */}
            <div className="flex flex-col justify-between text-[10px] text-text-secondary font-mono pr-2 h-[96px] select-none">
              <span className="leading-none pt-0.5">Mon</span>
              <span className="leading-none">Wed</span>
              <span className="leading-none pb-0.5">Fri</span>
            </div>

            {/* Weeks columns */}
            <div className="flex gap-1 flex-1">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {week.contributionDays.map((day) => (
                    <div
                      key={day.date}
                      onClick={() => setActiveDay(day)}
                      onMouseEnter={(e) => handleMouseEnter(day, e)}
                      onMouseLeave={handleMouseLeave}
                      className={`w-3 h-3 rounded-[2.5px] transition-all duration-150 cursor-pointer ${getDayColor(
                        day
                      )}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Bottom Legend & Info */}
      <div className="pt-3 border-t border-theme/60 flex flex-wrap items-center justify-between gap-3 text-xs text-text-secondary">
        <div className="font-mono text-[11px] flex items-center gap-1.5 min-h-[20px]">
          {activeDay ? (
            <span>
              <strong
                className={
                  activeDay.contributionCount === 0
                    ? 'text-text-secondary font-semibold'
                    : 'text-emerald-500 dark:text-emerald-400 font-bold'
                }
              >
                {activeDay.contributionCount === 0
                  ? '0 contributions'
                  : `${activeDay.contributionCount} contribution${
                      activeDay.contributionCount > 1 ? 's' : ''
                    }`}
              </strong>{' '}
              on{' '}
              {new Date(activeDay.date).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          ) : (
            <span>7 days / week • Real-time GraphQL synchronization</span>
          )}
        </div>
        <ContributionLegend />
      </div>

      {/* Floating Hover Tooltip */}
      <ContributionTooltip activeDay={activeDay} position={tooltipPos} />
    </div>
  );
}
