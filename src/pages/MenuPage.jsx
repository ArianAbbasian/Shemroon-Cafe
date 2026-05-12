import { useState, useCallback } from 'react';
import categories from '../data/categories.json';
import menuItems from '../data/menu.json';
import Sidebar from '../components/Sidebar';
import MenuContent from '../components/MenuContent';
import MenuTopHeader from '../components/MenuTopHeader';
import CategoryScrollBar from '../components/CategoryScrollBar';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.name || '');
  const [manualScrollActive, setManualScrollActive] = useState(false);

  const groupedItems = {};
  categories.forEach(cat => {
    groupedItems[cat.name] = menuItems.filter(item => item.category === cat.name);
  });

  const handleCategoryClick = useCallback((categoryName) => {
    setActiveCategory(categoryName);
    const section = document.getElementById(`cat-${categories.find(c => c.name === categoryName)?.id}`);
    if (section) {

      setManualScrollActive(true);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        setManualScrollActive(false);
      }, 700);
    }
  }, [categories]);

  const handleScrollActive = useCallback((categoryName) => {
    setActiveCategory(categoryName);
  }, []);

  return (
    <div className="flex flex-row-reverse min-h-screen bg-gray-50">
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <MenuTopHeader />
        <CategoryScrollBar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />
        <MenuContent
          categories={categories}
          groupedItems={groupedItems}
          onActiveCategoryChange={handleScrollActive}
          manualScrollActive={manualScrollActive}
        />
      </div>
    </div>
  );
}