import React, { useRef } from 'react'

const AboutUs = ({ aboutUsRef, aboutUsRefMobile }) => {

 
    

    return (
        <>
            {/* About us mobile */}
            <main className='hiddenInDesktop' >
                <article className='about-us-mobile' ref={aboutUsRefMobile}>
                    <div className='logo-group'>
                        <img src="https://i.ibb.co/Dk7vj70/logo-fd.png" alt="black  logo" />
                        <h1>FÁCIL DIGITAL</h1>
                    </div>
                    <p>En Fácil Digital, nos especializamos en crear soluciones digitales innovadoras y personalizadas. </p>
                    <p>Estamos comprometidos con la excelencia y la satisfacción del cliente. Contáctanos y descubre cómo podemos llevar tu presencia digital al siguiente nivel.</p>
                </article>
            </main>




            {/* About us desktop */}
            <main className='hiddenInMobile about-us-desktop'  >
                <section className='text-section-right' ref={aboutUsRef}>
                    <div className='logo-group'>
                        <img src="https://i.ibb.co/Dk7vj70/logo-fd.png" alt="black  logo" />
                        <h1>FÁCIL DIGITAL</h1>
                    </div>
                    <p><strong>En Fácil Digital</strong> creemos en hacer las cosas<strong>... ¡Fácil!</strong></p>
                    <p>En Fácil Digital, nos especializamos en crear soluciones digitales innovadoras y personalizadas. </p>
                    <p>Estamos comprometidos con la excelencia y la satisfacción del cliente. Contáctanos y descubre cómo podemos llevar tu presencia digital al siguiente nivel.</p>
                </section>

                <div className='about-us-img-desktop'></div>
            </main>

        </>
    )
}

export default AboutUs