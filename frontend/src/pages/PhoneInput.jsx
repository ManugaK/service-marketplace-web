import React from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import workerTablet from '../assets/worker_tablet.png';

const PhoneInput = ({ onSendOTP }) => {
  return (
    <AuthLayout 
      title="Sri Lanka's most trusted skilled worker platform."
      heroImage={workerTablet}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-full max-w-[280px] mb-8">
           <img src={workerTablet} alt="Phone Verification" className="w-full h-auto rounded-2xl shadow-lg" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Enter your phone number</h3>
        <p className="text-gray-500 mb-8">We'll send a 6-digit OTP to verify your number.</p>

        <form className="w-full space-y-6" onSubmit={(e) => { e.preventDefault(); onSendOTP(); }}>
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-32 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <img src="https://flagcdn.com/w20/lk.png" alt="LK" className="w-5 h-auto rounded-sm" />
              </div>
              <select className="w-full pl-10 pr-2 py-3.5 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-[#1B5E44] outline-none appearance-none font-medium">
                <option>LK +94</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <input 
              type="tel" 
              placeholder="77 123 4567" 
              className="flex-grow px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B5E44] outline-none font-medium tracking-wider" 
            />
          </div>

          <button type="submit" className="w-full bg-[#006B44] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-900/20 hover:bg-[#005a39] transition-all">
            Send OTP
          </button>
        </form>

        <p className="mt-10 text-center text-xs text-gray-400 leading-relaxed max-w-xs mx-auto">
          By continuing, you agree to SkilledLK's <br />
          <a href="#" className="text-emerald-600 font-semibold underline">Terms of Service</a> and <a href="#" className="text-emerald-600 font-semibold underline">Privacy Policy</a>.
        </p>
      </div>
    </AuthLayout>
  );
};

export default PhoneInput;
