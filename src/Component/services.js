import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
    {
        id:1,
        icon:'fas fa-clone',
        title:'Responsive Design',
        description:'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet',
    },
    {
        id:2,
        icon:'fas fa-snowflake',
        title:'Creative Design',
        description:'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet',
    },
    {
        id:3,
        icon:'fas fa-plug',
        title:'SEO Optimized',
        description:'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet',
    },
    {
        id:4,
        icon:'fas fa-desktop',
        title:'Retina Ready',
        description:'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet',
    },
    {
        id:5,
        icon:'fas fa-trophy',
        title:'Browser Compatibility',
        description:'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet',
    },
    {
        id:6,
        icon:'fas fa-life-ring',
        title:'Customer Support',
        description:'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet',
    },
]

const Services = () =>{
    return(
        <>
        <section id="services" className="block services-block">
            <div className="title-holder">
                <h2>Our Services</h2>
                <div className="subtitle">Services We Provide</div>
            </div>
            <Container>
                <Row>
                    {
                        servicesData.map(val=>{
                            return(
                                <Col sm={4} key={val.id} className="holder">
                                    <div className="icon"><i className={val.icon}></i></div>
                                    <h3>{val.title}</h3>
                                    <p>{val.description}</p>
                                </Col>
                            )
                        })
                    }
                    
                </Row>
            </Container>
        </section>
       
        </>
    )
}


export default Services