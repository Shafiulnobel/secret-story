import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward,faPuzzlePiece,faFileShield,faChartLine } from '@fortawesome/free-solid-svg-icons'
import useTitle from '../../hook/useTitle';
const About = () => {
    useTitle('About')
    return (
        <div className='regular'>
            <Container >
                <h4 className='mt-5 '>Home / <span style={{ color: 'grey' }}>About</span></h4>
                <hr />
                <Row xs={1} md={2}>
                    <Col>
                        <img className='img-fluid' src="https://i.ibb.co/cC725vL/Cool-Breez.png" alt="" />
                    </Col>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Our Secret Story</h2>
                        <p className='fs-5 '>We believe every scent creates a story! Creating an alluring perfume is the art of combining different fragrances. French perfumes inspire our perfume range to give you a pleasant smell at an affordable price. We made special efforts to combine, mix, and match scents to create a unique aroma that is pleasing and will last all day. We want to make our perfumes an ornament that you will wear daily!</p>
                    </Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col className='text-center mt-4'>
                        <h2 className='fw-bold'>Our Philosophy</h2>
                        <p className='fs-5'>‘The Secret Story’ is a small initiation to give the best perfumes in the world, full of luxury and pricy perfume market. Our ‘secret goal’ is to make scents that smell luxurious at affordable price points. Traditionally, we wear perfume only on the special occasion. But we do crave that freshness and fragrance daily. Fragrance uplifts our mood and gives us the strength to do something productive. You’ll love this secret that smells good!</p>
                    </Col>
                    <Col className='text-center'>
                        <img className='img-fluid' src="https://i.ibb.co/4jpsWrV/Island-Mist-2-q2yozp5khhvuil7ynbykxwkz4ayqdvkfb74u1b4exs.png" alt="" />

                    </Col>
                </Row>
                <div className='my-5'>
                <h2 className=' text-center my-4 fw-bold'>Our Values</h2>
                <Row xs={1} md={2} lg={4} className="g-4 ">
                    <Col>
                        <Card className='py-2 text-center '>
                        <FontAwesomeIcon className='fs-1' icon={faAward} />
                            <Card.Body>
                                <Card.Title>100% High Quality</Card.Title>
                                <div className='d-flex justify-content-center'>
                                <Card.Text className='w-50'>
                                Our fragrances are crafted from fine-quality ingredients.
                                </Card.Text>
                                </div>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='py-2 text-center'>
                        <FontAwesomeIcon className='fs-1' icon={faFileShield} />
                            <Card.Body>
                                <Card.Title>Authenticity</Card.Title>
                                <div className='d-flex justify-content-center'>
                                <Card.Text className='w-50'>
                                Every drop of our perfume is 100% authentic and pure. We believe authenticity is the foundation for trust between us and our customers.
                                </Card.Text>
                                </div>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='py-2 text-center'>
                        <FontAwesomeIcon className='fs-1' icon={faChartLine} />
                            <Card.Body>
                                <Card.Title>Excellence</Card.Title>
                                <div className='d-flex justify-content-center'>
                                <Card.Text className='w-50'>
                                Excellency comes from innovation. Providing novelty to our customers is what we strive for.
                                </Card.Text>
                                </div>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='py-2 text-center'>
                        <FontAwesomeIcon className='fs-1' icon={faPuzzlePiece} />
                            <Card.Body>
                                <Card.Title>Integrity</Card.Title>
                                <div className='d-flex justify-content-center'>
                                <Card.Text className='w-50'>
                                Our team aims for professionalism. We believe professionalism is what matters most when it comes to the delivery of work.                                </Card.Text>
                                </div>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                   
                </Row>
                </div>
       
            </Container>
        </div>
    );
};

export default About;