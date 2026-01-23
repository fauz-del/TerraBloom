import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import Icons

const BOTANICAL_DATA = [
  {
    name: 'King Protea',
    botanical: 'Protea cynaroides',
    meaning: 'Resilience & Diversity',
    history: 'Dating back 300 million years, these are among the oldest flowering plants on Earth. In 2026, they represent a return to primordial, structural beauty.',
    care: 'Requires direct sunlight and well-draining acidic soil. Water sparingly once established.',
    occasions: ['Architectural Spaces', 'Milestone Achievements', 'Modern Bridal'],
    price: '$95.00',
    image: '/flowers/hero1.jpeg' // Use hero1 for the protea image
  },
  {
    name: 'Midnight Dahlia',
    botanical: 'Dahlia variabilis',
    meaning: 'Inner Strength & Elegance',
    history: 'Originally discovered in the high sandy hills of Mexico, the 2026 "Midnight" variant is prized for its velvety depth and mathematical petal perfection.',
    care: 'Thrives in partial shade with consistent moisture. Deadhead regularly to encourage a continuous, dramatic bloom throughout the season.',
    occasions: ['Evening Galas', 'Romantic Gestures', 'Interior Focal Points'],
    price: '$65.00',
    image: '/flowers/dahlia.jpeg'
  },
  {
    name: 'English Peony',
    botanical: 'Paeonia officinalis',
    meaning: 'Prosperity & Bashfulness',
    history: 'A staple of royal gardens for centuries. Our 2026 Earthy Luxe collection focuses on the "unfurling" stage, highlighting the raw organic transition of the bloom.',
    care: 'Peonies prefer cool soil and plenty of space. Once cut, dip the stems in boiling water for 30 seconds to maximize their vase life.',
    occasions: ['Spring Weddings', 'Home Sanctuary', 'New Beginnings'],
    price: '$85.00',
    image: '/flowers/peony.jpeg'
  }
];

export const FlowerInfo = () => {
  const [index, setIndex] = useState(0);
  const current = BOTANICAL_DATA[index];
  const totalFlowers = BOTANICAL_DATA.length;

  const nextFlower = () => {
    setIndex((prev) => (prev + 1) % totalFlowers);
  };

  const prevFlower = () => {
    setIndex((prev) => (prev - 1 + totalFlowers) % totalFlowers);
  };

  return (
    <section id="info" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Navigation Tabs - Hidden on mobile, use arrows instead */}
        <div className="hidden md:flex gap-8 mb-16 overflow-x-auto no-scrollbar pb-4 border-b border-stone-100">
          {BOTANICAL_DATA.map((flower, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`text-[10px] uppercase tracking-[0.4em] whitespace-nowrap transition-all duration-500 ${
                index === i ? 'text-orange-800 font-bold' : 'text-stone-300 hover:text-stone-500'
              }`}
            >
              {flower.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* 1. Large Visual: Added navigation arrows here */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name} // Key changes to trigger exit/enter animation
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[60vh] lg:h-[800px] rounded-[4rem] overflow-hidden shadow-2xl"
              >
                <img src={current.image} className="w-full h-full object-cover" alt={current.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
                
                {/* Floating Price Tag */}
                <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-4 md:p-8 rounded-full shadow-xl">
                  <p className="text-1xl md:text-2xl font-serif italic text-stone-800">{current.price}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows for the Image Block */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4 z-10">
                <button onClick={prevFlower} className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition text-stone-800 focus:outline-none">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextFlower} className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition text-stone-800 focus:outline-none">
                    <ChevronRight size={24} />
                </button>
            </div>
          </div>

          {/* 2. Comprehensive Details Section */}
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name + '-info'} // Unique key for text animation
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.8 }}
                className="space-y-10"
              >
                {/* Header */}
                <div>
                  <span className="text-orange-800 font-bold tracking-[0.5em] text-[10px] uppercase block mb-4">
                    Botanist Study No. {index + 1}
                  </span>
                  <h2 className="text-4xl md:text-7xl md:text-8xl font-serif italic text-stone-800 leading-[0.8] mb-2 md:mb-4">
                    The {current.name}
                  </h2>
                  <p className="text-stone-400 italic font-light tracking-widest text-sm">
                    {current.botanical}
                  </p>
                </div>

                {/* Grid Info (Symbolism & Occasion) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-y border-stone-100">
                  <div className="space-y-3">
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-stone-800">Symbolism</h4>
                    <p className="text-stone-500 font-light leading-relaxed">{current.meaning}</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-stone-800">Best For</h4>
                    <div className="flex flex-wrap gap-2">
                      {current.occasions.map(occ => (
                        <span key={occ} className="text-[9px] px-3 py-1 border border-stone-200 rounded-full uppercase tracking-widest text-stone-400">
                          {occ}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Narrative Sections */}
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-stone-800">Historical Origin</h4>
                    <p className="text-stone-600 font-light leading-relaxed italic">
                      {current.history}
                    </p>
                  </div>
                  
                  <div className="p-8 bg-[#FCF8F3] rounded-[2rem] space-y-3 border border-orange-100/50">
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-orange-800">Care & Longevity</h4>
                    <p className="text-stone-600 text-sm font-light leading-relaxed">
                      {current.care}
                    </p>
                  </div>
                </div>

                <button className="w-full md:w-auto bg-stone-800 text-white px-12 py-5 rounded-full hover:bg-orange-800 transition-all duration-700 uppercase text-[10px] tracking-[0.4em] font-bold">
                  Acquire Arrangement
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Global Pagination Dots Below the entire section */}
        <div className="flex justify-center gap-3 mt-20">
            {BOTANICAL_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 transition-all duration-500 rounded-full ${index === i ? 'w-10 bg-orange-800 shadow-md' : 'w-2 bg-stone-200 hover:bg-stone-400'}`}
              />
            ))}
        </div>

      </div>
    </section>
  );
};
