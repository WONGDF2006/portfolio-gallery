// A row of toggle buttons: "All" plus one per technology. The active one is aria-pressed.
function FilterBar({ options, active, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter projects by technology">
      {['All', ...options].map((option) => (
        <button
          key={option}
          type="button"
          className="filter-button"
          aria-pressed={active === option}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
