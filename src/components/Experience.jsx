import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../data/portfolio';
import { ArrowUpRight, Zap } from 'lucide-react';
import './Experience.css';

const bgColors = [
  'var(--c-pink)',
  'var(--c-blue)',
  'var(--c-green)',
  'white',
  'var(--c-yellow)'
];

const rotations = [-2, 1.5, -1, 2, -1.5];

export default function Experience() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <section className="exp-section section-base" id="experience" ref={containerRef}>
      
      {/* Crazy Marquee Background */}
      <div className="exp-bg-marquee">
        <div className="exp-bg-marquee-inner font-display">
          <span>HUSTLE. GRIND. BUILD. SCALE.</span>
          <span>HUSTLE. GRIND. BUILD. SCALE.</span>
        </div>
      </div>

      <div className="exp-container">
        <div className="exp-header">
          <span className="section-tag">03. EXPERIENCE</span>
          <h2 className="exp-heading font-syne">
            The <span className="grad-text">Journey</span>
          </h2>
        </div>

        <div className="crazy-timeline-wrapper">
          {/* Central brutalist spine */}
          <div className="crazy-spine-track">
            <motion.div 
              className="crazy-spine-fill"
              style={{ scaleY, transformOrigin: "top" }}
            />
          </div>

          <div className="crazy-nodes">
            {experience.map((item, i) => {
              const isEven = i % 2 === 0;
              const rot = rotations[i % rotations.length];
              const bgColor = bgColors[i % bgColors.length];

              return (
                <div key={i} className={`crazy-row ${isEven ? 'crazy-row-left' : 'crazy-row-right'}`}>
                  
                  {/* LEFT SIDE OR DATE */}
                  <div className={`crazy-side crazy-side-content ${isEven ? 'crazy-card-wrapper' : 'crazy-date-wrapper'}`}>
                    {isEven ? (
                      <motion.div
                        className="exp-card"
                        style={{
                          backgroundColor: bgColor,
                          '--rot': `${rot}deg`,
                          color: bgColor === 'var(--c-blue)' || bgColor === 'var(--c-pink)' ? 'white' : 'var(--c-text)'
                        }}
                        initial={{ opacity: 0, x: -50, y: 50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                      >
                        <h3 className="exp-role font-syne">{item.role}</h3>
                        <h4 className="exp-org font-body">{item.organization}</h4>
                        
                        <ul className="exp-points">
                          {item.points.map((pt, j) => (
                            <li key={j} className="exp-point font-body">
                              <span className="exp-bullet">❋</span>
                              {pt}
                            </li>
                          ))}
                        </ul>

                        {item.link && (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="exp-link font-mono"
                            style={{
                              background: 'var(--c-text)',
                              color: 'white',
                              boxShadow: `4px 4px 0px ${bgColor === 'white' ? 'var(--c-yellow)' : 'white'}`
                            }}
                          >
                            VISIT <ArrowUpRight size={16} />
                          </a>
                        )}
                      </motion.div>
                    ) : (
                      <div className="crazy-date-display font-display right-align">
                        <span className="crazy-period-box" style={{ background: bgColor, color: bgColor === 'var(--c-blue)' || bgColor === 'var(--c-pink)' ? 'white' : 'var(--c-text)' }}>
                          {item.period}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CENTER MARKER */}
                  <div className="crazy-center">
                    <motion.div 
                      className="crazy-marker"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: isEven ? 10 : -10 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                      style={{ background: bgColor }}
                    >
                      <Zap size={24} strokeWidth={3} color={bgColor === 'var(--c-blue)' || bgColor === 'var(--c-pink)' ? 'white' : 'black'} />
                    </motion.div>
                  </div>

                  {/* RIGHT SIDE OR DATE */}
                  <div className={`crazy-side crazy-side-content ${!isEven ? 'crazy-card-wrapper' : 'crazy-date-wrapper'}`}>
                    {!isEven ? (
                      <motion.div
                        className="exp-card"
                        style={{
                          backgroundColor: bgColor,
                          '--rot': `${rot}deg`,
                          color: bgColor === 'var(--c-blue)' || bgColor === 'var(--c-pink)' ? 'white' : 'var(--c-text)'
                        }}
                        initial={{ opacity: 0, x: 50, y: 50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                      >
                        <h3 className="exp-role font-syne">{item.role}</h3>
                        <h4 className="exp-org font-body">{item.organization}</h4>
                        
                        <ul className="exp-points">
                          {item.points.map((pt, j) => (
                            <li key={j} className="exp-point font-body">
                              <span className="exp-bullet">❋</span>
                              {pt}
                            </li>
                          ))}
                        </ul>

                        {item.link && (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="exp-link font-mono"
                            style={{
                              background: 'var(--c-text)',
                              color: 'white',
                              boxShadow: `4px 4px 0px ${bgColor === 'white' ? 'var(--c-yellow)' : 'white'}`
                            }}
                          >
                            VISIT <ArrowUpRight size={16} />
                          </a>
                        )}
                      </motion.div>
                    ) : (
                      <div className="crazy-date-display font-display left-align">
                        <span className="crazy-period-box" style={{ background: bgColor, color: bgColor === 'var(--c-blue)' || bgColor === 'var(--c-pink)' ? 'white' : 'var(--c-text)' }}>
                          {item.period}
                        </span>
                      </div>
                    )}
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
