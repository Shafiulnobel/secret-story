import React, { useState } from 'react';
import useTitle from '../../hook/useTitle';

const Review = ({review}) => {
    const{name,comment}=review;
    useTitle('Review')
    console.log(review)
    return (
        <div className='my-5 regular'>
              <div className="">
              <h3 className='text-dark fw-bold text-center'>{name}</h3>
              <p className='text-center'>{comment}</p>
              </div>
        </div>
    );
};

export default Review;