import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FLOWERS = [
  { name: 'Dahlia', img: 'flowers/dahlia.jpeg', color: '#f9f5f1', season: 'Autumn' },
  { name: 'Jasmine', img: 'flowers/Jasmine.jpeg', color: '#f2f0ea', season: 'Summer' },
  { name: 'Peony', img: 'flowers/peony.jpeg', color: '#f7f1ef', season: 'Spring' },
  { name: 'Lavender', img: 'flowers/lavender1.jpeg', color: '#f0f0f5', season: 'All Year' },
  { name: 'Orchid', img: 'flowers/orchid.jpeg', color: '#fbf8f6', season: 'Winter' },
  { name: 'Tulip', img: 'flowers/tulip.jpeg', color: '#f8f4f2', season: 'Spring' },
];

export const Collection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="collection" className="py-24 md:py-32 bg-[#FCF8F3] overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="uppercase tracking-[0.6em] text-[10px] text-stone-400 font-bold mb-4 block">
              Curated Series
            </span>
            <h2 className="text-6xl md:text-8xl font-serif italic text-stone-800 leading-[0.8]">
              The Gallery
            </h2>
          </div>
          <p className="text-stone-500 font-light max-w-xs text-sm leading-relaxed">
            Our 2026 collection explores the intersection of wild growth and sculptural discipline.
          </p>
        </motion.div>
      </div>

      <div 
        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar gap-6 px-6 md:px-10 max-w-7xl mx-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {FLOWERS.map((flower, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="min-w-[85vw] md:min-w-0 snap-center group relative cursor-crosshair"
          >
    
            <div 
              className="relative h-[60vh] md:h-[600px] w-full overflow-hidden rounded-t-[12rem] rounded-b-3xl transition-all duration-1000 ease-[cubic-bezier(0.22, 1, 0.36, 1)] shadow-sm group-hover:shadow-2xl"
              style={{ backgroundColor: flower.color }}
            >
        
              <motion.img
                src={flower.img}
                alt={flower.name}
                animate={{
                  scale: hoveredIndex === i ? 1.1 : 1,
                  filter: hoveredIndex === i ? 'grayscale(0%)' : 'grayscale(100%)',
                  opacity: hoveredIndex === i ? 1 : 0.6
                }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover"
              />

              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-stone-900/20 backdrop-blur-[2px] z-10"
                  >
                    <motion.h3 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-white text-6xl md:text-7xl font-cursive"
                      style={{ fontFamily: "'Pinyon Script', cursive" }}
                    >
                      {flower.name}
                    </motion.h3>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-white/70 text-[10px] uppercase tracking-[0.4em] mt-4"
                    >
                      {flower.season} 2026
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute bottom-8 left-8 md:hidden z-20">
                 <h3 className="text-white text-4xl font-cursive" style={{ fontFamily: "'Pinyon Script', cursive" }}>
                   {flower.name}
                 </h3>
              </div>
            </div>

  
            <div className="mt-6 hidden md:block">
              <div className="flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-stone-800">
                  Ref. {i + 1}026
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-stone-800">
                  {flower.season}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-12 md:hidden">
        {FLOWERS.map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-stone-300" />
        ))}
      </div>
    </section>
  );
};
