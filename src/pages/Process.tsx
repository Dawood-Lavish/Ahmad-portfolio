import { motion } from 'framer-motion'
import { Search, Lightbulb, Target, Send, Link2, BarChart3, ArrowRight } from 'lucide-react'
import { SectionWrapper, SectionHeading, AnimatedCard } from '../components/UI'
import { processSteps } from '../data/content'

const stepIcons = [Search, Lightbulb, Target, Send, Link2, BarChart3]
const stepColors = ['#00e5ff', '#8b5cf6', '#f43f5e', '#fbbf24', '#00e5ff', '#8b5cf6']

export default function Process() {
  return (
    <SectionWrapper id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Process" title="My SEO" highlight="Process" description="A proven 6-step process that delivers consistent, measurable results for every SEO campaign." />
        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent -translate-y-1/2" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => {
              const Icon = stepIcons[i]; const color = stepColors[i]
              return (
                <AnimatedCard key={step.step} delay={i * 0.15} className="p-8 text-center relative group">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center relative" style={{ backgroundColor: `${color}15` }}>
                    <Icon size={28} style={{ color }} />
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" style={{ backgroundColor: `${color}20` }} />
                  </motion.div>
                  <span className="text-5xl font-bold" style={{ color: `${color}15` }}>{step.step}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
          <a href="https://wa.me/923053655571" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00e5ff] to-[#00bcd4] text-black font-semibold rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:shadow-[0_0_50px_rgba(0,229,255,0.4)] transition-all duration-300 magnetic-btn text-sm">
            Start Your Campaign <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
