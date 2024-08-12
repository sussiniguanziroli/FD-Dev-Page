import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';


const AboutUs = ({ aboutUsRef, aboutUsRefMobile }) => {


    useEffect(() => {
        Aos.init({
            duration: 900,
            offset: 240,
            once: true,
            mirror: false,
        });
    }, []);

    return (
        <>
            {/* About us mobile */}
            <main className='hiddenInDesktop about-us-mobile' ref={aboutUsRefMobile}>
                <div className='logo-group'>
                    <div className='logo-us'></div>
                    <h1>FÁCIL DIGITAL</h1>
                </div>
                <p>En Fácil Digital, nos especializamos en crear soluciones digitales innovadoras y personalizadas. </p>
                <p>Estamos comprometidos con la excelencia y la satisfacción del cliente. Contáctanos y descubre cómo podemos llevar tu presencia digital al siguiente nivel.</p>
            </main>
            {/* About us desktop */}
            <main className='hiddenInMobile about-us-desktop' ref={aboutUsRef} >
                <section data-aos="fade-right" className='text-section-right' >
                    <div className='logo-group'>
                        <img src="https://i.ibb.co/Dk7vj70/logo-fd.png" alt="black  logo" />
                        <h1>FÁCIL DIGITAL</h1>
                    </div>
                    <div className='text-group'>
                        <p><strong>En Fácil Digital</strong> creemos en hacer las cosas<strong>... ¡Fácil!</strong></p>
                        <p>En Fácil Digital, nos especializamos en crear soluciones digitales innovadoras y personalizadas. </p>
                        <p>Estamos comprometidos con la excelencia y la satisfacción del cliente. <NavLink className="NavLink" to="/contacto"> Contáctanos</NavLink> y descubre cómo podemos llevar tu presencia digital al siguiente nivel.</p>
                    </div>
                </section>

                <img data-aos="fade-left" className='about-us-img-desktop' src="https://i.ibb.co/f8sP9PF/about-us-image.png" alt="aboutus image" />
            </main>

        </>
    )
}

export default AboutUs