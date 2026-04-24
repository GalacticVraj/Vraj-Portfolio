import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { GraduationCap } from 'lucide-react';
import './Education.css';

export default function Education() {
  return (
    <section className="edu-section section-base" id="education">
      <div className="edu-container">
        <div className="edu-header">
          <span className="section-tag">EDUCATION</span>
          <h2 className="edu-heading font-syne">
            Academic <span className="grad-text">Foundation</span>
          </h2>
        </div>

        <motion.div
          className="edu-card"
          initial={{ opacity: 0, y: 40, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="edu-card-inner">
            <div className="edu-icon-wrap">
              <GraduationCap size={32} strokeWidth={2} />
            </div>
            <div className="edu-info">
              <h3 className="edu-institution font-display">{education.institution}</h3>
              <p className="edu-degree font-syne">{education.degree}</p>
              <div className="edu-meta">
                <span className="edu-years font-mono">{education.years}</span>
                {education.cgpa && <span className="edu-cgpa font-mono">{education.cgpa}</span>}
              </div>
            </div>
          </div>
          {/* Decorative stripe */}
          <div className="edu-stripe" />
        </motion.div>
      </div>
    </section>
  );
}
