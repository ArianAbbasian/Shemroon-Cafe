import { Link } from "react-router-dom";
import cafeInfo from "../data/cafeInfo.json";

export default function MenuTopHeader() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-amber-100 shadow-sm h-[80px] flex items-center">
      <div className="w-full px-6">
        <div className="flex items-center justify-between relative">
          <Link
            to="/about"
            className="bg-amber-800 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-amber-900 transition shadow-md hover:shadow-lg"
          >
            درباره مجموعه
          </Link>

          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="w-16 h-16 rounded-full border-3 border-amber-800 p-0.5 bg-white shadow-md hover:scale-105 transition-transform">
              <img
                src={cafeInfo.logo}
                alt={cafeInfo.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div className="w-[100px]" />
        </div>
      </div>
    </header>
  );
}
