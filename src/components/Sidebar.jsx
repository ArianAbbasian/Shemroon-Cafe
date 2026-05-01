export default function Sidebar({ categories, activeCategory, onCategoryClick }) {
  return (
    <nav className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto py-6 px-4">
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => onCategoryClick(cat.name)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-right
                ${activeCategory === cat.name
                  ? 'bg-amber-100 text-amber-900 shadow-sm'
                  : 'text-gray-700 hover:bg-amber-50'
                }`}
            >
              <img src={cat.icon} alt={cat.name} className="w-10 h-10 object-contain" />
              <div className="flex-1">
                <span className="block text-sm font-bold">{cat.name}</span>
                <span className="block text-xs opacity-70">{cat.englishName}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}