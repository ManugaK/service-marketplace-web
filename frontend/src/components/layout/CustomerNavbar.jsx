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
  <div className="flex h-20 w-full items-center justify-between px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
    {/* Logo */}
    <a
      href="/customer/dashboard"
      className="text-2xl font-bold tracking-tight text-emerald-700"
    >
      SkilledLK
    </a>

    {/* Desktop Nav */}
    <nav className="hidden items-center gap-15 lg:flex">
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
</header>
  );
}