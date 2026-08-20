import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, TrendingUp, Link2, Globe, Search, BarChart3, ChevronRight, Sparkles, Shield, Zap } from 'lucide-react'
import { GridBackground, FloatingParticles } from '../components/UI'

function DashboardCard({ icon: Icon, label, value, trend, color, delay }: {
  icon: React.ElementType; label: string; value: string; trend: string; color: string; delay: number
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative p-4 rounded-xl bg-[#0a0a0a]/80 border border-white/5 backdrop-blur-sm group hover:border-white/10 transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}><Icon size={16} /></div>
        <span className="text-neutral-500 text-xs">{label}</span>
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="flex items-center gap-1 text-xs">
        <TrendingUp size={12} className="text-[#00e5ff]" />
        <span className="text-[#00e5ff]">{trend}</span>
        <span className="text-neutral-600">vs last month</span>
      </div>
    </motion.div>
  )
}

function FloatingSEOElement({ icon: Icon, label, delay, x, y }: {
  icon: React.ElementType; label: string; delay: number; x: string; y: string
}) {
  return (
    <motion.div className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0a0a0a]/60 border border-white/5 backdrop-blur-sm"
      style={{ left: x, top: y }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay, duration: 0.8 }}>
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: delay * 2 }}>
        <Icon size={14} className="text-[#00e5ff]/60" />
      </motion.div>
      <span className="text-neutral-500 text-[10px] whitespace-nowrap">{label}</span>
    </motion.div>
  )
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({ x: (e.clientX - rect.left) / rect.width - 0.5, y: (e.clientY - rect.top) / rect.height - 0.5 })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollTo = (id: string) => { document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/[0.02] via-transparent to-transparent" />
      <GridBackground /><FloatingParticles />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e5ff]/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6]/[0.03] rounded-full blur-[120px]" />

      <FloatingSEOElement icon={Search} label="Google Rankings" delay={0.5} x="5%" y="20%" />
      <FloatingSEOElement icon={Link2} label="Backlinks: 2,500+" delay={0.7} x="85%" y="15%" />
      <FloatingSEOElement icon={Globe} label="Domain Authority: 65" delay={0.9} x="80%" y="70%" />
      <FloatingSEOElement icon={BarChart3} label="Traffic: +340%" delay={1.1} x="8%" y="75%" />
      <FloatingSEOElement icon={TrendingUp} label="Keyword Rankings: 500+" delay={1.3} x="15%" y="50%" />

      <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-semibold tracking-widest uppercase mb-8">
              <Sparkles size={14} /> Professional SEO Expert
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Muhammad<br /><span className="gradient-text">Ahmad</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-neutral-400 mb-2">Professional SEO Expert</motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-2 mb-4">
              {['Link Insertion', 'Guest Posting', 'Link Building', 'Organic Growth'].map((item) => (
                <span key={item} className="px-3 py-1.5 text-xs text-neutral-500 bg-white/5 rounded-lg border border-white/5">{item}</span>
              ))}
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="text-neutral-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              I help businesses build powerful backlink profiles, increase search visibility, strengthen domain authority, and generate sustainable organic growth through strategic SEO and high-quality link building.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-4 mb-10">
              <a href="https://wa.me/923053655571" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00e5ff] to-[#00bcd4] text-black font-semibold rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:shadow-[0_0_50px_rgba(0,229,255,0.4)] transition-all duration-300 magnetic-btn text-sm">
                Get a Free SEO Consultation <ArrowRight size={16} />
              </a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 magnetic-btn text-sm">
                View My Services <ChevronRight size={16} />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
              {[{ icon: Shield, text: 'SEO Strategy' }, { icon: Link2, text: 'Link Building' }, { icon: Globe, text: 'Guest Posting' }, { icon: Zap, text: 'Digital Authority' }].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5"><item.icon size={12} className="text-[#00e5ff]/50" />{item.text}</div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50, rotateY: -10 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            style={{ transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)` }} className="relative">
            <div className="relative rounded-2xl bg-[#050505] border border-white/5 p-6 md:p-8 glow-primary">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#f43f5e]" />
                <div className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                <div className="w-3 h-3 rounded-full bg-[#00e5ff]" />
                <span className="ml-2 text-xs text-neutral-600">SEO Dashboard</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <DashboardCard icon={TrendingUp} label="Organic Traffic" value="24,580" trend="+34.2%" color="bg-[#00e5ff]/10 text-[#00e5ff]" delay={0.6} />
                <DashboardCard icon={Link2} label="Backlinks" value="2,847" trend="+18.7%" color="bg-[#8b5cf6]/10 text-[#8b5cf6]" delay={0.7} />
                <DashboardCard icon={Globe} label="Domain Authority" value="65" trend="+12.3%" color="bg-[#f43f5e]/10 text-[#f43f5e]" delay={0.8} />
                <DashboardCard icon={Search} label="Keyword Rankings" value="534" trend="+22.1%" color="bg-[#fbbf24]/10 text-[#fbbf24]" delay={0.9} />
              </div>
              <div className="rounded-xl bg-[#0a0a0a] border border-white/5 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-neutral-500">Traffic Growth</span>
                  <span className="text-xs text-[#00e5ff]">+340%</span>
                </div>
                <div className="flex items-end gap-1 h-20">
                  {[40, 55, 45, 70, 65, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
                      className="flex-1 rounded-t min-w-[4px]"
                      style={{ background: `linear-gradient(to top, rgba(0,229,255,0.3), rgba(0,229,255,${0.4 + (h / 250)}))` }} />
                  ))}
                </div>
                <div className="flex justify-between mt-2"><span className="text-[10px] text-neutral-700">Jan</span><span className="text-[10px] text-neutral-700">Dec</span></div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-neutral-600">
                <div className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />Live data visualization
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
