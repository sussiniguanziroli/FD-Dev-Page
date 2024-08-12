import React from 'react'

const Contacts = () => {
    return (
        <>
            <section className='section-contacts'>

                <article className='new-icons'>
                    <div class="wrapper">
                        <a target='blank' href="https://www.facebook.com/profile.php?id=61561378967321" class="button">
                            <div class="icon">
                                <i class="fab fa-facebook-f"></i>
                            </div>
                            <span>Facebook</span>
                        </a>
                        <a target='blank' href="mailto:facildigitalcontacto@gmail.com?subject=Consulta&body=Hola!%20Quiero%20mi%20pagina%20web!" class="button">
                            <div class="icon">
                                <i class="fab fa-google"></i>
                            </div>
                            <span>Gmail</span>
                        </a>
                        <a target='blank' href="https://www.instagram.com/facildigital_arg/?hl=en" class="button">
                            <div class="icon">
                                <i class="fab fa-instagram"></i>
                            </div>
                            <span>Instagram</span>
                        </a>
                        <a target='blank' href="https://wa.me/543794606980?text=Hola!%20Quiero%20mi%20pagina%20web!" class="button">
                            <div class="icon">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </article>


            </section>
        </>
    )
}

export default Contacts