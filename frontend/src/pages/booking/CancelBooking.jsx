import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { HiOutlineArrowLeft, HiOutlineInformationCircle, HiOutlineXCircle, HiOutlineCheckCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const CancelBooking = () => {
  const navigate = useNavigate();
  const [reason, setReason] = useState('mind');

  const policies = [
    { label: 'Before worker accepts', status: 'Full refund — Free', icon: <HiOutlineCheckCircle className="text-emerald-500" />, color: 'text-emerald-600' },
    { label: 'After acceptance, 24hrs+ before job', status: '75% refund — LKR 3,750', color: 'text-gray-900' },
    { label: 'Less than 2 hours before job', status: '50% refund — LKR 2,500', color: 'text-gray-900' },
    { label: 'No-show / job started', status: 'No refund', icon: <HiOutlineXCircle className="text-rose-500" />, color: 'text-rose-600' },
  ];

  const reasons = [
    { id: 'price', label: 'Found a better price elsewhere' },
    { id: 'conflict', label: 'Schedule conflict / No longer needed' },
    { id: 'mind', label: 'Change of mind / Personal reasons' },
    { id: 'other', label: 'Other' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar isLoggedIn={true} />
      
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-bold mb-8 transition-colors">
          <HiOutlineArrowLeft /> Back
        </button>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Main Cancellation Area */}
          <div className="flex-grow space-y-12">
             <div className="text-center">
                <h1 className="text-4xl font-black text-rose-500 mb-4 tracking-tight">Cancel Booking</h1>
                <p className="text-gray-500 font-medium">We're sorry to see you go. Please review the cancellation terms below.</p>
             </div>

             {/* Cancellation Policy Table */}
             <section className="bg-amber-50/50 p-10 rounded-[2.5rem] border border-amber-100/50 space-y-8">
                <div className="flex items-center gap-2 text-amber-700 font-black text-sm uppercase tracking-widest">
                   <HiOutlineInformationCircle className="text-xl" /> Cancellation Policy
                </div>
                <div className="space-y-6">
                   {policies.map((policy, i) => (
                      <div key={i} className="flex justify-between items-center text-sm font-bold">
                         <span className="text-gray-600">{policy.label}</span>
                         <span className={`flex items-center gap-2 ${policy.color}`}>
                            {policy.status} {policy.icon}
                         </span>
                      </div>
                   ))}
                </div>
             </section>

             {/* Refund Highlight */}
             <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 flex items-center justify-between">
                <div>
                   <h4 className="font-black text-[#1B5E44] text-sm mb-1">You are eligible for a full refund</h4>
                   <p className="text-xs text-[#1B5E44]/60 font-medium">Worker has not accepted yet.</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-bold text-[#1B5E44]/60 uppercase tracking-widest mb-1">Refund Amount</p>
                   <p className="text-3xl font-black text-[#1B5E44]">LKR 2,500</p>
                   <p className="text-[10px] font-bold text-[#1B5E44]/60 uppercase tracking-widest">(advance paid)</p>
                </div>
             </div>

             {/* Reason for Cancellation */}
             <section className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">Reason for cancellation</h2>
                <div className="space-y-4">
                   {reasons.map((r) => (
                      <div 
                         key={r.id} 
                         onClick={() => setReason(r.id)}
                         className={`p-6 bg-white rounded-3xl border transition-all cursor-pointer flex items-center gap-6 ${
                           reason === r.id ? 'border-[#1B5E44] shadow-lg shadow-emerald-900/5' : 'border-gray-100 hover:border-gray-200'
                         }`}
                      >
                         <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${reason === r.id ? 'border-[#1B5E44]' : 'border-gray-200'}`}>
                            {reason === r.id && <div className="w-3 h-3 bg-[#1B5E44] rounded-full"></div>}
                         </div>
                         <span className={`font-bold ${reason === r.id ? 'text-gray-900' : 'text-gray-500'}`}>{r.label}</span>
                      </div>
                   ))}
                </div>
             </section>

             {/* Additional Notes */}
             <div className="space-y-4">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Additional Notes (Optional)</label>
                <textarea 
                  rows="4" 
                  placeholder="Provide more details to help us improve..."
                  className="w-full px-8 py-6 bg-white rounded-[2rem] border border-gray-100 focus:border-[#1B5E44] outline-none font-medium transition-all resize-none shadow-sm"
                ></textarea>
             </div>

             {/* Action Buttons */}
             <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                <button onClick={() => navigate(-1)} className="w-full md:w-auto px-12 py-5 border border-gray-200 rounded-2xl font-black text-gray-700 hover:bg-gray-50 transition-all">
                   Keep my booking
                </button>
                <button className="w-full md:w-auto px-12 py-5 bg-rose-500 text-white rounded-2xl font-black shadow-xl shadow-rose-900/20 hover:bg-rose-600 transition-all transform hover:-translate-y-1">
                   Confirm cancellation
                </button>
             </div>
             <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">
                * This action cannot be undone. Refund will be processed to your original payment method within 3-5 business days.
             </p>
          </div>

          {/* Sidebar Summary */}
          <aside className="w-full lg:w-[350px] flex-shrink-0">
             <div className="sticky top-28 space-y-8">
                <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm">
                   <div className="flex justify-between items-center mb-8">
                      <h3 className="text-xl font-bold text-gray-900">Booking Summary</h3>
                      <span className="bg-emerald-50 text-[#1B5E44] text-[10px] font-black px-2 py-0.5 rounded border border-emerald-100">#BK-1041</span>
                   </div>
                   
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-gray-900 overflow-hidden">
                         <img src="https://i.pravatar.cc/150?u=KasunSilva" alt="Worker" />
                      </div>
                      <div>
                         <h4 className="font-black text-gray-900 text-sm">Kasun Silva</h4>
                         <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Room painting</p>
                      </div>
                   </div>

                   <div className="space-y-6 pt-8 border-t border-gray-50">
                      <div className="flex items-center gap-4">
                         <HiOutlineCalendar className="text-xl text-gray-300" />
                         <div>
                            <p className="text-sm font-black text-gray-900">28 April 2025</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">9:00 AM onwards</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <HiOutlineShieldCheck className="text-xl text-gray-300" />
                         <div>
                            <p className="text-sm font-black text-gray-900">LKR 5,000 Total</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">LKR 2,500 advance paid</p>
                         </div>
                      </div>
                   </div>

                   <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-50">
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Status</span>
                      <span className="flex items-center gap-2 text-xs font-black text-emerald-500 uppercase tracking-widest">
                         <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> CONFIRMED
                      </span>
                   </div>
                </div>

                {/* Need Help Box */}
                <div className="bg-blue-50/50 p-8 rounded-[2.5rem] border border-blue-100/50 space-y-4">
                   <h4 className="font-black text-gray-900 text-sm flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">?</span>
                      Need help?
                   </h4>
                   <p className="text-xs text-gray-500 font-medium leading-relaxed">
                      If you're having trouble with your service provider or want to reschedule instead of cancelling, our support team is here 24/7.
                   </p>
                   <button className="text-xs font-black text-[#1B5E44] hover:underline uppercase tracking-widest">Contact Support</button>
                </div>
             </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CancelBooking;


