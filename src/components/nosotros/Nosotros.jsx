import React from 'react'
import NosotrosSlider from './NosotrosSlider'

const Nosotros = () => {
    return (
        <>
            {/* MOBILE */}
            <main className='hiddenInDesktop animate__animated animate__fadeIn sobreNosotros-mobile'>
                <h1>Sobre Nosotros</h1>
                <p>Conoce al equipo detrás de Fácil Digital. <strong>Somos una startup apasionada por el diseño y desarrollo web</strong>, comprometida con ofrecer soluciones innovadoras y personalizadas a cada cliente.

                </p>
                <strong>Nuestra misión es ayudarte a destacar en el entorno digital con creatividad y profesionalismo.</strong>
                <div className='mobile-slider'>
                    <NosotrosSlider />
                </div>
                <h2>Nosotros: Fácil Digital</h2>
                <div className='caja-info-staff'>
                    <div className='info-staff-child'>

                        <img className='staff-photo' src="https://placehold.co/500x600" alt="munie 1" />

                        <h4>info muñeco 1</h4>
                        <h5>laburo q hace nada</h5>
                    </div>
                    <div className='info-staff-child'>

                        <img className='staff-photo' src="https://placehold.co/500x600" alt="munie 2" />

                        <h4>info muñeco 2</h4>
                        <h5>laburo q hace todo</h5>
                    </div>
                </div>
            </main>
            {/* DESKTOP */}
            
            <main className='animate__animated animate__fadeIn hiddenInMobile sobreNosotros-desktop'>
                <h1>Sobre Nosotros</h1>
                <p>Conoce al equipo detrás de Fácil Digital. <strong>Somos una startup apasionada por el diseño y desarrollo web</strong>, comprometida con ofrecer soluciones innovadoras y personalizadas a cada cliente.

                </p>
                <strong>Nuestra misión es ayudarte a destacar en el entorno digital con creatividad y profesionalismo.</strong>
                <div className='mobile-slider'>
                    <NosotrosSlider />
                </div>
                <h2>Nosotros: Fácil Digital</h2>
                <div className='caja-info-staff-desktop'>
                    <div className='info-staff-child'>

                        <img className='staff-photo-desktop' src="https://placehold.co/500x600" alt="munie 1" />

                        <h4>info muñeco 1</h4>
                        <h5>laburo q hace nada</h5>
                    </div>
                    <div className='info-staff-child'>

                        <img className='staff-photo-desktop' src="https://placehold.co/500x600" alt="munie 2" />

                        <h4>info muñeco 2</h4>
                        <h5>laburo q hace todo</h5>
                    </div>
                </div>
            </main>
            
        </>
    )
}

export default Nosotros