import { certifications, extracurricular } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Certifications.css';

export default function Certifications() {
  const ref = useScrollReveal();
  const ref2 = useScrollReveal();

  // Double the items for seamless loop
  const doubledCerts = [...certifications, ...certifications];

  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <div className="reveal" ref={ref}>
          <span className="section-label">Certifications & More</span>
          <h2 className="section-title">Credentials</h2>
        </div>

        {/* Marquee */}
        <div className="cert-marquee" aria-label="Certifications">
          <div className="cert-marquee-track">
            {doubledCerts.map((cert, i) => (
              <div key={`${cert.name}-${i}`} className="cert-card">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-name">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Activities */}
        <div className="extra-grid reveal" ref={ref2}>
          {extracurricular.map((item) => (
            <div key={item.label} className="extra-card">
              <span className="extra-label">{item.label}</span>
              <span className="extra-detail">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
