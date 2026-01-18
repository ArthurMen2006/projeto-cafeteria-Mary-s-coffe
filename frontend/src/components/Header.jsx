import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header(){
    return(
        <header >
            <h2 className="logo">Mary's Coffee ☕</h2>

            <p><Link to="/">Início</Link></p>
            <p><a href='/#about'>Sobre</a></p>
            <p> <a href="/#product">Cardápio</a></p>
            <p><Link to="/cart">Carrinho</Link></p>
          

         
        </header>
    )
}

export default Header
