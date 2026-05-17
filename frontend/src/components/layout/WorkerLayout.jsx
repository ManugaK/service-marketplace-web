import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Bell,
  BriefcaseBusiness,
  CircleDollarSign,
  LayoutGrid,
  LogOut,
  MessageSquare,
  MessagesSquare,
  Settings,
} from 'lucide-react';
import CustomerFooter from './CustomerFooter';

const sidebarItems = [
  { name: 'Dashboard', icon: LayoutGrid, path: '/worker/dashboard' },
  { name: 'My Jobs', icon: BriefcaseBusiness, path: '/worker/jobs' },
  { name: 'Earnings', icon: CircleDollarSign, path: '/worker/earnings' },
  { name: 'Messages', icon: MessagesSquare, path: '/worker/messages' },
  { name: 'Subscription', icon: Settings, path: '/worker/subscription' },
];

export default function WorkerLayout({ children, noMainPadding = false }) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col 2xl:w-72">
          <div className="px-7 py-6">
            <button
              type="button"
              onClick={() => navigate('/worker/dashboard')}
              className="text-2xl font-extrabold tracking-tight text-emerald-700"
            >
              SkilledLK
            </button>

            <div className="mt-2 flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Online
            </div>
          </div>

          <nav className="mt-10 flex-1 space-y-2">
            {sidebarItems.map(({ name, icon: Icon, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-4 border-r-4 px-6 py-4 text-sm font-semibold transition ${
                    isActive
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-700'
                      : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-emerald-700'
                  }`
                }
              >
                <Icon size={21} />
                {name}
              </NavLink>
            ))}
          </nav>

          <div className="px-6 py-7">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex w-full items-center gap-4 rounded-lg px-3 py-3 text-sm font-semibold text-slate-500 transition hover:bg-red-50 hover:text-red-600"
            >
              <LogOut size={21} />
              Logout
            </button>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 flex h-[72px] items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((value) => !value)}
                className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
                aria-label="Open worker menu"
              >
                <LayoutGrid size={20} />
              </button>

              <h1 className="text-lg font-bold text-slate-950 sm:text-xl">
                Good morning, Kasun 👷
              </h1>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <button
                className="text-slate-700 transition hover:text-emerald-700"
                aria-label="Notifications"
                type="button"
              >
                <Bell size={22} />
              </button>

              <button
                className="rounded-full bg-emerald-50 p-2 text-emerald-700 transition hover:bg-emerald-100"
                aria-label="Messages"
                type="button"
                onClick={() => navigate('/worker/messages')}
              >
                <MessageSquare size={22} />
              </button>

              <img
                src="https://i.pravatar.cc/120?img=12"
                alt="Kasun"
                className="h-10 w-10 rounded-full border-4 border-emerald-700 object-cover"
              />
            </div>
          </header>

          {mobileMenuOpen && (
            <div className="border-b border-slate-200 bg-white p-4 lg:hidden">
              <nav className="grid gap-2 sm:grid-cols-2">
                {sidebarItems.map(({ name, icon: Icon, path }) => (
                  <NavLink
                    key={name}
                    to={path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold ${
                        isActive
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`
                    }
                  >
                    <Icon size={19} />
                    {name}
                  </NavLink>
                ))}

                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-red-50 hover:text-red-600"
                >
                  <LogOut size={19} />
                  Logout
                </button>
              </nav>
            </div>
          )}

          <main
            className={
              noMainPadding
                ? 'flex-1'
                : 'flex-1 px-5 py-8 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 2xl:py-10'
            }
          >
            {children}
          </main>

          <CustomerFooter logoHref="/worker/dashboard" />
        </div>
      </div>
    </div>
  );
}