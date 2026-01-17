import { Route, Routes } from 'react-router-dom'
import ProductsPage from "../pages/ProductsPage"

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<ProductsPage />}></Route>
            </Routes>
        </>

    )

}
export default AppRoutes