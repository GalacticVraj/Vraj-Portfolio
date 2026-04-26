import { motion } from 'framer-motion';

export const ShutterReveal = ({ children }) => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: '-100%' }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'var(--c-text)',
          zIndex: 10
        }}
      />
      {children}
    </div>
  );
};
