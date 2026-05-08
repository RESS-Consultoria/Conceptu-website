import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import Courses from './components/Courses'
import Themes from './components/Themes'
import Teachers from './components/Teachers'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Courses />
        <Themes />
        <Teachers />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
