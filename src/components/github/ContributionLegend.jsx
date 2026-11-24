export default function ContributionLegend() {
  return (
    <div className="flex items-center gap-2 text-xs text-text-secondary select-none">
      <span className="text-[11px]">Less</span>
      <div className="flex items-center gap-1">
        <div className="w-3 h-3 rounded-[2.5px] bg-slate-800/40 border border-slate-700/20" title="0 contributions" />
        <div className="w-3 h-3 rounded-[2.5px] bg-[#9be9a8] dark:bg-[#0e4429]" title="1-3 contributions" />
        <div className="w-3 h-3 rounded-[2.5px] bg-[#40c463] dark:bg-[#006d32]" title="4-6 contributions" />
        <div className="w-3 h-3 rounded-[2.5px] bg-[#30a14e] dark:bg-[#26a641]" title="7-9 contributions" />
        <div className="w-3 h-3 rounded-[2.5px] bg-[#216e39] dark:bg-[#39d353]" title="10+ contributions" />
      </div>
      <span className="text-[11px]">More</span>
    </div>
  );
}
