import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { skillCategories } from '../../data/skills';
import {
  Code,
  Palette,
  FileCode,
  Server,
  Smartphone,
  Atom,
  Zap,
  Wind,
  LayoutGrid,
  ArrowLeftRight,
  Compass,
  Box,
  Network,
  Key,
  Lock,
  ShieldCheck,
  Database,
  HardDrive,
  Layers,
  Cpu,
  Terminal,
  GitBranch,
  Send,
  Container,
} from 'lucide-react';
import { GithubIcon, FigmaIcon } from '../common/BrandIcons';

const iconMap = {
  Code,
  Palette,
  FileCode,
  Server,
  Smartphone,
  Atom,
  Zap,
  Wind,
  LayoutGrid,
  ArrowLeftRight,
  Compass,
  Box,
  Network,
  Key,
  Lock,
  ShieldCheck,
  Database,
  HardDrive,
  Layers,
  Cpu,
  Terminal,
  GitBranch,
  Github: GithubIcon,
  Send,
  Figma: FigmaIcon,
  Container,
};

const levelBadgeStyles = {
  Advanced: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Intermediate: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  Beginner: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-secondary/30 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Technologies & Tools I Use"
          subtitle="Kombinasi teknologi yang saya pelajari dan terapkan dalam membangun antarmuka web modern, arsitektur REST API, dan basis data."
        />

        {/* Category Filter Tabs */}
        <ScrollReveal direction="up" delay={0.1} className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            type="button"
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'border border-theme bg-card text-text-secondary hover:text-text-primary hover:bg-card-hover'
            }`}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'border border-theme bg-card text-text-secondary hover:text-text-primary hover:bg-card-hover'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </ScrollReveal>

        {/* Skills Cards Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-theme mb-4">
                  <h3 className="font-bold text-lg text-text-primary">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-indigo-400 font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10">
                    {cat.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-text-secondary mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Items List */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    const badgeClass =
                      levelBadgeStyles[skill.level] ||
                      'bg-slate-500/10 text-slate-400 border-slate-500/20';

                    return (
                      <div key={skill.name} className="space-y-1.5 group">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded-lg bg-card-hover border border-theme text-indigo-400 group-hover:text-sky-400 transition-colors">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold text-text-primary group-hover:text-indigo-400 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${badgeClass}`}
                            >
                              {skill.level}
                            </span>
                            <span className="text-xs font-mono text-text-secondary">
                              {skill.percentage}%
                            </span>
                          </div>
                        </div>

                        {/* Progress Bar with animated fill */}
                        <div className="w-full h-1.5 bg-slate-800/20 dark:bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full"
                          />
                        </div>

                        {/* Highlight / Tags */}
                        {skill.highlight && (
                          <p className="text-[11px] text-text-secondary/80 pl-8">
                            {skill.highlight}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer note */}
              <div className="pt-3 border-t border-theme/60 flex items-center justify-between text-[11px] text-text-secondary">
                <span>Domain Focus</span>
                <span className="text-indigo-400 font-medium">Standardized</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
