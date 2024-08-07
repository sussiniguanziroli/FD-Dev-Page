import React, { useRef } from 'react'
import Landing from './Landing'
import AboutUs from './AboutUs'

const Inicio = ({ startAnimation }) => {

    const aboutUsRef = useRef(null);
    const aboutUsRefMobile = useRef(null);

    const scrollToAboutUs = () => {
        if (aboutUsRef.current) {
            aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToAboutUsMobile = () => {
        if (aboutUsRefMobile.current) {
            aboutUsRefMobile.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className='main-inicio'>

            <Landing 
            startAnimation={startAnimation} 
            scrollToAboutUs={scrollToAboutUs} 
            scrollToAboutUsMobile={scrollToAboutUsMobile}
            />

            <AboutUs aboutUsRef={aboutUsRef} aboutUsRefMobile={aboutUsRefMobile}/>

        </main>
    )
}

export default Inicio