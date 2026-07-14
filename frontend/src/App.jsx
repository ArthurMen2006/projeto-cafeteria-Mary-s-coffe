import { BrowserRouter } from 'react-router-dom'
import AppRoutes from "./routes/AppRoutes"
import { useState } from 'react'



function App() {
  const [cart, setCart] = useState([])
  return (
    <>
      <BrowserRouter>
  
        <AppRoutes cart={cart} setCart={setCart} />
        
      </BrowserRouter>


    </>
  )

}

export default App
