import React from 'react';
import WorkerLayout from '../../components/layout/WorkerLayout';
import { HiOutlineArrowLeft, HiStar, HiOutlineChatAlt2, HiOutlineFlag } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const WorkerReviews = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'TOTAL REVIEWS', value: '127', color: 'text-emerald-500' },
    { label: 'AVERAGE RATING', value: '4.9', sub: '/ 5', color: 'text-gray-900' },
    { label: 'RECOMMENDATION RATE', value: '98%', color: 'text-gray-900' },
  ];

  const ratingBreakdown = [
    { stars: 5, count: 115, percentage: 90 },
    { stars: 4, count: 8, percentage: 6 },
    { stars: 3, count: 2, percentage: 2 },
    { stars: 2, count: 1, percentage: 1 },
    { stars: 1, count: 1, percentage: 1 },
  ];

  const reviews = [
    {
      id: 1,
      author: 'Samantha Perera',
      category: 'PAINTER',
      rating: 5,
      date: '2 days ago',
      content: 'Aruna did an absolutely fantastic job painting our guest bedroom. He was punctual, meticulous about covering the furniture, and the finish is flawless. Highly recommend him for any precise interior work!',
      replied: false
    },
    {
      id: 2,
      author: 'David Wilson',
      category: 'WALL REPAIR',
      rating: 5,
      date: '1 week ago',
      content: 'Very professional and tidy. He fixed several cracks in my plaster walls that I thought were beyond repair. The pricing was transparent and fair.',
      replied: true,
      reply: {
        content: 'Thank you so much, David! It was a pleasure working on your beautiful home. Let me know if you need anything else.',
        date: '5 days ago'
      }
    },
    {
      id: 3,
      author: 'Kasun Abeysinghe',
      category: 'EXTERIOR TRIM',
      rating: 4,
      date: '2 weeks ago',
      content: 'Good work overall. Arrived slightly later than expected but communicated well about the delay. The quality of work itself is excellent.',
      replied: false
    }
  ];

  const highlights = ['Punctual', 'Expert', 'Clean', 'Polite', 'Fair Pricing', 'Detail Oriented'];

  return (
    <WorkerLayout>
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-6 mb-10">
          <button 
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#1B5E44] hover:border-[#1B5E44]/20 transition-all shadow-sm"
          >
            <HiOutlineArrowLeft className="text-xl" />
          </button>
          <h1 className="text-3xl font-black text-gray-900">Ratings & Reviews</h1>
        </div>

        {/* Stats Cards */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm mb-8">
          <div className="grid grid-cols-3 gap-10 divide-x divide-gray-50">
            {stats.map((stat, i) => (
              <div key={i} className={`${i > 0 ? 'pl-10' : ''}`}>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-black ${stat.color}`}>{stat.value}</span>
                  {stat.sub && <span className="text-gray-400 font-bold">{stat.sub}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-10">
          {['All', 'Recent', 'Highest Rated', 'Lowest Rated'].map((filter, i) => (
            <button 
              key={i}
              className={`px-8 py-3 rounded-2xl text-sm font-black transition-all ${
                i === 0 ? 'bg-[#1B5E44] text-white shadow-lg shadow-emerald-900/20' : 'bg-white border border-gray-100 text-gray-500 hover:border-[#1B5E44]/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {reviews.map(review => (
              <div key={review.id} className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img src={`https://i.pravatar.cc/100?u=${review.author}`} alt="" className="w-12 h-12 rounded-2xl object-cover" />
                    <div>
                      <h4 className="font-black text-gray-900">{review.author}</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <HiStar key={i} className={`text-xs ${i < review.rating ? 'text-yellow-400' : 'text-gray-200'}`} />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase">• {review.date}</span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-gray-50 text-gray-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-gray-100">
                    {review.category}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {review.content}
                </p>

                {review.replied && (
                  <div className="bg-emerald-50/50 rounded-3xl p-6 mb-8 border-l-4 border-emerald-500 relative">
                     <div className="flex items-center justify-between mb-2">
                        <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Aruna K. (You) Replied:</p>
                        <span className="text-[10px] font-bold text-gray-400">{review.reply.date}</span>
                     </div>
                     <p className="text-sm text-gray-600 italic leading-relaxed">
                        "{review.reply.content}"
                     </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <button className="flex items-center gap-2 text-xs font-black text-[#1B5E44] hover:opacity-70 transition-opacity uppercase tracking-widest">
                    <HiOutlineChatAlt2 className="text-lg" /> {review.replied ? 'Replied' : 'Reply'}
                  </button>
                  <button className="flex items-center gap-2 text-xs font-black text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">
                    <HiOutlineFlag className="text-lg" /> Report
                  </button>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-3 pt-6">
              <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#1B5E44] transition-all">
                <HiOutlineArrowLeft />
              </button>
              <button className="w-10 h-10 rounded-xl bg-[#1B5E44] text-white font-black shadow-lg shadow-emerald-900/20">1</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-500 font-bold hover:bg-gray-50 transition-all">2</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 text-gray-500 font-bold hover:bg-gray-50 transition-all">3</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#1B5E44] transition-all rotate-180">
                <HiOutlineArrowLeft />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Rating Breakdown */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-8">Rating Breakdown</h3>
              <div className="space-y-4">
                {ratingBreakdown.map(item => (
                  <div key={item.stars} className="flex items-center gap-4">
                    <span className="text-xs font-black text-gray-400 w-10">{item.stars} Star</span>
                    <div className="flex-grow h-2 bg-gray-50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-black text-gray-900 w-8 text-right">{item.count}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-gray-50">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Positive Feedback Highlights</p>
                <div className="flex flex-wrap gap-2">
                  {highlights.map(h => (
                    <span key={h} className="px-4 py-2 bg-emerald-50 text-[#1B5E44] text-[10px] font-black rounded-full border border-emerald-100 uppercase tracking-widest">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </WorkerLayout>
  );
};

export default WorkerReviews;
