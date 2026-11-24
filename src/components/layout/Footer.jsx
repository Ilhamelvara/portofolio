import { ArrowUp } from 'lucide-react';
import SocialLinks from '../common/SocialLinks';
import { personalData } from '../../data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-theme bg-card/60 backdrop-blur-md text-text-secondary pt-16 pb-12 overflow-hidden">
      {/* Decorative gradient glow at bottom */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center font-bold text-white text-sm">
                  {personalData.monogram}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-text-primary text-base">
                  {personalData.fullName}
                </h3>
                <p className="text-xs text-indigo-400 font-medium">
                  {personalData.professionalTitle}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-text-secondary">
              A passionate developer dedicated to building responsive, clean, and user-friendly web solutions. Open to software engineering roles and real-world tech collaborations.
            </p>
            <div className="pt-1">
              <SocialLinks />
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#contributions" className="hover:text-indigo-400 transition-colors">
                  GitHub Activity
                </a>
              </li>
              <li>
                <a href="#certificates" className="hover:text-indigo-400 transition-colors">
                  Certificates
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Career & Status */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-4">
              Current Status
            </h4>
            <div className="p-4 rounded-xl border border-theme bg-card/80 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Open for Work
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Ready to contribute to modern Web Development (Frontend, Backend, or Fullstack).
              </p>
              <a
                href="#contact"
                className="inline-block text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                Let's Discuss &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} {personalData.fullName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 text-text-secondary">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
