import React, { useEffect, useState } from 'react';

const Landing = ({ startAnimation }) => {
    const [landingAnimation, setLandingAnimation] = useState(false);

    useEffect(() => {
        if (startAnimation) {
            const timer = setTimeout(() => {
                setLandingAnimation(true);
            }, 0); // Comienza inmediatamente cuando `startAnimation` es `true`

            return () => clearTimeout(timer);
        }
    }, [startAnimation]);

    return (
        <main className={`landing-main ${landingAnimation ? 'fade-in' : ''}`}>
            <section className='landing-section'>
                <article className='first-article'>
                    <h2>Tu página web, sin estrés</h2>
                    <h1>DISEÑO WEB</h1>
                </article>
                <article className='second-article'>
                    <p>En <strong>Facil Digital</strong>, diseñamos y desarrollamos sitios web atractivos, creamos logos únicos y ofrecemos asesoramiento personalizado. También nos encargamos del mantenimiento de tu web, asegurando su óptimo rendimiento.</p>
                    <strong>Transforma tu presencia digital con nosotros.</strong>
                </article>
                <button className='landing-section-button'>CONOCE MÁS</button>
            </section>

            <div className='landing-image'></div>
        </main>
    );
}

export default Landing;
