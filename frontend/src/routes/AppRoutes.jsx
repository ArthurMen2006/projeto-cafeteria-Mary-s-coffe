import { Route, Routes } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import CartPage from "../pages/CartPage"


function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/cart' element={<CartPage/>}></Route>
            </Routes>
        </>

    )

}
export default AppRoutes