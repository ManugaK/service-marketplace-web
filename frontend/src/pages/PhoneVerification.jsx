import React, { useState, useEffect } from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';

const PhoneVerification = ({ phoneNumber = "+94 77 123 4567", onVerify, onChangePhone }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== '' && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  return (
    <AuthLayout 
      title="Sri Lanka's most trusted skilled worker platform."
      heroImage="/src/assets/hero_handshake.png"
    >
      <div className="flex flex-col items-center">
        <div className="w-full mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">Enter verification code</h3>
          <p className="text-gray-500">
            Sent to {phoneNumber} — <button onClick={onChangePhone} className="text-[#006B44] font-bold hover:underline">Change?</button>
          </p>
        </div>

        <div className="flex gap-3 mb-8 w-full">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-full aspect-square text-center text-2xl font-bold border-2 rounded-xl focus:ring-2 focus:ring-[#1B5E44] focus:border-[#1B5E44] outline-none transition-all ${digit ? 'border-[#1B5E44] bg-emerald-50' : 'border-gray-100'}`}
            />
          ))}
        </div>

        <div className="w-full text-center mb-10">
          <p className="text-sm text-gray-400 mb-2">
            Resend OTP in 0:{timer.toString().padStart(2, '0')}
          </p>
          <button 
            disabled={timer > 0}
            className={`text-sm font-bold ${timer > 0 ? 'text-gray-300 cursor-not-allowed' : 'text-[#006B44] hover:underline'}`}
          >
            Resend OTP
          </button>
        </div>

        <button 
          onClick={() => onVerify(otp.join(''))}
          className="w-full bg-[#006B44] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-900/20 hover:bg-[#005a39] transition-all active:scale-[0.98]"
        >
          Verify Code
        </button>

        <p className="mt-10 text-gray-500 font-medium">
          Having trouble? <a href="#" className="text-[#006B44] font-bold hover:underline">Contact Support</a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default PhoneVerification;
