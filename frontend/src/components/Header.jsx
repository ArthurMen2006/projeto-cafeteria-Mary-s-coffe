import Carrinho from "../assents/images/carrinho.png"
import '../styles/Header.css'

function header(){
    return(
        <header >
            <h2 className="logo">Mary's Coffee ☕</h2>
            <p><a href="/#home">Início</a></p>
            <p><a href='/#about'>Sobre</a></p>
            <p><a href="/#menu">Cardápio</a></p>
            <p><a href="/cart">Carrinho </a> <img src={Carrinho} alt="carrinho" /><strong>0</strong></p>
        </header>
    )
}

export default header
