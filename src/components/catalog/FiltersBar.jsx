import FilterGroup from "./FilterGroup";

function FiltersBar({ filters, setFilters }) {
  const toggle = (group, value) => {
    setFilters((prev) => {
      const current = prev[group];

      return {
        ...prev,
        [group]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  return (
    <div className="sticky top-20 z-40 mb-10 px-4">
      <div className="max-w-5xl mx-auto bg-white/[0.03] border border-white/10 rounded-xl backdrop-blur-md px-6 py-4">
        <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
          <FilterGroup
            title="Genres"
            titleKey="genres"
            options={["House", "Techno", "EDM", "Bass"]}
            selected={filters.genres}
            onToggle={toggle}
          />

          <FilterGroup
            title="Location"
            titleKey="location"
            options={["Melbourne", "Berlin", "CDMX", "Sydney"]}
            selected={filters.location}
            onToggle={toggle}
          />
        </div>
      </div>
    </div>
  );
}

export default FiltersBar;
