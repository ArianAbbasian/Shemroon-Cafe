import { useRef, useEffect } from "react";
import MenuItemCard from "./MenuItemCard";

export default function MenuContent({
  categories,
  groupedItems,
  onActiveCategoryChange,
  manualScrollActive,
}) {
  const sectionElements = useRef({});
  // ذخیرهٔ آخرین مقدار manualScrollActive در ref برای استفاده در callback
  const manualScrollRef = useRef(manualScrollActive);
  useEffect(() => {
    manualScrollRef.current = manualScrollActive;
  }, [manualScrollActive]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // اگر اسکرول دستی در حال انجام است، Observer را نادیده بگیر
        if (manualScrollRef.current) return;

        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          visibleSections.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
          const topSection = visibleSections[0].target;
          const categoryName = Object.keys(sectionElements.current).find(
            (name) => sectionElements.current[name] === topSection,
          );
          if (categoryName && onActiveCategoryChange) {
            onActiveCategoryChange(categoryName);
          }
        }
      },
      {
        rootMargin: "-80px 0px 0px 0px", // در نظر گرفتن هدر چسبنده
        threshold: 0,
      },
    );

    Object.values(sectionElements.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories, onActiveCategoryChange]);

  return (
    <div className="flex-1 p-6 md:p-10 overflow-y-auto">
      {categories.map((cat) => (
        <section
          key={cat.id}
          id={`cat-${cat.id}`}
          ref={(el) => {
            if (el) sectionElements.current[cat.name] = el;
          }}
          className="mb-12 scroll-mt-20" // ← scroll-mt-20 اضافه شد
        >
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
