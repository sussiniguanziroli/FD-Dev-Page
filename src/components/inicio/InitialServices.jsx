import React from 'react'
import Footer from '../Footer'

const InitialServices = () => {



    return (
        <>
        <main className='initial-services-component'>
            <section className='service-web'>
                <div className='service-web-p'>
                    <h1>Diseño Web</h1>
                    <p>Creamos sitios web atractivos y funcionales, adaptados a las necesidades específicas de tu negocio. Desde páginas informativas hasta plataformas de comercio electrónico, garantizamos una experiencia de usuario excepcional.</p>
                </div>
                <div className='service-web-img'></div>
            </section>
            <section className='service-asesoramiento'>
                <div className='service-asesoramiento-img'></div>
                <div className='service-asesoramiento-p'>
                    <h1>Asesoramiento Personalizado</h1>
                    <p>Ofrecemos asesoramiento personalizado y presencial para ayudarte a tomar las mejores decisiones en tu estrategia digital y guiarte en cada paso del proceso.</p>
                </div>
            </section>
            <section className='service-logo'>
                <div className='service-logo-p'>
                    <h1>Diseñamos el Logo para tu Empresa</h1>
                    <p>Diseñamos logos únicos y memorables que reflejan la identidad y valores de tu empresa. Un buen logo es clave para establecer una marca fuerte y reconocible.</p>
                </div>
                <div className='service-logo-img'></div>
            </section>

            

        </main>

        <article className='article-services-list'>
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
            </article>
            <Footer />
        </>
    )
}

export default InitialServices
