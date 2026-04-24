import { useEffect, useRef } from 'react';
import './GridBackground.css';

export default function GridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let dots = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    }

    function initDots() {
      dots = [];
      const spacing = 80;
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          dots.push({
            x: x + (Math.random() - 0.5) * 20,
            y: y + (Math.random() - 0.5) * 20,
            baseX: x,
            baseY: y,
            radius: Math.random() * 1.2 + 0.3,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.003 + 0.001,
          });
        }
      }
    }

    let mouseX = -1000, mouseY = -1000;
    function handleMouse(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function draw(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dotColor = 'rgba(102, 155, 188, '; // Marble accent

      for (const dot of dots) {
        dot.x = dot.baseX + Math.sin(time * dot.speed + dot.phase) * 8;
        dot.y = dot.baseY + Math.cos(time * dot.speed + dot.phase * 0.7) * 8;

        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        let alpha = 0.12;
        let r = dot.radius;

        if (dist < maxDist) {
          const factor = 1 - dist / maxDist;
          alpha = 0.12 + factor * 0.5;
          r = dot.radius + factor * 2;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, r, 0, Math.PI * 2);
        ctx.fillStyle = dotColor + alpha + ')';
        ctx.fill();
      }

      // Draw subtle connections near mouse
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        const dxa = mouseX - a.x;
        const dya = mouseY - a.y;
        const distA = Math.sqrt(dxa * dxa + dya * dya);
        if (distA > 150) continue;

        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dxb = mouseX - b.x;
          const dyb = mouseY - b.y;
          const distB = Math.sqrt(dxb * dxb + dyb * dyb);
          if (distB > 150) continue;

          const dab = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
          if (dab < 120) {
            const lineAlpha = (1 - dab / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = dotColor + lineAlpha + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouse);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="grid-bg" aria-hidden="true" />;
}
