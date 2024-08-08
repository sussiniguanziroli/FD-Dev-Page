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

            </main>
        </>
    )
}

export default CallToAction
