import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experience, research } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  const containerRef = useRef(null);
  
  const items = [
    {
      role: "Accepted Research",
      company: research.conference,
      period: research.date,
      points: research.points,
      type: "Research"
    },
    ...experience.map(exp => ({
      role: exp.role,
      company: exp.organization,
      period: exp.period,
      points: exp.points,
      type: "Experience"
    }))
  ];

  return (
    <section className="exp-stack-section">
      <div className="watermark-bg font-display">PATHWAY</div>
      
      <div className="stack-container">
        {items.map((item, i) => (
          <Card 
            key={i} 
            item={item} 
            index={i} 
            total={items.length} 
          />
        ))}
      </div>
    </section>
  );
}

function Card({ item, index, total }) {
  return (
    <div 
      className="stack-card"
      style={{ 
        zIndex: index,
        top: `${10 + (index * 2)}vh` // Each card sticks slightly lower than the last to show a "stack" edge
      }}
    >
      <motion.div 
        className="card-inner"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="card-header">
          <div className="card-meta">
            <span className="card-type font-body">{item.type}</span>
            <span className="card-period font-serif italic">{item.period}</span>
          </div>
          <h3 className="card-title font-display">{item.role}</h3>
          <p className="card-org font-body">{item.company}</p>
        </div>
        
        <div className="card-body font-body">
          {item.points.map((point, idx) => (
            <p key={idx} className="card-point">
              <span className="bullet">/</span> {point}
            </p>
          ))}
        </div>
        
        <div className="card-index font-display">0{index + 1}</div>
      </motion.div>
    </div>
  );
}
