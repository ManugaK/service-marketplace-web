import React from 'react';
import { Globe2, Share2 } from 'lucide-react';

export default function CustomerFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-10 sm:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <a href="/customer/dashboard" className="text-xl font-bold text-emerald-700">
              SkilledLK
            </a>
            <p className="mt-4 text-sm text-slate-500">
              © 2026 SkilledLK Marketplace. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-slate-500">
            <a href="/privacy" className="transition hover:text-emerald-700">
              Privacy Policy
            </a>
            <a href="/terms" className="transition hover:text-emerald-700">
              Terms of Service
            </a>
            <a href="/help" className="transition hover:text-emerald-700">
              Help Center
            </a>
            <a href="/support" className="transition hover:text-emerald-700">
              Contact Support
            </a>
          </div>

          <div className="flex items-center gap-5 text-slate-500">
            <button className="transition hover:text-emerald-700" aria-label="Language">
              <Globe2 size={22} />
            </button>
            <button className="transition hover:text-emerald-700" aria-label="Share">
              <Share2 size={22} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}