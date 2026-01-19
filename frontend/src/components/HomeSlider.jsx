import "../styles/HomeSlider.css"
import Right from '../assents/images/Right.png'

import CoffeImage1 from '../assents/images/CoffeImage1.jpg'

function HomeSlide() {
    return (
        <>
            <div className="slider">
                <button className="right"><img src={Right} /></button>
                <button className="left"><img src={Right} /></button>  
                <div className='coffeimage'>
                    <img src={CoffeImage1} className='image' />
                    <div className='content'>
                        <h1>Desperte seus sentidos<br/> com o <span>melhor cafe da cidade.</span></h1>
                        <p>Descubra o sabor inigualavel dos cafes que <br /> somente a cafeteria Mary`s Coffe pode oferecer</p>
                    </div>
                </div>
                
            </div>
           
        </>

    )
}

export default HomeSlide