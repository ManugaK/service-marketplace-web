import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { HiOutlineCalendar, HiOutlineSearch, HiOutlineChatAlt2, HiOutlineHeart } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

const CustomerDashboard = () => {
  const activeBookings = [
    { id: 1, worker: 'Arjuna Mahendra', service: 'House Painting', date: 'Oct 24, 2026', status: 'In Progress', color: 'bg-blue-500' },
    { id: 2, worker: 'Sunil Wijesinghe', service: 'Living Room Repair', date: 'Oct 28, 2026', status: 'Scheduled', color: 'bg-emerald-500' },
  ];

  const savedWorkers = [
    { name: 'Kasun Perera', role: 'Painter', rating: 4.9, avatar: 'KP' },
    { name: 'Amila Silva', role: 'Electrician', rating: 4.8, avatar: 'AS' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar isLoggedIn={true} />
      
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <header className="mb-12">
           <h1 className="text-4xl font-black text-gray-900 mb-2">Welcome back, Traveler! 👋</h1>
           <p className="text-gray-500 font-medium">Manage your bookings and find new professionals.</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
           {/* Left Column: Stats & Bookings */}
           <div className="lg:col-span-2 space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                 {[
                   { label: 'Active Bookings', value: '02', icon: <HiOutlineCalendar />, color: 'text-blue-600' },
                   { label: 'Total Spent', value: 'LKR 12.5k', icon: <HiOutlineHeart />, color: 'text-rose-600' },
                   { label: 'Messages', value: '05', icon: <HiOutlineChatAlt2 />, color: 'text-emerald-600' },
                 ].map((stat, i) => (
                   <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col justify-between h-40">
                      <div className={`text-3xl ${stat.color}`}>{stat.icon}</div>
                      <div>
                        <p className="text-3xl font-black text-gray-900">{stat.value}</p>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                      </div>
                   </div>
                 ))}
              </div>

              {/* Active Bookings List */}
              <section className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
                 <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Active Bookings</h2>
                    <button className="text-sm font-bold text-[#1B5E44] flex items-center gap-2">View History <BsArrowRight /></button>
                 </div>
                 
                 <div className="space-y-4">
                    {activeBookings.map(booking => (
                       <div key={booking.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl border border-transparent hover:border-[#1B5E44]/20 transition-all cursor-pointer group">
                          <div className="flex items-center gap-6">
                             <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl font-bold text-[#1B5E44]">
                                {booking.worker[0]}
                             </div>
                             <div>
                                <h4 className="font-bold text-gray-900 group-hover:text-[#1B5E44] transition-colors">{booking.worker}</h4>
                                <p className="text-sm text-gray-500 font-medium">{booking.service}</p>
                             </div>
                          </div>
                          <div className="text-right">
                             <p className="font-bold text-gray-900 mb-1">{booking.date}</p>
                             <span className={`px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase ${booking.color}`}>
                                {booking.status}
                             </span>
                          </div>
                       </div>
                    ))}
                 </div>
              </section>

              {/* Recommendations */}
              <section className="bg-[#1B5E44] rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                 <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4">Need a quick fix?</h3>
                    <p className="text-emerald-100 mb-8 max-w-md leading-relaxed">
                       Book top-rated plumbers and electricians in your area with our express service.
                       Guaranteed arrival within 2 hours.
                    </p>
                    <button className="px-8 py-4 bg-white text-[#1B5E44] rounded-2xl font-black shadow-xl hover:shadow-emerald-900/40 transition-all transform hover:-translate-y-1">
                       Explore Express Services
                    </button>
                 </div>
              </section>
           </div>

           {/* Right Column: Sidebar */}
           <aside className="space-y-8">
              {/* Quick Search */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                 <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Search</h3>
                 <div className="relative mb-6">
                    <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                    <input type="text" placeholder="I need a..." className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-[#1B5E44] outline-none font-medium transition-all" />
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {['Cleaner', 'Plumber', 'A/C Repair', 'Painter'].map(s => (
                       <button key={s} className="px-4 py-2 rounded-xl bg-gray-50 text-gray-600 text-xs font-bold hover:bg-[#1B5E44] hover:text-white transition-all">
                          {s}
                       </button>
                    ))}
                 </div>
              </div>

              {/* Saved Professionals */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                 <h3 className="text-xl font-bold text-gray-900 mb-6">Saved Professionals</h3>
                 <div className="space-y-6">
                    {savedWorkers.map((worker, i) => (
                       <div key={i} className="flex items-center gap-4 group cursor-pointer">
                          <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#1B5E44] flex items-center justify-center font-bold">
                             {worker.avatar}
                          </div>
                          <div className="flex-grow">
                             <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#1B5E44] transition-colors">{worker.name}</h4>
                             <p className="text-xs text-gray-400 font-medium">{worker.role} • {worker.rating} ★</p>
                          </div>
                          <button className="text-gray-300 hover:text-rose-500 transition-colors">
                             <HiOutlineHeart className="text-xl fill-rose-500 text-rose-500" />
                          </button>
                       </div>
                    ))}
                 </div>
                 <button className="w-full mt-8 py-4 border border-gray-100 rounded-2xl text-gray-500 font-bold hover:bg-gray-50 transition-all text-sm">
                    Manage Saved List
                 </button>
              </div>
           </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerDashboard;


