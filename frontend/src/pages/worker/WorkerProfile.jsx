import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { HiOutlineArrowLeft, HiOutlineLocationMarker, HiStar, HiOutlineClock, HiOutlineShieldCheck, HiOutlinePhone } from 'react-icons/hi';
import { BsCheckCircleFill } from 'react-icons/bs';

const WorkerProfile = () => {
  const navigate = useNavigate();
  const stats = [
    { label: 'JOBS DONE', value: '148' },
    { label: 'RATING', value: '4.9', icon: <HiStar className="text-yellow-400" /> },
    { label: 'RESPONSE RATE', value: '98%' },
    { label: 'EXPERIENCE', value: '12+ Yrs' },
  ];

  const packages = [
    { title: 'Single Room Refresh', desc: 'Wall preparation, 2 coats of premium paint, and ceiling work.', price: '12,000' },
    { title: 'Full House Painting', desc: 'Comprehensive interior painting for a standard 3-bedroom house.', price: '85,000+' },
    { title: 'Custom Quote', desc: 'Specific requirements, exterior, or commercial spaces.', price: 'Contact for Price', isCustom: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar isLoggedIn={true} />
      
      <div className="max-w-7xl mx-auto pt-24 pb-20 px-6">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-[#1B5E44] font-medium mb-6 transition-colors">
          <HiOutlineArrowLeft /> Back
        </button>

        {/* Hero Section */}
        <div className="relative rounded-[2rem] overflow-hidden mb-12">
          <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 relative">
             {/* Abstract background or image */}
             <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          <div className="absolute -bottom-8 left-8 flex items-end gap-6">
            <div className="w-32 h-32 rounded-3xl border-4 border-white overflow-hidden shadow-xl bg-white">
               <img src="https://i.pravatar.cc/150?u=kasun" alt="Kasun Silva" className="w-full h-full object-cover" />
            </div>
            <div className="pb-4">
               <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-3xl font-black text-white drop-shadow-md">Kasun Silva</h1>
                  <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 uppercase">
                    <BsCheckCircleFill /> VERIFIED
                  </span>
                  <span className="bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    FEATURED
                  </span>
               </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-2xl font-black text-gray-900 flex items-center justify-center gap-1">
                {stat.value} {stat.icon}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-grow space-y-12">
            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Kasun</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                With over 12 years of experience in high-end residential and commercial painting, I specialize in bringing life 
                to spaces through precision and color. My approach focuses on meticulous preparation, premium materials, 
                and a clean workspace. 
              </p>
              <div className="flex flex-wrap gap-2">
                {['Interior Painting', 'Exterior Painting', 'Wall Texture', 'Surface Repair'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-emerald-50 text-[#1B5E44] rounded-full text-xs font-bold border border-emerald-100">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Service Packages */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Packages</h2>
              <div className="space-y-4">
                {packages.map((pkg, i) => (
                  <div key={i} className="flex items-center justify-between p-6 border border-gray-100 rounded-3xl hover:border-[#1B5E44] transition-all group">
                    <div className="flex gap-6 items-center">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#1B5E44]">
                         <HiOutlineShieldCheck className="text-2xl" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{pkg.title}</h4>
                        <p className="text-sm text-gray-500">{pkg.desc}</p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-2">
                      <p className="text-sm font-bold text-[#1B5E44]">
                        {pkg.isCustom ? pkg.price : `LKR ${pkg.price}`}
                      </p>
                      <button className="px-6 py-2 bg-[#1B5E44] text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-900/10 hover:bg-[#005a39] transition-all">
                        {pkg.isCustom ? 'Inquire' : 'Select'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Portfolio */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Portfolio</h2>
                <button className="text-[#1B5E44] font-bold text-sm underline underline-offset-4">View All</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="aspect-video bg-gray-100 rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer shadow-sm">
                    <img src={`https://picsum.photos/seed/${i + 20}/600/400`} alt="Work" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="w-[380px] flex-shrink-0">
             <div className="sticky top-28 space-y-6">
                <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-xl shadow-emerald-900/5">
                   <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">STARTING FROM</p>
                   <p className="text-3xl font-black text-gray-900 mb-8">
                     LKR 1,500 <span className="text-sm font-medium text-gray-400">/ sq ft</span>
                   </p>

                   <div className="space-y-3 mb-8">
                      <button className="w-full py-4 bg-[#1B5E44] text-white rounded-2xl font-bold shadow-xl shadow-emerald-900/20 hover:bg-[#005a39] transition-all flex items-center justify-center gap-2">
                        <BsCheckCircleFill /> Book Now
                      </button>
                      <button className="w-full py-4 border border-gray-200 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                        Chat with Kasun
                      </button>
                   </div>

                   <div className="space-y-6 border-t border-gray-50 pt-8">
                      <div className="flex gap-4">
                         <HiOutlineLocationMarker className="text-2xl text-[#1B5E44] flex-shrink-0" />
                         <div>
                            <p className="text-sm font-bold text-gray-900">Service Locations</p>
                            <p className="text-xs text-gray-500">Colombo, Gampaha, Negombo</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <HiOutlineShieldCheck className="text-2xl text-[#1B5E44] flex-shrink-0" />
                         <div>
                            <p className="text-sm font-bold text-gray-900">Professional Guarantee</p>
                            <p className="text-xs text-gray-500">6-month warranty on workmanship</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <HiOutlinePhone className="text-2xl text-[#1B5E44] flex-shrink-0" />
                         <div>
                            <p className="text-sm font-bold text-gray-900">Contact Information</p>
                            <p className="text-xs text-gray-500">077 * * * * * * (Unlock after booking)</p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Map Mockup */}
                <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-4 relative h-48 overflow-hidden group cursor-pointer">
                    <img src="https://images.squarespace-cdn.com/content/v1/549d41a3e4b003c6ce131a5a/1553818318251-A9Q6M6U6J6Q6M6U6J6Q6/Google+Maps+Static+API+Example.png" alt="Map" className="w-full h-full object-cover rounded-2xl opacity-60 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-bold text-gray-900 whitespace-nowrap">Based in Colombo 05</span>
                       </div>
                    </div>
                </div>
             </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkerProfile;


