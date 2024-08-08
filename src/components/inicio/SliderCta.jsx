import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import beneficios from './beneficios.json'



const SliderCta = () => {




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
        <div className="swiper-div" >
            <Slider {...settings}>

                {beneficios.map((beneficio) => <div key={beneficio.id} className="beneficios-content">
                    <div className="flex">
                        <img src={beneficio.image} alt={beneficio.image} />
                        <div>
                            <h3>{beneficio.titulo}</h3>
                            <p>{beneficio.descripcion}</p>
                        </div>
                    </div>
                </div>)}


            </Slider>
        </div>
    )
}

export default SliderCta

