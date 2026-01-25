import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const IMAGES = [
  { url: `${BASE}flowers/hero1.jpeg`, label: 'Ethereal' },
  { url: `${BASE}flowers/hero2.jpeg`, label: 'Wild' },
  { url: `${BASE}flowers/hero3.jpeg`, label: 'Sculptural' }
];

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % IMAGES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[#FCF8F3]">    
      <motion.h2 
        style={{ y: y2 }}
        className="absolute top-1/4 left-10 text-[15vw] font-cursive opacity-5 text-stone-900 pointer-events-none"
      >
        Authentic
      </motion.h2>

      <div className="container mx-auto px-10 grid grid-cols-12 gap-4 items-center z-10">  
        <div className="col-span-12 lg:col-span-5 z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.span 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="block uppercase tracking-[0.6em] text-[10px] text-orange-800 mb-6 font-medium"
            >
              The 2026 Collection
            </motion.span>
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-5xl mt-20 md:text-8xl font-serif italic leading-[0.9] text-stone-800"
            >
              Sculpting <br /> 
              <span className="ml-12 md:ml-20">Nature's</span> <br />
              Poetry.
            </motion.h1>
            <motion.p 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="mt-10 text-stone-500 max-w-sm leading-relaxed font-light"
            >
              Moving beyond arrangements to botanical art. Sustainable, wild-sourced, and intentionally designed for the modern home.
            </motion.p>
          </motion.div>
        </div>
        
        <div className="col-span-12 lg:col-span-7 relative flex justify-end">
          <motion.div 
            style={{ y: y1 }}
            className="relative w-full max-w-xl aspect-[4/5] rounded-t-full overflow-hidden shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={index}
                src={IMAGES[index].url}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
                
            <div className="absolute inset-0 bg-gradient-to-t from-[#FCF8F3]/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="absolute -bottom-10 -left-10 md:left-0 w-48 h-64 border-[12px] border-white shadow-xl hidden md:block overflow-hidden"
          >
            <img src={`${BASE}flowers/hero4.jpeg`} className="w-full h-full object-cover" alt="Detail" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
