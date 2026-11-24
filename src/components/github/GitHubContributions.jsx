import { useState, useEffect } from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import GitHubStats from './GitHubStats';
import ContributionCalendar from './ContributionCalendar';
import { fetchGitHubContributions } from '../../services/githubService';
import { RefreshCw, AlertCircle, Sparkles } from 'lucide-react';

const availableYears = [
  { label: 'Last 12 Months', value: 'last_year' },
  { label: '2026', value: 2026 },
  { label: '2025', value: 2025 },
  { label: '2024', value: 2024 },
];

export default function GitHubContributions() {
  const [selectedYear, setSelectedYear] = useState('last_year');
  const [refreshKey, setRefreshKey] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadContributions() {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchGitHubContributions(selectedYear);
        if (!ignore) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || 'Unable to load GitHub contributions. Please try again later.');
          setLoading(false);
        }
      }
    }

    loadContributions();

    return () => {
      ignore = true;
    };
  }, [selectedYear, refreshKey]);

  const handleRetry = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <section id="contributions" className="py-20 lg:py-28 relative bg-secondary/30 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Live GitHub Activity"
          title="GitHub Contributions"
          subtitle="Konsistensi dan dedikasi coding yang tercatat secara transparan langsung dari GitHub GraphQL API."
        />

        <ScrollReveal direction="up" delay={0.15}>
          {/* Main Container Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-theme space-y-6">
            {/* Year Filter Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-theme/60">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Select Period:
                </span>
                <div className="inline-flex flex-wrap p-1 rounded-xl bg-secondary/70 border border-theme gap-1">
                  {availableYears.map((yr) => {
                    const isActive = selectedYear === yr.value;
                    return (
                      <button
                        key={yr.label}
                        onClick={() => setSelectedYear(yr.value)}
                        type="button"
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                            : 'text-text-secondary hover:text-text-primary hover:bg-card-hover'
                        }`}
                      >
                        {yr.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-text-secondary font-mono">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>"Consistency is the key to growth."</span>
              </div>
            </div>

            {/* Error State */}
            {error && (
              <div className="p-6 rounded-2xl border border-rose-500/30 bg-rose-500/10 text-rose-400 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-xs sm:text-sm font-medium">
                    Unable to load GitHub contributions. Please try again later.
                  </p>
                </div>
                <button
                  onClick={handleRetry}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 text-white hover:bg-rose-700 transition-colors shadow-sm cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retry</span>
                </button>
              </div>
            )}

            {/* Loading Skeleton */}
            {loading && !error && (
              <div className="space-y-6 animate-pulse">
                <div className="h-16 bg-secondary/60 rounded-xl" />
                <div className="h-32 bg-secondary/50 rounded-xl" />
                <div className="h-8 bg-secondary/40 rounded-xl w-1/3" />
              </div>
            )}

            {/* Data Success Presentation */}
            {!loading && !error && data && (
              <div className="space-y-6 animate-fade-in">
                <GitHubStats
                  username={data.username || 'Ilhamelvara'}
                  totalContributions={data.totalContributions || 0}
                  selectedYear={selectedYear}
                  profileUrl={data.profileUrl || 'https://github.com/Ilhamelvara'}
                />

                <ContributionCalendar
                  weeks={data.weeks || []}
                  months={data.months || []}
                />
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
