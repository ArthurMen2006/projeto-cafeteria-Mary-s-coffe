import { BrowserRouter } from 'react-router-dom'
import AppRoutes from "./routes/AppRoutes"
import Header from "./components/Header"
import About from './components/About'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        
      </BrowserRouter>


    </>
  )

}

export default App
