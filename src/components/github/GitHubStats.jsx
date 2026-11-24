import { ExternalLink, GitCommit, Calendar, Flame } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export default function GitHubStats({
  username,
  totalContributions,
  selectedYear,
  profileUrl,
}) {
  const displayYear = selectedYear === 'last_year' ? 'Last 12 Months' : selectedYear;

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-theme">
      {/* User Info & Identity */}
      <div className="flex items-center gap-3.5">
        <div className="p-3 rounded-2xl bg-[#0e1424] text-white border border-white/10 shadow-lg">
          <GithubIcon className="w-6 h-6 text-indigo-400" />
        </div>
        <div>
          <div className="flex items-center gap-2.5">
            <h3 className="font-bold text-lg text-text-primary">
              @{username}
            </h3>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Flame className="w-3 h-3" />
              Verified Activity
            </span>
          </div>
          <p className="text-xs text-text-secondary mt-0.5 font-medium">
            Active Developer on GitHub • Open Source & Personal Projects
          </p>
        </div>
      </div>

      {/* Metrics & Action Button */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        {/* Total Metric Card */}
        <div className="px-4 py-2 rounded-xl bg-secondary/50 border border-theme flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
            <GitCommit className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-text-secondary uppercase font-semibold tracking-wider block">
              Total Activity
            </span>
            <span className="text-sm sm:text-base font-extrabold text-text-primary">
              {totalContributions} <span className="text-xs font-normal text-text-secondary">contributions</span>
            </span>
          </div>
        </div>

        {/* Selected Year Card */}
        <div className="px-4 py-2 rounded-xl bg-secondary/50 border border-theme flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-text-secondary uppercase font-semibold tracking-wider block">
              Period
            </span>
            <span className="text-xs sm:text-sm font-bold text-text-primary">
              {displayYear}
            </span>
          </div>
        </div>

        {/* GitHub Profile Button */}
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40"
        >
          <span>View GitHub Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
