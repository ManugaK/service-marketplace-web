import React from 'react';
import { Smartphone, Play } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#071812] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              SkilledLK
            </h2>

            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-500">
              Sri Lanka&apos;s most trusted marketplace for verified
              professional services. Quality work, guaranteed.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium text-white">Explore</h3>

            <ul className="mt-6 space-y-4 text-sm text-slate-500">
              <li>
                <a href="#categories" className="transition hover:text-white">
                  Browse Categories
                </a>
              </li>
              <li>
                <a href="#top-professionals" className="transition hover:text-white">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Safety &amp; Trust
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-white">
                  Partner Program
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium text-white">Company</h3>

            <ul className="mt-6 space-y-4 text-sm text-slate-500">
              <li>
                <a href="#services" className="transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#testimonials" className="transition hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium text-white">Download App</h3>

            <div className="mt-6 space-y-4">
              <a
                href="#app-store"
                className="flex h-14 w-full max-w-[240px] items-center gap-4 rounded-lg bg-[#1d2a3f] px-4 transition hover:bg-[#25344d]"
              >
                <Smartphone size={22} className="text-white" />

                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    Download on
                  </p>
                  <p className="text-sm font-bold text-white">App Store</p>
                </div>
              </a>

              <a
                href="#google-play"
                className="flex h-14 w-full max-w-[240px] items-center gap-4 rounded-lg bg-[#1d2a3f] px-4 transition hover:bg-[#25344d]"
              >
                <Play size={20} className="text-white" />

                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    Get it on
                  </p>
                  <p className="text-sm font-bold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-7 text-center sm:px-6 lg:px-8">
          <p className="text-xs text-slate-600 sm:text-sm">
            © 2026 SkilledLK Service Marketplace. Sri Lanka&apos;s Professional
            Network.
          </p>
        </div>
      </div>
    </footer>
  );
}