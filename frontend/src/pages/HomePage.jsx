import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'
import Header from "../components/Header"
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <section >
        <Header/>
      </section>
      <section id='home'>
        <Hero/>
      </section>
      
      <section id="about">
        <About/>
      </section>
      <section id="menu">
        <Menu/>
      </section>
      <section>
        <Footer/>
      </section>
      
    </>
  )
}

export default HomePage
