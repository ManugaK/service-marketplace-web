import React, { useState } from 'react';
import { AuthLayout } from '../../components/auth/AuthLayout';
import workersTeam from '../../assets/workers_team.png';

const RoleSelection = ({ onContinue }) => {
  const [role, setRole] = useState('customer');

  return (
    <AuthLayout 
      title="Sri Lanka's most trusted skilled worker platform."
      heroImage={workersTeam}
    >
      <div className="mb-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Welcome to SkilledLK</h3>
        <p className="text-gray-500">How will you use the app?</p>
      </div>

      <div className="space-y-4 mb-8">
        <button 
          onClick={() => setRole('customer')}
          className={`w-full p-6 rounded-2xl border-2 text-left transition-all flex items-center gap-6 ${role === 'customer' ? 'border-[#1B5E44] bg-emerald-50 shadow-md' : 'border-gray-100 hover:border-gray-200'}`}
        >
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${role === 'customer' ? 'bg-[#1B5E44] text-white' : 'bg-gray-100 text-gray-400'}`}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p className={`font-bold text-lg ${role === 'customer' ? 'text-[#1B5E44]' : 'text-gray-900'}`}>I need a worker</p>
            <p className="text-gray-500 text-sm">Customer</p>
          </div>
        </button>

        <button 
          onClick={() => setRole('worker')}
          className={`w-full p-6 rounded-2xl border-2 text-left transition-all flex items-center gap-6 ${role === 'worker' ? 'border-[#1B5E44] bg-emerald-50 shadow-md' : 'border-gray-100 hover:border-gray-200'}`}
        >
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${role === 'worker' ? 'bg-[#1B5E44] text-white' : 'bg-gray-100 text-gray-400'}`}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className={`font-bold text-lg ${role === 'worker' ? 'text-[#1B5E44]' : 'text-gray-900'}`}>I'm a worker</p>
            <p className="text-gray-500 text-sm">Professional</p>
          </div>
        </button>
      </div>

      <button 
        onClick={() => onContinue(role)}
        className="w-full bg-[#006B44] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-900/20 hover:bg-[#005a39] transition-all active:scale-[0.98]"
      >
        Continue
      </button>

      <div className="relative flex py-6 items-center">
        <div className="flex-grow border-t border-gray-100"></div>
        <span className="flex-shrink mx-4 text-gray-400 text-xs font-bold tracking-widest uppercase">OR</span>
        <div className="flex-grow border-t border-gray-100"></div>
      </div>

      <button type="button" className="w-full border border-gray-200 py-3.5 rounded-xl flex items-center justify-center gap-3 font-semibold text-gray-700 hover:bg-gray-50 transition-all active:scale-[0.98]">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
        Continue with Google
      </button>

      <div className="mt-12 flex justify-center gap-6 text-[10px] text-gray-400 font-medium">
        <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
      </div>
    </AuthLayout>
  );
};

export default RoleSelection;



