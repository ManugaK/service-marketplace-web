import React, { useEffect, useState } from 'react';
import { BadgeCheck, HardHat, UserRound } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import OnboardingLayout from './OnboardingLayout';

export default function RoleSelection({
  onBack,
  onContinue,
  selectedRole: initialSelectedRole = 'customer',
}) {
  const [selectedRole, setSelectedRole] = useState(initialSelectedRole);

  useEffect(() => {
    setSelectedRole(initialSelectedRole);
  }, [initialSelectedRole]);

  const handleContinue = () => {
    if (onContinue) {
      onContinue(selectedRole);
    }
  };

  return (
    <OnboardingLayout onBack={onBack}>
      <div>
        <h1 className="text-[25px] font-medium tracking-tight text-slate-900">
          Welcome to SkilledLK
        </h1>

        <p className="mt-1.5 text-[13px] text-slate-500">
          How will you use the app?
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setSelectedRole('customer')}
            className={`cursor-pointer rounded-xl border p-5 text-center transition ${
              selectedRole === 'customer'
                ? 'border-[#08785d] bg-[#e3f4ee]'
                : 'border-slate-200 bg-white hover:border-[#08785d]/50 hover:bg-emerald-50'
            }`}
          >
            <div
              className={`mx-auto flex h-[44px] w-[44px] items-center justify-center rounded-full ${
                selectedRole === 'customer'
                  ? 'bg-[#c7eee1] text-[#08785d]'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              <UserRound size={22} />
            </div>

            <h3 className="mt-3 text-[13px] font-extrabold text-slate-900">
              I need a worker
            </h3>

            <p className="mt-1 text-[12px] text-slate-500">Customer</p>
          </button>

          <button
            type="button"
            onClick={() => setSelectedRole('worker')}
            className={`cursor-pointer rounded-xl border p-5 text-center transition ${
              selectedRole === 'worker'
                ? 'border-[#08785d] bg-[#e3f4ee]'
                : 'border-slate-200 bg-white hover:border-[#08785d]/50 hover:bg-emerald-50'
            }`}
          >
            <div
              className={`mx-auto flex h-[44px] w-[44px] items-center justify-center rounded-full ${
                selectedRole === 'worker'
                  ? 'bg-[#c7eee1] text-[#08785d]'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              <HardHat size={22} />
            </div>

            <h3 className="mt-3 text-[13px] font-extrabold text-slate-900">
              I&apos;m a worker
            </h3>

            <p className="mt-1 text-[12px] text-slate-500">Professional</p>
          </button>
        </div>

        <button
          type="button"
          onClick={handleContinue}
          className="mt-5 h-[44px] w-full cursor-pointer rounded-lg bg-[#08785d] text-[14px] font-extrabold text-white transition hover:bg-[#066b53]"
        >
          Continue
        </button>

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

        <div className="mt-5 rounded-xl bg-emerald-50 p-4 lg:hidden">
          <div className="space-y-2.5">
            {['ID-verified workers', 'Secure payments', '2,100+ happy customers'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck size={17} className="text-[#08785d]" />
                <span className="text-[13px] font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 text-center text-[13px] text-slate-400">
          <div className="flex justify-center gap-6">
            <a href="/privacy" className="hover:text-slate-700">Privacy Policy</a>
            <a href="/terms" className="hover:text-slate-700">Terms of Service</a>
          </div>

          <p className="mt-3 text-[9px] uppercase tracking-[0.2em]">
            © 2026 SkilledLK. All rights reserved.
          </p>
        </div>
      </div>
    </OnboardingLayout>
  );
}
