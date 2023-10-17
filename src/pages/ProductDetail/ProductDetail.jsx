import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ProductDetail.css'
const ProductDetail = () => {
    const { productId } = useParams();
    const [count, setCount] = useState(1);
    const [details, setDetails] = useState([])
    const [singleProduct, setSingleProduct] = useState({});
    
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    useEffect(() => {
        const found = details.find(detail => detail.id === parseInt(productId));
        setSingleProduct(found)
    }, [details])

    const handlePlusBtn =() =>{
        const newCount = count+1;
        setCount(newCount)
    }
    const handleMinusBtn =() =>{
        if(count>1){
            const newCount = count-1;
            setCount(newCount)
        }
       
    }
    return (
        <div>
            <Container className='regular'>
                <h4 className='my-5 '>Home / Shop / <span style={{ color: 'grey' }}>{singleProduct?.name}</span></h4>

                <Card className="m-4 p-4">
                    <Row lg={2} md={1} xs={1}>
                        <Col className='text-center'>
                            <img className="img-fluid w-75" src={singleProduct?.img} alt="" />
                        </Col>
                        <Col className="my-3 text-start">
                            <div>
                                <Card.Body>
                                    <Card.Title className="">
                                        <h2 className='my-4 fw-bold'>{singleProduct?.name}</h2>
                                    </Card.Title>
                                    <Card.Title className="">
                                        <p><span className='fw-bold text-warning txt'>৳{singleProduct?.eight_ml_old}</span> <span className='fw-bold text-warning '>৳{singleProduct?.eight_ml}</span></p>
                                    </Card.Title>
                                    <Card.Text className="my-2">
                                        <p className='w-75'> {singleProduct?.description}</p>
                                    </Card.Text>
                                    <Card.Text className="d-flex align-items-center my-3">
                                        <p className='fw-bold'> size : </p>
                                        <select className="form-select w-50 ms-4" aria-label="Default select example">
                                            <option selected>Choose an option</option>
                                            <option value="1">8 ML</option>
                                            <option value="2">6 ML</option>
                                        </select>

                                    </Card.Text>
                                    
                                    <div className="btn-group rounded-0 w-50" role="group" aria-label="Basic outlined example">
                                    <button onClick={handleMinusBtn} type="button" className="btn btn-outline-dark rounded-0 ">-</button>
                                        <input value={count}  type="number" className="form-control text-center" aria-label="readonly input example" readonly id="exampleFormControlInput1" />
                                        <button onClick={handlePlusBtn} type="button " className="btn btn-outline-dark rounded-0">+</button>
                                        
                                    </div>
                                    <button type="button" className="btn btn-warning rounded-0 p-2 ms-3">Add to card</button>
                                 

                                </Card.Body>
                            </div>
                        </Col>
                    </Row>

                </Card>
                <Card className="m-4 p-4">
                   <h2 className='text-center'>Product Description</h2>
                   <p className='mt-3'>Description</p>
                   <hr />
                   <p className='my-3'>Fragrance Notes: </p>
                   <p className='fw-bold'>Top Note: <span className='fw-normal'>{singleProduct?.top_note}</span> </p>
                   <p className='fw-bold'>Heart Note: <span className='fw-normal'>{singleProduct?.heart_note}</span></p>
                   <p className='fw-bold'>Base Note: <span className='fw-normal'>{singleProduct?.base_note}</span>  </p>
                   <p className='fw-bold'>Fragrance Family: <span className='fw-normal'>{singleProduct?.fragrance_family}</span>  </p>
                </Card>
            </Container>
        </div>
    );
};

export default ProductDetail;