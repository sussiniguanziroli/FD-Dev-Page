import React from 'react'

const InitialServices = () => {
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


    <main className='initialServices-desktop hiddenInMobile'>
        desktop
    </main>
    </>
  )
}

export default InitialServices