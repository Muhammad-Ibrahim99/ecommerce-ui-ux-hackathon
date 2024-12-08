
// Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 py-2 flex items-center justify-between">
      {/* Logo Section */}
      <div className="text-2xl font-bold">SHOP.CO</div>
      
      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-black">Home</a>
        <a href="#" className="text-gray-700 hover:text-black">About</a>
        <a href="#" className="text-gray-700 hover:text-black">Shop</a>
        <a href="#" className="text-gray-700 hover:text-black">Contact</a>
      </nav>

      {/* Right Section (Search and Cart Icons) */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <img src="/search-icon.svg" alt="Search" className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <img src="/cart-icon.svg" alt="Cart" className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden p-2 rounded bg-gray-100 hover:bg-gray-200">
        <img src="/menu-icon.svg" alt="Menu" className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Header;
