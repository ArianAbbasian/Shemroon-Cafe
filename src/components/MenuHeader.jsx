import { Link } from 'react-router-dom';
import cafeInfo from '../data/cafeInfo.json';

export default function MenuHeader() {
  return (
    <header className="bg-amber-800 text-white py-3 px-6 flex items-center justify-between shadow-md">
      {/* سمت راست: لوگو + نام کافه */}
      <div className="flex items-center gap-3">
        {cafeInfo.logo && (
          <img
            src={cafeInfo.logo}
            alt={cafeInfo.name}
            className="w-10 h-10 rounded-full object-cover border border-amber-400"
          />
        )}
        <span className="font-extrabold text-lg">{cafeInfo.name}</span>
      </div>

      {/* سمت چپ: لینک درباره ما */}
      <Link
        to="/about"
        className="text-sm bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition"
      >
        درباره ما
      </Link>
    </header>
  );
}