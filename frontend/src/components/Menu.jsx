import '../styles/Menu.css'
import Espresso from '../assents/images/espresso.jpg'
import Cappucino from '../assents/images/cappucino.jpg'
import Latte from '../assents/images/latte.jpg'
import Mocha from '../assents/images/mocha.jpg'
import Croissant from '../assents/images/croissant.jpg'
import Bolo from '../assents/images/bolo.jpg'

function menu() {
    return (
        <>
            <div className='menu'>
                <h2>Nosso Cardápio</h2>
                <div className='menuList'>
                    <div className='menuCard'>
                        <img src={Espresso} alt="espresso" />
                        <h3>Café Espresso</h3>
                        <p>Café intenso e encorpado, extraído sob alta 
                            pressão para preservar o aroma e o sabor
                            marcante dos grãos selecionados.</p>
                        <span>R$ 6,00</span>
                        <button>Pedir</button>
                    </div>
                    <div className='menuCard'>
                        <img src={Cappucino} alt="cappucino" />
                        <h3>Cappucino</h3>
                        <p>Uma combinação equilibrada de espresso, 
                            leite vaporizado e espuma cremosa, finalizada 
                            com um toque suave de cacau.</p>
                        <span>R$ 9,00</span>
                        <button>Pedir</button>
                    </div>
                    <div className='menuCard'>
                        <img src={Latte} alt="latte" />
                        <h3>Latte</h3>
                        <p>Espresso delicado misturado ao leite vaporizado, 
                            criando uma bebida cremosa, leve e perfeita para
                            qualquer momento do dia.</p>
                        <span>R$ 10,00</span>
                        <button>Pedir</button>
                    </div>
                    <div className='menuCard'>
                        <img src={Mocha} alt="mocha" />
                        <h3>Mocha</h3>
                        <p>A união perfeita entre espresso, chocolate e leite
                             vaporizado, resultando em um sabor doce, 
                             intenso e aconchegante.</p>
                        <span>R$ 11,00</span>
                        <button>Pedir</button>
                    </div>
                    <div className='menuCard'>
                        <img src={Bolo} alt="bolo" />
                        <h3>Bolo de Laranja</h3>
                        <p>Bolo macio e úmido, feito com chocolate de alta qualidade, 
                            ideal para acompanhar um café especial.</p>
                        <span>R$ 7,50</span>
                        <button>Pedir</button>
                    </div>
                    <div className='menuCard'>
                        <img src={Croissant} alt="croissant" />
                        <h3>Croissant</h3>
                        <p>Massa leve e folhada, assada até atingir o ponto 
                            perfeito de crocância por fora e maciez por dentro.</p>
                        <span>R$ 8,50</span>
                        <button>Pedir</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default menu