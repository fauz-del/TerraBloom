import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Collection', href: '#collection' },
    { name: 'Botanist', href: '#info' },
    { name: 'Contact', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-white/40 rounded-full px-8 py-4 border border-white/20 shadow-xl">
        <h1 className="text-3xl font-cursive text-stone-800" style={{ fontFamily: "'Pinyon Script', cursive" }}>
          TerraBloom
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.4em]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-orange-800 transition-colors">{link.name}</a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-stone-800" onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#FCF8F3] z-[110] flex flex-col p-10"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 mt-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif italic text-stone-800 border-b border-stone-200 pb-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
