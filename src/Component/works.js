import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
    {
        id:1,
        link:'https://wwww.google.com',
        image:require('../assets/images/img1.jpg'),
        title:'Lonely Path',
        subtitle:'web design'
    },
    {
        id:2,
        link:'https://wwww.google.com',
        image:require('../assets/images/img2.jpg'),
        title:'Photographer Girl',
        subtitle:'Branding'
    },
    {
        id:3,
        link:'https://wwww.google.com',
        image:require('../assets/images/img3.jpg'),
        title:'The Difference',
        subtitle:'web design'
    },
    {
        id:4,
        link:'https://wwww.google.com',
        image:require('../assets/images/img4.jpg'),
        title:'Winter Sonata',
        subtitle:'web design'
    },
    {
        id:5,
        link:'https://wwww.google.com',
        image:require('../assets/images/img5.jpg'),
        title:'Action',
        subtitle:'web design'
    },
    {
        id:6,
        link:'https://wwww.google.com',
        image:require('../assets/images/img6.jpg'),
        title:'React Project',
        subtitle:'web design'
    },

]

// pagination
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
// pagination


const Works = () =>{
    return(
        <>
        <section id="works" className="block works-block">
            <div className="title-holder">
                <h2>Our Works</h2>
                <div className="subtitle">
                    Our awesome Works
                </div>
            </div>

        <Container>
            <Row className="portfoliolist">
                {
                    worksData.map((val=>{
                       return(
                            <Col sm={4} key={val.id}>
                            <div className="portfolio-wrapper">
                                <a href={val.link}>
                                    <Image src={val.image} alt="image here"/>
                                    <div className="label text-center">
                                        <h3>{val.title}</h3>
                                        <p className="subtitle">
                                            {val.subtitle}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                       )
                    }))
                }
            </Row>
            <div>
                <Pagination>{items}</Pagination>
            </div>
            </Container>
        </section>
        </>
    )

}


export default Works;