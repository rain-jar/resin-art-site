"use client";

import Link from "next/link";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-primary text-accent shadow-md">
      {/* Left: Burger Icon */}
      <FaBars className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />

      {/* Center: Logo + Site Name */}
      <Link href="/" className="flex items-center gap-2">
        <div className="flex items-center justify-center gap-0 relative">
          {/* Logo */}
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            className="w-10 h-10 md:w-12 md:h-14 rounded-full translate-x-[15px] md:translate-x-28"
          />

          {/* Site Name */}
          <div className="flex items-center translate-x-[-10px] md:translate-x-20">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1146 188" 
              preserveAspectRatio="xMidYMid meet" 
              className="h-8 md:h-14 lg:h-12"
            >
              <image href="/images/site-name-revised.png" width="1146" height="188" />
            </svg>
          </div>
        </div>
      </Link>

      {/* Right: Menu Links + Icons */}
      <nav className="flex gap-6 items-center">
        {/* Shop Dropdown */}
        <div className="group relative">
          <span className="cursor-pointer hover:underline">Shop</span>
          <div className="absolute left-0 mt-2 w-40 bg-primary shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href="/trays-coasters" className="block px-4 py-2 hover:bg-accent hover:text-primary">Trays & Coasters</Link>
            <Link href="/bowls" className="block px-4 py-2 hover:bg-accent hover:text-primary">Bowls</Link>
            <Link href="/tables" className="block px-4 py-2 hover:bg-accent hover:text-primary">Tables</Link>
          </div>
        </div>
        <a href="/about" className="hover:underline">About</a>
        <FaSearch className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        <FaShoppingCart className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
      </nav>
    </header>
  );
}

