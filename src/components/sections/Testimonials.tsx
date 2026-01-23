import { motion } from 'framer-motion';

const REVIEWS = [
  {
    name: "Elena Vance",
    date: "Jan 2026",
    text: "The way the Dahlia arrangement faded from deep burgundy into soft cream was unlike anything I have ever seen. Pure art.",
    rotation: -2
  },
  {
    name: "Julian Thorne",
    date: "Dec 2025",
    text: "TerraBloom transformed our event. The scent of wild jasmine and the sculptural moss elements felt like a living forest.",
    rotation: 1
  },
  {
    name: "Sophia Reed",
    date: "Nov 2025",
    text: "I love their commitment to sustainable farming. You can feel the intention in every single stem.",
    rotation: 2
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-40 bg-[#FCF8F3] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="uppercase tracking-[0.4em] text-[10px] text-orange-800">Our Stories</span>
          <h2 className="text-6xl font-serif italic mt-4 text-stone-800">Voices from the Field</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotate: review.rotation 
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: i * 0.2, 
                ease: "easeOut" 
              }}
              whileHover={{ scale: 1.02, rotate: 0 }}
              className="bg-white p-12 shadow-sm border border-stone-100 rounded-2xl relative"
            >
              {/* Decorative "Quotation Mark" Icon */}
              <div className="absolute top-8 left-8 text-orange-800/10 text-8xl font-serif pointer-events-none">
                “
              </div>
              
              <p className="relative z-10 text-lg font-serif italic text-stone-600 leading-relaxed mb-10">
                {review.text}
              </p>
              
              <div className="border-t border-stone-100 pt-6">
                <p className="uppercase tracking-[0.3em] text-[10px] text-stone-800 font-semibold">
                  {review.name}
                </p>
                <p className="text-[9px] uppercase tracking-widest text-stone-400 mt-1">
                  {review.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
