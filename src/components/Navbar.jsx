"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg shadow-lg border-b border-emerald-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center shadow-md">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-emerald-600 dark:text-emerald-400">
              <path d="M12 2C7 2 2 7 2 12c0 5 5 10 10 10s10-5 10-10C22 7 17 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" fill="currentColor"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-emerald-700 dark:text-emerald-300 font-bold text-2xl tracking-tight select-none">EcoYatra</span>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <a href="#" className="px-3 py-1 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-emerald-100 dark:hover:bg-emerald-900 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors duration-150">Home</a>
          <a href="#" className="px-3 py-1 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-emerald-100 dark:hover:bg-emerald-900 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors duration-150">Guide</a>
          <a href="#" className="px-3 py-1 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-emerald-100 dark:hover:bg-emerald-900 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors duration-150">Buyers</a>
          <a href="#" className="px-3 py-1 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-emerald-100 dark:hover:bg-emerald-900 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors duration-150">Footprint</a>
        </div>
        {/* Profile/CTA (optional) */}
        {/* <div className="hidden md:flex items-center space-x-2">
          <button className="px-4 py-1 rounded-xl bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">Login</button>
        </div> */}
      </div>
    </nav>
  );
}
