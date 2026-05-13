import React, { useState } from 'react';
import { Eye, Lock, Mail, UserRound } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import OnboardingLayout from './OnboardingLayout';

export default function Signup({ onBack, onSignin, onSignupComplete }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSignupComplete) {
      onSignupComplete();
    }
  };

  return (
    <OnboardingLayout onBack={onBack}>
      <div>
        <h1 className="text-[25px] font-medium tracking-tight text-slate-900">
          Create an account
        </h1>

        <p className="mt-1.5 text-[13px] leading-5 text-slate-500">
          Join our marketplace of skilled professionals and local customers.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <div>
            <label className="mb-1.5 block text-[13px] font-medium text-slate-700">
              Full Name
            </label>

            <div className="flex h-[42px] items-center gap-3 rounded-lg border border-slate-200 px-4 transition focus-within:border-[#08785d] focus-within:ring-2 focus-within:ring-emerald-100">
              <UserRound size={17} className="text-slate-400" />

              <input
                type="text"
                placeholder="John Doe"
                className="h-full w-full bg-transparent text-[13px] text-slate-800 outline-none placeholder:text-slate-300"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-[13px] font-medium text-slate-700">
              Email Address
            </label>

            <div className="flex h-[42px] items-center gap-3 rounded-lg border border-slate-200 px-4 transition focus-within:border-[#08785d] focus-within:ring-2 focus-within:ring-emerald-100">
              <Mail size={17} className="text-slate-400" />

              <input
                type="email"
                placeholder="name@example.com"
                className="h-full w-full bg-transparent text-[13px] text-slate-800 outline-none placeholder:text-slate-300"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-[13px] font-medium text-slate-700">
              Password
            </label>

            <div className="flex h-[42px] items-center gap-3 rounded-lg border border-slate-200 px-4 transition focus-within:border-[#08785d] focus-within:ring-2 focus-within:ring-emerald-100">
              <Lock size={17} className="text-slate-400" />

              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="h-full w-full bg-transparent text-[13px] text-slate-800 outline-none placeholder:text-slate-300"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="cursor-pointer text-slate-400 transition hover:text-slate-700"
                aria-label="Toggle password visibility"
              >
                <Eye size={18} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="h-[44px] w-full cursor-pointer rounded-lg bg-[#08785d] text-[14px] font-extrabold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-[#066b53]"
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-[11px] text-slate-400">OR</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          type="button"
          className="flex h-[44px] w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white text-[14px] font-medium text-slate-800 transition hover:bg-slate-50"
        >
          <FcGoogle size={20} />
          Sign up with Google
        </button>

        <p className="mt-5 text-center text-[13px] text-slate-500">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSignin}
            className="cursor-pointer font-extrabold text-[#08785d] hover:underline"
          >
            Sign in
          </button>
        </p>

        <p className="mt-5 text-center text-[10px] leading-5 text-slate-400">
          By signing up, you agree to our{' '}
          <a href="/terms" className="underline hover:text-slate-700">Terms of Service</a>{' '}
          &amp;{' '}
          <a href="/privacy" className="underline hover:text-slate-700">Privacy Policy</a>.
        </p>
      </div>
    </OnboardingLayout>
  );
}
