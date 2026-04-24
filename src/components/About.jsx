import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personal } from '../data/portfolio';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section className="about-section section-base" id="about" ref={ref}>
      <div className="about-container">
        
        <div className="about-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">02. WHO I AM</span>
            <h2 className="about-heading font-syne">
              The <span className="grad-text">Mission</span>
            </h2>
          </motion.div>
          
          <motion.div
            className="about-text font-body"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>{personal.about}</p>
            <p>
              My expertise lies in rapidly building, scaling, and architecting systems—proven by multiple national hackathon victories. I don't just write code; I orchestrate solutions from ideation to production.
            </p>
          </motion.div>
        </div>

        <div className="about-right">
          <div className="about-stats">
            <motion.div 
              className="stat-card" 
              style={{ y: y1, '--stat-c': 'var(--c-purple)' }}
            >
              <div className="stat-val">4</div>
              <div className="stat-label">National Wins</div>
            </motion.div>
            
            <motion.div 
              className="stat-card" 
              style={{ y: y2, '--stat-c': 'var(--c-blue)' }}
            >
              <div className="stat-val">5+</div>
              <div className="stat-label">Hackathons</div>
            </motion.div>
            
            <motion.div 
              className="stat-card" 
              style={{ y: y1, '--stat-c': 'var(--c-pink)' }}
            >
              <div className="stat-val">2x</div>
              <div className="stat-label">NASA Nominee</div>
            </motion.div>
            
            <motion.div 
              className="stat-card" 
              style={{ y: y2, '--stat-c': 'var(--c-yellow)' }}
            >
              <div className="stat-val">1st</div>
              <div className="stat-label">Author ICCISD</div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
