import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About'; // Import here
import { Collection } from './components/sections/Collection';
import { FlowerInfo } from './components/sections/FlowerInfo';
import { Testimonials } from './components/sections/Testimonials';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#FCF8F3]">
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-10">
          <About /> {/* Place it first in the scroll flow */}
          <Collection />
          <FlowerInfo />
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
}
