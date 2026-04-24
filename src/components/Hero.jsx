import { motion } from 'framer-motion';
import { personal } from '../data/portfolio';
import { Mail } from 'lucide-react';
import './Hero.css';

// Simple inline SVG icons for brands (lucide-react doesn't have brand icons)
const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const charVariants = {
  hidden: { y: 120, rotate: 8 },
  visible: (i) => ({
    y: 0, rotate: 0,
    transition: { duration: 0.7, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function Hero() {
  const firstName = "VRAJ";
  const lastName = "TALATI";

  return (
    <section className="hero-section section-base" id="home">
      <div className="hero-bg">
        <div className="neo-shape neo-circle" />
        <div className="neo-shape neo-square" />
      </div>

      <div className="hero-inner">
        <div className="hero-topbar">
          <span className="hero-topbar-label font-mono">PORTFOLIO © 2026</span>
        </div>

        <div className="hero-name-block">
          <div className="name-row">
            <div className="name-overflow">
              {firstName.split('').map((char, i) => (
                <motion.span key={`f-${i}`} className="name-char font-display" custom={i} initial="hidden" animate="visible" variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="name-row name-row--indent">
            <div className="name-overflow">
              {lastName.split('').map((char, i) => (
                <motion.span key={`l-${i}`} className="name-char font-display" custom={i + firstName.length} initial="hidden" animate="visible" variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <motion.div className="hero-subtitle-block" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7 }}>
          <span className="hero-badge font-syne">{personal.title}</span>
        </motion.div>

        <motion.div className="hero-footer" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
          <div className="hero-footer-content">
            <div className="hero-status">
              <span className="status-dot"></span>
              <span className="font-mono">AVAILABLE FOR INNOVATION</span>
            </div>
            
            <div className="hero-socials">
              <span className="socials-label font-syne">CONNECT →</span>
              <a href={`mailto:${personal.email}`} className="hero-social-link" aria-label="Email"><Mail size={22} /></a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub"><GithubIcon /></a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
