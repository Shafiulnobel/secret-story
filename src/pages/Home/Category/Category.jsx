import React from 'react';
import './Category.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { id, name, img, eight_ml, eight_ml_old, six_ml, six_ml_old } = category;

    return (
        <div className="col ">
            <div className="card h-100 shadow border-0">
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body ">
                    <p className="card-title">{name}</p>
                    <div className="card-text">
                        <div className='row row-cols-2 row-cols-md-2 g-4'>
                            <div className="col d-flex">
                                <p className='fw-bold me-3 text-warning txt'>৳{eight_ml_old}</p>
                                <p className='fw-bold text-warning'>৳{eight_ml}</p>
                            </div>
                            <div className="col text-end">
                                <a className='awesome' type='button' href='/'>
                                    <FontAwesomeIcon className='fs-3' icon={faCartShopping} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <Link style={{textDecoration:'none',color:'black'}} to={`/product/${id}`}>
                    <button type="button" className="btn btn-outline-warning w-100 my-3">Show details</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Category;