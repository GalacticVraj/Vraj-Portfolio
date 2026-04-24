import { motion } from 'framer-motion';
import { research } from '../data/portfolio';
import { FileText, ExternalLink } from 'lucide-react';
import './Research.css';

export default function Research() {
  return (
    <section className="research-section section-base" id="research">
      <div className="research-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="research-tag-row"
        >
          <span className="section-tag">02. Research</span>
        </motion.div>

        <motion.div
          className="research-card glass"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="research-card-glow" />
          
          <div className="research-top">
            <div className="research-badge">
              <FileText size={18} strokeWidth={1.5} />
              <span className="font-mono">FIRST AUTHOR — ACCEPTED</span>
            </div>
            <span className="research-date font-mono">{research.date}</span>
          </div>

          <h2 className="research-title font-syne">{research.title}</h2>
          
          <p className="research-conf font-body">{research.conference}</p>

          <div className="research-divider" />

          <div className="research-points">
            {research.points.map((p, i) => (
              <motion.div
                key={i}
                className="research-point"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="point-num font-mono">0{i + 1}</span>
                <p className="font-body">{p}</p>
              </motion.div>
            ))}
          </div>

          <div className="research-footer">
            <div className="research-keywords">
              {research.keywords.map((kw, i) => (
                <span key={i} className="research-kw font-mono">{kw}</span>
              ))}
            </div>
            <div className="research-status-badge font-mono">
              <span className="status-dot" />
              {research.status}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
