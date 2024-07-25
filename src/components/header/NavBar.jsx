import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (

    <nav className='navbar'>
        
        
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
    
    
  )
}

export default NavBar