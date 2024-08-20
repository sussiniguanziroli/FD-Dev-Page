import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>Página no encontrada</h1>
            <strong>Navega hacia los siguientes links:</strong>
            <nav className='navbar-not-found'>


                <div className='nav-div'>
                    <NavLink className="nav-button" activeclassname="active" to="/" >Inicio</NavLink>
                </div>
                <div className='nav-div'>
                    <NavLink className="nav-button" activeclassname="active" to="/servicios" >Servicios</NavLink>
                </div>
                <div className='nav-div'>
                    <NavLink className="nav-button" activeclassname="active" to="/nosotros" >Nosotros</NavLink>
                </div>
                <div className='nav-div'>
                    <NavLink className="nav-button" activeclassname="active" to="/contacto">Contacto</NavLink>
                </div>


            </nav>
        </div>
    )
}

export default NotFound