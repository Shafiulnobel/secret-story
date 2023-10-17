import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    return (
        <div>
            <div className='d-flex justify-content-between regular'>
                <h3>Shop</h3>
                <div>
                    <select className="form-select" aria-label="Default select example" onChange={handleCategoryChange}>
                        <option value="">All</option>
                        <option value="New Arrivals">New Arrivals</option>
                        <option value="Best Seller">Best Seller</option>
                    </select>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4 my-4 font">
                {/* {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                } */}
                {products
                    .filter(product => selectedCategory === '' || product.category === selectedCategory)
                    .map(filteredProduct => (
                        <Product
                            key={filteredProduct.id}
                            product={filteredProduct}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Products;