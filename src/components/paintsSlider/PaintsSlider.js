import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './paintsSlider.css';
import { PaintCard } from '../paintCard/PaintCard';
import paintsData from '../../paints.json';
import { useWindowSize } from '../../UseWindowSize'; // Asegúrate de importar el hook correctamente
import { useMediaQuery } from 'react-responsive';

export const PaintsSlider = () => {
    const [paints, setPaints] = useState();
    const title = 'cuadros';
    const windowSize = useWindowSize();
    const [slidesToShow, setSlidesToShow] = useState()
    const config = windowSize.height < 650 ? 3 :
    windowSize.height > 650 ? 1 : 1;

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        setSlidesToShow(config)
        setPaints(paintsData);
        console.log(slidesToShow)
        console.log(windowSize)

        
    }, []);


    const sliderSettings = {
        dots: false,
        dotsColor: 'white',
        arrows: !isMobile?true:false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    };

    if (paints && title) {
        return (
            <div className='paints-slider'>
                <Slider className='slider' {...sliderSettings}>
                    {paints.map((paint, index) => (
                        <PaintCard key={index} className='paint-card' data={paint} />
                    ))}
                </Slider>
            </div>
        );
    } else {
        return null; // o algún indicador de carga si es necesario
    }
};
