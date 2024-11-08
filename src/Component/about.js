import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


import img from '../assets/images/img1.jpg';
const html = 60;
const responsive = 80;
const photoshop = 40;

const About = () =>{
    return(
        <>
        <section id="about" className="block about-block">
        <Container>
            <div className="title-holder">
                <h2>About us</h2>
                <div className="subTitle" >
                    <p>lorem ipsum dolor site amit</p>
                </div>
            </div>
            <Row>
                <Col sm={6}>
                <Image src={img} alt={img}/>
                </Col>
                <Col sm={6}>
                    <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                    <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                    <p className="mb-3">lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                    <p>HTML/CSS/JAVASCRIPT</p>
                    <ProgressBar className="mb-3" now={html} />
                    <p>RESPONSIVE</p>
                    <ProgressBar className="mb-3" now={responsive} />
                    <p>PHOTOSHOP</p>
                    <ProgressBar className="mb-3" now={photoshop} />
                </Col>
            </Row>
        </Container>
        </section>
         
        </>
    )
}


export default About;