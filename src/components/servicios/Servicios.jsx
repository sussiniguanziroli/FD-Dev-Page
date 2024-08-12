import React from 'react'
import ServiciosSlider from './ServiciosSlider'

const Servicios = () => {


    return (
        <>
            {/* SERVICIOS MOBILE */}
            <main className='main-services-mobile hiddenInDesktop'>

                <h1>Nuestros Servicios</h1>
                <p>En Facil Digital, ofrecemos una amplia gama de servicios para cubrir todas tus necesidades digitales.</p>
                <strong>Explorá nuestros servicios y descubre cómo podemos ayudarte.</strong>

                <div className='mobile-slider'>
                    <ServiciosSlider />
                </div>

                <h2>¿Listo para empezar?</h2>
                <h1 className='h1-2'>CONTÁCTANOS AHORA</h1>
                <div className='contacto-ahora'>
                    <section className='section-contacts'>

                        <article className='new-icons'>
                            <div class="wrapper">
                                <a target='blank' href="https://www.facebook.com/profile.php?id=61561378967321" class="button">
                                    <div class="icon">
                                        <i class="fab fa-facebook-f"></i>
                                    </div>
                                    <span>Facebook</span>
                                </a>
                                <a target='blank' href="mailto:facildigitalcontacto@gmail.com?subject=Consulta&body=Hola!%20Quiero%20mi%20pagina%20web!" class="button">
                                    <div class="icon">
                                        <i class="fab fa-google"></i>
                                    </div>
                                    <span>Gmail</span>
                                </a>
                                <a target='blank' href="https://www.instagram.com/facildigital_arg/?hl=en" class="button">
                                    <div class="icon">
                                        <i class="fab fa-instagram"></i>
                                    </div>
                                    <span>Instagram</span>
                                </a>
                                <a target='blank' href="https://wa.me/543794606980?text=Hola!%20Quiero%20mi%20pagina%20web!" class="button">
                                    <div class="icon">
                                        <i class="fab fa-whatsapp"></i>
                                    </div>
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </article>


                    </section>
                </div>
            </main>
            {/* SERVICIOS DESKTOP */}
            <main className='main-services-desktop hiddenInMobile'>
                desktop servicios
            </main>
        </>
    )
}

export default Servicios