import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle Dark/Light Mode"
      className="relative p-2.5 rounded-xl border border-theme bg-card hover:border-theme-hover transition-all duration-200 text-text-primary hover:text-indigo-400 group focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45 text-amber-400" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12 text-indigo-600" />
        )}
      </div>
    </button>
  );
}
