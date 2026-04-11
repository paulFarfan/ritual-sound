function FilterGroup({
  title,
  titleKey,
  options = [],
  selected = [],
  onToggle,
}) {
  if (options.length === 0) return null;

  return (
    <div className="flex items-center gap-3 flex-wrap text-sm">
      {/* TITLE */}
      <span className="text-white/70 font-medium tracking-wide">{title}</span>

      <span className="text-white/20">•</span>

      {/* OPTIONS */}
      {options.map((opt) => {
        const isObject = typeof opt === "object";

        const value = isObject ? opt.value : opt;
        const label = isObject ? opt.label : opt;
        const count = isObject ? opt.count : null;

        const active = selected.includes(value);

        return (
          <button
            key={value}
            onClick={() => onToggle(titleKey, value)}
            className={`
              px-3 py-1 rounded-full transition-all duration-200
              ${
                active
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  : "text-white/50 hover:text-white border border-transparent"
              }
            `}
          >
            {label}
            {count !== null && (
              <span className="ml-1 text-white/30">({count})</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default FilterGroup;
