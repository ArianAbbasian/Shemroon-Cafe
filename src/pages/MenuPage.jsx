import { useState, useCallback } from 'react';
import categories from '../data/categories.json';
import menuItems from '../data/menu.json';
import Sidebar from '../components/Sidebar';
import MenuContent from '../components/MenuContent';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.name || '');

  const groupedItems = {};
  categories.forEach(cat => {
    groupedItems[cat.name] = menuItems.filter(item => item.category === cat.name);
  });

  const handleCategoryClick = useCallback((categoryName) => {
    setActiveCategory(categoryName);
    const section = document.getElementById(`cat-${categories.find(c => c.name === categoryName)?.id}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [categories]);

  return (
    <div className="flex flex-row-reverse min-h-screen bg-gray-50">
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      <MenuContent
        categories={categories}
        groupedItems={groupedItems}
      />
    </div>
  );
}