import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`mb-12 md:mb-16 ${center ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 badge-glow"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          {badge}
        </motion.div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '4rem', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`mt-4 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full ${
          center ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
