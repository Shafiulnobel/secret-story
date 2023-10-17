import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { GrSend } from 'react-icons/gr';
import { RiHomeOfficeFill } from 'react-icons/ri';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { BiSolidTimeFive } from 'react-icons/bi';
import useTitle from '../../hook/useTitle';
const Contact = () => {
    useTitle('Contact')
    return (
        <div>
             <Container className='regular my-5'>
             <h4 className='mt-5 '>Home / <span style={{ color: 'grey' }}>Contact</span></h4>
             <hr />
             <Row xs={1} md={2}>
                <Col>
                    <h2>The Secret Story</h2>
                    <p><RiHomeOfficeFill/> Excell Fragrances, Shed no 1, Thakaracha pada road, Tarai, Bhiwandi 421308</p>
                        <p><BsFillTelephoneFill/> +(88)01823234534</p>
                        <p><AiFillMail/> abc@gmail.com</p>
                        <p><BiSolidTimeFive/> Business Hours: MON - SAT: 10 am - 7 pm</p>

                </Col>
                <Col>
                <h2 className='text-center'>Contact us</h2>
                <Row xs={1} md={2}>
                    <Col><input type="text" className="form-control my-2"  placeholder="First Name"/></Col>
                    <Col><input type="text" className="form-control my-2" placeholder="Last Name"/></Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col><input type="email" className="form-control my-2"  placeholder="Email Address"/></Col>
                    <Col><input type="number" className="form-control my-2" placeholder="Phone Number"/></Col>
                </Row>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Message'></textarea>
                <Button className='my-2' variant='info'> send <GrSend/></Button>
                </Col>
            </Row>
             </Container>
        </div>
    );
};

export default Contact;