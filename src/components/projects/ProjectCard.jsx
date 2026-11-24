import { ExternalLink, Eye, ArrowUpRight, Code2, MapPin, Server, ShieldCheck, Smartphone, ShoppingBag } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

// Project Mockup Illustrations
function ProjectPreviewIllustration({ id }) {
  switch (id) {
    case 'resqnet':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[11px] select-none">
          <div className="flex items-center justify-between text-slate-400 border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              GIS Disaster Map
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px]">
              Live Feeds
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-center">
              <span className="text-[10px] text-slate-400 block">Alert Radius</span>
              <span className="text-xs font-bold text-amber-400">12.5 km</span>
            </div>
            <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-center">
              <span className="text-[10px] text-slate-400 block">Safe Zones</span>
              <span className="text-xs font-bold text-emerald-400">8 Shelters</span>
            </div>
            <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-center">
              <span className="text-[10px] text-slate-400 block">Reports</span>
              <span className="text-xs font-bold text-sky-400">Verified</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
            <span>Leaflet Map Layer: OpenStreetMap</span>
            <span className="text-indigo-400">API: 200 OK</span>
          </div>
        </div>
      );

    case 'facegram':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between select-none font-sans text-xs">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500" />
              <span className="font-semibold text-slate-200 text-[11px]">@creative.dev</span>
            </div>
            <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">Decoupled SPA</span>
          </div>
          <div className="my-auto p-2.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-[11px] text-slate-300 font-medium">New post published via REST API</p>
              <p className="text-[10px] text-slate-400">34 likes • 8 comments</p>
            </div>
            <span className="text-xs text-rose-400">❤️ Liked</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/5 pt-1.5 font-mono">
            <span>Auth: Laravel Sanctum</span>
            <span className="text-sky-400">State: React Hook</span>
          </div>
        </div>
      );

    case 'bookshelf-api':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[11px] select-none text-slate-300">
          <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5" />
              REST API Endpoints
            </span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
              200 OK
            </span>
          </div>
          <div className="my-auto space-y-1 bg-black/40 p-2.5 rounded-lg border border-white/5 text-[10px]">
            <div><span className="text-sky-400">GET</span> /books?reading=1</div>
            <div><span className="text-amber-400">POST</span> /books <span className="text-slate-400">{"{ name, year }"}</span></div>
            <div><span className="text-emerald-400">RESPONSE:</span> <span className="text-indigo-300">{"{ status: 'success' }"}</span></div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/5 pt-1.5">
            <span>Postman Automated Tests</span>
            <span className="text-emerald-400">100% Passed</span>
          </div>
        </div>
      );

    case 'vaccinify':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between select-none text-xs font-sans">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="font-semibold text-blue-400 flex items-center gap-1 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Token-Secured Healthcare API
            </span>
            <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Bearer Auth</span>
          </div>
          <div className="my-auto p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-300 font-medium">Vaccine Verification</span>
              <span className="text-emerald-400 font-semibold text-[10px]">Verified Record</span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono">Dose: 1 & 2 Completed • Booster: Eligible</p>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/5 pt-1.5 font-mono">
            <span>Database: MySQL Relations</span>
            <span className="text-indigo-400">RBAC Protected</span>
          </div>
        </div>
      );

    case 'mini-social-app':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between select-none text-xs font-sans">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="font-semibold text-sky-400 flex items-center gap-1 text-[11px]">
              <Smartphone className="w-3.5 h-3.5" />
              Flutter Mobile Application
            </span>
            <span className="text-[10px] text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">60 FPS</span>
          </div>
          <div className="my-auto flex items-center gap-3 bg-black/40 p-2.5 rounded-xl border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-300 font-bold text-xs">
              UI
            </div>
            <div className="space-y-0.5">
              <p className="text-[11px] font-semibold text-slate-200">Mobile Responsive Cards</p>
              <p className="text-[10px] text-slate-400 font-mono">Dart • Material 3 Components</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/5 pt-1.5 font-mono">
            <span>Platform: Android / iOS</span>
            <span className="text-emerald-400">Declarative UI</span>
          </div>
        </div>
      );

    case 'elvara-shop':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between select-none text-xs font-sans">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="font-semibold text-pink-400 flex items-center gap-1 text-[11px]">
              <ShoppingBag className="w-3.5 h-3.5" />
              E-Commerce Product Catalog
            </span>
            <span className="text-[10px] text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded">Cart Ready</span>
          </div>
          <div className="my-auto grid grid-cols-2 gap-2">
            <div className="p-2 rounded-lg bg-black/40 border border-white/5">
              <span className="text-[10px] text-slate-400 block">Product Item #1</span>
              <span className="text-xs font-bold text-slate-200">Rp 199.000</span>
            </div>
            <div className="p-2 rounded-lg bg-black/40 border border-white/5">
              <span className="text-[10px] text-slate-400 block">Product Item #2</span>
              <span className="text-xs font-bold text-slate-200">Rp 249.000</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/5 pt-1.5 font-mono">
            <span>Bootstrap 5 Responsive</span>
            <span className="text-pink-400">Vanilla JS Cart</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-mono">
          <Code2 className="w-8 h-8 text-indigo-400" />
        </div>
      );
  }
}

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between h-full group border border-theme transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10">
      <div>
        {/* Sleek App Window Header */}
        <div className="bg-[#0e1424] border-b border-white/5 pt-3 px-4 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-slate-400">
              {project.id}.dev
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
            {project.category}
          </span>
        </div>

        {/* Visual Interactive App Mockup Canvas */}
        <div className="h-44 bg-[#090d16] relative overflow-hidden border-b border-white/5 group-hover:bg-[#0b101c] transition-colors">
          <ProjectPreviewIllustration id={project.id} />
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-3.5">
          <div>
            <h3 className="text-lg font-bold text-text-primary group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-indigo-400/90 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono border border-theme bg-secondary/80 text-text-secondary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-text-secondary bg-secondary/40">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer with generous padding & no line collision */}
      <div className="px-6 py-5 border-t border-theme/60 mt-4 flex items-center justify-between gap-3 bg-secondary/10">
        <button
          onClick={() => onOpenDetails(project)}
          type="button"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35 cursor-pointer"
        >
          <Eye className="w-4 h-4" />
          <span>View Case Study</span>
        </button>

        <div className="flex items-center gap-1.5">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-theme bg-card hover:bg-card-hover text-text-secondary hover:text-text-primary hover:border-indigo-500/50 transition-colors"
              title="GitHub Repository"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {project.links.liveDemo ? (
            <a
              href={project.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-theme bg-card hover:bg-card-hover text-text-secondary hover:text-sky-400 hover:border-sky-500/50 transition-colors"
              title="Live Demo"
              aria-label="Live Demo"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : (
            <button
              disabled
              className="p-2.5 rounded-xl border border-theme/40 bg-card/40 text-text-secondary/40 cursor-not-allowed"
              title="Demo in Local Environment / Showcase"
              aria-label="Demo in Local Environment"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
