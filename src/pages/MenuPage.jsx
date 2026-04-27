import menuItems from '../data/menu.json';

export default function MenuPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">منو</h1>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>{item.name} - {item.price} تومان</li>
        ))}
      </ul>
    </div>
  );
}