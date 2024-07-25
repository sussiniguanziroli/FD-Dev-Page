import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {

    //to change burguer clases

    const [burger_class, setBurgerClass] = useState('burger-bar  unclicked')
    const [menu_class, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    //toggle burguer menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu slide-right visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu slide-left hidden ")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const closeMenu = () => {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu slide-left hidden ")
        setIsMenuClicked(false);
    }


  return (
    
    <div className='burger-god'>
            <nav className='nav-burger'>
                <div className='burger-menu' onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </nav>

            <div className={menu_class}>
                <div className='burger-nav-menu'>
                <ul className='burger-nav-ul'>
                    <li>
                        <NavLink onClick={closeMenu} to="/"  className='burger-nav-item' activeclassname="burger-active">Nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} to="/catalogo"  className='burger-nav-item' activeclassname="burger-active">Blud</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} to="/contacto" className='burger-nav-item' activeclassname="burger-active" >Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} to="/ubicacion"  className='burger-nav-item' activeclassname="burger-active">Ubicación</NavLink>
                    </li>
                </ul>
                </div>
            </div>

            {isMenuClicked && <div className="overlay" onClick={updateMenu}></div>}
        </div>




  )
}

export default Menu