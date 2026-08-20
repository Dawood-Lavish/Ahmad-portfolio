import { motion } from 'framer-motion'
import { Shield, Target, Users, Lightbulb, BarChart3, Heart, MessageCircle, TrendingUp, ArrowRight, Quote } from 'lucide-react'
import { SectionWrapper, SectionHeading, AnimatedCard } from '../components/UI'

const reasons = [
  { icon: Target, title: 'Niche-Relevant Strategies', desc: 'Every campaign tailored to your specific industry.' },
  { icon: Shield, title: 'Quality-Focused Building', desc: 'Only high-quality, authoritative backlinks.' },
  { icon: MessageCircle, title: 'Transparent Communication', desc: 'Clear, regular updates on your campaign.' },
  { icon: Lightbulb, title: 'Customized Campaigns', desc: 'No cookie-cutter approaches. Built around your goals.' },
  { icon: Users, title: 'Professional Outreach', desc: 'Genuine relationships with publishers.' },
  { icon: TrendingUp, title: 'Long-Term Thinking', desc: 'Strategies for lasting results.' },
  { icon: BarChart3, title: 'Detailed Reporting', desc: 'Clear metrics and recommendations.' },
  { icon: Heart, title: 'Client-Focused', desc: 'Your success is my priority.' },
]

export default function WhyWorkWithMe() {
  return (
    <SectionWrapper id="why-me" className="bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Why Me" title="Why Choose Muhammad" highlight="Ahmad?" description="A dedicated SEO professional committed to delivering exceptional results through strategic, quality-focused link building." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {reasons.map((r, i) => (
            <AnimatedCard key={r.title} delay={i * 0.1} className="p-6">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 flex items-center justify-center mb-4"><r.icon size={22} className="text-[#00e5ff]" /></motion.div>
              <h3 className="text-white font-semibold text-sm mb-2">{r.title}</h3><p className="text-neutral-500 text-xs leading-relaxed">{r.desc}</p>
            </AnimatedCard>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-[#0a0a0a] border border-white/5 p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00e5ff]/[0.03] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8b5cf6]/[0.03] rounded-full blur-[100px]" />
          <div className="relative">
            <Quote size={48} className="text-[#00e5ff]/10 mx-auto mb-6" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              "I don't just build backlinks.<br /><span className="gradient-text">I build digital authority.</span>"
            </motion.h2>
            <p className="text-neutral-500 text-lg mb-8">— Muhammad Ahmad</p>
            <a href="https://wa.me/923053655571" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00e5ff] to-[#00bcd4] text-black font-semibold rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:shadow-[0_0_50px_rgba(0,229,255,0.4)] transition-all duration-300 magnetic-btn text-sm">
              Work With Me <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
