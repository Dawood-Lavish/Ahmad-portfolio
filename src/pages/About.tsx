import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link2, Globe, Briefcase, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import { SectionWrapper, SectionHeading, AnimatedCard } from '../components/UI'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { icon: Calendar, label: 'SEO Experience', value: 8, suffix: '+' },
  { icon: Link2, label: 'Successful Link Placements', value: 2500, suffix: '+' },
  { icon: Globe, label: 'Guest Post Opportunities', value: 800, suffix: '+' },
  { icon: Briefcase, label: 'Client Projects', value: 350, suffix: '+' },
  { icon: TrendingUp, label: 'Websites Optimized', value: 200, suffix: '+' },
]

const timeline = [
  { year: '2018', title: 'Started SEO Journey', desc: 'Began learning and practicing search engine optimization fundamentals.' },
  { year: '2019', title: 'Link Building Specialization', desc: 'Focused on developing expertise in strategic link building and backlink acquisition.' },
  { year: '2020', title: 'Guest Posting Expertise', desc: 'Built a network of high-quality publishing opportunities across multiple niches.' },
  { year: '2021', title: 'International Clients', desc: 'Expanded to work with international clients across various industries and markets.' },
  { year: '2022', title: 'Full-Service SEO', desc: 'Launched comprehensive SEO services including strategy, outreach, and reporting.' },
  { year: '2023', title: 'Agency Partnerships', desc: 'Partnered with digital agencies to deliver large-scale link building campaigns.' },
  { year: '2024', title: 'Continued Growth', desc: 'Expanding services and delivering exceptional results for global SEO clients.' },
]

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="About" title="About Muhammad" highlight="Ahmad" description="A dedicated SEO professional specializing in building authority through strategic link acquisition and organic search optimization." />

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="relative rounded-2xl bg-[#0a0a0a] border border-white/5 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00e5ff]/[0.05] rounded-full blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8b5cf6]/[0.05] rounded-full blur-[60px]" />
              <div className="relative">
                <div className="mb-6 relative inline-block">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-transparent bg-gradient-to-br from-[#00e5ff] via-[#8b5cf6] to-[#f43f5e] p-[2px]">
                    <img src="/profile.png" alt="Muhammad Ahmad — Professional SEO Expert" className="w-full h-full object-cover rounded-[14px] bg-[#0a0a0a]" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#00e5ff] flex items-center justify-center"><span className="text-black text-xs font-bold">✓</span></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Muhammad Ahmad</h3>
                <p className="text-[#00e5ff] text-sm font-semibold mb-4">Professional SEO Expert</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs text-neutral-500 bg-white/5 rounded-lg border border-white/5">Link Building Specialist</span>
                  <span className="px-3 py-1 text-xs text-neutral-500 bg-white/5 rounded-lg border border-white/5">Guest Posting Expert</span>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Muhammad Ahmad is a professional SEO expert who specializes in link insertion, guest posting, backlink acquisition, website authority building, and organic search growth. With a proven track record of delivering measurable results, he helps businesses of all sizes strengthen their online presence and achieve sustainable search visibility.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <AnimatedCard key={stat.label} delay={i * 0.1} className="p-5 text-center">
                  <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center bg-[#00e5ff]/10"><stat.icon size={20} className="text-[#00e5ff]" /></div>
                  <div className="text-2xl font-bold text-white mb-1"><CountUp target={stat.value} suffix={stat.suffix} /></div>
                  <div className="text-xs text-neutral-500">{stat.label}</div>
                </AnimatedCard>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Professional <span className="gradient-text">Journey</span></h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00e5ff]/30 via-[#8b5cf6]/20 to-[#f43f5e]/10" />
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <div className="text-[#00e5ff] text-sm font-bold mb-1">{item.year}</div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-neutral-500 text-sm">{item.desc}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#00e5ff] border-2 border-black -translate-x-1/2 mt-1 z-10" />
                <div className="md:hidden pl-8">
                  <div className="text-[#00e5ff] text-sm font-bold mb-1">{item.year}</div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-neutral-500 text-sm">{item.desc}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <a href="https://wa.me/923053655571" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00e5ff] to-[#00bcd4] text-black font-semibold rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:shadow-[0_0_50px_rgba(0,229,255,0.4)] transition-all duration-300 magnetic-btn text-sm">
            Work With Me <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
