import React from 'react'
import { NavLink } from 'react-router-dom'



const Footer = () => {
    return (
        <>
            {/* FOOTER MOBILE */}
            <footer className='mobile-footer hiddenInDesktop'>
                <div className='footer-mobile-upper'>
                    <img className='fd-mobile-logo-section' src="https://i.ibb.co/Dk7vj70/logo-fd.png" alt="logo-fd" />
                    <section className='buttons-mobile-section'>

                        <div className='footer-mobile-button-div'>
                            <NavLink className="footer-mobile-button" to="/" >Inicio</NavLink>
                        </div>
                        <div className='footer-mobile-button-div'>
                            <NavLink className="footer-mobile-button" to="/servicios" >Servicios</NavLink>
                        </div>
                        <div className='footer-mobile-button-div'>
                            <NavLink className="footer-mobile-button" to="/nosotros" >Nosotros</NavLink>
                        </div>
                        <div className='footer-mobile-button-div'>
                            <NavLink className="footer-mobile-button" to="/contacto">Contacto</NavLink>
                        </div>
                    </section>
                </div>
                <div className='footer-lower'>
                    <article className='lower-mobile-border'>
                        <p>©2024. Facil Digital Co. Todos los derechos reservados</p>
                    </article>
                </div>
            </footer>
            {/* FOOTER DESKTOP */}
            <footer className='main-footer hiddenInMobile'>
                <div className='footer-upper'>
                    <img className='fd-logo-section' src="https://i.ibb.co/Dk7vj70/logo-fd.png" alt="fd-logo" />
                    <section className='buttons-section'>
                        <div className='footer-button-div'>
                            <NavLink className="footer-button" to="/" >Inicio</NavLink>
                        </div>
                        <div className='footer-button-div'>
                            <NavLink className="footer-button" to="/servicios" >Servicios</NavLink>
                        </div>
                        <div className='footer-button-div'>
                            <NavLink className="footer-button" to="/nosotros" >Nosotros</NavLink>
                        </div>
                        <div className='footer-button-div'>
                            <NavLink className="footer-button" to="/contacto">Contacto</NavLink>
                        </div>
                    </section>
                </div>
                <div className='footer-lower'>
                    <article className='lower-border'>
                        <p>©2024. Facil Digital Co. Todos los derechos reservados</p>
                    </article>
                </div>
            </footer>
        </>
    )
}

export default Footer