import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact(){
    return(
        <>
        <section id="contacts" className="block contact-block">
            <Container>
            <div className="title-holder">
                <h2>Contact Us</h2>
                <div className="subtitle">get connected with us</div>
            </div>
            <Form>
            <Row>
                <Col sm={4}>
                <Form.Control type='text' placeholder="Enter you full name" required />
                </Col>
                <Col sm={4}>
                <Form.Control type='email' placeholder="Enter you email address" required />
                </Col>
                <Col sm={4}>
                <Form.Control type='tel' placeholder="Enter you contact number" required />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                <Form.Control as="textarea" placeholder="Enter you Messafe" required />
               
                </Col>
            </Row>
            <Row>
                <Col sm={12} className='text-center btn-holder'>
                    <Button type='submit'>Submit</Button>
                </Col>
            </Row>
            </Form>
            </Container>
            <div className='map-holder'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54384.30705447703!2d74.38991360000003!3d31.578521600000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1730858370665!5m2!1sen!2s" title='map' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className='fas fa-envelope'></i>
                            hello@admin.com
                        </li>
                        <li>
                            <i className='fas fa-phone'></i>
                            000-0000-000
                        </li>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            London, United Kingdom
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
        </>
    )
}