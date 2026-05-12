export default function Sidebar({ categories, activeCategory, onCategoryClick }) {
  return (
    <nav className="hidden md:flex flex-col w-52 bg-white/90 backdrop-blur-sm border-r border-amber-100 shadow-sm h-screen sticky top-0 overflow-y-auto overflow-x-hidden py-6 px-3">
      <ul className="space-y-1.5">
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => onCategoryClick(cat.name)}
              className={`w-full flex flex-col items-center p-3 rounded-2xl transition-all duration-200 group
                ${activeCategory === cat.name
                  ? 'bg-amber-100/80 text-amber-900 shadow-sm font-bold scale-[1.02]'
                  : 'text-gray-700 hover:bg-amber-50/70 hover:scale-[1.01]'
                }`}
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <img
                  src={cat.icon}
                  alt={cat.name}
                  className="w-full h-full object-contain group-hover:brightness-110 transition"
                />
              </div>
              <div className="w-full min-w-0 mt-1 text-center">
                <span className="block text-sm font-semibold truncate">{cat.name}</span>
                <span className="block text-xs text-gray-400 mt-0.5 truncate">{cat.englishName}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}