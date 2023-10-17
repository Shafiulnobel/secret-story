import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Category from '../Category/Category';
import './Categories.css'
const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4 my-4 font">
             <div className="col">
             <h3>Our Best Seller</h3>
             </div>
             <div className="col ">
             <ul className="nav nav-pills d-flex justify-content-md-end">
                <li className="nav-item">
                    <a
                        className={`nav-link ${selectedCategory === 'New Arrivals' ? 'active' : ''}`}
                        
                        onClick={() => handleCategoryChange('New Arrivals')}
                    >
                        <Button variant="outline-dark">New Arrivals</Button>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${selectedCategory === 'Best Seller' ? 'active' : ''}`}
                       
                        onClick={() => handleCategoryChange('Best Seller')}
                    >
                        <Button variant="outline-dark">Best Seller</Button>
                    </a>
                </li>
            </ul>
             </div>
            </div>
           
        
          
           
            <div className='row row-cols-1 row-cols-md-4 g-4 my-4 font'>
            {categories
                .filter(category => selectedCategory === '' || category.category === selectedCategory)
                .map(filteredCategory => (
                    <Category
                        key={filteredCategory.id}
                        category={filteredCategory}
                    />
                ))}
            </div>
         
        </div>
    );
};

export default Categories;
