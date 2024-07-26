import React, { useState } from 'react';
import './css/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Landing from './components/inicio/Landing';
import Nosotros from './components/nosotros/Nosotros';
import Contacto from './components/contacto/Contacto';
import Servicios from './components/servicios/Servicios';
import logo from './assets/fd-logo.png';
import Compuerta from './components/Compuerta';

function App() {
    const [compuertaAnimationComplete, setCompuertaAnimationComplete] = useState(false);

    return (
        <BrowserRouter>
            <Compuerta logo={logo} onAnimationComplete={() => setCompuertaAnimationComplete(true)} />
            <Header />
            <Routes>
                <Route path='/' element={<Landing startAnimation={compuertaAnimationComplete} />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/servicios' element={<Servicios />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
