import { db } from '../firebase/config';  // Asegúrate de que la ruta es correcta.
import { addDoc, collection } from 'firebase/firestore';

export const handleNewMessage = async (nombre, email) => {
    try {
        await addDoc(collection(db, 'mails'), {
            to: email,
            message: {
                subject: 'Gracias por contactarnos',
                text: `Hola ${nombre},\n\nGracias por tu mensaje. Nos pondremos en contacto contigo pronto.\n\nSaludos,\nFacil Digital`,
            }
        });
        console.log("Mensaje guardado y correo programado para enviar");
    } catch (error) {
        console.error("Error al guardar el mensaje y enviar el correo: ", error);
    }
};
