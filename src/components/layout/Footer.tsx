import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-24 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Newsletter Section - 2026 Minimalist Focus */}
          <div className="md:col-span-5 space-y-8">
            <h3 className="text-white text-2xl font-serif italic">Join the Bloom</h3>
            <p className="text-sm font-light leading-relaxed max-w-xs">
              Subscribe for seasonal lookbooks, floral care secrets, and invitations to our 2026 garden workshops.
            </p>
            <form className="relative group max-w-sm">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-stone-700 py-3 text-sm focus:outline-none focus:border-orange-800 transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest text-orange-800 font-bold hover:text-white transition-colors">
                Join
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">Studio</h4>
            <ul className="space-y-4 text-xs font-light tracking-widest">
              <li><a href="#about" className="hover:text-white transition">The Story</a></li>
              <li><a href="#collection" className="hover:text-white transition">Current Blooms</a></li>
              <li><a href="#" className="hover:text-white transition">Workshops</a></li>
              <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">Contact</h4>
            <ul className="space-y-4 text-xs font-light tracking-widest">
              <li className="flex items-center gap-3"><MapPin size={14} className="text-orange-800"/> 122 Garden Ave, 2026 District</li>
              <li className="flex items-center gap-3"><Phone size={14} className="text-orange-800"/> +1 (555) BLOOM-77</li>
              <li className="flex items-center gap-3"><Mail size={14} className="text-orange-800"/> hello@terrabloom.com</li>
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-2 space-y-6 flex flex-col items-end md:items-start">
            <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">Follow</h4>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-800 transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-orange-800 transition"><Facebook size={20} /></a>
            </div>
          </div>
        </div>

        {/* Large Aesthetic Branding Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="border-t border-stone-800 pt-20 text-center"
        >
          <h2 className="text-[15vw] leading-none text-stone-800/50 font-cursive select-none" style={{ fontFamily: "'Pinyon Script', cursive" }}>
            TerraBloom
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-[9px] uppercase tracking-[0.5em] text-stone-600">
            <span>© 2026 TerraBloom Floral Studio</span>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-stone-400">Privacy Policy</a>
              <a href="#" className="hover:text-stone-400">Terms of Bloom</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
