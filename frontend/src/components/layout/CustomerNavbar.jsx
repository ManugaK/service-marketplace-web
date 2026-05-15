import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  MessageSquare,
  Menu,
  X,
  User,
  Search,
  MapPin,
} from 'lucide-react';

export default function CustomerNavbar({
  activePage = 'home',
  showSearchBar = false,
  serviceValue = '',
  locationValue = '',
  onServiceChange,
  onLocationChange,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', href: '/customer/dashboard', key: 'home' },
    { label: 'Search', href: '/search', key: 'search' },
    { label: 'Bookings', href: '/bookings', key: 'bookings' },
    { label: 'About Us', href: '/about', key: 'about' },
  ];

  const goTo = (href) => {
    setMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="grid min-h-20 w-full grid-cols-[1fr_auto] items-center gap-4 px-5 py-3 sm:px-8 lg:grid-cols-[170px_minmax(360px,520px)_minmax(300px,1fr)_auto] lg:gap-5 lg:px-8 xl:grid-cols-[190px_minmax(420px,620px)_minmax(330px,1fr)_auto] xl:px-10 2xl:grid-cols-[220px_minmax(520px,700px)_minmax(360px,1fr)_auto]">
        {/* Logo */}
        <button
          type="button"
          onClick={() => goTo('/customer/dashboard')}
          className="shrink-0 cursor-pointer text-left text-2xl font-bold tracking-tight text-emerald-700"
        >
          SkilledLK
        </button>

        {/* Search Inputs - Desktop/Laptop */}
        {showSearchBar ? (
          <div className="hidden min-w-0 items-center gap-3 lg:flex">
            <div className="flex h-12 min-w-0 flex-1 items-center gap-3 rounded-lg border border-slate-300 bg-slate-100 px-4">
              <Search size={20} className="shrink-0 text-slate-500" />
              <input
                type="text"
                value={serviceValue}
                onChange={(e) => onServiceChange?.(e.target.value)}
                placeholder="What service do you need?"
                className="w-full min-w-0 bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex h-12 w-[170px] shrink-0 items-center gap-3 rounded-lg border border-slate-300 bg-slate-100 px-4 xl:w-[200px] 2xl:w-[220px]">
              <MapPin size={20} className="shrink-0 text-slate-500" />
              <input
                type="text"
                value={locationValue}
                onChange={(e) => onLocationChange?.(e.target.value)}
                placeholder="Location"
                className="w-full min-w-0 bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
        ) : (
          <div className="hidden lg:block" />
        )}

        {/* Desktop Nav */}
        <nav className="hidden min-w-0 items-center justify-center gap-5 lg:flex xl:gap-7 2xl:gap-9">
          {navLinks.map((link) => {
            const isActive = activePage === link.key;

            return (
              <button
                key={link.key}
                type="button"
                onClick={() => goTo(link.href)}
                className={`relative cursor-pointer whitespace-nowrap text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-emerald-700'
                    : 'text-slate-600 hover:text-emerald-700'
                }`}
              >
                {link.label}

                {isActive && (
                  <span className="absolute -bottom-3 left-0 h-[2px] w-full rounded-full bg-emerald-700" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-5 2xl:gap-6">
          <button
            type="button"
            className="cursor-pointer text-slate-700 transition hover:text-emerald-700"
            aria-label="Notifications"
          >
            <Bell size={22} strokeWidth={1.9} />
          </button>

          <button
            type="button"
            className="cursor-pointer text-slate-700 transition hover:text-emerald-700"
            aria-label="Messages"
          >
            <MessageSquare size={22} strokeWidth={1.9} />
          </button>

          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-emerald-700 text-white shadow-sm transition hover:bg-emerald-800"
            aria-label="Profile"
          >
            <User size={20} />
          </button>
        </div>

        {/* Mobile / Small Tablet Menu Button */}
        <button
          type="button"
          className="ml-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile / Small Tablet Search Bar */}
      {showSearchBar && (
        <div className="grid gap-3 border-t border-slate-100 px-5 py-3 sm:px-8 lg:hidden">
          <div className="flex h-11 items-center gap-3 rounded-lg border border-slate-300 bg-slate-100 px-4">
            <Search size={18} className="shrink-0 text-slate-500" />
            <input
              type="text"
              value={serviceValue}
              onChange={(e) => onServiceChange?.(e.target.value)}
              placeholder="What service do you need?"
              className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="flex h-11 items-center gap-3 rounded-lg border border-slate-300 bg-slate-100 px-4">
            <MapPin size={18} className="shrink-0 text-slate-500" />
            <input
              type="text"
              value={locationValue}
              onChange={(e) => onLocationChange?.(e.target.value)}
              placeholder="Location"
              className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      )}

      {/* Mobile / Small Tablet Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.key;

              return (
                <button
                  key={link.key}
                  type="button"
                  onClick={() => goTo(link.href)}
                  className={`cursor-pointer rounded-lg px-3 py-2 text-left text-sm font-medium ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4">
            <button
              type="button"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-slate-700"
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>

            <button
              type="button"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-slate-700"
              aria-label="Messages"
            >
              <MessageSquare size={20} />
            </button>

            <button
              type="button"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-emerald-700 text-white"
              aria-label="Profile"
            >
              <User size={19} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}