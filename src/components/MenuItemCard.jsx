export default function MenuItemCard({ item }) {
  return (
    <div className="group bg-white rounded-2xl card-shadow hover:card-hover-shadow transition-all duration-300 overflow-hidden flex flex-col">
      {/* بخش تصویر */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* overlay تیره فقط در هاور */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        {item.popular && (
          <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            پرطرفدار
          </span>
        )}
      </div>

      {/* محتوای متنی */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-extrabold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-amber-900 transition-colors">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed flex-1">
            {item.description}
          </p>
        )}
        <div className="flex items-baseline justify-start gap-1 mt-auto pt-2 border-t border-amber-100">
          <span className="text-lg font-extrabold text-amber-700">
            {item.price.toLocaleString()}
          </span>
          <span className="text-xs text-gray-400 mr-1">تومان</span>
        </div>
      </div>
    </div>
  );
}