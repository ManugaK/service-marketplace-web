import React from 'react';
import { HiOutlineSearch, HiOutlineLocationMarker, HiOutlineBell, HiOutlineChatAlt } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn = false }) => {
  const location = useLocation();
  const isSearchPage = location.pathname === '/search';

  const navigate = useNavigate();
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate('/search');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-5 flex items-center justify-between bg-white/90 backdrop-blur-xl border-b border-gray-50">
      <div className="flex items-center gap-12">
        <Link to="/" className="text-3xl font-black text-[#1B5E44] tracking-tighter">SkilledLK</Link>
        
        {!isSearchPage && (
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/search" className="text-xs font-black text-gray-400 uppercase tracking-widest hover:text-[#1B5E44] transition-colors">Browse</Link>
            <Link to="/search" className="text-xs font-black text-gray-400 uppercase tracking-widest hover:text-[#1B5E44] transition-colors">Categories</Link>
            <a href="#" className="text-xs font-black text-gray-400 uppercase tracking-widest hover:text-[#1B5E44] transition-colors">How it works</a>
            <Link to="/customer/dashboard" className="text-xs font-black text-[#1B5E44] uppercase tracking-widest border-b-2 border-[#1B5E44] pb-1">Bookings</Link>
          </div>
        )}

        {isSearchPage && (
          <div className="hidden lg:flex items-center bg-gray-50 border border-gray-100 rounded-2xl px-5 py-2.5 gap-4 w-[500px] shadow-sm">
            <div className="flex items-center gap-2 flex-1">
              <HiOutlineSearch className="text-gray-300" />
              <input 
                type="text" 
                placeholder="Painters" 
                className="bg-transparent outline-none text-sm font-bold w-full text-gray-700" 
                defaultValue="Painters" 
                onKeyDown={handleSearch}
              />
            </div>
            <div className="w-px h-4 bg-gray-200"></div>
            <div className="flex items-center gap-2 flex-1">
              <HiOutlineLocationMarker className="text-gray-300" />
              <input 
                type="text" 
                placeholder="Colombo" 
                className="bg-transparent outline-none text-sm font-bold w-full text-gray-700" 
                defaultValue="Colombo" 
                onKeyDown={handleSearch}
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6">
        {isLoggedIn ? (
          <div className="flex items-center gap-6">
            <button className="text-2xl text-gray-300 hover:text-[#1B5E44] transition-colors relative">
              <HiOutlineBell />
              <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <Link to="/chat" className="text-2xl text-gray-300 hover:text-[#1B5E44] transition-colors">
              <HiOutlineChatAlt />
            </Link>
            <Link to="/customer/profile" className="w-10 h-10 rounded-2xl bg-emerald-50 border-2 border-emerald-100 overflow-hidden cursor-pointer hover:border-[#1B5E44] transition-all">
              <img src="https://ui-avatars.com/api/?name=User&background=1B5E44&color=fff" alt="Profile" />
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login" className="text-xs font-black text-gray-400 uppercase tracking-widest hover:text-[#1B5E44] transition-colors">Sign In</Link>
            <Link to="/signup" className="px-8 py-3 bg-[#1B5E44] text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-emerald-900/20 hover:bg-gray-900 transition-all transform hover:-translate-y-1">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
