import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  return (

    <>
        <AuthProvider>
         {/* Habilita o processo de rotas - como um satelite */}
         <BrowserRouter>

          <Navbar />

          <div className="min-h-[80vh]">
            {/* Routes observa a url - pega a rota - funciona como o gps - faz a listagem das rotas*/}
            <Routes>       
              {/* a rua - destino final */}
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />

            </Routes>

          </div>

          <Footer />

        </BrowserRouter>
        </AuthProvider>
    </>
  
  )
}

export default App
