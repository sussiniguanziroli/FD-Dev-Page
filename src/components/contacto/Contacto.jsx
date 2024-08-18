import React from 'react'

const Contacto = () => {
  return (
    <>
      {/* MOBILE */}
      <main className='animate__animated animate__fadeIn hiddenInDesktop  main-contacto-mobile'>
        <h1>Contacto</h1>
        <p>Estamos aquí para ayudarte! En Fácil Digital, nos encanta escuchar tus ideas y trabajar juntos para llevar tu negocio al siguiente nivel.</p>
        <strong>Ponte en contacto con nosotros a través de los siguientes medios:</strong>
        <h2>Información de Contacto</h2>
        <div className='contact-data'>
          <img src="public/icon-whatsapp.svg" alt="whatsapp" />
          <strong>+54 3794-606980</strong>
        </div>
        <div className='contact-data'>
          <img src="public/icon-instagram.svg" alt="instagram" />
          <strong>facildigital_arg</strong>
        </div>
        <div className='contact-data'>
          <img src="public/icon-facebook.svg" alt="facebook" />
          <strong>Fácil Digital</strong>
        </div>
        <div className='contact-data'>
          <img src="public/icon-mail.svg" alt="mail" />
          <strong>facildigitalcontacto@gmail.com</strong>
        </div>
        <div>

        </div>
      </main>
      {/* DESKTOP */}
      <main className='hiddenInMobile'>

      </main>
    </>
  )
}

export default Contacto