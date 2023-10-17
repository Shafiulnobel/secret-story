import React from 'react';
import Banner from '../Banner/Banner';
import Best_Seller from '../Best_Seller/Best_Seller';
import Brand from '../Brand/Brand';
import Story from '../Story/Story';
import useTitle from '../../../hook/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Best_Seller></Best_Seller>
            <Brand></Brand>
            <Story></Story>
        </div>
    );
};

export default Home;