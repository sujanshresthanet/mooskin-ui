import * as React from 'react';

import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// Models
import { ICarouselComponentProps } from './model';

/**
 * Carousel
 */
export const Carousel: React.FC<ICarouselComponentProps> = (props) => {
    return <ReactSlick {...props} />;
};

Carousel.defaultProps = {
    accessibility: true,
    // arrows: true,
    autoplaySpeed: 3000,
    centerPadding: '50px',
    className: '',
    dots: true,
    dotsClass: 'slick-dots',
    draggable: true,
    easing: 'linear',
    // infinite: true,
    pauseOnHover: true,
    slide: 'div',
    slidesToScroll: 3,
    slidesToShow: 3,
    speed: 500,
    swipe: true
};

Carousel.displayName = 'Carousel';

export default Carousel;
