import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import OnboardingLayout from './OnboardingLayout';

export default function PhoneInput({ onBack, onSendOtp }) {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSendOtp) {
      onSendOtp(phone || '77 123 4567');
    }
  };

  return (
    <OnboardingLayout onBack={onBack}>
      <div>
        <div className="mx-auto mb-8 flex h-[150px] w-[230px] items-center justify-center rounded-lg bg-gradient-to-br from-[#6db6ad] to-[#a8ddd3]">
          <div className="relative">
            <div className="h-[102px] w-[62px] rotate-[-13deg] rounded-[16px] border-[5px] border-[#5baaa2] bg-[#a9ddd5] shadow-lg">
              <div className="mx-auto mt-2 h-1.5 w-6 rounded-full bg-[#5baaa2]" />
              <div className="mx-auto mt-4 h-[58px] w-[40px] rounded-lg bg-[#c8eee8]" />
            </div>

            <div className="absolute left-[-8px] top-[33px] w-[92px] rounded-lg bg-white px-4 py-3 shadow-xl">
              <div className="h-2.5 w-10 rounded-full bg-slate-100" />
              <div className="mt-3 h-2.5 w-16 rounded-full bg-slate-100" />
              <p className="mt-4 text-[8px] font-extrabold text-[#08785d]">OTP: 582 901</p>
            </div>
          </div>
        </div>

        <h1 className="text-center text-[25px] font-medium tracking-tight text-slate-900">
          Enter your phone number
        </h1>

        <p className="mt-2 text-center text-[13px] text-slate-500">
          We&apos;ll send a 6-digit OTP to verify your number.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex h-[42px] overflow-hidden rounded-lg border border-slate-200 bg-white transition focus-within:border-[#08785d] focus-within:ring-2 focus-within:ring-emerald-100">
            <button
              type="button"
              className="flex h-full cursor-pointer items-center gap-2 border-r border-slate-200 bg-slate-50 px-4 text-[13px] font-medium text-slate-600 transition hover:bg-slate-100"
            >
              <span>LK</span>
              <span className="text-slate-500">+94</span>
              <ChevronDown size={14} className="text-slate-400" />
            </button>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="77 123 4567"
              className="h-full w-full bg-transparent px-4 text-[13px] text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            className="mt-6 h-[44px] w-full cursor-pointer rounded-lg bg-[#08785d] text-[14px] font-extrabold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-[#066b53]"
          >
            Send OTP
          </button>
        </form>

        <p className="mx-auto mt-8 max-w-[285px] text-center text-[11px] leading-5 text-slate-400">
          By continuing, you agree to SkilledLK&apos;s{' '}
          <a href="/terms" className="font-medium text-[#08785d] hover:underline">Terms of Service</a>{' '}
          and{' '}
          <a href="/privacy" className="hover:text-[#08785d]">Privacy Policy</a>.
        </p>
      </div>
    </OnboardingLayout>
  );
}
