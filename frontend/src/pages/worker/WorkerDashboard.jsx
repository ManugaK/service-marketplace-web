import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { HiOutlineChartBar, HiOutlineCash, HiOutlineUserGroup, HiOutlineCalendar, HiOutlineBell } from 'react-icons/hi';
import { BsArrowRight, BsThreeDotsVertical } from 'react-icons/bs';

const WorkerDashboard = () => {
  const upcomingJobs = [
    { id: 1, customer: 'John Doe', service: 'Full House Painting', time: 'Tomorrow, 09:00 AM', status: 'Upcoming', amount: '85,000' },
    { id: 2, customer: 'Maria Silva', service: 'Door Touchup', time: 'Oct 26, 02:00 PM', status: 'Confirmed', amount: '5,000' },
  ];

  const recentReviews = [
    { name: 'Amila Munasinghe', rating: 5, comment: 'Kasun did an amazing job with our living room. Highly recommended!', date: '2 weeks ago' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar isLoggedIn={true} />
      
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <header className="flex items-center justify-between mb-12">
           <div>
              <h1 className="text-4xl font-black text-gray-900 mb-2">Worker Dashboard 🛠️</h1>
              <p className="text-gray-500 font-medium">Here's what's happening with your business today.</p>
           </div>
           <div className="flex gap-4">
              <button className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm text-gray-500 hover:text-[#1B5E44] transition-colors relative">
                 <HiOutlineBell className="text-2xl" />
                 <span className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button className="bg-[#1B5E44] text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-emerald-900/20 hover:bg-[#005a39] transition-all transform hover:-translate-y-1">
                 Update Availability
              </button>
           </div>
        </header>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
           {[
             { label: 'Total Earnings', value: 'LKR 142k', icon: <HiOutlineCash />, color: 'bg-emerald-50 text-emerald-600' },
             { label: 'Completed Jobs', value: '148', icon: <HiOutlineChartBar />, color: 'bg-blue-50 text-blue-600' },
             { label: 'Profile Views', value: '1.2k', icon: <HiOutlineUserGroup />, color: 'bg-purple-50 text-purple-600' },
             { label: 'Active Rating', value: '4.9/5', icon: <HiOutlineCalendar />, color: 'bg-amber-50 text-amber-600' },
           ].map((stat, i) => (
             <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center text-2xl mb-6`}>
                   {stat.icon}
                </div>
                <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
             </div>
           ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           {/* Job Queue */}
           <div className="lg:col-span-2 space-y-8">
              <section className="bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm">
                 <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-bold text-gray-900">Upcoming Jobs</h2>
                    <button className="text-sm font-bold text-[#1B5E44] flex items-center gap-2">View Calendar <BsArrowRight /></button>
                 </div>
                 
                 <div className="space-y-6">
                    {upcomingJobs.map(job => (
                       <div key={job.id} className="flex items-center justify-between p-8 bg-gray-50 rounded-[2rem] border border-transparent hover:border-[#1B5E44]/10 transition-all group relative overflow-hidden">
                          <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#1B5E44]"></div>
                          <div className="flex items-center gap-8">
                             <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex flex-col items-center justify-center">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">OCT</span>
                                <span className="text-xl font-black text-[#1B5E44] leading-none">24</span>
                             </div>
                             <div>
                                <h4 className="font-black text-gray-900 group-hover:text-[#1B5E44] transition-colors text-lg">{job.customer}</h4>
                                <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                                   {job.service} • <span className="text-[#1B5E44] font-bold">{job.time}</span>
                                </p>
                             </div>
                          </div>
                          <div className="text-right">
                             <p className="text-lg font-black text-gray-900 mb-2">LKR {job.amount}</p>
                             <button className="px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:border-[#1B5E44] hover:text-[#1B5E44] transition-all">
                                Manage Job
                             </button>
                          </div>
                       </div>
                    ))}
                 </div>
              </section>

              {/* Performance Graph Placeholder */}
              <section className="bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm">
                 <h2 className="text-2xl font-bold text-gray-900 mb-8">Earnings Overview</h2>
                 <div className="h-64 w-full bg-gradient-to-b from-emerald-50 to-white rounded-3xl flex items-end justify-between px-10 pb-6 relative overflow-hidden border border-emerald-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <p className="text-emerald-200 font-black text-6xl opacity-10 uppercase tracking-[1em] rotate-12">Performance</p>
                    </div>
                    {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                       <div key={i} className="w-8 bg-[#1B5E44] rounded-t-lg transition-all hover:scale-x-110 cursor-pointer" style={{ height: `${h}%` }}></div>
                    ))}
                 </div>
                 <div className="flex justify-between mt-4 px-10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                 </div>
              </section>
           </div>

           {/* Sidebar */}
           <aside className="space-y-8">
              {/* Profile Completeness */}
              <div className="bg-[#1B5E44] p-10 rounded-[2.5rem] text-white shadow-xl shadow-emerald-900/20">
                 <h3 className="text-xl font-bold mb-6">Profile Strength</h3>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-20 h-20">
                       <svg className="w-full h-full transform -rotate-90">
                          <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-emerald-900/30" />
                          <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="226" strokeDashoffset="45" className="text-white" />
                       </svg>
                       <span className="absolute inset-0 flex items-center justify-center font-black text-lg">80%</span>
                    </div>
                    <div>
                       <p className="font-bold">Almost there!</p>
                       <p className="text-xs text-emerald-100/70">Add your certificates to reach 100%.</p>
                    </div>
                 </div>
                 <button className="w-full py-4 bg-white text-[#1B5E44] rounded-2xl font-black text-sm shadow-lg hover:shadow-emerald-900/40 transition-all">
                    Complete Profile
                 </button>
              </div>

              {/* Recent Reviews */}
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                 <h3 className="text-xl font-bold text-gray-900 mb-8">Recent Feedback</h3>
                 <div className="space-y-8">
                    {recentReviews.map((rev, i) => (
                       <div key={i} className="relative">
                          <div className="flex gap-1 mb-3">
                             {[1,2,3,4,5].map(star => (
                                <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                             ))}
                          </div>
                          <p className="text-sm text-gray-600 italic leading-relaxed mb-4">"{rev.comment}"</p>
                          <div className="flex items-center justify-between">
                             <span className="text-xs font-black text-gray-900">{rev.name}</span>
                             <span className="text-[10px] font-bold text-gray-400">{rev.date}</span>
                          </div>
                       </div>
                    ))}
                 </div>
                 <button className="w-full mt-10 py-4 border border-gray-100 rounded-2xl text-gray-500 font-bold hover:bg-gray-50 transition-all text-xs">
                    Read All Reviews
                 </button>
              </div>
           </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkerDashboard;


