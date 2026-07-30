import SEO from './components/SEO'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientLogos from './components/ClientLogos'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import WhiteLabel from './components/WhiteLabel'
import Industries from './components/Industries'
import Analytics from './components/Analytics'
import Flows from './components/Flows'
import MultiBranch from './components/MultiBranch'
import Testimonials from './components/Testimonials'
import Statistics from './components/Statistics'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <SEO />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <Problem />
        <Solution />
        <Flows />
        <Features />
        <WhiteLabel />
        <Industries />
        <Analytics />
        <MultiBranch />
        <Testimonials />
        <Statistics />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
