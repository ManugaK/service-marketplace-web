import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Stepper } from './BookingDetails';
import { HiOutlineArrowLeft, HiOutlineCreditCard, HiOutlineCash, HiOutlineDeviceMobile, HiOutlineShieldCheck } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const BookingPayment = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState('card');
  const [paymentOption, setPaymentOption] = useState('advance');

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar isLoggedIn={true} />
      
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-bold mb-8 transition-colors">
          <HiOutlineArrowLeft /> Back
        </button>

        <Stepper currentStep={4} />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-grow space-y-8">
             <h1 className="text-3xl font-black text-gray-900 mb-8">Choose Payment Method</h1>

             {/* Payment Methods */}
             <div className="space-y-4">
                {[
                  { id: 'card', label: 'Credit / Debit Card', icon: <HiOutlineCreditCard /> },
                  { id: 'wallet', label: 'Mobile Wallet (eZCash, mCash, FriMi)', icon: <HiOutlineDeviceMobile /> },
                  { id: 'cash', label: 'Cash to Worker', icon: <HiOutlineCash /> },
                ].map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => setMethod(item.id)}
                    className={`flex items-center justify-between p-6 rounded-[2rem] border transition-all cursor-pointer ${
                      method === item.id ? 'bg-white border-[#1B5E44] shadow-xl shadow-emerald-900/5' : 'bg-white border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                       <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${method === item.id ? 'border-[#1B5E44]' : 'border-gray-200'}`}>
                          {method === item.id && <div className="w-3 h-3 bg-[#1B5E44] rounded-full animate-scale-in"></div>}
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="text-2xl text-gray-400">{item.icon}</div>
                          <span className={`font-bold ${method === item.id ? 'text-gray-900' : 'text-gray-500'}`}>{item.label}</span>
                       </div>
                    </div>
                  </div>
                ))}
             </div>

             {/* Card Details Form (Only if method is card) */}
             {method === 'card' && (
                <section className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8 animate-fade-in">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Card Number</label>
                      <div className="relative">
                         <HiOutlineCreditCard className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 text-xl" />
                         <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-16 pr-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#1B5E44] outline-none font-medium transition-all" />
                      </div>
                   </div>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Expiry Date</label>
                         <input type="text" placeholder="MM / YY" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#1B5E44] outline-none font-medium transition-all" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">CVV</label>
                         <input type="text" placeholder="***" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#1B5E44] outline-none font-medium transition-all" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cardholder Name</label>
                      <input type="text" placeholder="Full Name as on Card" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#1B5E44] outline-none font-medium transition-all" />
                   </div>
                   
                   <div className="p-6 bg-blue-50 rounded-2xl flex items-center gap-4 border border-blue-100">
                      <HiOutlineShieldCheck className="text-xl text-blue-500" />
                      <p className="text-[10px] font-bold text-blue-900 uppercase tracking-widest">Your payment information is encrypted and secure.</p>
                   </div>
                </section>
             )}

             <button className="w-full py-6 bg-[#1B5E44] text-white rounded-[2rem] font-black shadow-2xl shadow-emerald-900/20 hover:bg-[#005a39] transition-all transform hover:-translate-y-1 text-xl">
                Confirm & Pay LKR {paymentOption === 'advance' ? '2,625' : '5,250'}
             </button>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[400px] flex-shrink-0 space-y-8">
             <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Booking Summary</h3>
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-50">
                   <div className="w-16 h-16 rounded-2xl bg-gray-900 overflow-hidden">
                      <img src="https://i.pravatar.cc/150?u=KasunSilva" alt="Worker" />
                   </div>
                   <div>
                      <h4 className="font-black text-gray-900">Kasun Silva</h4>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Room Painting</p>
                   </div>
                </div>

                <div className="space-y-6 mb-10">
                   <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-400">Service Fee</span>
                      <span className="text-gray-900 font-bold">LKR 5,000</span>
                   </div>
                   <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-400">Platform Fee (5%)</span>
                      <span className="text-gray-900 font-bold">LKR 250</span>
                   </div>
                   <div className="flex justify-between items-end pt-4 border-t border-gray-50">
                      <span className="text-lg font-black text-gray-900">Total</span>
                      <span className="text-2xl font-black text-[#1B5E44]">LKR 5,250</span>
                   </div>
                </div>

                <div className="space-y-4">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Payment Options</p>
                   {[
                     { id: 'advance', label: 'Advance 50%', amount: 'LKR 2,625' },
                     { id: 'full', label: 'Full Amount', amount: 'LKR 5,250' },
                     { id: 'after', label: 'After Job (Cash)', amount: 'Pay direct' },
                   ].map(opt => (
                     <div 
                        key={opt.id}
                        onClick={() => setPaymentOption(opt.id)}
                        className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                           paymentOption === opt.id ? 'border-[#1B5E44] bg-emerald-50/20' : 'border-gray-100'
                        }`}
                     >
                        <div className="flex items-center gap-3">
                           <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentOption === opt.id ? 'border-[#1B5E44]' : 'border-gray-300'}`}>
                              {paymentOption === opt.id && <div className="w-2 h-2 bg-[#1B5E44] rounded-full"></div>}
                           </div>
                           <span className={`text-xs font-bold ${paymentOption === opt.id ? 'text-[#1B5E44]' : 'text-gray-500'}`}>{opt.label}</span>
                        </div>
                        <span className="text-xs font-black text-gray-900">{opt.amount}</span>
                     </div>
                   ))}
                </div>
             </div>

             {/* Cancellation Policy Sidebar Info */}
             <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100 flex gap-6 items-start">
                <div className="w-10 h-10 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0">
                   <HiOutlineShieldCheck className="text-xl" />
                </div>
                <div>
                   <h4 className="font-bold text-gray-900 text-sm mb-2">Cancellation Policy</h4>
                   <p className="text-[10px] text-amber-900/60 leading-relaxed font-medium">
                      Free cancellation up to 24 hours before the service. Cancellations within 24 hours may incur 
                      a 10% platform fee charge to compensate the service provider.
                   </p>
                </div>
             </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPayment;


