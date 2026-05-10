export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-400">
        <p className="text-center font-">
          Made with{' '}
          <span className="text-red-500 animate-pulse" aria-label="love">❤️</span>
          {' '}from{' '}
          <a
            href="https://ariancodes.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 transition list-none"
          >
            Arian
          </a>
        </p>
      
      </div>
    </footer>
  );
}