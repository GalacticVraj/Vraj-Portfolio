import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import './Projects.css';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

function ProjectCard({ proj, i }) {
  return (
    <motion.div
      className="proj-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="proj-body">
        <h3 className="proj-title font-syne">{proj.title}</h3>
        <p className="proj-desc font-body">{proj.description}</p>
        <div className="proj-tech">
          {proj.tech.map((t, j) => (
            <span key={j} className="proj-tech-tag font-mono">{t}</span>
          ))}
        </div>
        {proj.link && (
          <a href={proj.link} target="_blank" rel="noreferrer" className="proj-link font-mono">
            {proj.link.includes('github') ? <GithubIcon size={16} /> : <ArrowUpRight size={16} />}
            {proj.link.includes('github') ? 'VIEW CODE' : 'VISIT SITE'}
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="proj-section section-base" id="projects">
      <div className="proj-container">
        <div className="proj-header">
          <span className="section-tag">PROJECTS</span>
          <h2 className="proj-heading font-syne">
            Build <span className="grad-text">Log</span>
          </h2>
        </div>

        <div className="proj-group">
          <div className="proj-group-label">
            <span className="font-display">INDUSTRIAL PROJECTS</span>
          </div>
          <div className="proj-list">
            {projects.industrial.map((proj, i) => (
              <ProjectCard key={`ind-${i}`} proj={proj} i={i} />
            ))}
          </div>
        </div>

        <div className="proj-group">
          <div className="proj-group-label">
            <BookOpen size={20} />
            <span className="font-display">ACADEMIC PROJECTS</span>
          </div>
          <div className="proj-list">
            {projects.academic.map((proj, i) => (
              <ProjectCard key={`acad-${i}`} proj={proj} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
