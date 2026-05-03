import React from 'react';
import { AuthLayout } from '../../components/auth/AuthLayout';
import workerCircular from '../../assets/worker_circular.png';

const Login = ({ onSwitchToSignup }) => {
  return (
    <AuthLayout 
      title="Your home deserves the best."
      subtitle="Connect with trusted local experts for every project, from plumbing to renovations."
      heroImage={workerCircular}
      imageType="circle"
    >
      <div className="mb-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h3>
        <p className="text-gray-500">Sign in to continue to your account</p>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B5E44] focus:border-[#1B5E44] outline-none transition-all" 
            />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <a href="#" className="text-[#1B5E44] text-sm font-bold hover:underline">Forgot password?</a>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full pl-11 pr-12 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B5E44] focus:border-[#1B5E44] outline-none transition-all" 
            />
            <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        <button className="w-full bg-[#006B44] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-900/20 hover:bg-[#005a39] hover:shadow-emerald-900/30 transition-all active:scale-[0.98]">
          Sign In
        </button>

        <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-xs font-bold tracking-widest uppercase">OR</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        <button type="button" className="w-full border border-gray-200 py-3.5 rounded-xl flex items-center justify-center gap-3 font-semibold text-gray-700 hover:bg-gray-50 transition-all active:scale-[0.98]">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
          Continue with Google
        </button>
      </form>
      
      <p className="text-center mt-10 text-gray-600 font-medium">
        New to SkilledLK? <button onClick={onSwitchToSignup} className="text-[#1B5E44] font-bold hover:underline">Create an account</button>
      </p>
    </AuthLayout>
  );
};

export default Login;


