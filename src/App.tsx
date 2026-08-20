import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import LinkInsertion from './pages/LinkInsertion'
import GuestPosting from './pages/GuestPosting'
import CaseStudies from './pages/CaseStudies'
import Process from './pages/Process'
import WhyWorkWithMe from './pages/WhyWorkWithMe'
import Testimonials from './pages/Testimonials'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <LinkInsertion />
        <GuestPosting />
        <CaseStudies />
        <Process />
        <WhyWorkWithMe />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
