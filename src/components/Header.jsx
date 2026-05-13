import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 sticky top-0 z-50 sm:px-6 md:px-8 py-3 sm:py-3.5 bg-white border-b border-gray-100">
      
      <div className="font-extrabold text-xl sm:text-2xl tracking-tight">
        roopsee<span className="text-pink-500">.</span>
      </div>

      <nav className="flex items-center gap-2 sm:gap-3">
        <button className="hidden xs:inline-flex sm:inline-flex px-4 sm:px-5 py-1.5 rounded-full border-2 border-pink-500 text-pink-500 text-sm font-medium hover:bg-pink-500 hover:text-white transition-colors">
          Log-in
        </button>

        <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
          <ShoppingBag size={17} />
        </button>

        <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
          <Menu size={17} />
        </button>
      </nav>

    </header>
  );
}