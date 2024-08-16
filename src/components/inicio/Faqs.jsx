import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import FaqSection from './FaqSection';
import { database } from '../../firebase/config';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "animate.css"




const Faqs = () => {

   
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 240,
            once: true,
            mirror: false,
        });
    }, []);

    const frases = [
        { texto: 'Diseño y Desarrollo Web', color: '#ffce2b' },
        { texto: 'Entrega Rápida', color: '#f38759' },
        { texto: 'Actualizaciones y Mantenimiento', color: '#269cb6' },
        { texto: 'Precios Competitivos', color: '#ff66c4' },
        { texto: 'Soporte Técnico Constante', color: '#ffce2b' },
        { texto: 'Experiencia y Profesionalismo', color: '#f38759' },
    ];

    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('fade-in-2');
    


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

    useEffect(() => {
        const handleNextPhrase = () => {
            setAnimationClass('fade-out-2');
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % frases.length);
                setAnimationClass('fade-in-2');
            }, 500);
        };

        const interval = setInterval(handleNextPhrase, 3500);

        return () => clearInterval(interval);
    }, [frases.length]);

    return (
        <section className='hiddenInMobile faqs-section'>
            <div className='faqs-div'>
                <h3>Beneficios </h3>
                <h3> de trabajar </h3>
                <h3> con Fácil Digital</h3>
            </div>

            <h1 className={animationClass} style={{ color: frases[index].color }}>
                {frases[index].texto}
            </h1>

            <div data-aos="fade-up" className='form-x-faqs'>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <h3>Contacto</h3>
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
        </section>
    );
};

export default Faqs;
