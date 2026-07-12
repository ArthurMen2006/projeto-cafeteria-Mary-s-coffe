import Carrinho from "../assents/images/carrinho.png"
import '../styles/Header.css'

function header({cartCount}){
    return(
        <header >
            <h2 className="logo">Velvet Brew ☕</h2>
            <p><a href="/#home">Início</a></p>
            <p><a href='/#about'>Sobre</a></p>
            <p><a href="/#menu">Cardápio</a></p>
            <p><a href="/cart">Carrinho </a> <img src={Carrinho} alt="carrinho" /><strong>{cartCount}</strong></p>
        </header>
    )
}

export default header
