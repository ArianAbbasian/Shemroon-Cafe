import { FiMapPin, FiPhone, FiInstagram } from 'react-icons/fi';
// اگر react-icons نصب نداری، ابتدا اجرا کن:
// npm install react-icons

export default function ContactCard({ address, phone, instagram, mapLinks }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center">
      
      {mapLinks?.image && (
        <img
          src={mapLinks.image}
          alt="نقشه کافه"
          className="w-full h-48 object-cover rounded-t-xl -mx-6 -mt-6 mb-4"
        />
      )}

      {/* لینک‌های مسیریاب */}
      <div className="flex justify-center gap-3 mb-4">
        {mapLinks?.neshan && (
          <a href={mapLinks.neshan} target="_blank" rel="noopener noreferrer"
             className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
            <img src="/images/neshan.png" alt="نشان" className="w-5 h-5" />
          </a>
        )}
        {mapLinks?.balad && (
          <a href={mapLinks.balad} target="_blank" rel="noopener noreferrer"
             className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
            <img src="/images/balad.png" alt="بلد" className="w-5 h-5" />
          </a>
        )}
        {mapLinks?.waze && (
          <a href={mapLinks.waze} target="_blank" rel="noopener noreferrer"
             className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
            <img src="/images/waze.png" alt="ویز" className="w-5 h-5" />
          </a>
        )}
        {mapLinks?.google && (
          <a href={mapLinks.google} target="_blank" rel="noopener noreferrer"
             className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
            <img src="/images/googlemaps.png" alt="گوگل مپ" className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* آدرس */}
      <div className="flex items-center justify-center gap-2 text-gray-700 mb-3">
        <FiMapPin className="text-amber-800" size={18} />
        <p className="text-sm">{address}</p>
      </div>

      {/* شماره تماس (قابل کلیک) */}
      <a href={`tel:${phone}`} className="flex items-center justify-center gap-2 text-gray-700 mb-4">
        <FiPhone className="text-amber-800" size={18} />
        <span className="text-sm font-bold">{phone}</span>
      </a>

      {/* لینک اینستاگرام */}
      {instagram && (
        <a
          href={`https://www.instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-900 transition"
        >
          <FiInstagram size={18} />
          <span>اینستاگرام</span>
        </a>
      )}
    </div>
  );
}