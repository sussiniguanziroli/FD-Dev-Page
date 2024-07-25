import React from 'react'
import Contacts from './Contacts';
import NavBar from './NavBar';
import Menu from './Menu';

export const Header = () => {
  return (
    <>
    <Menu />
    <header className='header'>
        
      <div className='header-nav'>
        <img src="../src/assets/fd-logo.png" alt="logoFD" />
        <NavBar />
      </div>
      <div className='header-contacts'>
        <Contacts />
      </div>
       
    </header>
    </>
  )
}
