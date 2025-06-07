'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import logo from '@/public/images/navbar-logo.webp';

export function SubPageNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isCurrentPage = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header className='fixed top-0 z-50 w-full bg-[#E1E1E1] shadow-[0_2px_4px_rgba(0,0,0,0.1)]'>
      <div className='mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 lg:px-8'>
        <Link href='/'>
          <Image
            className='w-[120px] opacity-80 lg:w-[140px]'
            src={logo}
            alt='AKH Logo'
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className='block lg:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
        >
          <div className='space-y-2'>
            <span
              className={`block h-0.5 w-6 bg-black transition-all ${isMenuOpen ? 'translate-y-2.5 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-all ${isMenuOpen ? '-translate-y-2.5 -rotate-45' : ''}`}
            />
          </div>
        </button>

        {/* Navigation */}
        <nav
          className={`fixed inset-0 z-40 flex items-center justify-center bg-[#E1E1E1] font-martian transition-all duration-300 lg:static lg:z-auto lg:flex lg:w-auto lg:bg-transparent ${
            isMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0 lg:translate-y-0 lg:opacity-100'
          }`}
        >
          {/* Close button for mobile */}
          <button
            className='absolute right-4 top-4 text-4xl lg:hidden'
            onClick={() => setIsMenuOpen(false)}
            aria-label='Close menu'
          >
            ×
          </button>

          <ul className='flex flex-col items-center gap-8 py-4 text-2xl lg:flex-row lg:gap-8 lg:py-0 lg:text-base'>
            <li className='uppercase'>
              <Link
                href='/koncertek'
                onClick={() => setIsMenuOpen(false)}
                className={`relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all ${
                  isCurrentPage('/koncertek')
                    ? 'after:scale-x-100'
                    : 'after:scale-x-0'
                }`}
              >
                Koncertek
              </Link>
            </li>
            <li className='uppercase'>
              <a
                target='_blank'
                href='https://shop.akiralyhalott.hu'
                onClick={() => setIsMenuOpen(false)}
                className={`relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-all ${
                  isCurrentPage('/#webshop')
                    ? 'after:scale-x-100'
                    : 'after:scale-x-0'
                }`}
              >
                Merch
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
