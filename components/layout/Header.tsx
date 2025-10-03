'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, ShoppingCart, User, Heart } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: 'Living Room', href: '/categories/living-room' },
    { name: 'Bedroom', href: '/categories/bedroom' },
    { name: 'Mattresses', href: '/categories/mattresses' },
    { name: 'Dining', href: '/categories/dining' },
    { name: 'Office', href: '/categories/office' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Banner */}
      <div className="bg-brand-burgundy text-white py-2 text-center text-sm">
        <p>Free Delivery on Orders Over $999 | Visit Our Milford, DE Showroom</p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 bg-brand-cream px-4 py-2 rounded-lg">
            <Image
              src="/logos/Superior Furniture and Mattress-02.png"
              alt="Superior Furniture and Mattress"
              width={220}
              height={66}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-700 hover:text-brand-burgundy transition-colors font-medium"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block p-2 hover:text-brand-burgundy transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-brand-burgundy transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-brand-burgundy transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-brand-burgundy transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-brand-burgundy text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-gray-700 hover:text-brand-burgundy transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around py-3">
          <Link href="/" className="flex flex-col items-center text-xs">
            <Menu className="w-6 h-6 mb-1" />
            <span>Menu</span>
          </Link>
          <button className="flex flex-col items-center text-xs">
            <Search className="w-6 h-6 mb-1" />
            <span>Search</span>
          </button>
          <button className="flex flex-col items-center text-xs relative">
            <ShoppingCart className="w-6 h-6 mb-1" />
            <span>Cart</span>
            <span className="absolute top-0 right-2 bg-brand-burgundy text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
          <Link href="/account" className="flex flex-col items-center text-xs">
            <User className="w-6 h-6 mb-1" />
            <span>Account</span>
          </Link>
          <Link href="/wishlist" className="flex flex-col items-center text-xs">
            <Heart className="w-6 h-6 mb-1" />
            <span>Wishlist</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
