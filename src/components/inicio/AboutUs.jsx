import React from 'react'

const AboutUs = () => {
    return (
        <>
            {/* About us mobile */}
            <main className='hiddenInDesktop'>
            <article className='about-us-mobile'>
                        <div className='logo-group'>
                            <img src="https://i.ibb.co/Dk7vj70/logo-fd.png" alt="black  logo" />
                            <h1>FÁCIL DIGITAL</h1>
                        </div>
                        <p>En Fácil Digital, nos especializamos en crear soluciones digitales innovadoras y personalizadas. </p>
                        <p>Estamos comprometidos con la excelencia y la satisfacción del cliente. Contáctanos y descubre cómo podemos llevar tu presencia digital al siguiente nivel.</p>
                    </article>
            </main>




            {/* About us desktop */}
            <main className='hiddenInMobile about-us-desktop'>
                <div>aboutus desktop</div>
            </main>

        </>
    )
}

export default AboutUs