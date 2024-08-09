import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const FaqSection = () => {
    return (
        <div className='faq-section'>
            <h3>Preguntas Frecuentes</h3> 
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className='typography'>¿Cómo puedo contactar con el soporte técnico?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='typography'>
                        Puedes contactar con nuestro soporte técnico a través de la página de contacto en nuestro sitio web.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='typography'>¿Cuánto tiempo tarda la entrega?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='typography'>
                        La entrega tarda entre 5 y 7 días laborales después de confirmar tu pedido.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* Añadir más preguntas aquí */}
        </div>
    );
};

export default FaqSection;
