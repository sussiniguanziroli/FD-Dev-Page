import React, { useEffect, useState } from 'react';

const Compuerta = ({ logo, onAnimationComplete }) => {
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const [hideDisplay, setHideDisplay] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimationComplete(true);
            onAnimationComplete(); // Llama a la función para indicar que la animación está completa
        }, 2000);

        const hiddenTimer = setTimeout(() => {
            setHideDisplay(true);
        }, 2500);

        return () => {
            clearTimeout(timer);
            clearTimeout(hiddenTimer);
        };
    }, [onAnimationComplete]);

    return (
        <div className={`intro-overlay ${isAnimationComplete ? 'complete' : ''} ${hideDisplay ? 'hidden' : ''}`}>
            <div className="logo-container">
                <img src={logo} alt="Logo" className={`logo ${isAnimationComplete ? 'fade-out' : ''}`} />
            </div>
        </div>
    );
};

export default Compuerta;
