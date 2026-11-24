import { useState } from 'react';
import { ArrowRight, Download, Mail, Terminal, Copy, Check, Sparkles, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import SocialLinks from '../common/SocialLinks';
import { personalData } from '../../data/personal';

const floatingBadges = [
  { name: 'React.js', icon: '⚛️', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10' },
  { name: 'Laravel', icon: '🔺', color: 'border-red-500/30 text-red-400 bg-red-500/10' },
  { name: 'REST API', icon: '⚡', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' },
  { name: 'Tailwind CSS', icon: '🎨', color: 'border-sky-500/30 text-sky-400 bg-sky-500/10' },
  { name: 'MySQL', icon: '🗄️', color: 'border-amber-500/30 text-amber-400 bg-amber-500/10' },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const codeSnippet = `const developer = {
  name: "Mohammad Ilham Putra Irawan",
  role: "Junior Web Developer",
  status: "Available for Hire / Projects",
  coreSkills: ["React.js", "Laravel", "REST API", "Tailwind CSS"],
  passions: ["Clean Code", "Modern UI/UX", "Problem Solving"],
  readyToContribute: true
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden scroll-mt-20 lg:scroll-mt-24"
    >
      {/* Background Subtle Gradient & Grid Patterns */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] dark:opacity-[0.06]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & CTAs with animated entrance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 badge-glow"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalData.statusBadge}</span>
            </motion.div>

            {/* Greetings, Avatar & Name */}
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <div className="relative w-12 h-12 rounded-xl p-[1.5px] bg-gradient-to-tr from-indigo-500 to-sky-400 shrink-0 shadow-md shadow-indigo-500/20">
                  <img
                    src={personalData.avatarUrl}
                    alt={personalData.fullName}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/profile.svg';
                    }}
                    className="w-full h-full object-cover rounded-[10px] bg-[#0d1322]"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-indigo-400">
                    {personalData.hero.greeting}
                  </p>
                  <p className="text-[11px] text-text-secondary font-medium">
                    Welcome to my portfolio
                  </p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.15]">
                {personalData.fullName}
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-semibold bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                {personalData.professionalTitle}
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight leading-snug">
              {personalData.hero.headline}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalData.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 hover:from-indigo-600 hover:to-sky-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-theme bg-card hover:bg-card-hover text-text-primary hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalData.hero.cvDownloadUrl}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 transition-all duration-200"
                title="Download CV / Resume"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 border-t border-theme">
              <span className="text-xs font-medium text-text-secondary">
                Connect with me:
              </span>
              <SocialLinks />
            </div>
          </motion.div>

          {/* Right Column: High-Tech Floating Developer Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 relative flex justify-center py-6"
          >
            {/* Pulsing Aura Glow behind the terminal */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-4 bg-gradient-to-tr from-indigo-500/30 via-sky-500/25 to-purple-500/20 rounded-3xl blur-3xl -z-10 pointer-events-none"
            />

            {/* Floating Satellite Badge 1 (Top Right) */}
            <motion.div
              animate={{
                y: [-6, 8, -6],
                x: [0, 4, 0],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-3 -right-3 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-indigo-500/30 bg-[#0d1322]/90 backdrop-blur-md text-indigo-300 text-xs font-mono shadow-xl badge-glow"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Clean Code</span>
            </motion.div>

            {/* Floating Satellite Badge 2 (Bottom Left) */}
            <motion.div
              animate={{
                y: [8, -7, 8],
                x: [0, -3, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-3 -left-3 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-500/30 bg-[#0d1322]/90 backdrop-blur-md text-emerald-300 text-xs font-mono shadow-xl"
            >
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>Fullstack Ready</span>
            </motion.div>

            {/* Levitating / Floating Main Terminal Card */}
            <motion.div
              animate={{
                y: [0, -14, 0],
                rotateZ: [0, 0.8, 0, -0.8, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              className="w-full max-w-lg rounded-2xl border border-theme bg-[#0d1322] text-slate-200 shadow-2xl shadow-indigo-950/50 overflow-hidden font-mono text-xs sm:text-sm cursor-default"
            >
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#090d16] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-indigo-400" />
                    developer.ts — active session
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  type="button"
                  className="p-1 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy code snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 overflow-x-auto text-[13px] leading-relaxed">
                <div className="text-slate-500 mb-2">// Junior Web Developer Profile</div>
                <div className="space-y-1">
                  <div>
                    <span className="text-indigo-400">const</span>{' '}
                    <span className="text-sky-300">developer</span>{' '}
                    <span className="text-indigo-400">=</span> {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"{personalData.fullName}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-emerald-300">"{personalData.professionalTitle}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-emerald-300">"Available for Hire"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">coreTech:</span> [
                    <span className="text-sky-300">"React"</span>,{' '}
                    <span className="text-rose-300">"Laravel"</span>,{' '}
                    <span className="text-emerald-300">"REST API"</span>,{' '}
                    <span className="text-amber-300">"MySQL"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">openToWork:</span>{' '}
                    <span className="text-indigo-300">true</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">learningVelocity:</span>{' '}
                    <span className="text-emerald-400">"Continuous"</span>
                  </div>
                  <div>{'};'}</div>
                  <div className="pt-2 text-slate-500">// Ready to learn, build, and ship.</div>
                  <div className="flex items-center gap-1.5 text-emerald-400 pt-1 font-semibold">
                    <span className="text-indigo-400">&gt;</span> developer.buildNextProject();
                    <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1" />
                  </div>
                </div>
              </div>

              {/* Terminal Bottom Badges */}
              <div className="px-4 py-3 bg-[#0a0f1c] border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans font-semibold">
                  Technologies:
                </span>
                {floatingBadges.map((badge) => (
                  <span
                    key={badge.name}
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-sans font-medium border ${badge.color}`}
                  >
                    <span>{badge.icon}</span>
                    <span>{badge.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
