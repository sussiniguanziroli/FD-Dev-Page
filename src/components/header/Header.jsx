import React, { useEffect, useState } from 'react';
import Contacts from './Contacts';
import NavBar from './NavBar';

export const Header = ({ onAnimationComplete }) => {
    const [headerAnimation, setHeaderAnimation] = useState(false);

    useEffect(() => {
        // Inicia la animación del Header y llama a onAnimationComplete cuando termine
        const timer = setTimeout(() => {
            setHeaderAnimation(true);
            onAnimationComplete(); // Notifica que la animación ha terminado
        }, 2000); // Ajusta este tiempo según sea necesario

        return () => clearTimeout(timer);
    }, [onAnimationComplete]);

    return (
        <>
        
        <header className={`header ${headerAnimation ? 'animated' : ''}`}>
            <div className={`header-nav ${headerAnimation ? 'fade-in' : ''}`}>
                <img src="https://i.ibb.co/LYkm2bC/fd-logo.png" alt="logoFD" className={`${headerAnimation ? 'img-animate' : ''}`} />
                <NavBar />
            </div>
            <div className={`header-contacts ${headerAnimation ? 'fade-in' : ''}`}>
                <Contacts />
            </div>
        </header>
        </>
    );
};

export default Header;
