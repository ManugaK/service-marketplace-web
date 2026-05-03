import React from 'react';
import { FaApple, FaGooglePlay, FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="text-3xl font-black tracking-tighter text-white">SkilledLK</div>
            <p className="text-gray-400 font-medium leading-relaxed max-w-xs">
              Sri Lanka's leading marketplace for skilled professionals. 
              Connecting talent with opportunity since 2026.
            </p>
            <div className="flex gap-4">
              {[FaTwitter, FaLinkedin, FaInstagram, FaFacebook].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#34D399] hover:border-[#34D399] transition-all">
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-emerald-400">Platform</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Browse Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find Professionals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Post a Request</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-emerald-400">Company</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-emerald-400">Download App</h4>
            <div className="space-y-4">
              <button className="w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-2xl flex items-center gap-4 transition-all group">
                <FaApple className="text-3xl" />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Download on the</p>
                  <p className="text-lg font-black leading-none group-hover:text-white transition-colors">App Store</p>
                </div>
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-2xl flex items-center gap-4 transition-all group">
                <FaGooglePlay className="text-3xl" />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Get it on</p>
                  <p className="text-lg font-black leading-none group-hover:text-white transition-colors">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-gray-500 font-bold text-sm">© 2026 SkilledLK Marketplace. Built with ❤️ in Sri Lanka.</p>
           <div className="flex gap-8 text-xs font-bold text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Help Center</a>
              <a href="#" className="hover:text-white transition-colors">Safety Center</a>
              <a href="#" className="hover:text-white transition-colors">Community</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
