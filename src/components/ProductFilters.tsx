interface FilterGroup {
  key: string;
  label: string;
  options: string[];
}

interface ProductFiltersProps {
  groups: FilterGroup[];
  active: Record<string, string>;
  onChange: (key: string, value: string) => void;
  onReset: () => void;
}

export default function ProductFilters({ groups, active, onChange, onReset }: ProductFiltersProps) {
  const hasActive = Object.values(active).some((v) => v !== "All");

  return (
    <div className="flex flex-wrap items-center gap-3 border-y border-stone-200 py-6">
      {groups.map((group) => (
        <div key={group.key} className="relative">
          <select
            value={active[group.key] ?? "All"}
            onChange={(e) => onChange(group.key, e.target.value)}
            className="cursor-pointer appearance-none border border-stone-300 bg-warm-white px-4 py-2.5 pr-9 text-xs font-semibold uppercase tracking-[0.1em] text-charcoal outline-none transition-colors hover:border-ink"
          >
            <option value="All">{group.label}: All</option>
            {group.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px]">
            &#9662;
          </span>
        </div>
      ))}
      {hasActive && (
        <button
          onClick={onReset}
          className="text-xs font-semibold uppercase tracking-[0.1em] text-clay underline underline-offset-4"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
}
