import React, { useEffect, useState } from 'react'
import iconWhatsapp from '../../../public/icon-whatsapp.svg'
import iconInstagram from '../../../public/icon-instagram.svg'
import iconFacebook from '../../../public/icon-facebook.svg'
import iconMail from '../../../public/icon-mail.svg'
import { database } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import FaqSection from '../inicio/FaqSection'
import Swal from 'sweetalert2';


const Contacto = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Empieza el estado de carga
        try {
            await addDoc(collection(database, 'mensajes'), {
                nombre: formData.nombre,
                email: formData.email,
                mensaje: formData.mensaje,
            });
            Swal.fire({
                title: "Mensaje enviado!",
                text: "Responderemos tu consulta lo antes posible. Muchas Gracias!",
                icon: "success",
                confirmButtonColor: '#F5B31F',
            });
            setFormData({ nombre: '', email: '', mensaje: '' }); // Limpia el formulario
        } catch (error) {
            Swal.fire({
                title: "Error al enviar mensaje",
                text: "Lamentamos los inconvenientes, la base de datos se encuentra fuera de servicio. Te invitamos a escribirnos por nuestras redes sociales!. Gracias",
                icon: "error",
                confirmButtonColor: '#F5B31F',
            });
        } finally {
            setIsLoading(false); // Finaliza el estado de carga
        }
    };


    return (
        <>
            {/* MOBILE */}
            <main className='animate__animated animate__fadeIn hiddenInDesktop  main-contacto-mobile'>
                <h1>Contacto</h1>
                <p>Estamos aquí para ayudarte! En Fácil Digital, nos encanta escuchar tus ideas y trabajar juntos para llevar tu negocio al siguiente nivel.</p>
                <strong>Ponte en contacto con nosotros a través de los siguientes medios:</strong>
                <h2>Información de Contacto</h2>
                <div className='contact-data'>
                    <img src={iconWhatsapp} alt="whatsapp" />

                    <strong>+54 3794-606980</strong>
                </div>
                <div className='contact-data'>
                    <img src={iconInstagram} alt="instagram" />
                    <strong>facildigital_arg</strong>
                </div>
                <div className='contact-data'>
                    <img src={iconFacebook} alt="facebook" />
                    <strong>Fácil Digital</strong>
                </div>
                <div className='contact-data'>
                    <img src={iconMail} alt="mail" />
                    <strong>facildigitalcontacto@gmail.com</strong>
                </div>
                <div className='form-x-faqs'>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <h3>Contactanos</h3>
                        <h4>Envíanos un mensaje</h4>
                        <input
                            type='text'
                            name='nombre'
                            placeholder='Nombre'
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name='mensaje'
                            placeholder='Mensaje'
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button className='article-services-button landing-section-button' type='submit' disabled={isLoading}>
                            {isLoading ? (
                                <span className="spinner"></span> // Ícono de carga
                            ) : (
                                'Enviar'
                            )}
                        </button>
                    </form>

                    <FaqSection />
                </div>
            </main>
            {/* DESKTOP */}
            <main className='animate__animated animate__fadeIn  hiddenInMobile main-contacto-desktop'>
                <div className='main-contacto-prev'>
                    <h1>Contacto</h1>
                    <p><strong>Estamos aquí para ayudarte!</strong> En Fácil Digital, nos encanta escuchar tus ideas y trabajar juntos para llevar tu negocio al siguiente nivel.</p>
                    <strong>Ponte en contacto con nosotros a través de los siguientes medios:</strong>
                    <h2>Información de Contacto:</h2>
                    <div className='contact-data'>
                        <img src={iconWhatsapp} alt="whatsapp" />

                        <strong>+54 3794-606980</strong>
                    </div>
                    <div className='contact-data'>
                        <img src={iconInstagram} alt="instagram" />
                        <strong>facildigital_arg</strong>
                    </div>
                    <div className='contact-data'>
                        <img src={iconFacebook} alt="facebook" />
                        <strong>Fácil Digital</strong>
                    </div>
                    <div className='contact-data'>
                        <img src={iconMail} alt="mail" />
                        <strong>facildigitalcontacto@gmail.com</strong>
                    </div>
                </div>


                <section className='form-section'>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <h3>Contactanos</h3>
                        <h4>Envíanos un mensaje</h4>
                        <input
                            type='text'
                            name='nombre'
                            placeholder='Nombre'
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name='mensaje'
                            placeholder='Mensaje'
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button className='article-services-button landing-section-button' type='submit' disabled={isLoading}>
                            {isLoading ? (
                                <span className="spinner"></span> // Ícono de carga
                            ) : (
                                'Enviar'
                            )}
                        </button>
                    </form>

                </section>



            </main>
        </>
    )
}

export default Contacto