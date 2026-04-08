function FilterGroup({ title, titleKey, options, selected = [], onToggle }) {
  return (
    <div className="flex items-center gap-3 flex-wrap text-sm">
      {/* TITLE */}
      <span className="text-white/70 font-medium tracking-wide">{title}</span>

      <span className="text-white/20">•</span>

      {/* OPTIONS */}
      {options.map((opt) => {
        const active = selected?.includes(opt);

        return (
          <button
            key={opt}
            onClick={() => onToggle(titleKey, opt)}
            className={`
              px-3 py-1 rounded-full transition-all duration-200
              
              ${
                active
                  ? `
                    bg-purple-500/20 
                    text-purple-300 
                    border border-purple-500/40
                    shadow-[0_0_10px_rgba(168,85,247,0.5)]
                  `
                  : `
                    text-white/50 
                    hover:text-white
                    border border-transparent
                  `
              }
            `}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default FilterGroup;
