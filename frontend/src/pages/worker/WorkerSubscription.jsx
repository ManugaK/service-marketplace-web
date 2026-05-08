import React, { useState } from 'react';
import WorkerLayout from '../../components/layout/WorkerLayout';
import { HiOutlineCheck, HiOutlineSparkles, HiOutlineLightningBolt, HiOutlineTrendingUp, HiOutlineCalendar } from 'react-icons/hi';
import { BsCheckCircleFill, BsShieldCheck } from 'react-icons/bs';
import { RiCopperDiamondLine } from 'react-icons/ri';

const WorkerSubscription = () => {
  const [isPro, setIsPro] = useState(false);

  const features = [
    { name: 'Lead Invitations', free: '5 / Month', pro: 'Unlimited', active: true },
    { name: 'Commission Rate', free: '10%', pro: '5% Fixed', active: true },
    { name: 'Skill Badges', free: 'Max 2', pro: 'Unlimited', active: true },
    { name: 'Profile Analytics', free: 'Basic', pro: 'Advanced', active: true },
    { name: 'Lead Fees', free: 'Pay-per-lead', pro: 'Zero', active: true },
  ];

  const proBenefits = [
    { title: 'Unlimited skill badge certifications', icon: <BsCheckCircleFill /> },
    { title: '0% Commission on first 5 monthly jobs', icon: <BsCheckCircleFill /> },
    { title: 'Priority support via dedicated WhatsApp', icon: <BsCheckCircleFill /> },
    { title: 'Advanced analytics for profile views', icon: <BsCheckCircleFill /> },
    { title: 'Instant SMS alerts for new lead invites', icon: <BsCheckCircleFill /> },
    { title: 'Verification badge next to name', icon: <BsCheckCircleFill /> },
  ];

  return (
    <WorkerLayout>
      <div className="max-w-screen-2xl mx-auto pb-20">
        <header className="mb-12 flex justify-between items-end">
           <div>
              <h1 className="text-4xl font-black text-gray-900 mb-4">Subscription & Plan</h1>
              <p className="text-gray-500 font-medium">Manage your professional presence and billing cycles.</p>
           </div>
           <div className="bg-white p-1 rounded-2xl border border-gray-100 shadow-sm flex">
              <button 
                onClick={() => setIsPro(false)}
                className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${!isPro ? 'bg-[#1B5E44] text-white shadow-lg shadow-emerald-900/20' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Free Tier
              </button>
              <button 
                onClick={() => setIsPro(true)}
                className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${isPro ? 'bg-[#1B5E44] text-white shadow-lg shadow-emerald-900/20' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Pro Tier
              </button>
           </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            {/* Active Plan Card */}
            <div className={`relative overflow-hidden rounded-[2.5rem] p-10 text-white transition-all duration-500 ${isPro ? 'bg-gradient-to-br from-[#1B5E44] to-[#0A3D29]' : 'bg-gradient-to-br from-[#1B5E44] to-[#154B36]'}`}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest">
                    {isPro ? 'PRO PLAN — ACTIVE' : 'FREE PLAN — ACTIVE'}
                  </span>
                  {isPro && (
                    <div className="flex items-center gap-2 bg-emerald-400/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                      <HiOutlineSparkles className="text-emerald-300" />
                      <span className="text-xs font-black uppercase tracking-widest">Profile Boost +25 points</span>
                    </div>
                  )}
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-5xl font-black mb-4">
                      {isPro ? 'LKR 2,500' : 'LKR 0'}
                      <span className="text-lg font-medium opacity-60">/month</span>
                    </h2>
                    <p className="text-sm font-medium opacity-80 flex items-center gap-2">
                      <HiOutlineCalendar className="text-lg" />
                      {isPro ? 'Next renewal: 15 May 2025' : 'LKR 150 per lead fee applies'}
                    </p>
                  </div>
                  
                  {isPro ? (
                    <div className="flex gap-4">
                      <button className="bg-white text-[#1B5E44] px-8 py-4 rounded-2xl font-black text-sm hover:bg-gray-50 transition-all shadow-xl shadow-black/20">
                        Manage Billing
                      </button>
                      <button className="text-white/80 hover:text-white px-4 py-4 font-bold text-sm transition-all">
                        Cancel plan
                      </button>
                    </div>
                  ) : (
                    <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-2xl font-black text-sm border border-white/20 transition-all flex items-center gap-3">
                       <HiOutlineTrendingUp /> Upgrade to PRO
                    </button>
                  )}
                </div>

                {!isPro && (
                  <p className="mt-8 text-sm font-medium opacity-70 max-w-md">
                    You are currently using the limited free tier. Your visibility is limited, and lead fees apply to all client bookings.
                  </p>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl"></div>
            </div>

            {/* Content below active plan */}
            {isPro ? (
              <section>
                 <h3 className="text-2xl font-black text-gray-900 mb-8">What Pro gives you</h3>
                 <div className="grid md:grid-cols-2 gap-4">
                    {proBenefits.map((benefit, i) => (
                      <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 flex gap-4 items-start shadow-sm hover:border-emerald-500/20 transition-all group">
                         <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                            {benefit.icon}
                         </div>
                         <p className="text-sm font-bold text-gray-700 leading-relaxed pt-2">{benefit.title}</p>
                      </div>
                    ))}
                 </div>
              </section>
            ) : (
              <section>
                <h3 className="text-2xl font-black text-gray-900 mb-8">Plan Comparison</h3>
                <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
                   <div className="grid grid-cols-2 border-b border-gray-100">
                      <div className="p-8 text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Free Tier</div>
                      <div className="p-8 text-center text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] bg-emerald-50/30">Pro Tier</div>
                   </div>
                   {[
                      { label: 'Lead Fees', free: 'LKR 150 per lead', pro: 'Zero Fees', proSub: 'Keep 100% of lead price', proColor: 'text-emerald-500' },
                      { label: 'Search Visibility', free: 'Standard listing', pro: 'Priority Ranking', proSub: 'Top of search results', proColor: 'text-emerald-500' },
                      { label: 'Profile Badge', free: 'No special badge', pro: '"Featured" Badge', proSub: 'Build instant trust', proColor: 'text-emerald-500' },
                      { label: 'Monthly Bookings', free: 'Limited to 3/mo', pro: 'Unlimited', proSub: 'Unlimited bookings & leads', proColor: 'text-emerald-500' },
                   ].map((item, i) => (
                     <div key={i} className="grid grid-cols-2 border-b border-gray-50 last:border-0">
                        <div className="p-8 border-r border-gray-50">
                           <p className="text-xs font-black text-gray-900 mb-1">{item.label}</p>
                           <p className="text-[10px] font-bold text-gray-400 uppercase">{item.free}</p>
                        </div>
                        <div className="p-8 bg-emerald-50/10">
                           <p className={`text-xs font-black mb-1 ${item.proColor}`}>{item.pro}</p>
                           <p className="text-[10px] font-bold text-gray-400 uppercase">{item.proSub}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </section>
            )}

            {/* Feature Table */}
            <section>
               <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
                  <div className="grid grid-cols-3 bg-gray-50/50">
                     <div className="p-8 text-xl font-black text-gray-900">Features</div>
                     <div className="p-8 text-center text-xl font-black text-gray-400">FREE</div>
                     <div className={`p-8 text-center text-xl font-black relative ${isPro ? 'text-[#1B5E44]' : 'text-gray-400'}`}>
                        PRO
                        {isPro && <span className="absolute top-2 right-2 bg-[#1B5E44] text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Active</span>}
                     </div>
                  </div>
                  {features.map((feature, i) => (
                    <div key={i} className="grid grid-cols-3 border-t border-gray-50">
                       <div className="p-8 text-sm font-bold text-gray-500">{feature.name}</div>
                       <div className="p-8 text-center text-sm font-black text-gray-900">{feature.free}</div>
                       <div className={`p-8 text-center text-sm font-black transition-colors ${isPro ? 'bg-emerald-50/30 text-[#1B5E44]' : 'text-gray-900'}`}>
                          {feature.pro}
                       </div>
                    </div>
                  ))}
               </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
             {/* Priority Score */}
             <div className="bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm text-center">
                <h3 className="text-xl font-black text-gray-900 mb-8">Priority Score</h3>
                <div className="relative w-40 h-40 mx-auto mb-8 flex items-center justify-center">
                   <svg className="w-full h-full transform -rotate-90">
                      <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-50" />
                      <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="440" strokeDashoffset={440 - (440 * (isPro ? 87 : 62) / 100)} className="text-[#1B5E44] transition-all duration-1000 ease-out" />
                   </svg>
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-black text-gray-900">{isPro ? 87 : 62}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">/ 100</span>
                   </div>
                </div>
                
                <div className="space-y-4 text-left">
                   {[
                      { label: isPro ? 'Pro Subscription' : 'Profile Activity', value: '+20', color: 'text-emerald-500' },
                      { label: 'Response Rate', value: '+20', color: 'text-emerald-500' },
                      { label: 'Rating Average', value: '+22', color: 'text-emerald-500' },
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500">{item.label}</span>
                        <span className={`text-xs font-black ${item.color}`}>{item.value}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-50">
                   <p className="text-xs text-gray-400 leading-relaxed">
                     {isPro 
                      ? 'Top 5% of workers in your category. Increased visibility for high-budget jobs.' 
                      : 'Get +25 points instantly by upgrading to Pro and boost your visibility by 3x.'}
                   </p>
                </div>
             </div>

             {/* Settings Card */}
             <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                   <div>
                      <h4 className="text-sm font-black text-gray-900">Lead Fee Model</h4>
                      <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase leading-tight">Currently active</p>
                   </div>
                   <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${!isPro ? 'bg-emerald-500' : 'bg-gray-200'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${!isPro ? 'right-1' : 'left-1'}`}></div>
                   </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                   {isPro 
                    ? 'Pay-per-lead option is currently inactive because you are a Pro Member. You get all lead invitations for free.'
                    : 'Pay-per-lead option is currently active. You only pay for the leads you choose to accept.'}
                </p>
             </div>
          </aside>
        </div>
      </div>
    </WorkerLayout>
  );
};

export default WorkerSubscription;
