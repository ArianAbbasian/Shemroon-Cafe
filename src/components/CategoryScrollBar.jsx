export default function CategoryScrollBar({ categories, activeCategory, onCategoryClick }) {
  return (
    <div className="md:hidden bg-white border-b border-gray-100 shadow-sm sticky top-[80px] z-10">
      <div className="flex overflow-x-auto gap-3 px-4 py-3 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryClick(cat.name)}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap
              ${activeCategory === cat.name
                ? 'bg-amber-800 text-white shadow-md scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-amber-50'
              }`}
          >
            <img src={cat.icon} alt={cat.name} className="w-5 h-5 object-contain" />
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}