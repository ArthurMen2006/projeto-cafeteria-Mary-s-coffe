import '../styles/Menu.css'
import Espresso from '../assents/images/espresso.jpg'
import Cappucino from '../assents/images/cappucino.jpg'
import Latte from '../assents/images/latte.jpg'
import Mocha from '../assents/images/mocha.jpg'
import Croissant from '../assents/images/croissant.jpg'
import Bolo from '../assents/images/bolo.jpg'
import { useState, useEffect } from 'react'
import { getAllProducts } from '../services/ProductsService'

const productImages = {
    "Cafe Expresso": Espresso,
    "Cappucino": Cappucino,
    "Latte": Latte,
    "Mocha": Mocha,
    "Croissant": Croissant,
    "Bolo de Laranja": Bolo
}

function Menu({setCart}) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const data = await getAllProducts()
            setProducts(data)
        }
        fetchProducts()
    }, [])

    function AddToCard(product){
        setCart((i)=> [...i, product])
    }

    return (
        <>
            <div className='menu'>
                <h2>Nosso Cardápio</h2>
                <div className='menuList'>
                    {products.map((product) => (
                        <div className='menuCard' key={product.id}>
                            <img src={productImages[product.name]} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <span>R$ {Number(product.price).toFixed(2)}</span>
                            <button onClick={() => AddToCard(product)}>Pedir</button>
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    )
}

export default Menu