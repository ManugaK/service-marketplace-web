import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Search,
  MapPin,
  Paintbrush,
  Zap,
  Wrench,
  Hammer,
  Snowflake,
  SprayCan,
  PlusCircle,
  Star,
  CheckCircle,
  XCircle,
} from 'lucide-react';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AuthFlow from './auth/AuthFlow';

const serviceCategories = [
  {
    name: 'Painting',
    icon: Paintbrush,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    name: 'Electrical',
    icon: Zap,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    name: 'Plumbing',
    icon: Wrench,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
  },
  {
    name: 'Carpentry',
    icon: Hammer,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  {
    name: 'AC Repair',
    icon: Snowflake,
    color: 'text-teal-500',
    bg: 'bg-teal-50',
  },
  {
    name: 'Cleaning',
    icon: SprayCan,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    name: 'Masonry',
    icon: Wrench,
    color: 'text-slate-600',
    bg: 'bg-slate-50',
  },
  {
    name: '+More',
    icon: PlusCircle,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
];

const heroWorkers = [
  {
    name: 'Nimal Silva',
    role: 'Expert Electrician',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Samantha Perera',
    role: 'Master Carpenter',
    rating: '5.0',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Aruni Fernando',
    role: 'Interior Painter',
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
];

const professionals = [
  {
    name: 'Arshad Majeed',
    role: 'Plumbing & Sanitary Expert',
    rating: '4.9',
    jobs: '120+ Jobs',
    badge: 'Verified ID',
    image:
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80',
    label: 'PLATINUM PRO',
  },
  {
    name: 'Chathura Peiris',
    role: 'Licensed Electrician',
    rating: '5.0',
    jobs: '85 Jobs',
    badge: 'Safety First',
    image:
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80',
    label: 'ELITE',
  },
  {
    name: 'Dilantha Goonewardena',
    role: 'Property Maintenance',
    rating: '4.7',
    jobs: '200+ Jobs',
    badge: 'Multi-skilled',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    label: null,
  },
];

const testimonials = [
  {
    quote:
      'Found a reliable plumber within 10 minutes. Arshad was professional and fixed the leak quickly. Highly recommend SkilledLK for anyone in Colombo.',
    name: 'Nadine Jayasuriya',
    location: 'Colombo 07',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'As a professional electrician, SkilledLK has changed how I get clients. No more waiting for calls, I get verified leads every day.',
    name: 'Kasun Rathnayake',
    location: 'Verified Pro',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Great experience hiring a deep cleaning crew for my new apartment. Transparent pricing and the team was very thorough.',
    name: 'Dimuthu Perera',
    location: 'Kandy',
    avatar:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&q=80',
  },
];

const workerBenefits = [
  {
    title: 'Set your own schedule',
    text: 'Work when you want, where you want.',
  },
  {
    title: 'Guaranteed Payments',
    text: 'Get paid on time directly to your bank account.',
  },
  {
    title: 'Verified Leads',
    text: 'We filter the noise so you only get serious clients.',
  },
  {
    title: 'Grow your Brand',
    text: 'Build a reputation with public reviews.',
  },
];

function RatingStars() {
  return (
    <div className="flex gap-0.5 text-yellow-400">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

export default function LandingPage() {
  const location = useLocation();
  const authConfigByPath = {
    '/login': { initialView: 'login', entryMode: 'signin' },
    '/signup': { initialView: 'role-selection', entryMode: 'signup' },
    '/phone-auth': { initialView: 'phone-input', entryMode: 'signin' },
    '/verify-otp': { initialView: 'otp', entryMode: 'signin' },
  };
  const authConfig = authConfigByPath[location.pathname];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f7fb] text-slate-900">
      <Navbar />

      <main className="pt-16">
        {/* Hero / Services Section */}
        <section
          id="services"
          className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-[#effff8] via-[#f4fffb] to-[#eefcf7]"
        >
          <div className="mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:px-8 xl:gap-16">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-xs font-medium text-emerald-700 shadow-sm sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Live — 347 workers available now
              </div>

              <h1 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:mx-0 lg:max-w-xl xl:text-[64px]">
                Find{' '}
                <span className="text-[#05735f]">
                  verified
                </span>{' '}
                skilled workers near you
              </h1>

              <div className="mx-auto mt-8 w-full max-w-xl rounded-2xl bg-white p-3 shadow-xl shadow-slate-200/70 lg:mx-0">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex flex-1 items-center gap-3 px-3 py-2">
                    <Search size={20} className="shrink-0 text-slate-400" />
                    <input
                      type="text"
                      placeholder="What service?"
                      className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <div className="hidden h-8 w-px bg-slate-200 sm:block" />

                  <div className="flex flex-1 items-center gap-3 px-3 py-2">
                    <MapPin size={20} className="shrink-0 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Colombo"
                      className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <button className="cursor-pointer rounded-xl bg-[#05735f] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#046553] sm:shrink-0">
                    Search
                  </button>
                </div>
              </div>

              <p className="mt-6 text-sm text-slate-500">
                Popular: Plumbing, Electrical, Deep Cleaning
              </p>
            </div>

            <div className="relative mx-auto hidden min-h-[420px] w-full max-w-xl items-center justify-center lg:flex">
              <div className="absolute h-[380px] w-[440px] rotate-3 rounded-[42px] bg-emerald-100/70 xl:h-[420px] xl:w-[500px]" />
              <div className="absolute h-[315px] w-[375px] rounded-[36px] border-[28px] border-emerald-50/80 xl:h-[350px] xl:w-[430px]" />

              <div className="relative z-10 w-full max-w-md space-y-5">
                {heroWorkers.map((person, index) => (
                  <div
                    key={person.name}
                    className={`flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-xl shadow-slate-300/40 ${
                      index === 0
                        ? 'mr-8'
                        : index === 1
                        ? 'ml-4 mr-12'
                        : 'ml-10'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="h-12 w-12 shrink-0 rounded-full object-cover"
                      />

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-semibold text-slate-800">
                            {person.name}
                          </h3>
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white">
                            ✓
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                          {person.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-sm font-bold text-yellow-500">
                      <Star size={14} fill="currentColor" />
                      {person.rating}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile worker cards */}
          <div className="px-4 pb-12 sm:px-6 lg:hidden">
            <div className="mx-auto grid max-w-xl gap-4">
              {heroWorkers.map((person) => (
                <div
                  key={person.name}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-11 w-11 shrink-0 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="text-sm font-semibold text-slate-800">
                        {person.name}
                      </h3>
                      <p className="text-xs text-slate-500">{person.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm font-bold text-yellow-500">
                    <Star size={13} fill="currentColor" />
                    {person.rating}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="border-y border-slate-100 bg-white/80">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-6 text-center sm:px-6 md:grid-cols-4 lg:px-8">
              <div className="md:border-r md:border-slate-200">
                <h3 className="text-base font-bold text-slate-800">2,100+</h3>
                <p className="mt-1 text-xs text-slate-500">Customers</p>
              </div>

              <div className="md:border-r md:border-slate-200">
                <h3 className="text-base font-bold text-slate-800">347</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Verified Workers
                </p>
              </div>

              <div className="md:border-r md:border-slate-200">
                <h3 className="text-base font-bold text-slate-800">12</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Service Categories
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-800">4.8 ★</h3>
                <p className="mt-1 text-xs text-slate-500">Avg Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section
          id="categories"
          className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
        >
          <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Browse Service Categories
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
            {serviceCategories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.name}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  <div
                    className={`cursor-pointer flex h-14 w-14 items-center justify-center rounded-2xl ${category.bg}`}
                  >
                    <Icon size={23} className={category.color} />
                  </div>

                  <p className="cursor-pointer text-sm font-medium text-slate-700">
                    {category.name}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20"
        >
          <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            How It Works
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {[
              {
                no: '01',
                title: 'Post a Request',
                text: 'Tell us what you need and your location. It takes less than 2 minutes.',
              },
              {
                no: '02',
                title: 'Compare Pros',
                text: 'Review profiles, ratings, and verified experience of local workers.',
              },
              {
                no: '03',
                title: 'Hire & Pay',
                text: 'Chat with the professional, confirm the job, and pay securely after completion.',
              },
            ].map((step) => (
              <div
                key={step.no}
                className="relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100"
              >
                <span className="absolute left-6 top-3 text-5xl font-black leading-none text-emerald-50">
                  {step.no}
                </span>

                <div className="relative z-10 pt-8">
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Rated Professionals */}
        <section
          id="top-professionals"
          className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20"
        >
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Top Rated Professionals
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Hand-picked experts with consistent 5-star delivery.
              </p>
            </div>

            <button className="w-fit border-b-2 border-[#05735f] text-sm font-semibold text-[#05735f]">
              View all workers
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {professionals.map((pro) => (
              <div
                key={pro.name}
                className="overflow-hidden rounded-2xl bg-white shadow-md shadow-slate-200 ring-1 ring-slate-100"
              >
                <div className="relative h-48 overflow-hidden sm:h-52 md:h-44 lg:h-52">
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className="h-full w-full object-cover"
                  />

                  {pro.label && (
                    <span className="absolute left-4 top-4 rounded bg-yellow-500 px-2 py-1 text-[10px] font-bold text-white">
                      {pro.label}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {pro.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {pro.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-sm font-bold text-yellow-500">
                      <Star size={13} fill="currentColor" />
                      {pro.rating}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500">
                    <span className="rounded-full bg-slate-50 px-3 py-1">
                      {pro.jobs}
                    </span>

                    <span className="rounded-full bg-slate-50 px-3 py-1">
                      {pro.badge}
                    </span>
                  </div>

                  <button className="cursor-pointer mt-6 w-full rounded-lg py-2.5 text-sm font-semibold text-[#05735f] hover:bg-emerald-50">
                    View profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Worker CTA */}
        <section className="bg-[#071812] py-16 text-white lg:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Earn up to LKR 85,000/month
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
                Join the largest network of professionals in Sri Lanka and grow
                your business today.
              </p>

              <div className="mt-10 space-y-6">
                {workerBenefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <CheckCircle size={18} className="mt-1 shrink-0 text-emerald-400" />

                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {benefit.title}
                      </h4>

                      <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-7 text-slate-900 shadow-2xl sm:p-10">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-emerald-50" />

                <h3 className="text-lg font-extrabold">
                  Earnings Calculator
                </h3>

                <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                  Average monthly payout for Top Pro category.
                </p>

                <div className="mt-8 rounded-xl bg-slate-50 p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Projected Earnings
                  </p>

                  <h4 className="mt-2 text-2xl font-black text-[#05735f] sm:text-3xl">
                    LKR 85,000
                    <span className="text-sm font-semibold text-slate-400">
                      {' '}
                      /mo
                    </span>
                  </h4>
                </div>

                <button className="cursor-pointer mt-8 w-full rounded-lg bg-[#05735f] py-3 text-sm font-bold text-white transition hover:bg-[#046553]">
                  Sign Up as a Pro
                </button>

                <p className="mt-4 text-center text-xs text-slate-400">
                  Free to join. No hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Simple, transparent pricing for workers
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              Start free. Upgrade when you&apos;re ready to grow.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200 sm:p-8">
              <h3 className="text-xl font-extrabold text-slate-800">
                FREE PLAN
              </h3>

              <div className="mt-4 flex items-end gap-2">
                <span className="text-3xl font-black">LKR 0</span>

                <span className="pb-1 text-xs text-slate-500">/month</span>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  ['Basic Directory Listing', true],
                  ['Accept 5 Direct Jobs/mo', true],
                  ['Pro Badge on Profile', false],
                  ['Priority Search Ranking', false],
                  ['Zero Platform Fees on Direct Jobs', false],
                ].map(([item, active]) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 text-sm ${
                      active ? 'text-slate-700' : 'text-slate-400'
                    }`}
                  >
                    {active ? (
                      <CheckCircle size={16} className="shrink-0 text-[#05735f]" />
                    ) : (
                      <XCircle size={16} className="shrink-0 text-slate-300" />
                    )}

                    {item}
                  </div>
                ))}
              </div>

              <button className="cursor-pointer mt-12 w-full rounded-lg border border-[#05735f] py-3 text-sm font-bold text-slate-800 hover:bg-emerald-50">
                Get started free
              </button>
            </div>

            <div className="relative rounded-2xl bg-[#eef4ff] p-7 ring-2 ring-[#05735f] sm:p-8">
              <span className="absolute -top-3 right-8 rounded-full bg-yellow-400 px-4 py-1 text-[10px] font-bold text-white">
                MOST POPULAR
              </span>

              <h3 className="text-xl font-extrabold text-[#05735f]">
                PRO PLAN
              </h3>

              <div className="mt-4 flex items-end gap-2">
                <span className="text-3xl font-black">LKR 2,500</span>

                <span className="pb-1 text-xs text-slate-500">/month</span>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  'Premium Directory Listing',
                  'Unlimited Direct Jobs',
                  'Pro Badge on Profile',
                  'Priority Search Ranking (+30%)',
                  'Zero Platform Fees on Direct Jobs',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <CheckCircle size={16} className="shrink-0 text-[#05735f]" />
                    {item}
                  </div>
                ))}
              </div>

              <button className="cursor-pointer mt-12 w-full rounded-lg bg-[#05735f] py-3 text-sm font-bold text-white hover:bg-[#046553]">
                Subscribe & go Pro
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                Average Pro worker earns LKR 42,000/month
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"
        >
          <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What our customers say
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100 sm:p-8"
              >
                <RatingStars />

                <p className="mt-5 text-sm italic leading-7 text-slate-600 sm:text-[15px]">
                  &quot;{item.quote}&quot;
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="mt-1 text-xs text-slate-400">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {authConfig && (
        <AuthFlow
          initialView={authConfig.initialView}
          entryMode={authConfig.entryMode}
        />
      )}
    </div>
  );
}