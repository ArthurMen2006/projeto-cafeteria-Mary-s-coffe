import '../styles/Hero.css'
import HeroImage from '../assents/images/heroImage.jpg'

function hero() {
    return (
        <>
            <div className='coffeimage'>
                <img src={HeroImage} className='image' />
                <div className='content'>
                    <h1>Desperte seus sentidos<br /> com o <span>melhor cafe da cidade.</span></h1>
                    <p>Descubra o sabor inigualavel dos cafes que <br /> somente a cafeteria Velvet Brew pode oferecer</p>
                </div>
            </div>
        </>
    )
}
export default hero