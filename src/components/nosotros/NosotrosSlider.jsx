import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import valores from "./valores.json"


const NosotrosSlider = () => {


    function SampleNextArrow() {
        return (
            <></>
        );
    }

    function SamplePrevArrow() {
        return (
            <></>
        );
    }
    
    function SampleNextArrowD(props) {
        const {className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    background: '#ffce2b', // Color de fondo de la flecha
                    borderRadius: '50%', // Hacer la flecha circular
                    right: '10px', // Posición en el contenedor
                    zIndex: 1, // Asegura que esté encima del contenido
                    
                }}
                onClick={onClick}
            >
               
            </div>
        );
    }
    
    function SamplePrevArrowD(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    background: '#ffce2b', // Color de fondo de la flecha
                    borderRadius: '50%',
                    left: '10px',
                    zIndex: 1,
                }}
                onClick={onClick}
            >      
            </div>
        );
    }
    
  


    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };

    let settingsDesktop = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrowD />,
        prevArrow: <SamplePrevArrowD />

    };

    return (

        <>
            <div className='swiper-servicios-desktop hiddenInMobile'>
                <Slider {...settingsDesktop}>

                    {valores.map((valor) => <div key={valor.id} className="servicios-content">
                        <div className="flex-servicios-desktop">
                            <img src={valor.image} alt={valor.titulo} />
                            <div>
                                <h3>{valor.titulo}</h3>
                                <p>{valor.descripcion}</p>
                            </div>
                        </div>
                    </div>)}


                </Slider>
            </div>
            <div className="swiper-div-servicios hiddenInDesktop" >
                <Slider {...settings}>

                    {valores.map((valor) => <div key={valor.id} className="servicios-content">
                        <div className="flex-servicios">
                            <img src={valor.image} alt={valor.titulo} />
                            <div>
                                <h3>{valor.titulo}</h3>
                                <p>{valor.descripcion}</p>
                            </div>
                        </div>
                    </div>)}


                </Slider>
            </div>
        </>
    )
}

export default NosotrosSlider