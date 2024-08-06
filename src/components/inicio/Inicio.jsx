import React from 'react'
import Landing from './Landing'
import AboutUs from './AboutUs'

const Inicio = ({ startAnimation }) => {



    return (
        <main className='main-inicio'>

            <Landing startAnimation={startAnimation} />

            <AboutUs />

        </main>
    )
}

export default Inicio