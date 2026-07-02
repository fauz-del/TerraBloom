import { useState } from 'react';
import { motion } from 'framer-motion';

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
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar gap-6 px-6 md:px-10 max-w-7xl mx-auto">
        {FLOWERS.map((flower, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="min-w-[85vw] md:min-w-0 snap-center group relative cursor-crosshair"
          >
            <div
              className="relative h-[60vh] md:h-[600px] w-full overflow-hidden rounded-t-[12rem] rounded-b-3xl shadow-sm group-hover:shadow-2xl transition-shadow duration-700"
              style={{ backgroundColor: flower.color }}
            >
              <img
                src={flower.img}
                alt={flower.name}
                loading="lazy"
                className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                  hoveredIndex === i
                    ? 'scale-110 grayscale-0 opacity-100'
                    : 'scale-100 grayscale opacity-60'
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/60 text-[9px] uppercase tracking-[0.4em] mb-1">{flower.season}</p>
                    <h3 className="text-white text-3xl font-serif italic">{flower.name}</h3>
                  </div>
                  <button className="bg-white text-stone-800 px-5 py-2 rounded-full text-[9px] uppercase tracking-widest font-bold hover:bg-orange-800 hover:text-white transition-colors duration-300">
                    View
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
