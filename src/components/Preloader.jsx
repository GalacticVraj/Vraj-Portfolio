import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 600);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader"
      exit={{ y: '-100vh' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="preloader-inner">
        <motion.div
          className="preloader-name font-display"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          VRAJ<span>TALATI</span>
        </motion.div>

        <div className="preloader-bar-wrap">
          <motion.div
            className="preloader-bar"
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>

        <div className="preloader-bottom">
          <span className="font-mono preloader-label">LOADING PORTFOLIO</span>
          <span className="font-mono preloader-count">{count}%</span>
        </div>
      </div>

      {/* Neo decorative shapes */}
      <div className="preloader-shape shape-1" />
      <div className="preloader-shape shape-2" />
    </motion.div>
  );
}
