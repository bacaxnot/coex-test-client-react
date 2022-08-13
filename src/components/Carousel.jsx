import React from 'react';
import '@styles/carousel.sass'

import drugBg from '@logos/header-bg.jpeg'

const Carousel = () => {
    return (
        <div className="carousel-container">
            <figure className="carousel-item" >
                <img src={drugBg} alt="background" />
            </figure>
        </div>
    );
};

export default Carousel;