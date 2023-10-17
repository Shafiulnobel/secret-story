import React from 'react';
import { Card, Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <Container className='my-5'>
                <Card>
                    <h2 style={{fontSize:'10rem'}} className='fw-bold text-center'><span>4</span> <span className='text-primary'>0</span> <span>4</span></h2>
                    <h2 className='text-center'>Page Not Found</h2>
                </Card>
            </Container>
        </div>
    );
};

export default NotFound;