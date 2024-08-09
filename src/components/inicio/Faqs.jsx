import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import FaqSection from './FaqSection';
import { database } from '../../firebase/config';
import Swal from 'sweetalert2'


const Faqs = () => {
    const frases = [
        { texto: 'Diseño y Desarrollo Web', color: '#ffce2b' },
        { texto: 'Entrega Rápida', color: '#f38759' },
        { texto: 'Actualizaciones y Mantenimiento', color: '#269cb6' },
        { texto: 'Precios Competitivos', color: '#ff66c4' },
        { texto: 'Soporte Técnico Constante', color: '#ffce2b' },
        { texto: 'Experiencia y Profesionalismo', color: '#f38759' },
    ];

    const [index, setIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('fade-in-2');
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            console.error('Error al enviar el mensaje: ', error);
        }
    };

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

            <div className='form-x-faqs'>
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
                    <button className='article-services-button landing-section-button' type='submit'>
                        Enviar
                    </button>
                </form>

                <FaqSection />
            </div>
        </section>
    );
};

export default Faqs;
