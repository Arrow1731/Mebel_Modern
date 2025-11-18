'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl">
            Mebelweb
          </Link>

          <div className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-amber-200 transition">Асосий</Link>
            <Link href="/catalog" className="hover:text-amber-200 transition">Каталог</Link>
            <Link href="/products" className="hover:text-amber-200 transition">Махсулотлар</Link>
            <Link href="/analytics" className="hover:text-amber-200 transition">Таҳлил</Link>
            <Link href="/credit-payments" className="hover:text-amber-200 transition">Кредитлар</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col gap-2 pb-4">
            <Link href="/" className="hover:text-amber-200 transition block">Асосий</Link>
            <Link href="/catalog" className="hover:text-amber-200 transition block">Каталог</Link>
            <Link href="/products" className="hover:text-amber-200 transition block">Махсулотлар</Link>
            <Link href="/analytics" className="hover:text-amber-200 transition block">Таҳлил</Link>
            <Link href="/credit-payments" className="hover:text-amber-200 transition block">Кредитлар</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
