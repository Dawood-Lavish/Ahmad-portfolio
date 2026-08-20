import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' }, { name: 'About', href: '#about' }, { name: 'Services', href: '#services' },
  { name: 'Link Insertion', href: '#link-insertion' }, { name: 'Guest Posting', href: '#guest-posting' },
  { name: 'Case Studies', href: '#case-studies' }, { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' }, { name: 'FAQ', href: '#faq' }, { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href.substring(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 200) { setActiveSection(sections[i]); break }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home') }} className="flex items-center gap-3 group" whileHover={{ scale: 1.02 }}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00e5ff] via-[#8b5cf6] to-[#f43f5e] flex items-center justify-center text-white font-bold text-lg">A</div>
              <div className="hidden sm:block">
                <span className="text-white font-semibold text-sm tracking-wide">Muhammad Ahmad</span>
                <span className="block text-[10px] text-[#00e5ff] tracking-widest uppercase">SEO Expert</span>
              </div>
            </motion.a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className={`px-3 py-2 text-xs font-medium transition-all duration-300 rounded-lg ${activeSection === link.href.substring(1) ? 'text-[#00e5ff] bg-[#00e5ff]/10' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}>
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a href="https://wa.me/923053655571" target="_blank" rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00e5ff] to-[#00bcd4] text-black text-sm font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300 magnetic-btn">
                Get Started <ChevronRight size={14} />
              </a>
              <button onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}>
                {isMobileOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl lg:hidden">
            <button onClick={() => setIsMobileOpen(false)}
              className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all z-50"
              aria-label="Close menu">
              <X size={28} strokeWidth={2} />
            </button>
            <div className="flex flex-col h-full pt-24 px-8">
              <div className="flex-1 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                    className={`py-3 px-4 text-lg font-medium rounded-xl transition-all ${activeSection === link.href.substring(1) ? 'text-[#00e5ff] bg-[#00e5ff]/10' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}>
                    {link.name}
                  </motion.a>
                ))}
              </div>
              <motion.a href="https://wa.me/923053655571" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="mb-10 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#00e5ff] to-[#00bcd4] text-black font-semibold rounded-2xl">
                Get Started <ChevronRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
