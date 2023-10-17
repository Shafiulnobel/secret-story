import React from 'react';
import { Container } from 'react-bootstrap';
import Products from '../Products/Products';
import useTitle from '../../hook/useTitle';

const Shop = () => {
    useTitle('Shop')
    return (
        <div>
            <Container>
            <h4 className='mt-5 font regular'>Home / <span style={{ color: 'grey' }}>Shop</span></h4>
            <hr />
            <Products></Products>
            </Container>
        </div>
    );
};

export default Shop;