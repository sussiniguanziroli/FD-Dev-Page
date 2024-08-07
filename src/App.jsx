import React, { useState } from 'react';
import './css/main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Nosotros from './components/nosotros/Nosotros';
import Contacto from './components/contacto/Contacto';
import Servicios from './components/servicios/Servicios';
import logo from './assets/fd-logo.png';
import Compuerta from './components/Compuerta';
import Inicio from './components/inicio/Inicio';
import Footer from './components/Footer';
import Menu from './components/header/Menu'




function App() {
    const [compuertaAnimationComplete, setCompuertaAnimationComplete] = useState(false);

    return (
        <div className='app-container'>

        <BrowserRouter>
            <Menu />
            <Compuerta logo={logo} onAnimationComplete={() => setCompuertaAnimationComplete(true)} />
            <Header />
            <Routes>
                <Route path='/' element={<Inicio startAnimation={compuertaAnimationComplete} />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/servicios' element={<Servicios />} />
            </Routes>
            <Footer />

        </BrowserRouter >
        </div>

    );
}

export default App;
