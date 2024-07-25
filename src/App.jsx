import { Header } from './components/header/Header'
import Landing from './components/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/main.css'
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Servicios from './components/Servicios';


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
