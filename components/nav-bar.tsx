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
          <Link href="/catalog" className="font-bold text-xl">
              BOG'OT - SHIMANAY Mebel
          </Link>

          <div className="hidden md:flex gap-6">
            <Link href="/catalog" className="hover:text-amber-200 transition">Ombor</Link>
            {/* <Link href="/products" className="hover:text-amber-200 transition">Mahsulotlar</Link> */}
            {/* <Link href="/analytics" className="hover:text-amber-200 transition">Analitika</Link> */}
            <Link href="/credit-payments" className="hover:text-amber-200 transition">Kredit</Link>
            <Link href="/credit-customers" className="hover:text-amber-200 transition">To'lovlar</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col gap-2 pb-4">
            <Link href="/catalog" className="hover:text-amber-200 transition block">Ombor</Link>
            {/* <Link href="/products" className="hover:text-amber-200 transition block">Mahsulotlar</Link> */}
            {/* <Link href="/analytics" className="hover:text-amber-200 transition block">Analitika</Link> */}
            <Link href="/credit-payments" className="hover:text-amber-200 transition block">Kredit</Link>
            <Link href="/credit-customers" className="hover:text-amber-200 transition">To'lovlar</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
