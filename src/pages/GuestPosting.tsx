import { motion } from 'framer-motion'
import { FileText, Search, Send, PenTool, Globe, Link2, ArrowRight, Eye, Users, BarChart3, TrendingUp, Shield } from 'lucide-react'
import { SectionWrapper, SectionHeading, AnimatedCard, GridBackground } from '../components/UI'

const workflow = [
  { icon: Search, label: 'Research' }, { icon: Send, label: 'Outreach' }, { icon: PenTool, label: 'Content' },
  { icon: Globe, label: 'Publication' }, { icon: Link2, label: 'Backlink' }, { icon: Shield, label: 'Authority' }, { icon: TrendingUp, label: 'Growth' },
]
const features = [
  { icon: Globe, title: 'Niche-Relevant Websites', desc: 'Placements on websites closely related to your industry.' },
  { icon: Eye, title: 'Editorial Placements', desc: 'High-quality editorial content on authoritative platforms.' },
  { icon: PenTool, title: 'High-Quality Content', desc: 'Well-researched, valuable content for genuine readership.' },
  { icon: Link2, title: 'Contextual Backlinks', desc: 'Natural backlinks within relevant article context.' },
  { icon: Users, title: 'Brand Exposure', desc: 'Increased visibility in your target market.' },
  { icon: BarChart3, title: 'Referral Traffic', desc: 'Direct traffic from relevant, engaged audiences.' },
]
const campaignProcess = [
  { step: '01', title: 'Niche Analysis', desc: 'Deep analysis of your industry and competitors.' },
  { step: '02', title: 'Website Research', desc: 'Curated list of high-quality, relevant websites.' },
  { step: '03', title: 'Outreach Campaign', desc: 'Professional outreach with compelling proposals.' },
  { step: '04', title: 'Content Creation', desc: 'High-quality content meeting editorial standards.' },
  { step: '05', title: 'Publication & Links', desc: 'Content published with contextual backlinks.' },
  { step: '06', title: 'Reporting & Analysis', desc: 'Detailed report with placements and performance.' },
]

export default function GuestPosting() {
  return (
    <>
      <section id="guest-posting" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/[0.02] via-transparent to-transparent" />
        <GridBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6] text-xs font-semibold tracking-widest uppercase mb-6">
                <FileText size={14} /> Guest Posting Service
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Guest Posting That Gets Your Brand <span className="gradient-text">Noticed</span>
              </h1>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                High-quality guest post placements on relevant websites to build authority, referral traffic, and search visibility.
              </p>
              <a href="https://wa.me/923053655571" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-semibold rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] transition-all duration-300 magnetic-btn text-sm">
                Start Guest Post Campaign <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="rounded-2xl bg-[#050505] border border-white/5 p-8">
                <h3 className="text-white font-semibold mb-6">Campaign Workflow</h3>
                <div className="flex flex-wrap items-center gap-3">
                  {workflow.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-3">
                      <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.5 + i * 0.15, type: 'spring' }}
                        className="w-14 h-14 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex flex-col items-center justify-center gap-1">
                        <step.icon size={18} className="text-[#8b5cf6]" /><span className="text-[9px] text-neutral-600">{step.label}</span>
                      </motion.div>
                      {i < workflow.length - 1 && <motion.div initial={{ width: 0 }} animate={{ width: 16 }} transition={{ delay: 0.7 + i * 0.15 }} className="h-px bg-[#8b5cf6]/30 hidden sm:block" />}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Features" title="Guest Posting" highlight="Benefits" description="Strategic guest posting placements that build authority, drive traffic, and strengthen your search presence." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((f, i) => (
              <AnimatedCard key={f.title} delay={i * 0.1} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center mb-4"><f.icon size={20} className="text-[#8b5cf6]" /></div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3><p className="text-neutral-400 text-sm">{f.desc}</p>
              </AnimatedCard>
            ))}
          </div>
          <SectionHeading badge="Campaign" title="Guest Post" highlight="Campaign Process" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignProcess.map((p, i) => (
              <AnimatedCard key={p.step} delay={i * 0.1} className="p-6">
                <span className="text-[#8b5cf6] text-3xl font-bold">{p.step}</span>
                <h3 className="text-white font-semibold mt-2 mb-2">{p.title}</h3><p className="text-neutral-400 text-sm">{p.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
