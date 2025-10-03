'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function SimpleHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-3 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/Superior Furniture and Mattress-01.png"
              alt="Superior Furniture and Mattress"
              width={600}
              height={180}
              className="h-14 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Phone - show on all screens */}
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 text-gray-900 hover:text-brand-burgundy transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(123) 456-7890</span>
          </a>
        </div>
      </div>
    </header>
  );
}
