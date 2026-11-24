import { useEffect } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Cpu,
  Layers,
  Code2,
} from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { detail, links, technologies, stats } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-card border border-theme rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-theme bg-card/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                  {project.title}
                </h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {project.category}
                </span>
              </div>
              <p className="text-xs text-text-secondary">
                {project.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-xl border border-theme bg-card hover:bg-card-hover text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-7 overflow-y-auto text-text-secondary leading-relaxed">
          {/* Top Banner Overview */}
          <div className="p-6 rounded-2xl bg-[#090d16] border border-theme space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-secondary/80 border border-theme text-indigo-300">
                {project.tag}
              </span>
              <span className="text-xs font-semibold text-text-secondary">
                Case Study Overview
              </span>
            </div>
            <p className="text-sm text-text-primary leading-relaxed">
              {detail.overview}
            </p>

            {/* Quick Stats Grid */}
            {stats && stats.length > 0 && (
              <div className="mt-4 pt-4 border-t border-theme/60 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {stats.map((item, idx) => (
                  <div key={idx} className="bg-secondary/40 p-3 rounded-xl border border-theme">
                    <span className="block text-[10px] text-text-secondary uppercase tracking-wider font-semibold">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-text-primary">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Problem Statement & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl border border-theme bg-secondary/30 space-y-2 border-l-4 border-l-amber-500">
              <h5 className="font-bold text-text-primary text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>Problem Statement</span>
              </h5>
              <p className="text-xs sm:text-sm leading-relaxed">{detail.problem}</p>
            </div>

            <div className="p-5 rounded-xl border border-theme bg-secondary/30 space-y-2 border-l-4 border-l-emerald-500">
              <h5 className="font-bold text-text-primary text-sm flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-emerald-500" />
                <span>Solution Provided</span>
              </h5>
              <p className="text-xs sm:text-sm leading-relaxed">{detail.solution}</p>
            </div>
          </div>

          {/* Project Background */}
          <div className="space-y-2">
            <h5 className="font-bold text-text-primary text-sm uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Project Background</span>
            </h5>
            <p className="text-xs sm:text-sm leading-relaxed">{detail.background}</p>
          </div>

          {/* Main Features */}
          <div className="space-y-3">
            <h5 className="font-bold text-text-primary text-sm uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Main Features & Capabilities</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {detail.mainFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl border border-theme bg-secondary/40 text-xs sm:text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-text-primary">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h5 className="font-bold text-text-primary text-sm uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Technologies & Tools</span>
            </h5>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
            <div className="p-4 rounded-xl border border-theme bg-secondary/20 space-y-1.5">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide block">
                Development Challenges
              </span>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {detail.challenges}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-theme bg-secondary/20 space-y-1.5">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide block">
                Key Learning Outcomes
              </span>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {detail.learnings}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-4 border-t border-theme bg-secondary/50 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-text-secondary">
            Status: <span className="font-semibold text-text-primary">{links.status}</span>
          </div>

          <div className="flex items-center gap-3">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-theme bg-card hover:bg-card-hover text-text-primary hover:border-indigo-500/50 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}

            {links.liveDemo ? (
              <a
                href={links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-600/30"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="text-xs text-text-secondary italic">
                (Configured for local review / portfolio showcase)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
