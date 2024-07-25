import { Header } from './components/header/Header'
import Landing from './components/inicio/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/main.css'
import Nosotros from './components/nosotros/Nosotros';
import Contacto from './components/contacto/Contacto';
import Servicios from './components/servicios/Servicios';


function App() { 




  return (

    
    
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Landing />}  />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/servicios' element={<Servicios />}  />

      </Routes>
    
    </BrowserRouter>

  )
  
}

export default App
