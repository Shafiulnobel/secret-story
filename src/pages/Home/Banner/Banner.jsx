import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <Carousel fade>
      <Carousel.Item>
        <img className='w-100' src="https://i.ibb.co/GxXWyVS/The-Secret-Story-Banner-1-Updated-1.png" alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-100' src="https://i.ibb.co/6DKc57R/The-Secret-Story-Banners-1.png" alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
  
    </Carousel>
    );
};

export default Banner;