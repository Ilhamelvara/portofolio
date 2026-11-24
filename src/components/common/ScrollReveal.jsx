import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  amount = 0.15,
}) {
  const directionVariants = {
    up: { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -35 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -35 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 35 }, visible: { opacity: 1, x: 0 } },
    none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
  };

  const variants = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: amount }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
