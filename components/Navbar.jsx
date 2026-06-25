'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#find-us', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-deep-black/95 backdrop-blur-sm shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl text-flame tracking-wider">
            FOODZ BY RG
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-body text-sm text-white/70 hover:text-flame transition-colors"
              >
                {label}
              </Link>
            ))}
            <a
              href="https://wa.me/23057591140"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-flame text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors"
            >
              Order Now
            </a>
          </div>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-deep-black/98 border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-body text-white/70 hover:text-flame transition-colors py-2 border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://wa.me/23057591140"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-flame text-white font-body font-semibold px-5 py-3 rounded-full text-center hover:bg-orange-600 transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
