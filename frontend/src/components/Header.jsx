
import '../styles/Header.css'

function header(){
    return(
        <header >
            <h2 className="logo">Mary's Coffee ☕</h2>
            <p><a href="/#home">Início</a></p>
            <p><a href='/#about'>Sobre</a></p>
            <p><a href="/#menu">Cardápio</a></p>
            <p><a href="/cart">Carrinho</a></p>
        </header>
    )
}

export default header
