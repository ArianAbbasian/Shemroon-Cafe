import ContactCard from '../components/ContactCard';
import cafeInfo from '../data/cafeInfo.json';

export default function AboutPage() {
  
  const cafeInfo = {
    logo: '/images/logo.png',              
    name: 'کافه شمرون',
    slogan: 'ما اینجا شادی می‌فروشیم.',
    address: 'تهران، اتوبان خرازی، ایران مال',
    phone: '09378753874',                 
    instagram: 'cafe_chay_shemroon',            
    mapLinks: {
      image: '/images/map-preview.jpg',    
      neshan: 'https://maps.neshan.org/...',
      balad: 'https://balad.ir/...',
      waze: 'https://waze.com/ul?q=...',
      google: 'https://maps.google.com/?q=...'
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 direction-rtl">
      {/* Hero Section */}
      <section className="relative pt-12 pb-10 px-4">
        {/* پس‌زمینه محو (اختیاری) */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/30 to-white pointer-events-none" />

        <div className="relative flex flex-col items-center text-center max-w-md mx-auto">
          {/* لوگو */}
          <img
            src={cafeInfo.logo}
            alt={cafeInfo.name}
            className="w-24 h-24 rounded-full object-cover shadow-lg mb-4 border-4 border-amber-800"
          />

          {/* نام کافه */}
          <h1 className="text-3xl font-extrabold text-amber-900 mb-2">
            {cafeInfo.name}
          </h1>

          {/* شعار */}
          <p className="text-gray-600 text-lg italic leading-relaxed">
            {cafeInfo.slogan}
          </p>
        </div>
      </section>

      {/* کارت اطلاعات تماس */}
      <section className="px-4 pb-16 max-w-md mx-auto">
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