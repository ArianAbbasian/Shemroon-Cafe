import MenuItemCard from "./MenuItemCard";

export default function MenuContent({ categories, groupedItems }) {
  return (
    <div className="flex-1 p-6 md:p-10 overflow-y-auto">
      {categories.map((cat) => (
        <section key={cat.id} id={`cat-${cat.id}`} className="mb-12">
          {/* عنوان دسته‌بندی */}
          <h2 className="relative text-center text-3xl font-black text-amber-950 mb-10 pt-6">
            <span className="relative z-10 bg-[#fefce8] px-6">{cat.name}</span>
            <span className="absolute left-0 right-0 top-1/2 h-px bg-amber-300"></span>
          </h2>

          {/* گرید محصولات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {groupedItems[cat.name]?.length > 0 ? (
              groupedItems[cat.name].map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))
            ) : (
              <p className="text-gray-400 text-sm col-span-full">
                فعلاً آیتمی در این دسته ثبت نشده.
              </p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
