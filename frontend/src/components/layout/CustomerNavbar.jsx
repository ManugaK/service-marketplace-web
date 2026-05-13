import React, { useState } from 'react';
import {
  Bell,
  MessageSquare,
  Menu,
  X,
  User,
} from 'lucide-react';

export default function CustomerNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/customer/dashboard', active: true },
    { label: 'Search', href: '/search' },
    { label: 'Bookings', href: '/bookings' },
    { label: 'About Us', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Logo */}
        <a href="/customer/dashboard" className="text-2xl font-bold tracking-tight text-emerald-700">
          SkilledLK
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative text-sm font-medium transition-colors ${
                link.active
                  ? 'text-emerald-700'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute -bottom-3 left-0 h-[2px] w-full rounded-full bg-emerald-700" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden items-center gap-7 lg:flex">
          <button className="text-slate-700 transition hover:text-emerald-700" aria-label="Notifications">
            <Bell size={22} strokeWidth={1.9} />
          </button>

          <button className="text-slate-700 transition hover:text-emerald-700" aria-label="Messages">
            <MessageSquare size={22} strokeWidth={1.9} />
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-emerald-700 text-white shadow-sm transition hover:bg-emerald-800"
            aria-label="Profile"
          >
            <User size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  link.active
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700">
              <Bell size={20} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700">
              <MessageSquare size={20} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-white">
              <User size={19} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}