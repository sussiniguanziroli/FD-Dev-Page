import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const InitialServices = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 240,
            once: true,
            mirror: false,
        });
    }, []);


    return (
        <>
            <main className='initialServices-mobile hiddenInDesktop'>
                <h1>DISEÑO WEB</h1>
                <p>Creamos sitios web atractivos y funcionales, adaptados a las necesidades específicas de tu negocio. Desde páginas informativas hasta plataformas de comercio electrónico, garantizamos una experiencia de usuario excepcional.</p>
                <img src="https://i.ibb.co/93fMk5N/servicios-1.png" alt="serv-1" />

                <h1>ASESORAMIENTO PERSONALIZADO</h1>
                <p>Ofrecemos asesoramiento personalizado y presencial para ayudarte a tomar las mejores decisiones en tu estrategia digital y guiarte en cada paso del proceso.</p>
                <img src="https://i.ibb.co/gFRwnmp/servicios-2.png" alt="serv-2" />

                <h1>DISEÑAMOS EL LOGO PARA TU EMPRESA</h1>
                <p>Diseñamos logos únicos y memorables que reflejan la identidad y valores de tu empresa. Un buen logo es clave para establecer una marca fuerte y reconocible.</p>
                <img src="https://i.ibb.co/YZZ2xtn/servicios-3.png" alt="serv-3" />
            </main>

            {/* DESKTOP */}
            <main className='initialServices-desktop hiddenInMobile'>
                <div className='diseno-web'>
                    <div data-aos="fade-up-right">
                        <h1 className='rosa'>DISEÑO WEB</h1>
                        <p>Creamos sitios web atractivos y funcionales, adaptados a las necesidades específicas de tu negocio. Desde páginas informativas hasta plataformas de comercio electrónico, garantizamos una experiencia de usuario excepcional.</p>
                    </div>
                    <img data-aos="fade-up-left" src="https://i.ibb.co/93fMk5N/servicios-1.png" alt="diseno web" />
                </div>
                <div className='asesoramiento'>
                    <img data-aos="fade-right" src="https://i.ibb.co/gFRwnmp/servicios-2.png" alt="asesoramiento-desktop" />
                    <div data-aos="fade-left">
                        <h1>ASESORAMIENTO PERSONALIZADO</h1>
                        <p>Ofrecemos asesoramiento personalizado y presencial para ayudarte a tomar las mejores decisiones en tu estrategia digital y guiarte en cada paso del proceso.</p>
                    </div>
                </div>
                <div className='diseno-logo'>
                    <div data-aos="fade-up-right">
                        <h1 className='naranja'>DISEÑAMOS EL LOGO PARA TU EMPRESA</h1>
                        <p>Diseñamos logos únicos y memorables que reflejan la identidad y valores de tu empresa. Un buen logo es clave para establecer una marca fuerte y reconocible.</p>
                    </div>
                    <img data-aos="fade-up-left" src="https://i.ibb.co/YZZ2xtn/servicios-3.png" alt="logo diseno" />
                </div>
            </main>
        </>
    )
}

export default InitialServices