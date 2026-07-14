import Carrinho from "../assents/images/carrinho.png"
import '../styles/Header.css'
import { Link } from "react-router-dom"

function header({cart}){
    return(
        <header >
            <h2 className="logo">Velvet Brew ☕</h2>
            <p><a href="/#home">Início</a></p>
            <p><a href='/#about'>Sobre</a></p>
            <p><a href="/#menu">Cardápio</a></p>
            <p><Link to="/cart">Carrinho </Link> <img src={Carrinho} alt="carrinho" /><strong>{cart.length}</strong></p>
        </header>
    )
}

export default header
