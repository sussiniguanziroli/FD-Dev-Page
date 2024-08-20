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
                    <Typography className='typography'>¿Qué incluye el servicio de diseño web?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='typography'>
                        El servicio de diseño web incluye la creación de un sitio web personalizado, optimización para dispositivos móviles, diseño gráfico, y la configuración básica de SEO. También podemos integrar funcionalidades específicas según las necesidades de tu negocio.

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='typography'>A medida que trabajan en mi nueva web, ¿puedo ver avances? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='typography'>
                        Sí, durante el desarrollo utilizamos un servidor de prueba para que puedas ver los progresos del diseño web en proceso y proporcionar tu feedback. Una vez que todo esté aprobado, subiremos la web a su dominio final.

                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* Añadir más preguntas aquí */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='typography'>¿Cuánto tiempo toma desarrollar mi nueva página web?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='typography'>
                        El tiempo de desarrollo varía según la complejidad del proyecto, pero generalmente toma de 1 a 2 semanas desde el inicio hasta la entrega.

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='typography'>¿Mi nueva página web será compatible con smartphones?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='typography'>
                        Absolutamente. Todos nuestros diseños son responsivos, lo que significa que tu página web se verá y funcionará perfectamente en dispositivos móviles, incluyendo smartphones y tablets.

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='typography'>¿Cuánto cuesta crear una página web?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='typography'>
                        El costo varía según las funcionalidades y el diseño que necesites, pero en Fácil Digital nos destacamos por ofrecer los mejores precios. Te brindamos soluciones de alta calidad a precios competitivos, ajustándonos a tu presupuesto sin comprometer la excelencia.

                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default FaqSection;
