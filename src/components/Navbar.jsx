import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-amber-800 text-white p-4 flex gap-6">
      <Link to="/">منو</Link>
      <Link to="/about">درباره ما </Link>
    </nav>
  );
}