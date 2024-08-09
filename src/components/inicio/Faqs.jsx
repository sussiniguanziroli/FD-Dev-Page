import React, { useState, useEffect } from 'react';

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

            <form className='contact-form'>
                <h3>Contacto</h3>
                <h4>Envíanos un mensaje</h4>
                <input type='text' placeholder='Nombre' required />
                <input type='email' placeholder='Email' required />
                <textarea placeholder='Mensaje' required></textarea>
                <button className='article-services-button landing-section-button' type='submit'>Enviar</button>
            </form>
        </section>
    );
};

export default Faqs;
