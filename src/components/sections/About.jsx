import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { personalData } from '../../data/personal';
import { User, BookOpen, MapPin, Target, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap = {
  'Full Name': User,
  'Professional Role': Sparkles,
  Education: BookOpen,
  Location: MapPin,
  'Current Focus': Target,
  'Career Goal': CheckCircle2,
};

export default function About() {
  const { about } = personalData;

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title={about.heading}
          subtitle={about.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Photo Card & Quick Stats Grid (Perfect vertical balance) */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-5 space-y-6">
            {/* Dedicated Profile Photo Card */}
            <div className="glass-card p-4 rounded-2xl border border-theme overflow-hidden group">
              <div className="relative aspect-[4/4.2] w-full rounded-xl overflow-hidden bg-[#0e1424] border border-white/5 shadow-md">
                <img
                  src={personalData.avatarUrl}
                  alt={personalData.fullName}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/profile.svg';
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">
                      {personalData.fullName}
                    </p>
                    <p className="text-[10px] text-indigo-300 font-medium">
                      {personalData.professionalTitle}
                    </p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse ring-4 ring-emerald-500/20" />
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="font-semibold text-text-primary">Junior Web Developer</span>
                <span>•</span>
                <span>Ready for Work</span>
              </div>
            </div>

            {/* Quick Stats Grid (2x2) */}
            <div className="grid grid-cols-2 gap-3.5">
              {about.quickStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.15 + idx * 0.08 }}
                  className="glass-card p-4 rounded-xl text-center space-y-1 border border-theme"
                >
                  <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-text-primary">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-text-secondary">
                    {stat.highlight}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Story & 2-Column Attributes Grid */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-7 space-y-6">
            {/* Story Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl space-y-4 border border-theme">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <span>Professional Identity & Background</span>
              </h3>

              <div className="space-y-3.5 text-text-secondary leading-relaxed text-sm">
                {about.descriptionParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Primary Interests Tags */}
              <div className="pt-3 border-t border-theme">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-2.5">
                  Primary Areas of Interest:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {about.primaryInterests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 rounded-lg text-xs font-medium border border-theme bg-secondary/60 hover:border-indigo-500/40 hover:text-indigo-400 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Attributes - Clean 2-Column Compact Grid */}
            <div className="glass-card p-6 rounded-2xl space-y-5 border border-theme">
              <div className="flex items-center justify-between pb-3 border-b border-theme">
                <h4 className="font-bold text-text-primary text-base">
                  Profile Details
                </h4>
                <span className="text-[11px] font-semibold text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Open for Opportunities
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {about.infoGrid.map((item) => {
                  const Icon = iconMap[item.label] || Sparkles;
                  return (
                    <div
                      key={item.label}
                      className="p-3.5 rounded-xl border border-theme/70 bg-secondary/40 space-y-1 hover:border-indigo-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{item.label}</span>
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-text-primary pl-5">
                        {item.value}
                      </div>
                      {item.note && (
                        <div className="text-[10px] text-text-secondary pl-5 italic">
                          {item.note}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-600/20"
                >
                  <span>Get In Touch / Hire Me</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
