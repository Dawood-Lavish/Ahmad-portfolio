import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Link2, Search, ArrowRight } from 'lucide-react'
import { SectionWrapper, SectionHeading, AnimatedCard } from '../components/UI'
import { caseStudies } from '../data/content'

function MiniChart({ data }: { data: number[] }) {
  const max = Math.max(...data)
  return (
    <div className="flex items-end gap-1 h-16">
      {data.map((v, i) => (
        <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${(v / max) * 100}%` }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="flex-1 rounded-t min-w-[3px] bg-gradient-to-t from-[#00e5ff]/30 to-[#00e5ff]/70" />
      ))}
    </div>
  )
}

export default function CaseStudies() {
  const [selected, setSelected] = useState<number | null>(null)
  const trafficData = [
    [30, 35, 42, 48, 55, 62, 70, 78, 85, 92, 98, 100],
    [25, 30, 38, 45, 52, 58, 65, 72, 80, 88, 95, 100],
    [20, 28, 35, 42, 50, 58, 65, 73, 82, 90, 96, 100],
    [22, 30, 38, 46, 54, 62, 70, 78, 86, 94, 100, 100],
    [28, 34, 40, 48, 56, 64, 72, 80, 88, 95, 100, 100],
  ]
  return (
    <SectionWrapper id="case-studies" className="bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Portfolio" title="Case Studies &" highlight="Results" description="Real campaign results demonstrating the impact of strategic SEO and link building." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <AnimatedCard key={cs.id} delay={i * 0.1} className="p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs text-[#00e5ff] bg-[#00e5ff]/10 rounded-lg font-medium">{cs.niche}</span>
                {cs.isSampleData && <span className="px-2 py-0.5 text-[10px] text-[#fbbf24] bg-[#fbbf24]/10 rounded border border-[#fbbf24]/20">Sample Data</span>}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{cs.title}</h3>
              <div className="mb-4"><span className="text-xs text-neutral-600 uppercase tracking-wider">Challenge</span><p className="text-neutral-400 text-sm mt-1">{cs.challenge}</p></div>
              <div className="mb-4"><span className="text-xs text-neutral-600 uppercase tracking-wider">Strategy</span><p className="text-neutral-400 text-sm mt-1">{cs.strategy}</p></div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/5"><Link2 size={14} className="text-[#00e5ff] mx-auto mb-1" /><div className="text-lg font-bold text-white">{cs.backlinks}</div><div className="text-[10px] text-neutral-600">Backlinks</div></div>
                <div className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/5"><TrendingUp size={14} className="text-[#8b5cf6] mx-auto mb-1" /><div className="text-lg font-bold text-white">+{cs.trafficGrowth}%</div><div className="text-[10px] text-neutral-600">Traffic</div></div>
                <div className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/5"><Search size={14} className="text-[#f43f5e] mx-auto mb-1" /><div className="text-lg font-bold text-white">{cs.keywordImprovement}</div><div className="text-[10px] text-neutral-600">Keywords</div></div>
              </div>
              <div className="mb-4"><span className="text-xs text-neutral-600 uppercase tracking-wider">Traffic Growth</span><MiniChart data={trafficData[i]} /></div>
              <div className="mt-auto pt-4 border-t border-white/5"><p className="text-neutral-400 text-xs leading-relaxed mb-3">{cs.results}</p>
                <span className="text-[#00e5ff] text-xs font-medium flex items-center gap-1 cursor-pointer hover:gap-2 transition-all">View Case Study <ArrowRight size={12} /></span>
              </div>
            </AnimatedCard>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
          <p className="text-neutral-600 text-xs mb-4">* All case study data shown above is sample/demo data for illustration purposes.</p>
          <a href="https://wa.me/923053655571" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00e5ff] to-[#00bcd4] text-black font-semibold rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:shadow-[0_0_50px_rgba(0,229,255,0.4)] transition-all duration-300 magnetic-btn text-sm">
            Discuss Your Project <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
