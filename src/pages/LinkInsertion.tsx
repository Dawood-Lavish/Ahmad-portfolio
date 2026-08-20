import { motion } from 'framer-motion'
import { Target, Search, Globe, Link2, ArrowRight, FileSearch, Eye, BarChart3, PenTool, Shield, ClipboardCheck } from 'lucide-react'
import { SectionWrapper, SectionHeading, AnimatedCard, GridBackground } from '../components/UI'

const processSteps = [
  { icon: Search, title: 'Website & Niche Research', desc: 'Identify relevant websites and niche-specific opportunities.' },
  { icon: FileSearch, title: 'Relevant Article Discovery', desc: 'Find existing articles that align with your content and keywords.' },
  { icon: Eye, title: 'Website Quality Evaluation', desc: 'Assess domain authority, traffic, and content quality.' },
  { icon: PenTool, title: 'Contextual Placement', desc: 'Naturally insert backlinks within relevant article context.' },
  { icon: Target, title: 'Anchor Text Optimization', desc: 'Strategic anchor text selection for maximum SEO impact.' },
  { icon: ClipboardCheck, title: 'Quality Verification', desc: 'Verify placement quality, indexing, and link health.' },
  { icon: BarChart3, title: 'Final Report', desc: 'Comprehensive report with all placements and metrics.' },
]

const benefits = [
  { icon: Target, title: 'Relevant Placements', desc: 'Links placed on websites closely related to your niche.' },
  { icon: Link2, title: 'Contextual Backlinks', desc: 'Links embedded naturally within article content.' },
  { icon: Globe, title: 'Niche-Focused', desc: 'Targeted placements in your specific industry.' },
  { icon: PenTool, title: 'Natural Anchor Placement', desc: 'Diverse, natural anchor text distribution.' },
  { icon: Shield, title: 'Authority-Focused', desc: 'Focus on high-authority domains for maximum impact.' },
  { icon: BarChart3, title: 'Transparent Reporting', desc: 'Full visibility into every placement and result.' },
]

export default function LinkInsertion() {
  return (
    <>
      <section id="link-insertion" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/[0.02] via-transparent to-transparent" />
        <GridBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-semibold tracking-widest uppercase mb-6">
                <Link2 size={14} /> Link Insertion Service
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Contextual Link Insertion That Builds <span className="gradient-text">Authority</span>
              </h1>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Strategic placement of contextual backlinks inside relevant existing articles and websites. I find high-quality, niche-relevant pages and naturally insert your links within genuine content for maximum SEO impact.
              </p>
              <a href="https://wa.me/923053655571" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00e5ff] to-[#00bcd4] text-black font-semibold rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:shadow-[0_0_50px_rgba(0,229,255,0.4)] transition-all duration-300 magnetic-btn text-sm">
                Start Link Insertion Campaign <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="rounded-2xl bg-[#050505] border border-white/5 p-8">
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  {['Target', 'Article', 'Link', 'Authority', 'Growth'].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.2 }}
                        className="w-10 h-10 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center text-[#00e5ff] text-xs font-bold">{i + 1}</motion.div>
                      {i < 4 && <motion.div initial={{ width: 0 }} animate={{ width: 20 }} transition={{ delay: 0.7 + i * 0.2 }} className="h-px bg-[#00e5ff]/30 hidden sm:block" />}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['Target Website', 'Relevant Article', 'Contextual Link', 'Authority Boost'].map((item, i) => (
                    <motion.div key={item} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.15 }}
                      className="p-3 rounded-xl bg-[#0a0a0a] border border-white/5 text-center">
                      <div className="text-sm font-medium text-white">{item}</div>
                      <div className="text-xs text-[#00e5ff] mt-1">Active</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Process" title="Our Link Insertion" highlight="Process" description="A systematic approach to finding, evaluating, and securing high-quality contextual backlinks." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {processSteps.map((step, i) => (
              <AnimatedCard key={step.title} delay={i * 0.1} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 flex items-center justify-center mb-4"><step.icon size={20} className="text-[#00e5ff]" /></div>
                <span className="text-[#00e5ff] text-xs font-bold">Step {String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-white font-semibold mt-1 mb-2">{step.title}</h3>
                <p className="text-neutral-400 text-sm">{step.desc}</p>
              </AnimatedCard>
            ))}
          </div>
          <SectionHeading badge="Benefits" title="Why Choose Our" highlight="Link Insertion" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimatedCard key={b.title} delay={i * 0.1} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 flex items-center justify-center mb-4"><b.icon size={20} className="text-[#00e5ff]" /></div>
                <h3 className="text-white font-semibold mb-2">{b.title}</h3>
                <p className="text-neutral-400 text-sm">{b.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
