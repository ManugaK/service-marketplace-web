import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiStar, HiOutlineLocationMarker, HiOutlineCalendar } from 'react-icons/hi';
import { IoMdConstruct } from 'react-icons/io';
import { BsCheckCircleFill, BsShieldCheck } from 'react-icons/bs';

const SearchPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    priceRange: [],
    rating: 4,
    distance: '10km',
    verifiedOnly: true,
    category: 'Painters'
  });

  const workers = [
    {
      id: 1,
      name: 'Arjuna Mahendra',
      avatar: 'AM',
      role: 'Painter',
      location: 'Colombo 5',
      experience: '8 years exp.',
      rating: 4.9,
      reviews: 127,
      price: '5,000',
      unit: '/ room',
      isVerified: true,
      isFeatured: true,
      isPro: true
    },
    {
      id: 2,
      name: 'Sunil Wijesinghe',
      avatar: 'SW',
      role: 'Painter',
      location: 'Dehiwala',
      experience: '12 years exp.',
      rating: 4.2,
      reviews: 84,
      price: '4,200',
      unit: '/ room',
      isVerified: true,
      isFeatured: false,
      isPro: false
    },
    {
      id: 3,
      name: 'Kasun Perera',
      avatar: 'KP',
      role: 'Painter',
      location: 'Battaramulla',
      experience: '5 years exp.',
      rating: 4.7,
      reviews: 210,
      price: '6,500',
      unit: '/ room',
      isVerified: true,
      isFeatured: false,
      isPro: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar isLoggedIn={true} />
      
      <div className="max-w-7xl mx-auto pt-28 pb-20 px-6 flex gap-8">
        {/* Sidebar Filters */}
        <aside className="w-64 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Filters</h2>
          <p className="text-xs text-gray-400 mb-8 font-medium">Refine your search</p>

          <div className="space-y-8">
            {/* Price Range */}
            <div>
              <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#1B5E44] rounded-full"></span>
                Price Range
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#1B5E44] focus:ring-[#1B5E44]" />
                  <span className="text-sm text-gray-600 font-medium group-hover:text-gray-900">Under LKR 5,000</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#1B5E44] focus:ring-[#1B5E44]" />
                  <span className="text-sm text-gray-600 font-medium group-hover:text-gray-900">LKR 5,000 - 15,000</span>
                </label>
              </div>
            </div>

            {/* Ratings */}
            <div>
              <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#1B5E44] rounded-full"></span>
                Ratings
              </h3>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-[#1B5E44] focus:ring-[#1B5E44]" />
                <span className="text-sm text-gray-600 font-medium flex items-center gap-1">
                  4+ <HiStar className="text-yellow-400" />
                </span>
              </label>
            </div>

            {/* Distance */}
            <div>
              <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#1B5E44] rounded-full"></span>
                Distance
              </h3>
              <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-emerald-500/20 focus:border-[#1B5E44] outline-none">
                <option>Within 10km</option>
                <option>Within 25km</option>
                <option>Within 50km</option>
              </select>
            </div>

            {/* Verified Status */}
            <div>
              <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#1B5E44] rounded-full"></span>
                Verified Status
              </h3>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-[#1B5E44] focus:ring-[#1B5E44]" />
                <span className="text-sm text-gray-600 font-medium group-hover:text-gray-900">Verified Workers Only</span>
              </label>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#1B5E44] rounded-full"></span>
                Categories
              </h3>
              <div className="space-y-1">
                {['Painters', 'Interior Designers', 'Electricians', 'Plumbers'].map((cat, i) => (
                  <div key={i} className={`px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer transition-colors ${cat === 'Painters' ? 'bg-emerald-50 text-[#1B5E44]' : 'text-gray-500 hover:bg-gray-100'}`}>
                    {cat}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full py-3 border border-gray-200 rounded-xl text-gray-500 font-bold hover:bg-white hover:shadow-sm transition-all mt-4">
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow">
          {/* Breadcrumbs & Title */}
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-4">
            <span>Home</span>
            <HiOutlineChevronRight />
            <span>Search</span>
            <HiOutlineChevronRight />
            <span className="text-[#1B5E44]">Painters</span>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Showing 24 Painters in Colombo</h1>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 font-medium">Sort by:</span>
              <select className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold text-gray-700 focus:border-[#1B5E44] outline-none">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Rating: High to Low</option>
              </select>
            </div>
          </div>

          {/* Results Grid */}
          <div className="space-y-6">
            {workers.map((worker) => (
              <div key={worker.id} className="bg-white rounded-3xl border border-gray-100 p-6 flex gap-8 relative hover:shadow-xl hover:shadow-emerald-900/5 transition-all group">
                {/* Pro Badge */}
                {worker.isPro && (
                  <div className="absolute top-0 left-0 right-0 h-8 bg-amber-50/50 border-b border-amber-100 rounded-t-3xl px-6 flex items-center justify-between overflow-hidden">
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest flex items-center gap-1">
                       <span className="w-1 h-1 bg-amber-600 rounded-full"></span> PRO MEMBER
                    </span>
                    <span className="text-[10px] font-bold text-gray-400">Top 5% SkilledLK Experts</span>
                  </div>
                )}

                <div className={`mt-${worker.isPro ? '8' : '0'} flex gap-8 w-full`}>
                   {/* Avatar */}
                  <div className="w-32 h-32 rounded-full bg-[#064E3B] text-white flex items-center justify-center text-3xl font-bold flex-shrink-0">
                    {worker.avatar}
                  </div>

                  {/* Info */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold text-gray-900">{worker.name}</h3>
                      {worker.isVerified && (
                        <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-100 uppercase tracking-wider">
                          <BsShieldCheck className="text-xs" /> VERIFIED
                        </span>
                      )}
                      {worker.isFeatured && (
                        <span className="bg-amber-50 text-amber-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-100 uppercase tracking-wider">
                          FEATURED
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 font-medium mb-3">
                      <span className="flex items-center gap-1.5"><IoMdConstruct className="text-emerald-600" /> {worker.role}</span>
                      <span className="flex items-center gap-1.5"><HiOutlineLocationMarker className="text-emerald-600" /> {worker.location}</span>
                      <span className="flex items-center gap-1.5"><HiOutlineCalendar className="text-emerald-600" /> {worker.experience}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(i => (
                        <HiStar key={i} className={i <= Math.floor(worker.rating) ? "text-yellow-400" : "text-gray-200"} />
                      ))}
                      <span className="ml-2 font-bold text-gray-900">{worker.rating}</span>
                      <span className="text-gray-400 text-sm font-medium">({worker.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Price & Actions */}
                  <div className="text-right flex flex-col justify-between min-w-[160px]">
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Starting from</p>
                      <p className="text-2xl font-black text-gray-900">
                        LKR {worker.price} <span className="text-sm font-medium text-gray-400">{worker.unit}</span>
                      </p>
                    </div>
                    
                    <div className="space-y-2 mt-4">
                      <button onClick={() => navigate('/chat')} className="w-full py-3 border border-emerald-600 text-[#1B5E44] font-bold rounded-xl hover:bg-emerald-50 transition-colors">
                        Chat first
                      </button>
                      <button onClick={() => navigate('/book/details')} className="w-full py-3 bg-[#1B5E44] text-white font-bold rounded-xl shadow-lg shadow-emerald-900/20 hover:bg-[#005a39] transition-all">
                        Book now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center gap-2">
            <button className="p-2 rounded-xl border border-gray-200 text-gray-400 hover:bg-white hover:text-[#1B5E44] transition-all">
              <HiOutlineChevronLeft className="text-xl" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-[#1B5E44] text-white font-bold">1</button>
            <button className="w-10 h-10 rounded-xl text-gray-500 font-bold hover:bg-gray-100">2</button>
            <button className="w-10 h-10 rounded-xl text-gray-500 font-bold hover:bg-gray-100">3</button>
            <span className="text-gray-400">...</span>
            <button className="w-10 h-10 rounded-xl text-gray-500 font-bold hover:bg-gray-100">8</button>
            <button className="p-2 rounded-xl border border-gray-200 text-gray-400 hover:bg-white hover:text-[#1B5E44] transition-all">
              <HiOutlineChevronRight className="text-xl" />
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};


export default SearchPage;


