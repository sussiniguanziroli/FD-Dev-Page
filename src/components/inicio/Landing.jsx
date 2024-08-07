import React, { useEffect, useState, useRef } from 'react';




const Landing = ({ startAnimation }) => {
    const [landingAnimation, setLandingAnimation] = useState(false);
    const aboutUsRef = useRef(null); // Crea una referencia para AboutUs

    useEffect(() => {
        if (startAnimation) {
            const timer = setTimeout(() => {
                setLandingAnimation(true);
            }, 0); // Comienza inmediatamente cuando `startAnimation` es `true`

            return () => clearTimeout(timer);
        }
    }, [startAnimation]);

    const scrollToAboutUs = () => {
        if (aboutUsRef.current) {
            aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Landing in Mobile */}
            <main className='landing-mobile hiddenInDesktop'>
                <div>
                    <article className='first-article-mobile'>
                        <h1>DISEÑO WEB</h1>
                        <h2>Tu página web, sin estrés</h2>
                        <p>En <strong>Fácil Digital</strong>, diseñamos y desarrollamos sitios web atractivos, creamos logos únicos y ofrecemos asesoramiento personalizado.</p>
                        <img src="https://i.ibb.co/S57rYqG/image-inicio.png" alt="landing-mobile" />
                        <button className='landing-section-button' onClick={scrollToAboutUs}>CONOCE MÁS</button>
                    </article>
                    <article className='about-us-mobile'>
                        <div className='logo-group'>
                            <img src="https://i.ibb.co/Dk7vj70/logo-fd.png" alt="black  logo" />
                            <h1>FÁCIL DIGITAL</h1>
                        </div>
                        <p>En Fácil Digital, nos especializamos en crear soluciones digitales innovadoras y personalizadas. </p>
                        <p>Estamos comprometidos con la excelencia y la satisfacción del cliente. Contáctanos y descubre cómo podemos llevar tu presencia digital al siguiente nivel.</p>
                    </article>
                </div>
            </main>
            {/* Landing in Desktop */}
            <main className={`hiddenInMobile landing-main ${landingAnimation ? 'fade-in' : ''}`}>
                <section className='landing-section'>
                    <article className='first-article'>
                        <h2>Tu página web, sin estrés</h2>
                        <h1>DISEÑO WEB</h1>
                        <p>En <strong>Fácil Digital</strong>, diseñamos y desarrollamos sitios web atractivos, creamos logos únicos y ofrecemos asesoramiento personalizado. También nos encargamos del mantenimiento de tu web, asegurando su óptimo rendimiento.</p>
                        <strong>Transforma tu presencia digital con nosotros.</strong>
                        <button className='landing-section-button' onClick={scrollToAboutUs}>CONOCE MÁS</button>
                    </article>

                </section>

                <div className='landing-image'></div>
            </main>
        </>

    );
}

export default Landing;
