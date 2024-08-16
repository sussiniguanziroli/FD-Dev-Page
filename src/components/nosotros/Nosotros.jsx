import React from 'react'

const Nosotros = () => {
    return (
        <>
            {/* MOBILE */}
            <main className='hiddenInDesktop sobreNosotros-mobile'>
                <h1>Sobre Nosotros</h1>
                <p>Conoce al equipo detrás de Fácil Digital. <strong>Somos una startup apasionada por el diseño y desarrollo web</strong>, comprometida con ofrecer soluciones innovadoras y personalizadas a cada cliente.
                    
                </p>
                <strong>Nuestra misión es ayudarte a destacar en el entorno digital con creatividad y profesionalismo.</strong>
                <div className='valores-slider'>
                    <h2>slider</h2>
                </div>
                <div className='caja-info-staff'>
                    <div className='info-staff-child'>
                        <div className='foto-staff'>

                        </div>
                        <h4>info muñeco 1</h4>
                    </div>
                    <div className='info-staff-child'>
                        <div className='foto-staff'>

                        </div>
                        <h4>info muñeco 2</h4>
                    </div>
                </div>
            </main>
            {/* DESKTOP */}
            <main className="hiddenInMobile">

            </main>
        </>
    )
}

export default Nosotros