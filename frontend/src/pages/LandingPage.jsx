import React from 'react';
import { HiOutlineSearch, HiOutlineLocationMarker } from 'react-icons/hi';
import { BsArrowRight, BsCheckCircleFill } from 'react-icons/bs';
import { IoMdBriefcase, IoMdHome, IoMdFlash, IoMdConstruct } from 'react-icons/io';
import heroHandshake from '../assets/hero_handshake.png';

const LandingPage = ({ onGetStarted, onLogin, onSignup }) => {
  const categories = [
    { name: 'Cleaning', icon: <IoMdHome />, color: 'bg-blue-50 text-blue-600' },
    { name: 'Electrical', icon: <IoMdFlash />, color: 'bg-yellow-50 text-yellow-600' },
    { name: 'Plumbing', icon: <IoMdConstruct />, color: 'bg-emerald-50 text-emerald-600' },
    { name: 'Construction', icon: <IoMdBriefcase />, color: 'bg-orange-50 text-orange-600' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="text-2xl font-bold text-[#1B5E44] tracking-tight">SkilledLK</div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="font-semibold text-gray-600 hover:text-[#1B5E44] transition-colors">Find Work</a>
          <a href="#" className="font-semibold text-gray-600 hover:text-[#1B5E44] transition-colors">Find a Professional</a>
          <a href="#" className="font-semibold text-gray-600 hover:text-[#1B5E44] transition-colors">How it Works</a>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={onLogin} className="px-6 py-2.5 font-bold text-gray-700 hover:text-[#1B5E44] transition-colors">Sign In</button>
          <button onClick={onGetStarted} className="px-6 py-2.5 bg-[#1B5E44] text-white rounded-xl font-bold shadow-lg shadow-emerald-900/20 hover:bg-[#005a39] transition-all transform hover:scale-[1.02]">
            Join as Professional
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full -mr-64 -mt-64 blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full -ml-32 -mb-32 blur-3xl opacity-50 -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="inline-block py-2 px-4 rounded-full bg-emerald-100 text-[#1B5E44] font-bold text-sm mb-6 animate-fade-in">
            Sri Lanka's #1 Service Marketplace
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 max-w-4xl tracking-tight">
            Find the best <span className="text-[#1B5E44]">professionals</span> <br />
            for your next project.
          </h1>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl leading-relaxed">
            Connect with verified plumbers, electricians, cleaners, and more in seconds. 
            Trusted by over 2,100+ happy customers across Sri Lanka.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-3xl bg-white p-2 rounded-2xl shadow-2xl shadow-emerald-900/10 border border-gray-100 flex flex-col md:flex-row gap-2">
            <div className="flex-grow flex items-center px-4 py-3 gap-3 border-b md:border-b-0 md:border-r border-gray-100">
              <HiOutlineSearch className="text-2xl text-gray-400" />
              <input type="text" placeholder="What service do you need?" className="w-full outline-none font-medium text-gray-700" />
            </div>
            <div className="flex-shrink-0 flex items-center px-4 py-3 gap-3">
              <HiOutlineLocationMarker className="text-2xl text-gray-400" />
              <input type="text" placeholder="Location" className="w-full outline-none font-medium text-gray-700" />
            </div>
            <button className="bg-[#1B5E44] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#005a39] transition-all flex items-center justify-center gap-2">
              Search <BsArrowRight />
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-medium">
            <span>Popular:</span>
            <a href="#" className="hover:text-[#1B5E44] transition-colors">Plumbing</a>
            <a href="#" className="hover:text-[#1B5E44] transition-colors">House Cleaning</a>
            <a href="#" className="hover:text-[#1B5E44] transition-colors">Electrician</a>
            <a href="#" className="hover:text-[#1B5E44] transition-colors">Gardening</a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Explore Categories</h2>
              <p className="text-gray-500 text-lg">Browse our wide range of services and find what you need.</p>
            </div>
            <button className="text-[#1B5E44] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View all categories <BsArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#1B5E44] hover:shadow-xl hover:shadow-emerald-900/5 transition-all cursor-pointer group">
                <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.name}</h3>
                <p className="text-gray-400 text-sm">240+ Professionals</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute inset-0 bg-emerald-600 rounded-[3rem] rotate-3 -z-10"></div>
             <img 
               src={heroHandshake} 
               alt="Trusted Professionals" 
               className="w-full h-[500px] object-cover rounded-[3rem] shadow-2xl" 
             />
             <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl max-w-[280px]">
                <div className="flex items-center gap-3 mb-4">
                   <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                      ))}
                   </div>
                   <div className="text-xs font-bold text-gray-400">2,100+ Customers</div>
                </div>
                <p className="text-sm font-bold text-gray-800 italic leading-relaxed">
                  "The most reliable platform for hiring local experts in Sri Lanka."
                </p>
             </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              Why thousands of Sri Lankans <br />
              choose <span className="text-[#1B5E44]">SkilledLK</span>
            </h2>
            
            <div className="space-y-6">
              {[
                { title: 'Verified Professionals', desc: 'Every worker on our platform goes through a rigorous ID verification process.' },
                { title: 'Secure Payments', desc: 'Pay safely through our integrated payment system after the job is completed.' },
                { title: 'Insurance Coverage', desc: 'Jobs booked through our platform are covered by our damage protection plan.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <BsCheckCircleFill className="text-emerald-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={onGetStarted} className="bg-[#1B5E44] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-900/20 hover:bg-[#005a39] transition-all transform hover:scale-[1.02]">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-3xl font-bold mb-8">SkilledLK</div>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Empowering Sri Lankan professionals and simplifying home services for everyone. 
              Join the most trusted service marketplace today.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
           <p>© 2026 SkilledLK Professional Marketplace. All rights reserved.</p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Instagram</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
