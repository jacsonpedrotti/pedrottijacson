import { ScrollProgress } from "./components/ui"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import PromiseSection from "./components/Promise"
import Services from "./components/Services"
import Offerings from "./components/Offerings"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Transformation from "./components/Transformation"
import About from "./components/About"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"
import FloatingMenu from "./components/FloatingMenu"

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <PromiseSection />
        <Services />
        <Offerings />
        <Skills />
        <Projects />
        <Testimonials />
        <Transformation />
        <About />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingMenu />
    </>
  )
}
