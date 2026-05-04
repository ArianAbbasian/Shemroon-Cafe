import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import ContactCard from '../components/ContactCard';
import cafeInfo from '../data/cafeInfo.json';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-gray-800 direction-rtl relative">
      {/* دکمه بازگشت به منو */}
      <Link
        to="/"
        className="absolute top-6 right-6 z-10 flex items-center gap-2 bg-amber-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-amber-900 transition hover:scale-105"
      >
        <FiArrowRight size={18} />
        <span className="text-sm font-medium">منو</span>
      </Link>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/20 to-transparent pointer-events-none" />
        <div className="relative flex flex-col items-center text-center max-w-md mx-auto">
          <div className="w-28 h-28 rounded-full border-4 border-amber-800 p-1 bg-white shadow-xl hover:scale-105 transition-transform">
            <img
              src={cafeInfo.logo}
              alt={cafeInfo.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-extrabold text-amber-900 mt-6 mb-3">{cafeInfo.name}</h1>
          <p className="text-gray-600 text-lg italic leading-relaxed max-w-sm">
            {cafeInfo.slogan}
          </p>
        </div>
      </section>

      {/* کارت اطلاعات تماس */}
      <section className="px-4 pb-20 max-w-md mx-auto">
        <ContactCard
          address={cafeInfo.address}
          phone={cafeInfo.phone}
          instagram={cafeInfo.instagram}
          mapLinks={cafeInfo.mapLinks}
        />
      </section>
    </div>
  );
}