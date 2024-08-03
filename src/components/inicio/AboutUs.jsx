import React, { useRef, useEffect, useState } from 'react';

const AboutUs = () => {
    const aboutUsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Ajusta el umbral según sea necesario
        );

        if (aboutUsRef.current) {
            observer.observe(aboutUsRef.current);
        }

        return () => {
            if (aboutUsRef.current) {
                observer.unobserve(aboutUsRef.current);
            }
        };
    }, []);

    return (
        <section className={`aboutus-section ${isVisible ? 'animate' : ''}`} ref={aboutUsRef}>
            <div className='aboutus-section-title'>
                <h2 className={isVisible ? 'animate-title' : ''}>Fácil Digital:</h2>
                <h3 className={isVisible ? 'animate-title' : ''}>Tu página web, sin estrés</h3>
            </div>
            <article className='aboutus-section-info'>
                <div className='aboutus-section-ps'>
                    <p className={isVisible ? 'p1' : 'animate-text'}>En <strong>Fácil Digital</strong>, nos especializamos en crear soluciones digitales innovadoras y personalizadas.</p>
                    <p className={isVisible ? 'p2' : 'animate-text' }>Estamos comprometidos con la excelencia y la satisfacción del cliente. <strong><a className='text-link' href="#">Contáctanos</a></strong> y descubre cómo podemos llevar tu presencia digital al siguiente nivel.</p>
                </div>
                <div className={`aboutus-section-gif ${isVisible ? 'animate-gif' : ''}`}></div>
            </article>
        </section>
    );
};

export default AboutUs;
