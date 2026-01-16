import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductsPage from "../pages/products/ProductsPage"

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProductsPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>

    )

}
export default AppRoutes