import React from 'react'
import { NavLink } from 'react-router-dom'



const Footer = () => {
    return (
        <footer className='main-footer'>
            <div className='footer-upper'>
                <section className='fd-logo-section'></section>
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
                <section className='lower-contact'>
                    <article className='new-icons'>
                        <div class="wrapper">
                            <div class="button foot">
                                <div class="icon">
                                    <i class="fab fa-facebook-f"></i>
                                </div>
                                <span>Facebook</span>
                            </div>
                            <div class="button foot">
                                <div class="icon">
                                    <i class="fab fa-google"></i>
                                </div>
                                <span>Gmail</span>
                            </div>
                            <div class="button foot">
                                <div class="icon">
                                    <i class="fab fa-instagram"></i>
                                </div>
                                <span>Instagram</span>
                            </div>
                            <div class="button foot">
                                <div class="icon">
                                    <i class="fab fa-whatsapp"></i>
                                </div>
                                <span>WhatsApp</span>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </footer>
    )
}

export default Footer