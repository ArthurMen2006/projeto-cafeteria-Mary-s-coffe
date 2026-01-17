import { Link } from 'react-router-dom'
import './Header.css'

function Header(){
    return(
        <header >
            <h2 className="logo">Mary's Coffee ☕</h2>

            <p><Link to="/">Início</Link></p>
            <p><Link to="/sobre">Sobre</Link></p>
            <p> <Link to="/produtos">Cardápio</Link></p>
            <p><Link to="/carrinho">Carrinho</Link></p>
          

         
        </header>
    )
}

export default Header
