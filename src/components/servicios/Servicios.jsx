import React from 'react'
import ServiciosSlider from './ServiciosSlider'

const Servicios = () => {


    return (
        <>
            {/* SERVICIOS MOBILE */}
            <main className='main-services-mobile hiddenInDesktop'>

                <h1>Servicios</h1>
                <p>En Facil Digital, ofrecemos una amplia gama de servicios para cubrir todas tus necesidades digitales.</p>
                <strong>Explorá nuestros servicios y descubre cómo podemos ayudarte.</strong>

                <div className='mobile-slider'>
                    <ServiciosSlider />
                </div>

                <h2>¿Listo para empezar?</h2>
                <h1>CONTÁCTANOS AHORA</h1>

            </main>
            {/* SERVICIOS DESKTOP */}
            <main className='main-services-desktop hiddenInMobile'>

            </main>
        </>
    )
}

export default Servicios