import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineDocumentText, HiOutlinePhotograph, HiOutlineShieldCheck, HiOutlineArrowLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Stepper = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'Select Worker' },
    { id: 2, label: 'Booking Details' },
    { id: 3, label: 'Review' },
    { id: 4, label: 'Payment' },
  ];

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10"></div>
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center gap-2 bg-white px-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all ${
              step.id < currentStep 
              ? 'bg-[#1B5E44] border-[#1B5E44] text-white' 
              : step.id === currentStep 
              ? 'bg-white border-[#1B5E44] text-[#1B5E44]' 
              : 'bg-white border-gray-200 text-gray-400'
            }`}>
              {step.id < currentStep ? '✓' : step.id}
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest ${step.id === currentStep ? 'text-[#1B5E44]' : 'text-gray-400'}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const BookingDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar isLoggedIn={true} />
      
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-bold mb-8 transition-colors">
          <HiOutlineArrowLeft /> Back
        </button>

        <Stepper currentStep={2} />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Form */}
          <div className="flex-grow space-y-8">
             <h1 className="text-3xl font-black text-gray-900 mb-8">Provide Job Details</h1>

             {/* Date & Time */}
             <section className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                   <HiOutlineCalendar className="text-2xl text-[#1B5E44]" />
                   <h2 className="text-xl font-bold text-gray-900">Preferred Date & Time</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Select Date</label>
                      <input type="date" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#1B5E44] outline-none font-medium transition-all" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Preferred Time</label>
                      <select className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#1B5E44] outline-none font-medium transition-all appearance-none">
                         <option>Morning (08:00 AM - 12:00 PM)</option>
                         <option>Afternoon (12:00 PM - 04:00 PM)</option>
                         <option>Evening (04:00 PM - 08:00 PM)</option>
                      </select>
                   </div>
                </div>
             </section>

             {/* Location */}
             <section className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                   <HiOutlineLocationMarker className="text-2xl text-[#1B5E44]" />
                   <h2 className="text-xl font-bold text-gray-900">Location</h2>
                </div>
                <div className="space-y-8">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Street Address</label>
                      <input type="text" placeholder="House No, Street Name" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#1B5E44] outline-none font-medium transition-all" />
                   </div>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">City</label>
                         <input type="text" defaultValue="Colombo" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#1B5E44] outline-none font-medium transition-all" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Landmark (Optional)</label>
                         <input type="text" placeholder="Near Petrol Shed" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#1B5E44] outline-none font-medium transition-all" />
                      </div>
                   </div>
                </div>
             </section>

             {/* Job Description */}
             <section className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                   <HiOutlineDocumentText className="text-2xl text-[#1B5E44]" />
                   <h2 className="text-xl font-bold text-gray-900">Job Description</h2>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Describe the work in detail</label>
                   <textarea 
                     rows="5" 
                     placeholder="Please provide specific details about the painting job, such as room dimensions, current wall condition, and if you have the paint already."
                     className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#1B5E44] outline-none font-medium transition-all resize-none"
                   ></textarea>
                </div>
             </section>

             {/* Photos */}
             <section className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                   <HiOutlinePhotograph className="text-2xl text-[#1B5E44]" />
                   <h2 className="text-xl font-bold text-gray-900">Photos</h2>
                </div>
                <div className="border-2 border-dashed border-gray-100 rounded-[2rem] p-12 text-center group hover:border-[#1B5E44]/20 transition-all cursor-pointer">
                   <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 mx-auto mb-4 group-hover:bg-emerald-50 group-hover:text-[#1B5E44] transition-all">
                      <HiOutlinePhotograph className="text-3xl" />
                   </div>
                   <p className="font-bold text-gray-900 mb-1">Click to upload or drag and drop</p>
                   <p className="text-xs text-gray-400 font-medium uppercase tracking-tighter">SVG, PNG, JPG or GIF (max. 10MB)</p>
                </div>
             </section>

             <div className="flex justify-end pt-8">
                <button onClick={() => navigate('/book/review')} className="bg-[#1B5E44] text-white px-12 py-5 rounded-2xl font-black shadow-xl shadow-emerald-900/20 hover:bg-[#005a39] transition-all transform hover:-translate-y-1 flex items-center gap-2">
                   Continue to Review <HiOutlineChevronRight />
                </button>
             </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[400px] flex-shrink-0">
             <div className="sticky top-28 space-y-8">
                <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm">
                   <h3 className="text-xl font-bold text-gray-900 mb-8">Worker Summary</h3>
                   <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-50">
                      <div className="w-16 h-16 rounded-2xl bg-gray-900 overflow-hidden">
                         <img src="https://i.pravatar.cc/150?u=KasunSilva" alt="Worker" />
                      </div>
                      <div>
                         <h4 className="font-black text-gray-900">Kasun Silva</h4>
                         <p className="text-xs font-bold text-[#1B5E44] flex items-center gap-1">★ 4.9 (124 reviews)</p>
                      </div>
                   </div>

                   <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm">
                         <span className="text-gray-400 font-medium">Service</span>
                         <span className="text-gray-900 font-bold">Room Painting</span>
                      </div>
                      <div className="flex justify-between text-sm">
                         <span className="text-gray-400 font-medium">Est. Base Price</span>
                         <span className="text-gray-900 font-bold">LKR 5,000</span>
                      </div>
                   </div>

                   <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 mb-8">
                      <p className="text-[10px] font-bold text-emerald-600 leading-relaxed">
                         ⓘ Final price will be confirmed after worker reviews your job description.
                      </p>
                   </div>

                   <div className="space-y-4">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Service Includes</p>
                      {['Wall cleaning & prepping', 'Two coats of paint', 'Basic cleanup afterwards'].map((item, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                            <span className="text-emerald-500">✓</span> {item}
                         </div>
                      ))}
                   </div>
                </div>

                <div className="bg-[#1B5E44]/5 p-8 rounded-[2rem] border border-[#1B5E44]/10 flex items-center gap-6">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1B5E44] shadow-sm">
                      <HiOutlineShieldCheck className="text-2xl" />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 text-sm">SkillMarket Protection</h4>
                      <p className="text-xs text-gray-500">Your payments are secure until you approve the work.</p>
                   </div>
                </div>
             </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingDetails;
export { Stepper };


