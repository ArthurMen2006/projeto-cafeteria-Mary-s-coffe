import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'

function HomePage() {
  return (
    <>
      <section id='home'>
        <Hero/>
      </section>
      
      <section id="about">
        <About/>
      </section>
      <section id="menu">
        <Menu/>
      </section>
      
      
    </>
  )
}

export default HomePage
