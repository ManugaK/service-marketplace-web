import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HiOutlineSearch, 
  HiOutlineLocationMarker, 
  HiStar, 
  HiOutlineArrowRight, 
  HiOutlineCheckCircle,
  HiOutlinePlay
} from 'react-icons/hi';
import { 
  IoMdBrush, 
  IoMdFlash, 
  IoMdConstruct, 
  IoMdHammer, 
  IoMdSnow, 
  IoMdHome, 
  IoMdMore 
} from 'react-icons/io';
import { 
  FaQuoteLeft, 
  FaApple, 
  FaGooglePlay 
} from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  const navigate = useNavigate();
  const [earnings, setEarnings] = useState(85000);

  const categories = [
    { name: 'Painting', icon: <IoMdBrush />, color: 'text-blue-500 bg-blue-50' },
    { name: 'Electrical', icon: <IoMdFlash />, color: 'text-yellow-500 bg-yellow-50' },
    { name: 'Plumbing', icon: <IoMdConstruct />, color: 'text-emerald-500 bg-emerald-50' },
    { name: 'Carpentry', icon: <IoMdHammer />, color: 'text-orange-500 bg-orange-50' },
    { name: 'AC Repair', icon: <IoMdSnow />, color: 'text-purple-500 bg-purple-50' },
    { name: 'Cleaning', icon: <IoMdHome />, color: 'text-pink-500 bg-pink-50' },
    { name: 'Masonry', icon: <IoMdConstruct />, color: 'text-slate-500 bg-slate-50' },
    { name: 'More', icon: <IoMdMore />, color: 'text-gray-400 bg-gray-50' },
  ];

  const topProfessionals = [
    {
      id: 1,
      name: 'Amila Perera',
      role: 'Master Painter',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?q=80&w=400&auto=format&fit=crop',
      verified: true
    },
    {
      id: 2,
      name: 'Nimal Silva',
      role: 'Certified Electrician',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=400&auto=format&fit=crop',
      verified: true
    },
    {
      id: 3,
      name: 'Kasun Wijesinghe',
      role: 'Interior Designer',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1560513642-c3ca1739c394?q=80&w=400&auto=format&fit=crop',
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar isLoggedIn={false} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-emerald-50/40 via-white to-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-[#1B5E44] font-bold text-xs mb-8">
               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
               Most Trusted in Sri Lanka
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tight">
              Find <span className="text-[#1B5E44] italic">verified</span> skilled <br />
              workers near you
            </h1>
            
            {/* Search Bar */}
            <div className="w-full max-w-2xl bg-white p-2 rounded-2xl shadow-2xl shadow-emerald-900/10 border border-gray-100 flex flex-col md:flex-row gap-2 mb-8">
              <div className="flex-grow flex items-center px-4 py-4 gap-3 border-b md:border-b-0 md:border-r border-gray-100">
                <HiOutlineSearch className="text-2xl text-gray-300" />
                <input type="text" placeholder="What service do you need?" className="w-full outline-none font-medium text-gray-700 placeholder:text-gray-300" />
              </div>
              <div className="flex-shrink-0 flex items-center px-4 py-4 gap-3">
                <HiOutlineLocationMarker className="text-2xl text-gray-300" />
                <input type="text" placeholder="Location" className="w-full outline-none font-medium text-gray-700 placeholder:text-gray-300" />
              </div>
              <button onClick={() => navigate('/search')} className="bg-[#1B5E44] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#005a39] transition-all flex items-center justify-center">
                Search
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-bold text-gray-400">
              <span className="text-gray-300">Popular:</span>
              <button className="hover:text-[#1B5E44]">Plumbing</button>
              <button className="hover:text-[#1B5E44]">Electrical</button>
              <button className="hover:text-[#1B5E44]">House Cleaning</button>
            </div>
          </div>

          <div className="flex-1 relative hidden lg:block">
            {/* Floating Worker Cards Mockup */}
            <div className="relative w-full h-[500px]">
               <div className="absolute top-10 right-0 w-80 bg-white p-4 rounded-2xl shadow-2xl border border-gray-50 flex items-center gap-4 animate-float">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 overflow-hidden">
                     <img src="https://i.pravatar.cc/150?u=1" alt="Worker" />
                  </div>
                  <div className="flex-grow">
                     <p className="font-bold text-gray-900 text-sm flex items-center gap-1">Sunil P. <HiOutlineCheckCircle className="text-emerald-500" /></p>
                     <p className="text-[10px] text-gray-400 font-bold uppercase">Master Plumber</p>
                  </div>
                  <div className="text-right">
                     <div className="flex items-center gap-1 text-amber-400 font-bold text-xs"><HiStar /> 4.9</div>
                  </div>
               </div>

               <div className="absolute top-48 -left-10 w-80 bg-white p-4 rounded-2xl shadow-2xl border border-gray-50 flex items-center gap-4 animate-float-delayed">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 overflow-hidden">
                     <img src="https://i.pravatar.cc/150?u=2" alt="Worker" />
                  </div>
                  <div className="flex-grow">
                     <p className="font-bold text-gray-900 text-sm flex items-center gap-1">Anura D. <HiOutlineCheckCircle className="text-emerald-500" /></p>
                     <p className="text-[10px] text-gray-400 font-bold uppercase">Electrician</p>
                  </div>
                  <div className="text-right">
                     <div className="flex items-center gap-1 text-amber-400 font-bold text-xs"><HiStar /> 4.8</div>
                  </div>
               </div>

               <div className="absolute bottom-10 right-10 w-80 bg-white p-4 rounded-2xl shadow-2xl border border-gray-50 flex items-center gap-4 animate-float">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 overflow-hidden">
                     <img src="https://i.pravatar.cc/150?u=3" alt="Worker" />
                  </div>
                  <div className="flex-grow">
                     <p className="font-bold text-gray-900 text-sm flex items-center gap-1">Malith S. <HiOutlineCheckCircle className="text-emerald-500" /></p>
                     <p className="text-[10px] text-gray-400 font-bold uppercase">AC Technician</p>
                  </div>
                  <div className="text-right">
                     <div className="flex items-center gap-1 text-amber-400 font-bold text-xs"><HiStar /> 4.9</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-y border-gray-50 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12 text-center md:text-left">
           {[
             { label: 'Customers', value: '1,000+' },
             { label: 'Verified Workers', value: '200+' },
             { label: 'Service Categories', value: '15+' },
             { label: 'Avg Rating', value: '4.8/5' },
           ].map((stat, i) => (
             <div key={i} className="flex-1 min-w-[150px]">
                <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-24 px-6 bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Browse Service Categories</h2>
            <p className="text-gray-500 font-medium">Find the right expert for any home maintenance task.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.map((cat, i) => (
              <div key={i} onClick={() => navigate('/search')} className="flex flex-col items-center gap-4 cursor-pointer group">
                <div className={`w-16 h-16 rounded-3xl ${cat.color} flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
                  {cat.icon}
                </div>
                <span className="text-sm font-bold text-gray-700 transition-colors group-hover:text-[#1B5E44]">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">How It Works</h2>
              <p className="text-gray-500 font-medium">Three simple steps to get your work done.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-16">
              {[
                { step: '01', title: 'Post a Request', desc: 'Tell us what you need, from home painting to electrical repairs.' },
                { step: '02', title: 'Compare Pros', desc: 'Receive multiple quotes and review pro profiles and ratings.' },
                { step: '03', title: 'Hire & Pay', desc: 'Choose the best pro for your project and pay securely after completion.' },
              ].map((item, i) => (
                <div key={i} className="relative p-10 bg-white rounded-[2.5rem] border border-gray-100 hover:border-emerald-100 transition-all hover:shadow-2xl hover:shadow-emerald-900/5 group">
                   <span className="text-6xl font-black text-emerald-50/50 absolute top-6 left-10 group-hover:text-emerald-100/50 transition-colors">{item.step}</span>
                   <div className="relative z-10 pt-10">
                      <h4 className="text-xl font-black text-gray-900 mb-4">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed text-sm font-medium">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Top Rated Professionals */}
      <section className="py-24 px-6 bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Top Rated Professionals</h2>
              <p className="text-gray-500 font-medium">Hand-picked experts with consistent quality delivery.</p>
            </div>
            <button onClick={() => navigate('/search')} className="text-[#1B5E44] font-bold flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-[#1B5E44] pb-1">
              View all services <HiOutlineArrowRight />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {topProfessionals.map((pro) => (
              <div key={pro.id} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all group">
                <div className="h-64 relative overflow-hidden">
                  <img src={pro.image} alt={pro.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-amber-400 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter shadow-lg">Featured Pro</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900">{pro.name}</h4>
                    <div className="flex items-center gap-1 text-amber-400 font-bold text-sm"><HiStar /> {pro.rating}</div>
                  </div>
                  <p className="text-gray-500 text-sm font-medium mb-6">{pro.role}</p>
                  <div className="flex items-center gap-2 mb-8">
                     <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full border border-emerald-100 uppercase tracking-widest">Verified</span>
                     <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full border border-blue-100 uppercase tracking-widest">Active Pro</span>
                  </div>
                  <button onClick={() => navigate(`/worker/${pro.id}`)} className="text-[#1B5E44] font-black text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    View profile <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worker Incentive Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1B5E44_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="flex-1 relative z-10">
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tight">
                Earn up to LKR <br />
                <span className="text-[#34D399]">85,000/month</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md font-medium">
                Join the largest network of professional workers in Sri Lanka and grow your business today.
              </p>
              
              <ul className="space-y-6 mb-12">
                 {[
                   'Set your own schedule',
                   'Keep 100% of your earnings',
                   'Get paid weekly',
                   'Grow your brand with public reviews',
                 ].map((text, i) => (
                   <li key={i} className="flex items-center gap-4 text-gray-300 font-medium">
                      <HiOutlineCheckCircle className="text-[#34D399] text-2xl" />
                      {text}
                   </li>
                 ))}
              </ul>

              <button onClick={() => navigate('/signup')} className="bg-[#34D399] text-gray-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl shadow-emerald-500/20">
                Join as Professional
              </button>
            </div>

            <div className="flex-1 relative z-10 w-full lg:w-auto">
               <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl relative">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#34D399] rounded-full flex items-center justify-center text-gray-900 text-3xl animate-bounce-slow">
                     💸
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Earnings Calculator</h3>
                  <p className="text-gray-400 text-sm font-medium mb-10">See how much you could earn per month.</p>
                  
                  <div className="space-y-10">
                     <div>
                        <div className="flex justify-between items-center mb-4">
                           <span className="text-sm font-black text-gray-900 uppercase tracking-widest">Monthly Goals</span>
                           <span className="text-[#1B5E44] font-black text-xl">LKR {earnings.toLocaleString()}</span>
                        </div>
                        <input 
                           type="range" 
                           min="5000" 
                           max="200000" 
                           step="5000"
                           value={earnings}
                           onChange={(e) => setEarnings(parseInt(e.target.value))}
                           className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#1B5E44]"
                        />
                     </div>
                     
                     <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">You could earn up to</p>
                        <p className="text-center text-4xl font-black text-[#1B5E44]">LKR {Math.floor(earnings * 1.2).toLocaleString()}/mo</p>
                     </div>

                     <button className="w-full py-5 bg-[#1B5E44] text-white rounded-2xl font-black hover:bg-gray-900 transition-all flex items-center justify-center gap-2">
                        View Detailed Plan <HiOutlineArrowRight />
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-gray-50/30">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Simple, transparent pricing for workers</h2>
           <p className="text-gray-500 font-medium mb-20">Choose a plan that fits your business goals.</p>

           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free Plan */}
              <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl shadow-emerald-900/5 flex flex-col h-full">
                 <h3 className="text-xl font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Free Plan</h3>
                 <p className="text-5xl font-black text-gray-900 mb-10">LKR 0 <span className="text-sm font-medium text-gray-400">/ month</span></p>
                 
                 <ul className="space-y-6 mb-12 flex-grow">
                    {['Basic Directory Listing', 'Access to Public Job Wall', 'Standard Profile Page', 'Industry News Updates'].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-600 font-medium text-sm">
                         <HiOutlineCheckCircle className="text-emerald-500 text-xl" /> {item}
                      </li>
                    ))}
                 </ul>

                 <button className="w-full py-5 border border-gray-200 rounded-2xl text-gray-500 font-black hover:bg-gray-50 transition-all">
                    Get Started Free
                 </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-white p-12 rounded-[3rem] border-4 border-[#1B5E44] shadow-2xl shadow-emerald-900/10 flex flex-col h-full relative">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1B5E44] text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Recommended</div>
                 <h3 className="text-xl font-black text-[#1B5E44] uppercase tracking-[0.2em] mb-4">Pro Plan</h3>
                 <p className="text-5xl font-black text-gray-900 mb-10">LKR 2,500 <span className="text-sm font-medium text-gray-400">/ month</span></p>
                 
                 <ul className="space-y-6 mb-12 flex-grow text-left">
                    {['Premium "Featured" Listing', 'Unlimited Direct Leads', 'Pro Badge on Profile', 'Priority Leads Testing (Early)', 'Actionable Analytics Dashboard'].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-900 font-bold text-sm">
                         <HiOutlineCheckCircle className="text-[#1B5E44] text-xl" /> {item}
                      </li>
                    ))}
                 </ul>

                 <button className="w-full py-5 bg-[#1B5E44] text-white rounded-2xl font-black shadow-xl shadow-emerald-900/20 hover:bg-gray-900 transition-all">
                    Subscribe to Pro
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">What our customers say</h2>
            <p className="text-gray-500 font-medium">Hear from over 2,100+ happy customers across Sri Lanka.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rashmi Perera', role: 'Homeowner', text: "The most reliable platform for hiring local experts in Sri Lanka. I found an amazing painter in minutes!" },
              { name: 'Mahesh Gunasekara', role: 'Shop Owner', text: "Finally, a way to find verified electricians. The quality of work was exceptional and the price was fair." },
              { name: 'Kanchana Silva', role: 'Apartment Manager', text: "SkilledLK has simplified our maintenance workflow. We now use it for all our cleaning and repair needs." },
            ].map((testi, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <HiStar key={s} className="text-amber-400 text-xl" />)}
                </div>
                <p className="text-gray-600 font-medium italic leading-relaxed mb-8">"{testi.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 overflow-hidden">
                     <img src={`https://i.pravatar.cc/150?u=customer${i}`} alt={testi.name} />
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 text-sm">{testi.name}</h5>
                    <p className="text-xs text-gray-400 font-bold uppercase">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Internal CSS for Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-delayed {
          0% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
      `}} />
    </div>
  );
};

export default LandingPage;


