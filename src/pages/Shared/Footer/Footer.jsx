import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faPuzzlePiece, faFileShield, faChartLine, faArrowsToDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className='bg-black pt-5 pb-2 mt-5 regular'>
            <Container>
                <Row xs={1} md={4} className="g-4 font text-white">
                    <Col>
                        <h3 className="fw-bold">QUICK LINKS</h3>
                        <p><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Home</NavLink></p>
                        <p><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/about">About us</NavLink></p>
                        <p><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Privacy Policy</NavLink></p>
                        <p><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Terms & Conditions</NavLink></p>
                        <p><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Refund & Returns Policy</NavLink></p>
                        <p><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Shipping Policy</NavLink></p>
                    </Col>
                    <Col>
                        <h3 className="fw-bold">Categories</h3>
                        <p><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Regular</NavLink></p>
                        <p><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Premium Collection</NavLink></p>
                        <p><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Prime</NavLink></p>
                    </Col>
                    <Col>
                        <h3 className="fw-bold">Contact US</h3>
                        <p>Excell Fragrances, Shed no1, Thakaracha pada road, Tarai, Bhiwandi 421308</p>
                        <p><FontAwesomeIcon className='fs-5 me-2' icon={faEnvelope} /> abc@gmail.com</p>

                    </Col>
                    <Col>
                        <h3 className="fw-bold">OUR NEWSLETTER</h3>
                        <p>Sign up here to get the latest news, updates and special offers delivered to your inbox.</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="enter your email" />
                            </Form.Group>
                            <Button variant="light">Send</Button>{' '}
                        </Form>

                    </Col>
                </Row>
                <hr style={{color:'white'}}/>
                <p className='text-white text-center'>© 2023 The Secret Story All right reserved | Designed with Passion</p>
            </Container>

        </div>
    );
};

export default Footer;