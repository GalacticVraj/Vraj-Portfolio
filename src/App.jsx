import { ReactLenis } from 'lenis/react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Extras from './components/Extras';
import Contact from './components/Contact';
import Preloader from './components/Preloader';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Achievements />
            <Projects />
            <Experience />
            <Skills />
            <Extras />
            <Contact />
          </main>
        </>
      )}
    </ReactLenis>
  );
}
