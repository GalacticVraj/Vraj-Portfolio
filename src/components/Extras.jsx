import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications, extracurriculars } from '../data/portfolio';
import { ChevronDown, Award, Star } from 'lucide-react';
import './Extras.css';

export default function Extras() {
  const [openSection, setOpenSection] = useState('certifications');

  return (
    <section className="extras-section section-base" id="extras">
      <div className="extras-container">
        <div className="extras-header">
          <span className="section-tag">EXTRAS</span>
          <h2 className="extras-heading font-syne">
            Beyond<br /><span className="grad-text">the Code</span>
          </h2>
        </div>

        <div className="extras-content">
          {/* Certifications */}
          <div className="extra-acc-item">
            <button
              className={`extra-acc-btn ${openSection === 'certifications' ? 'active' : ''}`}
              onClick={() => setOpenSection(openSection === 'certifications' ? '' : 'certifications')}
            >
              <div className="extra-acc-title">
                <div className="extra-acc-icon"><Award size={20} /></div>
                <span className="font-display">CERTIFICATIONS</span>
              </div>
              <motion.div
                animate={{ rotate: openSection === 'certifications' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openSection === 'certifications' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="extra-acc-body"
                >
                  <ul className="cert-list">
                    {certifications.map((cert, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.06 }}
                        className="cert-item font-mono"
                      >
                        <span className="cert-bullet">→</span> {cert}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Extracurriculars */}
          <div className="extra-acc-item">
            <button
              className={`extra-acc-btn ${openSection === 'extracurriculars' ? 'active' : ''}`}
              onClick={() => setOpenSection(openSection === 'extracurriculars' ? '' : 'extracurriculars')}
            >
              <div className="extra-acc-title">
                <div className="extra-acc-icon"><Star size={20} /></div>
                <span className="font-display">EXTRACURRICULARS</span>
              </div>
              <motion.div
                animate={{ rotate: openSection === 'extracurriculars' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openSection === 'extracurriculars' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="extra-acc-body"
                >
                  <div className="extra-grid">
                    {extracurriculars.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.08 }}
                        className="extra-card"
                      >
                        <h4 className="extra-card-title font-display">{item.title}</h4>
                        <p className="extra-card-desc font-body">{item.details}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
