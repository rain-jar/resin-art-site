"use client";

import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-primary text-accent shadow-md">
      {/* Left: Burger Icon */}
      <FaBars className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />

      {/* Center: Logo + Site Name */}
      <div className="flex items-center gap-2">
        <img 
          src="/images/logo.png" 
          alt="Logo" 
          className="w-8 h-8 rounded-full"
        />
      {/*  <span className="text-2xl font-bold">La Tête en Fleurs</span>*/}
        <div className="h-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1146 188" preserveAspectRatio="xMidYMid meet" class="h-8">
            <image href="/images/site-name.png" width="1146" height="188" />
          </svg>
       </div>
      </div>

      {/* Right: Menu Links + Icons */}
      <nav className="flex gap-6 items-center">
        <a href="/trays-coasters" className="hover:underline">Shop</a>
        <a href="/about" className="hover:underline">About</a>
        <FaSearch className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <FaShoppingCart className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
      </nav>
    </header>
  );
}

