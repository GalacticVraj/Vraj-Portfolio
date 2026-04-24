import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { BrainCircuit, Code2, Globe, Wrench } from 'lucide-react';
import './Skills.css';

const categories = [
  {
    id: 'mlDl',
    title: 'ML & Deep Learning',
    icon: BrainCircuit,
    items: skills.mlDl,
    accent: 'var(--c-pink)'
  },
  {
    id: 'programming',
    title: 'Programming & Data',
    icon: Code2,
    items: skills.programming,
    accent: 'var(--c-blue)'
  },
  {
    id: 'webDev',
    title: 'Web Development',
    icon: Globe,
    items: skills.webDev,
    accent: 'var(--c-green)'
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Wrench,
    items: skills.tools,
    accent: 'var(--c-orange)'
  }
];

export default function Skills() {
  return (
    <section className="skills-section section-base" id="skills">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <span className="section-tag">SKILLS</span>
          <h2 className="skills-heading font-syne">
            Tech<br />
            <span className="grad-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                className="skill-card"
                initial={{ opacity: 0, y: 40, rotate: idx % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon-wrap" style={{ background: cat.accent }}>
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="skill-cat-title font-display">{cat.title}</h3>
                </div>
                <div className="skill-items">
                  {cat.items.map((item, i) => (
                    <span key={i} className="skill-item font-mono">{item}</span>
                  ))}
                </div>
                <div className="skill-card-line" style={{ background: cat.accent }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
