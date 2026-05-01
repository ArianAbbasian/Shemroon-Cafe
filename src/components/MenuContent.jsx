import { useRef } from 'react';
import MenuItemCard from './MenuItemCard';

export default function MenuContent({ categories, groupedItems }) {
  return (
    <div className="flex-1 p-6 md:p-10 overflow-y-auto">
      {categories.map((cat) => (
        <section key={cat.id} id={`cat-${cat.id}`} className="mb-12">
          {/* عنوان دسته‌بندی */}
          <h2 className="text-2xl font-extrabold text-amber-950 mb-6 pb-2 border-b-2 border-amber-200">
            {cat.name}
          </h2>

          {/* گرید محصولات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {groupedItems[cat.name]?.length > 0 ? (
              groupedItems[cat.name].map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))
            ) : (
              <p className="text-gray-400 text-sm col-span-full">فعلاً آیتمی در این دسته ثبت نشده.</p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}