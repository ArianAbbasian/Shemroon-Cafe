export default function MenuItemCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
      {/* تصویر */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {item.popular && (
          <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
            ویژه
          </span>
        )}
      </div>

      {/* محتوای متن */}
      <div className="p-4">
        <h3 className="text-base font-extrabold text-gray-900 mb-2 line-clamp-1">
          {item.name}
        </h3>

        {item.description && (
          <p className="text-sm text-gray-500 line-clamp-2 mb-3 leading-relaxed">
            {item.description}
          </p>
        )}

        {/* قیمت */}
        <div className="flex items-baseline gap-1 mt-auto">
          <span className="text-lg font-extrabold text-amber-900">
            {item.price.toLocaleString()}
          </span>
          <span className="text-xs text-gray-500">تومان</span>
        </div>
      </div>
    </div>
  );
}