import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-[#FCF8F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 1. Sculptural Image: Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl z-10">
              <img 
                src="/flowers/lavender-field.jpeg" 
                alt="TerraBloom Studio" 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Floating Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-stone-100 rounded-full flex items-center justify-center text-center p-6 border border-orange-100 hidden md:flex">
              <p className="font-cursive text-2xl text-stone-400" style={{ fontFamily: "'Pinyon Script', cursive" }}>
                Est. 2026
              </p>
            </div>
          </motion.div>

          {/* 2. Storytelling Content: Right Side */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="uppercase tracking-[0.6em] text-[10px] text-orange-800 font-bold block mb-6">
                Our Narrative
              </span>
              <h2 className="text-6xl md:text-8xl font-serif italic text-stone-800 leading-[0.8] mb-10">
                Where Nature <br /> Meets Design.
              </h2>
              <div className="space-y-6 max-w-xl">
                <p className="text-stone-600 font-light leading-relaxed text-lg italic">
                  "At TerraBloom, we don't just arrange flowers; we curate biological poetry."
                </p>
                <p className="text-stone-500 font-light leading-relaxed">
                  Founded in the heart of the 2026 floral revolution, our studio focuses on 
                  <strong> sculptural, organic, and quietly bold</strong> designs. We believe every stem 
                  tells a unique narrative, balancing texture, fragrance, and symbolism to capture 
                  meaningful moments.
                </p>
              </div>
            </motion.div>

            {/* 3. Principles / Stats Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-stone-200"
            >
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-stone-800 font-bold mb-2">Philosophy</h4>
                <p className="text-xs text-stone-400 font-light leading-snug">Sculptural Form & Architecture</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-stone-800 font-bold mb-2">Sourcing</h4>
                <p className="text-xs text-stone-400 font-light leading-snug">Farm-to-Vase Sustainability</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-[10px] uppercase tracking-widest text-stone-800 font-bold mb-2">Signature</h4>
                <p className="text-xs text-stone-400 font-light leading-snug">Bespoke Storytelling</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
