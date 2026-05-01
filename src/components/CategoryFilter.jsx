// src/components/CategoryFilter.jsx
export default function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeCategory === cat
              ? 'bg-amber-800 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}