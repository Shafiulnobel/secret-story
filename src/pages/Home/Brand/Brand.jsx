import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Brand = () => {
    return (
        <div >
            <Container className='font text-center my-5 regular'>
            <h1 className='fw-bold'>Combo Brand</h1>
            <h4>Find The Perfect Pair Of Scents!</h4>
            <Row className='my-5 ' xs={1} md={2}>
                <Col className='my-3'>
                <img className='img-fluid' src="https://i.ibb.co/dQk3kXz/The-Secret-Story-Banners-Uncensored-685x360-Updated.png" alt="" />
                </Col>
                <Col className='my-3'>
                <img className='img-fluid' src="https://i.ibb.co/8PQWwGF/The-Secret-Story-Banners-Premium-685x360-Updated.png" alt="" />
                </Col>
            </Row>
            </Container>
           
        </div>
    );
};

export default Brand;