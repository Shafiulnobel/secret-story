import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import { Container } from 'react-bootstrap';

const Reviews = () => {

  const reviews = useLoaderData();
  console.log(reviews)
  return (
    <div>
      <Container>
      <h4 className='mt-5 font regular'>Home / <span style={{ color: 'grey' }}>Review</span></h4>
      <hr />
        {
          reviews.map(review => <Review
            review={review}
          ></Review>)
        }
      </Container>

    </div>
  );
};

export default Reviews;