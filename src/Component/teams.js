import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/esm/Image";

const teamsData = [
    {
        id:1,
        image:require('../assets/images/team1.jpg'),
        fbLink:'https://www.facebook.com',
        twLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'Gabrail Heart',
        designation:'CEO',
        description: 'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'
    },
    {
        id:2,
        image:require('../assets/images/team2.jpg'),
        fbLink:'https://www.facebook.com',
        twLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'Jhon Heart',
        designation:'CTO',
        description: 'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'
    },
    {
        id:3,
        image:require('../assets/images/team3.jpg'),
        fbLink:'https://www.facebook.com',
        twLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'Doe Heart',
        designation:'COO',
        description: 'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'
    },
    {
        id:4,
        image:require('../assets/images/team4.jpg'),
        fbLink:'https://www.facebook.com',
        twLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'Doe Joe',
        designation:'GM',
        description: 'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'
    },   {
        id:5,
        image:require('../assets/images/team5.jpg'),
        fbLink:'https://www.facebook.com',
        twLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'Gabrail Heart',
        designation:'CEO',
        description: 'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'
    },
    {
        id:6,
        image:require('../assets/images/team6.jpg'),
        fbLink:'https://www.facebook.com',
        twLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'Jhon Heart',
        designation:'CTO',
        description: 'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'
    },
    {
        id:7,
        image:require('../assets/images/team7.jpg'),
        fbLink:'https://www.facebook.com',
        twLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'Doe Heart',
        designation:'COO',
        description: 'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'
    },
    {
        id:8,
        image:require('../assets/images/team8.jpg'),
        fbLink:'https://www.facebook.com',
        twLink:'https://www.twitter.com',
        linkedinLink:'https://www.linkedin.com',
        name:'Doe Joe',
        designation:'GM',
        description: 'lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet'
    },
]

const Teams = () =>{
    return(
        <>
        <section id="teams" className="block teams-block">
        <div className="title-holder">
            <h2>Our Teams</h2>
            <p className="subtitle">Some of our Experts</p>
        </div>
        <Container>
        <Row>
            {
                teamsData.map(val=>{
                    return(
                        <Col sm={3} key={val.id}>
                        <div className="image">
                            <Image src={val.image} alt="team image"/>
                            <div className="overlay">
                                <div className="socials">
                                    <ul>
                                        <li><a href={val.fbLink}><i className="fab fa-facebook"></i></a></li>
                                        <li><a href={val.twLink}><i className="fab fa-twitter"></i></a></li>
                                        <li><a href={val.linkedinLink}><i className="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <h3>{val.name}</h3>
                            <span className="designation">{val.designation}</span>
                            <p>{val.description}</p>
                        </div>
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

export default Teams;