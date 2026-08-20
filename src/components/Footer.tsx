import { motion } from 'framer-motion'
import { Mail, Linkedin, MessageCircle, Send, ArrowUpRight, Heart } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Link Insertion', href: '#link-insertion' }, { name: 'Guest Posting', href: '#guest-posting' },
    { name: 'Link Building', href: '#services' }, { name: 'Off-Page SEO', href: '#services' },
    { name: 'SEO Outreach', href: '#services' }, { name: 'Backlink Audit', href: '#services' },
  ],
  company: [
    { name: 'About', href: '#about' }, { name: 'Case Studies', href: '#case-studies' },
    { name: 'Process', href: '#process' }, { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' }, { name: 'Contact', href: '#contact' },
  ],
}

const socialLinks = [
  { name: 'Email', icon: Mail, href: 'mailto:ahsanabid717171@gmail.com', label: 'ahsanabid717171@gmail.com' },
  { name: 'Work Email', icon: Mail, href: 'mailto:ahmad@outranksaas.com', label: 'ahmad@outranksaas.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-ahsan-abid-110107327', label: 'LinkedIn Profile' },
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/923053655571', label: 'WhatsApp' },
  { name: 'Telegram', icon: Send, href: '#', label: 'Telegram' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00e5ff]/[0.01] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00e5ff] via-[#8b5cf6] to-[#f43f5e] flex items-center justify-center text-white font-bold text-xl">A</div>
              <div>
                <span className="text-white font-semibold text-lg">Muhammad Ahmad</span>
                <span className="block text-xs text-[#00e5ff] tracking-widest uppercase">Professional SEO Expert</span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md mb-6">
              Helping businesses build powerful backlink profiles, increase search visibility, strengthen domain authority, and generate sustainable organic growth through strategic SEO.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Link Insertion', 'Guest Posting', 'Link Building', 'Off-Page SEO'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs text-neutral-500 bg-white/5 rounded-lg border border-white/5">{tag}</span>
              ))}
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-neutral-500 hover:text-[#00e5ff] hover:border-[#00e5ff]/30 hover:bg-[#00e5ff]/5 transition-all duration-300">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}><a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className="text-neutral-500 text-sm hover:text-[#00e5ff] transition-colors duration-300 flex items-center gap-1 group">
                  {link.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}><a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className="text-neutral-500 text-sm hover:text-[#00e5ff] transition-colors duration-300 flex items-center gap-1 group">
                  {link.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#00e5ff]/60 text-sm font-medium italic">
              "Building Authority. Earning Trust. Growing Search Visibility."
            </motion.p>
            <p className="text-neutral-600 text-xs flex items-center gap-1">
              &copy; {new Date().getFullYear()} Muhammad Ahmad. All rights reserved. Made with <Heart size={12} className="text-[#f43f5e] fill-[#f43f5e]" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
