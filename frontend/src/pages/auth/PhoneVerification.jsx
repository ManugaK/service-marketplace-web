import React, { useRef, useState } from 'react';
import OnboardingLayout from './OnboardingLayout';

export default function PhoneVerification({
  onBack,
  onChangePhone,
  onVerifyCode,
  phoneNumber = '+94 77 123 4567',
}) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    const cleanValue = value.replace(/\D/g, '').slice(0, 1);
    const updatedOtp = [...otp];
    updatedOtp[index] = cleanValue;
    setOtp(updatedOtp);

    if (cleanValue && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);

    if (!pasted) return;

    const nextOtp = [...otp];

    pasted.split('').forEach((digit, index) => {
      nextOtp[index] = digit;
    });

    setOtp(nextOtp);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onVerifyCode) {
      onVerifyCode(otp.join(''));
    }
  };

  return (
    <OnboardingLayout onBack={onBack}>
      <div>
        <h1 className="text-[25px] font-extrabold tracking-tight text-slate-900">
          Enter verification code
        </h1>

        <p className="mt-2 text-[13px] text-slate-600">
          Sent to {phoneNumber}{' '}
          <button
            type="button"
            onClick={onChangePhone}
            className="cursor-pointer font-extrabold text-[#08785d] hover:underline"
          >
             &nbsp;&nbsp;Change?
          </button>
        </p>

        <form onSubmit={handleSubmit} className="mt-9">
          <div className="grid grid-cols-6 gap-2.5">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`h-[52px] w-full rounded-lg border bg-white text-center text-[20px] font-extrabold text-slate-900 outline-none transition ${
                  digit
                    ? 'border-[#08785d] ring-2 ring-emerald-100'
                    : 'border-slate-200 focus:border-[#08785d] focus:ring-2 focus:ring-emerald-100'
                }`}
              />
            ))}
          </div>

          <div className="mt-8 text-[13px]">
            <p className="text-slate-500">Resend OTP in 0:45</p>

            <button
              type="button"
              disabled
              className="mt-2 cursor-not-allowed font-extrabold text-slate-300"
            >
              Resend OTP
            </button>
          </div>

          <button
            type="submit"
            className="mt-10 h-[44px] w-full cursor-pointer rounded-lg bg-[#08785d] text-[14px] font-extrabold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-[#066b53]"
          >
            Verify Code
          </button>
        </form>

        <p className="mt-8 text-center text-[13px] text-slate-500">
          Having trouble?{' '}
          <a href="/support" className="font-medium text-[#08785d] hover:underline">
            Contact Support
          </a>
        </p>

        <p className="mt-20 text-center text-[10px] text-slate-400">
          © 2026 ServiceLanka. Sri Lanka&apos;s Professional Marketplace.
        </p>
      </div>
    </OnboardingLayout>
  );
}
