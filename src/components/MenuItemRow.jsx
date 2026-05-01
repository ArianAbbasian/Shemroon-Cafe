export default function MenuItemRow({ item }) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-gray-100 last:border-none">
      <div className="flex-1">
        <h4 className="text-base font-bold text-gray-900">{item.name}</h4>
        {item.description && (
          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
        )}
        {item.tags?.length > 0 && (
          <div className="flex gap-2 mt-2">
            {item.tags.map((tag) => (
              <span key={tag} className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <span className="text-base font-extrabold text-amber-900 mr-4 whitespace-nowrap">
        {item.price.toLocaleString()} تومان
      </span>
    </div>
  );
}