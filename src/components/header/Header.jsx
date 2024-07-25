import React from 'react'
import Contacts from './Contacts';
import NavBar from './NavBar';

export const Header = () => {
  return (
    <>
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
