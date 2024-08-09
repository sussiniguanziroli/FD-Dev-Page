import React from 'react'
import SliderCta from './SliderCta'




const CallToAction = () => {
    return (
        <>
            {/* MOBILE DESIGN */}
            <main className='hiddenInDesktop cta-mobile'>
                <h1>Obtené el control total de tu sitio web</h1>
                <section className='slider-section'>
                    <SliderCta />
                </section>
                <button className='landing-section-button'>Quiero mi Sitio Web</button>
            </main>
            {/* DESKTOP DESIGN */}
            <main className='hiddenInMobile cta-desktop'>


                <section className='article-services-list-items'>
                    <div className='article-services-title'>
                        <h2>Obtené el control total de tu sitio web</h2>
                    </div>
                    <div className='article-services-p'>
                        <span>Entendemos lo importante que es para tu negocio la presencia digital. Con nosotros vas a obtener estos beneficios:</span>
                    </div>
                    <div className='article-services-items'>
                        <h4><ion-icon name="checkmark-circle-outline"></ion-icon> Diseño del sitio web</h4>
                        <h4><ion-icon name="checkmark-circle-outline"></ion-icon> Diseño del logo</h4>
                        <h4><ion-icon name="checkmark-circle-outline"></ion-icon> Desarrollo de la web</h4>
                        <h4><ion-icon name="checkmark-circle-outline"></ion-icon> Mantenimiento web</h4>
                        <h4><ion-icon name="checkmark-circle-outline"></ion-icon> Asesoramiento personalizado</h4>
                        <h4><ion-icon name="checkmark-circle-outline"></ion-icon> Seguimiento de procesos</h4>
                    </div>
                    <button className='article-services-button landing-section-button'>Quiero mi sitio web</button>
                </section>
                <div className='article-services-list-img'></div>


            </main>
        </>
    )
}

export default CallToAction
