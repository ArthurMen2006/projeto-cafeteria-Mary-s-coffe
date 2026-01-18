import '../styles/HomePage.css'
import CoffeImage from '../assents/images/CoffeImage.jpg'

function HomePage() {
  return (
    <>
        <div className='coffeimage'>
            <img src={CoffeImage} className='image' />
        </div>
            

      <section className="about">
        <h2>Sobre nós</h2>
        <p>
          Somos uma cafeteria apaixonada por café, focada em qualidade,
          sabor e experiência.
        </p>
      </section>

      <section className="menu">
        <h2>Cardápio</h2>
        <p>Em breve nossos produtos estarão disponíveis aqui ☕</p>
      </section>
    </>
  )
}

export default HomePage
