import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center mt-auto">
      <p className="mb-2">© 2025 کافه شمیران</p>
      <Link to="/about" className="text-amber-400 hover:text-amber-300 text-sm">
        دربارۀ ما 
      </Link>
    </footer>
  );
}