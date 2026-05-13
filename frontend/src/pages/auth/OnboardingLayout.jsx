import React, { useState } from 'react';
import { Eye, Lock, Mail } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import OnboardingLayout from './OnboardingLayout';

export default function Login({ onBack, onCreateAccount, onLoginComplete }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onLoginComplete) {
      onLoginComplete();
    }
  };

  return (
    <OnboardingLayout onBack={onBack}>
      <div>
        <h1 className="text-[25px] font-medium tracking-tight text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-1.5 text-[13px] text-slate-500">
          Sign in to continue to your account
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <div>
            <label className="mb-1.5 block text-[13px] font-medium text-slate-700">
              Email Address
            </label>

            <div className="flex h-[42px] items-center gap-3 rounded-lg border border-slate-200 px-4 transition focus-within:border-[#08785d] focus-within:ring-2 focus-within:ring-emerald-100">
              <Mail size={17} className="text-slate-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="h-full w-full bg-transparent text-[13px] text-slate-800 outline-none placeholder:text-slate-400"
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
                placeholder="Enter your password"
                className="h-full w-full bg-transparent text-[13px] text-slate-800 outline-none placeholder:text-slate-400"
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

          <div className="flex justify-end">
            <button
              type="button"
              className="cursor-pointer text-[13px] font-medium text-[#08785d] hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="h-[44px] w-full cursor-pointer rounded-lg bg-[#08785d] text-[14px] font-extrabold text-white transition hover:bg-[#066b53]"
          >
            Sign In
          </button>
        </form>

        <div className="my-4 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-[11px] text-slate-400">OR</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          type="button"
          className="flex h-[44px] w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white text-[14px] font-extrabold text-slate-800 transition hover:bg-slate-50"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="mt-5 text-center text-[13px] text-slate-500">
          New to SkilledLK?{' '}
          <button
            type="button"
            onClick={onCreateAccount}
            className="cursor-pointer font-extrabold text-[#08785d] hover:underline"
          >
            Create an account
          </button>
        </p>

        <p className="mt-5 text-center text-[9px] uppercase tracking-[0.2em] text-slate-400">
          © 2026 SkilledLK Professional Marketplace
        </p>
      </div>
    </OnboardingLayout>
  );
}
