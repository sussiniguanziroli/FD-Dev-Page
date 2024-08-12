import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import servicios from "./servicios.json"

const ServiciosSlider = () => {

    
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



    var settings = {
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

  return (


    <div className="swiper-div-servicios" >
            <Slider {...settings}>

                {servicios.map((servicio) => <div key={servicio.id} className="servicios-content">
                    <div className="flex-servicios">
                        <img src={servicio.image} alt={servicio.servicio} />
                        <div>
                            <h3>{servicio.titulo}</h3>
                            <p>{servicio.descripcion}</p>
                        </div>
                    </div>
                </div>)}


            </Slider>
        </div>

)
}

export default ServiciosSlider