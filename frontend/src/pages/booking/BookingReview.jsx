import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Stepper } from './BookingDetails';
import { HiOutlineArrowLeft, HiOutlineCheckCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const BookingReview = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar isLoggedIn={true} />
      
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-bold mb-8 transition-colors">
          <HiOutlineArrowLeft /> Back
        </button>

        <Stepper currentStep={3} />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Review Details */}
          <div className="flex-grow space-y-8">
             <h1 className="text-3xl font-black text-gray-900 mb-8">Review Your Booking</h1>

             {/* Schedule Card */}
             <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#1B5E44]">
                   <HiOutlineCheckCircle className="text-2xl" />
                </div>
                <div className="space-y-4 flex-grow">
                   <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Schedule</h3>
                   <div>
                      <p className="text-lg font-black text-gray-900">28 April 2025</p>
                      <p className="text-sm font-medium text-gray-500">9:00 AM - 12:00 PM (3 Hours)</p>
                   </div>
                </div>
                <button onClick={() => navigate('/book/details')} className="text-[#1B5E44] font-black text-xs underline uppercase">Edit</button>
             </div>

             {/* Location Card */}
             <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#1B5E44]">
                   <HiOutlineCheckCircle className="text-2xl" />
                </div>
                <div className="space-y-4 flex-grow">
                   <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Location</h3>
                   <div>
                      <p className="text-lg font-black text-gray-900">123 Temple Road, Maharagama</p>
                      <p className="text-sm font-medium text-gray-500">Colombo, Sri Lanka</p>
                   </div>
                </div>
                <button onClick={() => navigate('/book/details')} className="text-[#1B5E44] font-black text-xs underline uppercase">Edit</button>
             </div>

             {/* Job Description Card */}
             <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
                <div className="flex items-start gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#1B5E44]">
                      <HiOutlineCheckCircle className="text-2xl" />
                   </div>
                   <div className="space-y-4 flex-grow">
                      <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Job Description</h3>
                      <p className="text-sm font-medium text-gray-500 leading-relaxed">
                         Need professional painting for a master bedroom and an attached hallway. Total area is 
                         approximately 450 sq.ft. Walls need light sanding and two coats of emulsion paint. I have 
                         already purchased the paint; looking for labor and equipment (brushes, rollers, drop 
                         cloths). Please ensure clean borders and no spills on the hardwood floor.
                      </p>
                   </div>
                   <button onClick={() => navigate('/book/details')} className="text-[#1B5E44] font-black text-xs underline uppercase">Edit</button>
                </div>
                
                {/* Images */}
                <div className="flex gap-4 pt-4 border-t border-gray-50">
                   {[1,2].map(i => (
                      <div key={i} className="w-24 h-24 rounded-2xl overflow-hidden shadow-sm">
                         <img src={`https://picsum.photos/seed/${i + 40}/200/200`} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[400px] flex-shrink-0">
             <div className="sticky top-28 space-y-8">
                <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm">
                   <h3 className="text-xl font-bold text-gray-900 mb-8">Worker Summary</h3>
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gray-900 overflow-hidden">
                         <img src="https://i.pravatar.cc/150?u=KasunSilva" alt="Worker" />
                      </div>
                      <div>
                         <h4 className="font-black text-gray-900">Kasun Silva <HiOutlineCheckCircle className="inline text-emerald-500" /></h4>
                         <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Painter & Handyman</p>
                         <p className="text-xs font-bold text-[#1B5E44] flex items-center gap-1">★ 4.9 (124 reviews)</p>
                      </div>
                   </div>

                   <div className="pt-8 border-t border-gray-50 space-y-6">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Price Breakdown</p>
                      <div className="flex justify-between text-sm font-medium">
                         <span className="text-gray-400">Service fee (3 hrs)</span>
                         <span className="text-gray-900">LKR 5,000</span>
                      </div>
                      <div className="flex justify-between text-sm font-medium">
                         <span className="text-gray-400">Platform fee</span>
                         <span className="text-gray-900">LKR 250</span>
                      </div>
                      <div className="flex justify-between items-end pt-4">
                         <span className="text-lg font-black text-gray-900">Total Amount</span>
                         <span className="text-2xl font-black text-[#1B5E44]">LKR 5,250</span>
                      </div>
                   </div>

                   <div className="space-y-4 mt-12">
                      <button onClick={() => navigate('/book/payment')} className="w-full py-5 bg-[#1B5E44] text-white rounded-2xl font-black shadow-xl shadow-emerald-900/20 hover:bg-[#005a39] transition-all transform hover:-translate-y-1">
                         Proceed to Payment
                      </button>
                      <button onClick={() => navigate(-1)} className="w-full py-5 border border-gray-100 rounded-2xl text-gray-400 font-bold hover:bg-gray-50 transition-all">
                         Back
                      </button>
                   </div>
                   <p className="text-center text-[10px] font-bold text-gray-400 mt-6 uppercase tracking-widest italic">You won't be charged yet.</p>
                </div>
             </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingReview;


