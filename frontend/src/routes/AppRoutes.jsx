import { Route, Routes } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import CartPage from "../pages/CartPage"


function AppRoutes({cart, setCart}) {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage cart={cart} setCart={setCart}/>}></Route>
                <Route path='/cart' element={<CartPage cart={cart} setCart={setCart} />}></Route>
            </Routes>
        </>

    )

}
export default AppRoutes