import React from 'react';
import { useNavigate } from 'react-router-dom';
import WorkerLayout from '../../components/layout/WorkerLayout';
import { 
  HiOutlineShieldCheck, 
  HiOutlineChartBar, 
  HiOutlineCash, 
  HiOutlineUserGroup,
  HiOutlineBell,
  HiOutlineCreditCard,
  HiOutlineGlobeAlt,
  HiOutlineQuestionMarkCircle,
  HiOutlineChevronRight,
  HiStar,
  HiOutlineCheck
} from 'react-icons/hi';
import { BsCheckCircleFill, BsCamera } from 'react-icons/bs';

const WorkerProfile = () => {
  const navigate = useNavigate();
  const activeServices = [
    { title: 'Interior Painting', rating: 4.9, reviews: 42, price: '4,500', unit: 'hour', image: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?auto=format&fit=crop&q=80&w=800' },
    { title: 'Leak Repair', rating: 5.0, reviews: 18, price: '3,800', unit: 'task', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca1f965?auto=format&fit=crop&q=80&w=800' },
  ];

  const portfolio = [
    'https://images.unsplash.com/photo-1562663474-6cbb3fee4c77?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <WorkerLayout>
      <div className="max-w-screen-2xl mx-auto pb-20">
        {/* Hero Section */}
        <div className="relative mb-12">
          <div className="h-64 rounded-[2.5rem] overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600" 
              alt="Profile Banner" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <button className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white p-3 rounded-2xl hover:bg-white/40 transition-all">
               <BsCamera className="text-xl" />
            </button>
          </div>
          
          <div className="absolute -bottom-16 left-10 flex items-end gap-8">
            <div className="w-40 h-40 rounded-[2rem] border-8 border-[#F8FAFC] overflow-hidden shadow-2xl relative group bg-white">
              <img src="https://i.pravatar.cc/150?u=kasun" alt="Kasun Silva" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer text-white">
                 <BsCamera className="text-2xl" />
              </div>
            </div>
            <div className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-black text-gray-900">Kasun Silva</h1>
                <span className="bg-[#1B5E44] text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-2 uppercase tracking-widest border border-white/20">
                  <BsCheckCircleFill className="text-xs" /> VERIFIED PROFESSIONAL
                </span>
              </div>
              <p className="text-gray-500 font-bold flex items-center gap-2">
                Licensed General Contractor • <span className="text-gray-400">Colombo, Sri Lanka</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-24">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Profile Completeness */}
            <section className="bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest">Personal Details</h3>
                  <button className="text-xs font-black text-[#1B5E44] hover:underline uppercase tracking-widest">Manage All</button>
               </div>
               
               <div className="mb-10">
                  <div className="flex justify-between items-center mb-4">
                     <span className="text-sm font-black text-gray-900">Profile Completeness</span>
                     <span className="text-sm font-black text-emerald-500">85%</span>
                  </div>
                  <div className="h-3 bg-gray-50 rounded-full overflow-hidden">
                     <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
                  </div>
               </div>

               <div className="grid grid-cols-3 gap-6">
                  {[
                    { label: 'Identity Verified', status: true },
                    { label: 'Phone Linked', status: true },
                    { label: 'Certificates', status: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <div className={`w-5 h-5 rounded-full flex items-center justify-center ${item.status ? 'bg-emerald-500 text-white' : 'border-2 border-gray-100 text-transparent'}`}>
                          <HiOutlineCheck className="text-xs" />
                       </div>
                       <span className={`text-xs font-bold ${item.status ? 'text-gray-900' : 'text-gray-400'}`}>{item.label}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* Active Services */}
            <section>
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest">Your Active Services</h3>
                  <button className="text-xs font-black text-[#1B5E44] hover:underline uppercase tracking-widest">Manage All</button>
               </div>
               <div className="grid md:grid-cols-2 gap-6">
                  {activeServices.map((service, i) => (
                    <div key={i} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm group">
                       <div className="h-48 relative overflow-hidden">
                          <img src={service.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute top-4 right-4">
                             <div className="w-12 h-6 bg-[#1B5E44] rounded-full p-1 flex justify-end">
                                <div className="w-4 h-4 bg-white rounded-full"></div>
                             </div>
                          </div>
                       </div>
                       <div className="p-8">
                          <h4 className="text-lg font-black text-gray-900 mb-2">{service.title}</h4>
                          <div className="flex items-center gap-2 mb-6">
                             <HiStar className="text-yellow-400" />
                             <span className="text-xs font-black text-gray-900">{service.rating}</span>
                             <span className="text-xs font-bold text-gray-400">({service.reviews} reviews)</span>
                          </div>
                          <p className="text-[#1B5E44] font-black">
                             LKR {service.price} <span className="text-[10px] text-gray-400 font-bold uppercase">/ {service.unit}</span>
                          </p>
                       </div>
                    </div>
                  ))}
               </div>
            </section>

            {/* Portfolio */}
            <section>
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest">Portfolio</h3>
                  <button className="text-xs font-black text-[#1B5E44] hover:underline uppercase tracking-widest">Edit Gallery</button>
               </div>
               <div className="grid grid-cols-3 gap-4">
                  {portfolio.map((img, i) => (
                    <div key={i} className="aspect-square rounded-[2rem] overflow-hidden border border-gray-100">
                       <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <button className="aspect-square rounded-[2rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 hover:border-[#1B5E44] hover:text-[#1B5E44] transition-all">
                     <BsCamera className="text-3xl mb-3" />
                     <span className="text-[10px] font-black uppercase tracking-widest">Add New</span>
                  </button>
               </div>
            </section>

            {/* Reviews Section */}
            <section className="bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm">
               <div className="flex items-end gap-10 mb-12">
                  <div>
                     <span className="text-6xl font-black text-gray-900">5.0</span>
                     <div className="flex gap-1 my-3">
                        {[...Array(5)].map((_, i) => <HiStar key={i} className="text-yellow-400 text-lg" />)}
                     </div>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">60 Reviews</p>
                  </div>
                  <div className="flex-grow space-y-3">
                     {[5,4,3].map(s => (
                        <div key={s} className="flex items-center gap-4">
                           <span className="text-[10px] font-bold text-gray-400 w-4">{s}</span>
                           <div className="flex-grow h-1.5 bg-gray-50 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full" style={{ width: s === 5 ? '90%' : s === 4 ? '10%' : '0%' }} />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="space-y-10 mb-12">
                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-sm">AM</div>
                     <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                           <h4 className="text-sm font-black text-gray-900">Amara M. <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase tracking-tighter">• 2 days ago</span></h4>
                           <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => <HiStar key={i} className="text-[10px] text-yellow-400" />)}
                           </div>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed italic">
                           "Kasun did an amazing job with our kitchen leak. He was professional, on time, and left the place spotless. Highly recommended!"
                        </p>
                     </div>
                  </div>
               </div>

               <button 
                  onClick={() => navigate('/worker/reviews')}
                  className="w-full py-5 bg-emerald-50 text-[#1B5E44] rounded-2xl font-black text-sm hover:bg-emerald-100 transition-all uppercase tracking-widest"
               >
                  View All Reviews
               </button>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
             {/* Performance Card */}
             <div className="bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm">
                <h3 className="text-lg font-black text-gray-900 mb-8 uppercase tracking-widest">Performance</h3>
                <div className="space-y-6">
                   {[
                      { label: 'Total Earnings', value: 'LKR 45.2k', icon: <HiOutlineCash />, color: 'bg-emerald-50 text-emerald-500' },
                      { label: 'Jobs Done', value: '128', icon: <BsCheckCircleFill />, color: 'bg-blue-50 text-blue-500' },
                      { label: 'Profile Views', value: '422', icon: <HiOutlineUserGroup />, color: 'bg-purple-50 text-purple-500' },
                   ].map((stat, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-3xl flex items-center justify-between group hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all cursor-pointer">
                         <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                            <p className="text-xl font-black text-gray-900">{stat.value}</p>
                         </div>
                         <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center text-xl`}>
                            {stat.icon}
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             {/* Account Settings */}
             <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm divide-y divide-gray-50">
                <h3 className="text-lg font-black text-gray-900 mb-6 uppercase tracking-widest px-2">Account Settings</h3>
                {[
                   { label: 'Notification Preferences', icon: <HiOutlineBell /> },
                   { label: 'Payment Details', icon: <HiOutlineCreditCard /> },
                   { label: 'Language', icon: <HiOutlineGlobeAlt /> },
                   { label: 'Help Center', icon: <HiOutlineQuestionMarkCircle /> },
                ].map((item, i) => (
                  <button key={i} className="w-full py-6 flex items-center justify-between group hover:px-2 transition-all">
                     <div className="flex items-center gap-4">
                        <span className="text-2xl text-gray-400 group-hover:text-[#1B5E44] transition-colors">{item.icon}</span>
                        <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900">{item.label}</span>
                     </div>
                     <HiOutlineChevronRight className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
             </div>

             {/* Visibility Boost */}
             <div className="bg-[#1B5E44] rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                <div className="relative z-10">
                   <h3 className="text-xl font-black mb-4">Visibility Boost</h3>
                   <p className="text-xs text-white/70 leading-relaxed mb-8">
                      Increase your profile visibility by 40% with our Premium Worker badge.
                   </p>
                   <button className="w-full py-4 bg-white text-[#1B5E44] rounded-2xl font-black text-sm hover:shadow-2xl hover:shadow-black/40 transition-all shadow-xl shadow-emerald-900/40">
                      See Analytics
                   </button>
                </div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
             </div>
          </aside>
        </div>
      </div>
    </WorkerLayout>
  );
};

export default WorkerProfile;



