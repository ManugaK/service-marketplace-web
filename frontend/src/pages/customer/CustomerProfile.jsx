import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { 
  HiOutlineCalendar, 
  HiOutlineCreditCard, 
  HiOutlineLocationMarker, 
  HiOutlineShieldCheck, 
  HiOutlineQuestionMarkCircle,
  HiOutlineSupport,
  HiOutlineDocumentText,
  HiOutlineLogout,
  HiOutlinePencil
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const CustomerProfile = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);

  const shortcuts = [
    { label: 'My Bookings', icon: <HiOutlineCalendar />, path: '/customer/dashboard' },
    { label: 'Payment Methods', icon: <HiOutlineCreditCard />, path: '/book/payment' },
    { label: 'Saved Addresses', icon: <HiOutlineLocationMarker />, path: '#' },
  ];

  const supportLinks = [
    { label: 'Help Center', icon: <HiOutlineQuestionMarkCircle /> },
    { label: 'Contact Support', icon: <HiOutlineSupport /> },
    { label: 'Terms & Privacy Policy', icon: <HiOutlineDocumentText /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar isLoggedIn={true} />
      
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        {/* Header Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-gray-100 mb-12">
           <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="relative group">
                 <div className="w-32 h-32 rounded-[2.5rem] bg-gray-900 overflow-hidden border-4 border-emerald-50 shadow-xl">
                    <img src="https://i.pravatar.cc/150?u=Nimal" alt="Profile" className="w-full h-full object-cover" />
                 </div>
                 <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <HiOutlinePencil className="text-xl" />
                 </button>
              </div>
              <div>
                 <h1 className="text-4xl font-black text-gray-900 mb-2">Nimal Karunaratne</h1>
                 <p className="text-gray-400 font-bold flex items-center justify-center md:justify-start gap-2">
                    <HiOutlineLocationMarker className="text-emerald-500" /> Maharagama, Colombo
                 </p>
              </div>
           </div>
           <button className="px-8 py-4 border border-gray-200 rounded-2xl font-black text-gray-400 hover:text-[#1B5E44] hover:border-[#1B5E44] transition-all">
              View Public Profile
           </button>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
           {/* Sidebar */}
           <aside className="w-full lg:w-80 space-y-8">
              <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm">
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8">Account Shortcuts</p>
                 <div className="space-y-4">
                    {shortcuts.map((item, i) => (
                       <button 
                         key={i} 
                         onClick={() => navigate(item.path)}
                         className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-emerald-50 group transition-all"
                       >
                          <div className="flex items-center gap-4">
                             <div className="text-2xl text-gray-300 group-hover:text-[#1B5E44] transition-colors">{item.icon}</div>
                             <span className="font-bold text-gray-700 group-hover:text-gray-900">{item.label}</span>
                          </div>
                          <div className="text-gray-300 group-hover:text-[#1B5E44] transform group-hover:translate-x-1 transition-all">
                             <HiOutlinePencil className="rotate-90 text-sm" />
                          </div>
                       </button>
                    ))}
                 </div>
              </div>

              <div className="bg-emerald-50/50 p-8 rounded-[2.5rem] border border-emerald-100/50 flex flex-col items-center text-center">
                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm mb-4">
                    <HiOutlineShieldCheck className="text-2xl" />
                 </div>
                 <h4 className="font-black text-emerald-900 text-sm mb-2">Identity Verified</h4>
                 <p className="text-xs text-emerald-900/60 leading-relaxed font-medium">
                    Your account is fully verified. This builds trust with service providers.
                 </p>
              </div>
           </aside>

           {/* Main Content */}
           <div className="flex-grow space-y-8">
              {/* Account Preferences */}
              <section className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm">
                 <div className="p-8 border-b border-gray-50 bg-gray-50/30">
                    <h2 className="text-2xl font-black text-gray-900">Account Preferences</h2>
                 </div>
                 <div className="p-10 space-y-12">
                    <div className="flex items-center justify-between">
                       <div>
                          <h3 className="font-bold text-gray-900 mb-1">Notifications</h3>
                          <p className="text-xs text-gray-400 font-medium">Receive updates about your bookings and messages.</p>
                       </div>
                       <button 
                         onClick={() => setNotifications(!notifications)}
                         className={`w-14 h-8 rounded-full p-1 transition-all duration-300 ${notifications ? 'bg-[#1B5E44]' : 'bg-gray-200'}`}
                       >
                          <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ${notifications ? 'translate-x-6' : 'translate-x-0'}`}></div>
                       </button>
                    </div>

                    <div className="flex items-center justify-between">
                       <div>
                          <h3 className="font-bold text-gray-900 mb-1">Language</h3>
                          <p className="text-xs text-gray-400 font-medium">Select your preferred language for the interface.</p>
                       </div>
                       <select className="bg-white border border-gray-200 rounded-xl px-6 py-3 font-bold text-gray-700 outline-none focus:border-[#1B5E44] transition-all min-w-[160px]">
                          <option>English</option>
                          <option>Sinhala</option>
                          <option>Tamil</option>
                       </select>
                    </div>
                 </div>
              </section>

              {/* Support */}
              <section className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm">
                 <div className="p-8 border-b border-gray-50 bg-gray-50/30">
                    <h2 className="text-2xl font-black text-gray-900">Support</h2>
                 </div>
                 <div className="divide-y divide-gray-50">
                    {supportLinks.map((item, i) => (
                       <button key={i} className="w-full p-8 flex items-center justify-between hover:bg-gray-50 transition-all group">
                          <div className="flex items-center gap-6">
                             <div className="text-2xl text-gray-300 group-hover:text-[#1B5E44] transition-colors">{item.icon}</div>
                             <span className="font-bold text-gray-700 group-hover:text-gray-900">{item.label}</span>
                          </div>
                          <div className="text-gray-300 group-hover:text-[#1B5E44] transform group-hover:translate-x-1 transition-all">
                             <HiOutlinePencil className="rotate-90 text-sm" />
                          </div>
                       </button>
                    ))}
                 </div>
              </section>

              {/* Logout Button */}
              <div className="pt-8">
                 <button className="w-full py-6 bg-rose-50 text-rose-500 rounded-[2rem] font-black flex items-center justify-center gap-4 hover:bg-rose-100 transition-all">
                    <HiOutlineLogout className="text-2xl" /> Logout
                 </button>
              </div>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerProfile;


