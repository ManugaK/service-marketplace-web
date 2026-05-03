import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { 
  HiOutlinePhone, 
  HiOutlineVideoCamera, 
  HiOutlineDotsVertical, 
  HiOutlinePaperClip, 
  HiOutlineEmojiHappy,
  HiOutlinePencilAlt
} from 'react-icons/hi';
import { IoMdSend } from 'react-icons/io';
import { BsCheck2All } from 'react-icons/bs';

const ChatPage = () => {
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState('');

  const chats = [
    { id: 1, name: 'Kasun Silva', role: 'Painter', lastMsg: "I'll be there at 9 AM. My number is...", time: '10:25 AM', online: true, avatar: 'KS' },
    { id: 2, name: 'Sunil Perera', role: 'Electrician', lastMsg: "The wiring fix is completed. Thank you!", time: 'Yesterday', online: false, avatar: 'SP' },
    { id: 3, name: 'Amali de Silva', role: 'Interior Designer', lastMsg: "I've sent the updated floor plan for the...", time: '25 Apr', online: false, avatar: 'AS' },
  ];

  const messages = [
    { id: 1, type: 'system', content: 'Booking #BK-1041 created · 28 Apr 2025' },
    { id: 2, type: 'received', content: 'Hello! I saw your room painting request. Could you share more details about the room size?', time: '10:22 AM' },
    { id: 3, type: 'sent', content: 'Hi Kasun! It\'s a 12×14 ft bedroom. Currently light yellow walls.', time: '10:24 AM' },
    { id: 4, type: 'received', content: 'Perfect. I can do it for LKR 5,000 including primer and 2 coats. Are you OK with 28th April?', time: '10:25 AM' },
    { id: 5, type: 'sent', content: 'Yes that works! Please confirm the booking.', time: '10:26 AM' },
    { id: 6, type: 'status', content: 'Booking confirmed ✓ · Worker contact shared', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    { id: 7, type: 'received', content: 'Great! I\'ll be there at 9 AM. My number is 077-XXXXXXX', time: 'Just now' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isLoggedIn={true} />
      
      <main className="flex-grow pt-20 flex overflow-hidden h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <aside className="w-80 border-r border-gray-100 flex flex-col bg-white">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
               <h2 className="text-2xl font-black text-gray-900">Messages</h2>
               <button className="text-[#1B5E44] hover:bg-emerald-50 p-2 rounded-xl transition-colors">
                  <HiOutlinePencilAlt className="text-xl" />
               </button>
            </div>
            
            <div className="flex gap-2 mb-6">
               {['All Chats', 'Unread', 'Starring'].map((tab, i) => (
                 <button key={i} className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${i === 0 ? 'bg-emerald-50 text-[#1B5E44]' : 'text-gray-400 hover:text-gray-600'}`}>
                   {tab}
                 </button>
               ))}
            </div>
          </div>

          <div className="flex-grow overflow-y-auto">
            {chats.map(chat => (
              <div 
                key={chat.id} 
                onClick={() => setActiveChat(chat.id)}
                className={`px-6 py-5 flex gap-4 cursor-pointer transition-all border-l-4 ${activeChat === chat.id ? 'bg-emerald-50/30 border-[#1B5E44]' : 'border-transparent hover:bg-gray-50'}`}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center font-bold overflow-hidden">
                     <img src={`https://i.pravatar.cc/150?u=${chat.name}`} alt={chat.name} />
                  </div>
                  {chat.online && (
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-grow min-w-0">
                   <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-gray-900 truncate">{chat.name}</h4>
                      <span className="text-[10px] font-bold text-gray-400 whitespace-nowrap">{chat.time}</span>
                   </div>
                   <p className="text-[10px] font-bold text-[#1B5E44] uppercase tracking-widest mb-1">{chat.role}</p>
                   <p className="text-xs text-gray-400 truncate">{chat.lastMsg}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Area */}
        <section className="flex-grow flex flex-col bg-[#F8FAFC]">
          {/* Chat Header */}
          <header className="bg-white px-8 py-4 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-2xl bg-gray-900 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=KasunSilva" alt="Kasun" />
               </div>
               <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-gray-900">Kasun Silva</h3>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">• Painter</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">Online now</span>
                  </div>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <button className="p-2.5 text-gray-400 hover:text-[#1B5E44] hover:bg-emerald-50 rounded-xl transition-all">
                  <HiOutlinePhone className="text-xl" />
               </button>
               <button className="p-2.5 text-gray-400 hover:text-[#1B5E44] hover:bg-emerald-50 rounded-xl transition-all">
                  <HiOutlineVideoCamera className="text-xl" />
               </button>
               <button className="p-2.5 text-gray-400 hover:text-[#1B5E44] hover:bg-emerald-50 rounded-xl transition-all">
                  <HiOutlineDotsVertical className="text-xl" />
               </button>
            </div>
          </header>

          {/* Warning Banner */}
          <div className="bg-amber-50 px-8 py-3 flex items-center justify-between border-b border-amber-100">
             <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                <span className="w-5 h-5 bg-amber-200 rounded-full flex items-center justify-center text-[10px]">!</span>
                Worker's phone number will be shared after booking is confirmed.
             </div>
             <button className="text-xs font-black text-[#1B5E44] hover:underline uppercase tracking-widest">Book now</button>
          </div>

          {/* Messages Window */}
          <div className="flex-grow overflow-y-auto p-8 space-y-8">
            {messages.map(msg => {
              if (msg.type === 'system') {
                return (
                  <div key={msg.id} className="flex justify-center">
                    <span className="bg-white px-4 py-1.5 rounded-full border border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                       {msg.content}
                    </span>
                  </div>
                );
              }
              if (msg.type === 'status') {
                return (
                  <div key={msg.id} className="flex justify-center">
                    <div className={`px-6 py-2.5 rounded-2xl border ${msg.color} text-xs font-bold flex items-center gap-2 shadow-sm`}>
                       <div className="w-4 h-4 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[8px]">✓</div>
                       {msg.content}
                    </div>
                  </div>
                );
              }
              return (
                <div key={msg.id} className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'} gap-4`}>
                   {msg.type === 'received' && (
                     <div className="w-8 h-8 rounded-xl overflow-hidden flex-shrink-0 mt-2">
                        <img src="https://i.pravatar.cc/150?u=KasunSilva" alt="avatar" />
                     </div>
                   )}
                   <div className="max-w-[60%] space-y-1">
                      <div className={`p-5 rounded-[2rem] text-sm font-medium leading-relaxed shadow-sm ${
                        msg.type === 'sent' 
                        ? 'bg-[#1B5E44] text-white rounded-tr-none' 
                        : 'bg-white text-gray-700 rounded-tl-none'
                      }`}>
                         {msg.content}
                      </div>
                      <div className={`text-[10px] font-bold text-gray-400 uppercase tracking-widest ${msg.type === 'sent' ? 'text-right' : 'text-left'}`}>
                         {msg.time}
                         {msg.type === 'sent' && <BsCheck2All className="inline ml-1 text-emerald-500" />}
                      </div>
                   </div>
                </div>
              );
            })}
          </div>

          {/* Message Input */}
          <div className="p-8 bg-white border-t border-gray-100">
             <div className="flex items-center gap-4 bg-gray-50 rounded-[2rem] p-2 border border-transparent focus-within:border-emerald-100 focus-within:bg-white transition-all shadow-sm">
                <button className="p-3 text-gray-400 hover:text-[#1B5E44] transition-colors">
                   <HiOutlinePaperClip className="text-xl" />
                </button>
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a message..." 
                  className="flex-grow bg-transparent outline-none text-sm font-medium text-gray-700 py-3"
                />
                <button className="p-3 text-gray-400 hover:text-[#1B5E44] transition-colors">
                   <HiOutlineEmojiHappy className="text-xl" />
                </button>
                <button className="bg-[#1B5E44] text-white p-3 rounded-2xl shadow-xl shadow-emerald-900/20 hover:bg-[#005a39] transition-all transform hover:scale-105">
                   <IoMdSend className="text-xl" />
                </button>
             </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChatPage;


