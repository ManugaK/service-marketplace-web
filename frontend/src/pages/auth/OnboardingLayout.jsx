import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

import workerTablet from '../../assets/worker_tablet.png';
import dilshanProfile from '../../assets/dilshan_profile.png';

export default function OnboardingLayout({
  onBack,
  children,
  leftTitle = "Sri Lanka's most trusted skilled worker platform.",
  leftImage = workerTablet,
  showTestimonial = true,
}) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/45 px-4 py-5 backdrop-blur-sm">
      <div
        className="relative grid w-full max-w-[940px] overflow-y-auto overflow-x-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2"
        style={{ maxHeight: 'calc(100dvh - 40px)' }}
      >
        {/* Left Side */}
        <div className="relative hidden overflow-hidden bg-[#155f46] text-white lg:block">
          <div className="absolute right-[-120px] top-[-130px] h-[260px] w-[260px] rounded-full bg-white/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.14),transparent_38%)]" />

          <div className="relative z-10 flex h-full flex-col px-7 py-6">
            <h1 className="text-[15px] font-extrabold tracking-tight">SkilledLK</h1>

            <div className="flex flex-1 flex-col justify-center">
              <h2 className="max-w-[380px] text-[27px] font-extrabold leading-[1.22] tracking-tight">
                {leftTitle}
              </h2>

              <div className="mt-6 max-w-[250px] space-y-3 text-left">
                {['ID-verified workers', 'Secure payments', '2,100+ happy customers'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-[19px] text-[#6ee7bd]" />
                    <span className="text-[13px] text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 w-[240px] overflow-hidden rounded-lg border border-white/20 bg-white/10 shadow-[0_0_60px_rgba(255,255,255,0.10)]">
                <div className="relative h-[178px] w-full">
                  <img
                    src={leftImage}
                    alt="SkilledLK preview"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#155f46]/5" />
                </div>
              </div>
            </div>

            {showTestimonial && (
              <div className="mx-auto flex w-full max-w-[290px] items-center gap-3 rounded-lg bg-white px-4 py-3 text-slate-900 shadow-xl">
                <img
                  src={dilshanProfile}
                  alt="Dilshan Perera"
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />

                <div>
                  <p className="text-[13px] font-medium text-slate-800">Dilshan Perera</p>
                  <p className="mt-0.5 text-[12px] font-bold text-[#08785d]">
                    Earned LKR 42,000 this month
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white px-6 py-5 sm:px-8 lg:px-9">
          <div className="mx-auto flex h-full w-full max-w-[370px] flex-col justify-center">
            <div className="mb-5 flex items-center justify-between">
              <button
                type="button"
                onClick={onBack}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                aria-label="Back"
              >
                <ArrowLeft size={20} />
              </button>

              <h2 className="text-[19px] font-extrabold text-[#08785d]">SkilledLK</h2>

              <div className="h-8 w-8" />
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
