import { motion } from 'framer-motion';
import { achievements, research } from '../data/portfolio';
import { Trophy, Star, Sparkles, Globe, BookOpen } from 'lucide-react';
import './Achievements.css';

const icons = [Trophy, Trophy, Star, Star, Globe];

export default function Achievements() {
  return (
    <section className="ach-section section-base" id="achievements">
      <div className="ach-container">
        <div className="ach-header">
          <span className="section-tag">MILESTONES</span>
          <h2 className="ach-heading font-syne">
            Podium <span className="grad-text">Finishes</span>
          </h2>
        </div>

        {/* Achievement Cards */}
        <div className="ach-grid">
          {achievements.map((ach, i) => {
            const Icon = icons[i] || Trophy;
            return (
              <motion.div
                key={i}
                className="ach-card"
                initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {ach.image && (
                  <div className="ach-img-wrap">
                    <img 
                      src={`${import.meta.env.BASE_URL}${ach.image}`} 
                      alt={ach.title} 
                      className="ach-img" 
                      loading="lazy" 
                    />
                  </div>
                )}
                <div className="ach-body">
                  <div className="ach-top">
                    <div className="ach-icon-wrap">
                      <Icon size={20} strokeWidth={2.5} />
                    </div>
                    <span className="ach-year font-mono">{ach.year}</span>
                  </div>
                  <div>
                    <span className="ach-award font-display">{ach.award}</span>
                    <h3 className="ach-title font-syne">{ach.title}</h3>
                  </div>
                  <p className="ach-desc font-body">{ach.details}</p>
                  {ach.link && (
                    <a href={ach.link} target="_blank" rel="noreferrer" className="ach-link font-mono">
                      VIEW REPO →
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Research Paper Card */}
        <motion.div
          className="research-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="research-card-top">
            <div className="rct-left">
              <div className="research-icon-wrap">
                <BookOpen size={24} />
              </div>
              <span className="research-type font-mono">RESEARCH PAPER</span>
            </div>
            <span className="font-mono research-status">{research.status}</span>
          </div>
          <h3 className="research-title font-syne">{research.title}</h3>
          <p className="research-conf font-body">{research.conference} — {research.date}</p>
          <ul className="research-points">
            {research.points.map((pt, i) => (
              <li key={i} className="font-body">{pt}</li>
            ))}
          </ul>
          <div className="research-keywords">
            {research.keywords.map((kw, i) => (
              <span key={i} className="research-kw font-mono">{kw}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
