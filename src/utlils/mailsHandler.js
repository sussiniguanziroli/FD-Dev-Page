import { db } from '../firebase/config';  // Asegúrate de que la ruta es correcta.
import { addDoc, collection } from 'firebase/firestore';

export const handleNewMessage = async (nombre, email) => {
    try {
        await addDoc(collection(db, 'mails'), {
            to: email,
            message: {
                subject: '¡Gracias por contactarte con el equipo de Fácil Digital! 🚀',
                html: `
                    <div style="font-family: Arial, sans-serif; color: #2c2c2c; padding: 20px; background-color: #F5F5F5;">
                        <h1 style="color: #F5B31F;">¡Hola ${nombre}!</h1>
                        <p>¡Gracias por tomarte el tiempo de ponerte en contacto con nosotros! 🙌 Estamos emocionados de saber más sobre tu proyecto y cómo podemos ayudarte a llevar tu negocio al siguiente nivel con una presencia web profesional y efectiva.</p>
                        <p>En <strong>Fácil Digital</strong>, nuestro objetivo es ayudarte a alcanzar el éxito online con un sitio web que se alinee perfectamente con tu visión y necesidades. Ya hemos recibido tu solicitud y uno de nuestros expertos se pondrá en contacto contigo a la brevedad para hablar sobre los siguientes pasos.</p>
                        <p>Mientras tanto, si deseas acelerar el proceso o tienes alguna pregunta adicional, ¡no dudes en contactarnos directamente a través de WhatsApp! Nos encanta estar en contacto rápido y eficaz para responder a todas tus dudas.</p>
                        <p><strong>WhatsApp:</strong> <a href="https://wa.me/3794606980" style="color: #F5B31F; text-decoration: none;">3794 60-6980</a></p>
                        <p>También puedes seguirnos en nuestras redes sociales para estar al tanto de nuestras últimas novedades y consejos sobre diseño web y marketing digital:</p>
                        <ul style="list-style: none; padding: 0;">
                            <li><strong>Facebook:</strong> <a href="https://www.facebook.com/people/F%C3%A1cil-Digital/61561378967321/" style="color: #F5B31F; text-decoration: none;">Fácil Digital</a></li>
                            <li><strong>Instagram:</strong> <a href="https://www.instagram.com/facildigital_arg/" style="color: #F5B31F; text-decoration: none;">facildigital_arg</a></li>
                        </ul>
                        <p>Estamos aquí para ayudarte a dar el siguiente paso en el mundo digital.</p>
                        <p>¡Esperamos hablar contigo pronto!</p>
                        <p style="margin-top: 30px; color: #2c2c2c;"><strong>Fácil Digital</strong></p>
                    </div>
                `,
            }
        });
        console.log("Mensaje guardado y correo programado para enviar");
    } catch (error) {
        console.error("Error al guardar el mensaje y enviar el correo: ", error);
    }
};
