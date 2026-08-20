import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, FileText, Link2, Globe, Send, Search, BarChart3, Target, ArrowRight, Check } from 'lucide-react'
import { SectionWrapper, SectionHeading, AnimatedCard } from '../components/UI'
import { services } from '../data/content'

const iconMap: Record<string, React.ElementType> = { Link, FileText, Link2, Globe, Send, Search, BarChart3, Target }

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = iconMap[service.icon] || Link
  return (
    <AnimatedCard delay={index * 0.1} className="p-6 md:p-8 cursor-pointer" hover={true}>
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="relative">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-[#00e5ff]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00e5ff]/20 transition-all duration-500">
            <Icon size={24} className="text-[#00e5ff]" />
          </div>
          <div>
            <span className="text-[#00e5ff] text-xs font-bold tracking-widest">{service.number}</span>
            <h3 className="text-xl font-bold text-white group-hover:text-[#00e5ff] transition-colors duration-300">{service.title}</h3>
          </div>
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {service.features.map((f) => (
            <span key={f} className="flex items-center gap-1 px-2.5 py-1 text-[11px] text-neutral-500 bg-white/5 rounded-md">
              <Check size={10} className="text-[#00e5ff]" />{f}
            </span>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          className="flex items-center gap-2 text-[#00e5ff] text-sm font-medium">Learn More <ArrowRight size={14} /></motion.div>
      </div>
    </AnimatedCard>
  )
}

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Services" title="Premium SEO" highlight="Services" description="Comprehensive SEO and link-building services designed to build authority, improve rankings, and drive sustainable organic growth." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (<ServiceCard key={service.id} service={service} index={i} />))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[#0a0a0a] border border-white/5">
            <p className="text-neutral-400 text-sm">Need a custom SEO strategy?</p>
            <a href="https://wa.me/923053655571" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00e5ff] to-[#00bcd4] text-black font-semibold rounded-xl text-sm hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300">
              Discuss Your Project <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
