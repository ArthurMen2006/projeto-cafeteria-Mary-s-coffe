import { BrowserRouter } from 'react-router-dom'
import AppRoutes from "./routes/AppRoutes"
import Header from "./components/Header"
import HomeSlider from "./components/HomeSlider"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <HomeSlider/>
        <AppRoutes />
      </BrowserRouter>


    </>
  )

}

export default App
