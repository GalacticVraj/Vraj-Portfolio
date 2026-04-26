import { motion } from 'framer-motion';

const getPath = (y, offset = 0, amplitude = 20) => {
  // Uneven points for a more natural organic "dripping" liquid look
  return `M0 0 L100 0 L100 ${y} 
    Q85 ${y + amplitude * 1.4 + offset} 75 ${y} 
    Q60 ${y - amplitude * 0.7 + offset} 45 ${y} 
    Q30 ${y + amplitude * 1.2 + offset} 15 ${y} 
    Q5 ${y - amplitude * 0.5 + offset} 0 ${y} Z`;
};

const transition = { duration: 1.2, ease: [0.76, 0, 0.24, 1] };

const layerVariants = (yTarget, offset, delay, amplitude) => ({
  initial: { d: getPath(0, offset, amplitude), x: 0 },
  animate: { 
    d: getPath(yTarget, offset, amplitude),
    x: [0, 1, -1, 0],
    transition: { 
      d: { ...transition, delay },
      x: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    } 
  }
});

const bubbleVariants = (delay, xPos) => ({
  initial: { y: -20, x: xPos, opacity: 0, scale: 0 },
  animate: { 
    y: 120, 
    x: xPos + (Math.random() - 0.5) * 10,
    opacity: [0, 1, 1, 0],
    scale: [0.5, 1.2, 0.8, 0],
    transition: { duration: 1.3, delay, ease: [0.76, 0, 0.24, 1] }
  }
});

export const LiquidWipe = ({ isVisible }) => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, left: 0, width: '100vw', height: '100vh', 
      zIndex: 9999, pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      <svg 
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, filter: 'url(#goo)' }} 
        preserveAspectRatio="none" 
        viewBox="0 0 100 120"
      >
        <defs>
          <filter id="goo" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
          </filter>
        </defs>
        
        {/* Layer 4: Deep Shadow */}
        <motion.path
          variants={layerVariants(120, -12, 0.18, 28)}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          fill="#0033cc"
          style={{ opacity: 0.3 }}
        />

        {/* Layer 3: Main Body */}
        <motion.path
          variants={layerVariants(120, 8, 0.12, 22)}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          fill="#0055ff"
          style={{ opacity: 0.5 }}
        />
        
        {/* Layer 2: Mid Transition */}
        <motion.path
          variants={layerVariants(120, -6, 0.06, 16)}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          fill="#0099ff"
          style={{ opacity: 0.7 }}
        />
        
        {/* Layer 1: Surface highlight */}
        <motion.path
          variants={layerVariants(120, 4, 0, 10)}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          fill="#00d5ff"
        />

        {/* Highlight Glint */}
        <motion.path
          variants={layerVariants(120, 0, 0, 4)}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          fill="rgba(255,255,255,0.3)"
        />

        {/* Dynamic Bubble Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            r={1 + Math.random() * 2}
            fill="white"
            variants={bubbleVariants(i * 0.04, 10 + i * 12)}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          />
        ))}
      </svg>
    </div>
  );
};
