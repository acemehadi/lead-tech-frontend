import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../App.css'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Team />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default Home