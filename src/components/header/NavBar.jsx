import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav className='navbar'>
      <NavLink className="nav-button" activeclassname="active" to="/" >Inicio</NavLink>
      <NavLink className="nav-button" activeclassname="active" to="/servicios" >Servicios</NavLink>
      <NavLink className="nav-button" activeclassname="active" to="/nosotros" >Nosotros</NavLink>
      <NavLink className="nav-button" activeclassname="active" to="/contacto" >Contacto</NavLink>
    </nav>
    </>
  )
}

export default NavBar