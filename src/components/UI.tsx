import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  noPadding?: boolean
}

export function SectionWrapper({ children, id, className = '', noPadding = false }: SectionWrapperProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section id={id} className={`relative ${noPadding ? '' : 'py-24 md:py-32'} ${className}`}>
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6 }}>
        {children}
      </motion.div>
    </section>
  )
}

interface SectionHeadingProps {
  badge?: string; title: string; highlight?: string; description?: string; align?: 'center' | 'left'
}

export function SectionHeading({ badge, title, highlight, description, align = 'center' }: SectionHeadingProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <div ref={ref} className={`mb-16 md:mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {badge && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
          {badge}
        </motion.div>
      )}
      <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}{' '} {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </motion.p>
      )}
    </div>
  )
}

interface AnimatedCardProps {
  children: React.ReactNode; className?: string; delay?: number; hover?: boolean
}

export function AnimatedCard({ children, className = '', delay = 0, hover = true }: AnimatedCardProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      className={`relative rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/[0.03] via-transparent to-[#8b5cf6]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[#00e5ff]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      <div className="relative">{children}</div>
    </motion.div>
  )
}

interface GlowButtonProps {
  children: React.ReactNode; href?: string; onClick?: () => void; variant?: 'primary' | 'secondary'; className?: string; icon?: React.ReactNode
}

export function GlowButton({ children, href, onClick, variant = 'primary', className = '', icon }: GlowButtonProps) {
  const base = variant === 'primary'
    ? 'bg-gradient-to-r from-[#00e5ff] to-[#00bcd4] text-black font-semibold shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:shadow-[0_0_40px_rgba(0,229,255,0.4)]'
    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
  const classes = `inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm transition-all duration-300 magnetic-btn ${base} ${className}`
  if (href) return <a href={href} className={classes}>{children}{icon}</a>
  return <button onClick={onClick} className={classes}>{children}{icon}</button>
}

export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  )
}

export function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-[#00e5ff]/20"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
        />
      ))}
    </div>
  )
}
