import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  HiOutlineViewGrid, 
  HiOutlineBriefcase, 
  HiOutlineCash, 
  HiOutlineChatAlt2, 
  HiOutlineStar, 
  HiOutlineUserCircle,
  HiOutlineBell,
  HiOutlineLogout,
  HiOutlineSearch,
  HiOutlineGlobeAlt,
  HiOutlineShare
} from 'react-icons/hi';
import { RiCopperDiamondLine } from 'react-icons/ri';
import { BsCheckCircleFill } from 'react-icons/bs';

const WorkerLayout = ({ children }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: <HiOutlineViewGrid />, path: '/worker/dashboard' },
    { name: 'My Jobs', icon: <HiOutlineBriefcase />, path: '/worker/jobs' },
    { name: 'Earnings', icon: <HiOutlineCash />, path: '/worker/earnings' },
    { name: 'Messages', icon: <HiOutlineChatAlt2 />, path: '/chat' },
    { name: 'Subscription', icon: <RiCopperDiamondLine />, path: '/worker/subscription' },
    { name: 'Profile', icon: <HiOutlineUserCircle />, path: '/worker/profile' },
  ];

  const notifications = [
    { id: 1, type: 'booking', title: 'Booking Confirmed', message: 'Marcus Chen confirmed your booking for "Full Stack Development Audit".', time: '2h ago', unread: true },
    { id: 2, type: 'message', title: 'New Message', message: 'New message from Sarah Jenkins regarding technical specifications.', time: '5h ago', unread: true },
    { id: 3, type: 'payment', title: 'Payment Received', message: '$2,450.00 for "Mobile App Redesign" credited to your wallet.', time: '8h ago', unread: false },
    { id: 4, type: 'review', title: 'New Review', message: '"Exceptional work quality..." - 5-star review from Horizon Tech.', time: 'Yesterday', unread: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col sticky top-0 h-screen">
        <div className="p-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#1B5E44] text-2xl font-black tracking-tighter">SkilledLK</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Online</span>
          </div>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-4 px-4 py-4 rounded-xl font-bold transition-all ${
                  isActive 
                  ? 'bg-emerald-50 text-[#1B5E44] border-r-4 border-[#1B5E44]' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-50">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-4 px-4 py-4 w-full rounded-xl font-bold text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all"
          >
            <HiOutlineLogout className="text-xl" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Top Bar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-gray-800">Good morning, Kasun 👷</h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#1B5E44] transition-colors"
              >
                <HiOutlineBell className="text-xl" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white"></span>
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute top-full right-0 mt-4 w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 py-6 overflow-hidden z-50">
                  <div className="px-6 mb-6 flex items-center justify-between">
                    <h3 className="font-black text-gray-900 text-lg">Notifications</h3>
                    <button className="text-xs font-bold text-[#1B5E44] flex items-center gap-1">
                      <BsCheckCircleFill className="text-[10px]" /> Mark all as read
                    </button>
                  </div>
                  
                  <div className="max-h-[400px] overflow-y-auto">
                    <div className="px-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Today</div>
                    <div className="space-y-1">
                      {notifications.map(n => (
                        <div key={n.id} className={`px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer flex gap-4 ${n.unread ? 'bg-emerald-50/30' : ''}`}>
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            n.type === 'booking' ? 'bg-emerald-100 text-emerald-600' :
                            n.type === 'message' ? 'bg-blue-100 text-blue-600' :
                            n.type === 'payment' ? 'bg-amber-100 text-amber-600' :
                            'bg-purple-100 text-purple-600'
                          }`}>
                            {n.type === 'booking' && <HiOutlineBriefcase />}
                            {n.type === 'message' && <HiOutlineChatAlt2 />}
                            {n.type === 'payment' && <HiOutlineCash />}
                            {n.type === 'review' && <HiOutlineStar />}
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-sm font-black text-gray-900">{n.title}</h4>
                              <span className="text-[10px] font-bold text-gray-400">{n.time}</span>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed">{n.message}</p>
                          </div>
                          {n.unread && <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full self-center"></div>}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-6 mt-6 border-t border-gray-50 pt-4 text-center">
                    <button className="text-sm font-bold text-[#1B5E44] hover:underline">See all notifications</button>
                  </div>
                </div>
              )}
            </div>

            <button className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#1B5E44] transition-colors">
              <HiOutlineChatAlt2 className="text-xl" />
            </button>

            <div className="flex items-center gap-3 pl-2 border-l border-gray-100">
               <img src="https://i.pravatar.cc/150?u=kasun" alt="Kasun" className="w-10 h-10 rounded-xl object-cover border-2 border-emerald-500/20" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow p-10 overflow-y-auto">
          {children}
        </main>

        {/* Footer */}
        <footer className="px-10 py-8 bg-white border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-[#1B5E44] font-black tracking-tighter text-lg">SkilledLK</span>
            <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-widest">© 2026 SkilledLK Marketplace. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <a href="#" className="hover:text-[#1B5E44]">Privacy Policy</a>
              <a href="#" className="hover:text-[#1B5E44]">Terms of Service</a>
              <a href="#" className="hover:text-[#1B5E44]">Help Center</a>
              <a href="#" className="hover:text-[#1B5E44]">Contact Support</a>
            </div>
            <div className="flex gap-4 text-gray-400">
              <HiOutlineGlobeAlt className="text-xl hover:text-[#1B5E44] cursor-pointer" />
              <HiOutlineShare className="text-xl hover:text-[#1B5E44] cursor-pointer" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WorkerLayout;
