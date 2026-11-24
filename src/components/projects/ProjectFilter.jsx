export default function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  projectCounts,
}) {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl border border-theme bg-card/80 backdrop-blur-md shadow-sm">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = projectCounts[cat] || 0;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-text-secondary hover:text-text-primary hover:bg-card-hover'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-secondary text-text-secondary'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
