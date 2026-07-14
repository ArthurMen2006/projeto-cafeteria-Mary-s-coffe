import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'
import Header from "../components/Header"
import Footer from '../components/Footer'


function HomePage({cart,setCart}) {

  return (
    <>
      <section >
        <Header cart={cart}/>
      </section>
      <section id='home'>
        <Hero/>
      </section>
      
      <section id="about">
        <About/>
      </section>
      <section id="menu">
        <Menu setCart={setCart}/>
      </section>
      <section>
        <Footer/>
      </section>
      
    </>
  )
}

export default HomePage
