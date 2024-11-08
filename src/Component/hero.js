import React from "react";
import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
        id: 1,
        image: require('../assets/images/img-hero1.jpg'),
        title: 'The perfect design of your website',
        description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        image: require('../assets/images/img-hero2.jpg'),
        title: 'Second The perfect design of your website',
        description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet',
        link: 'https://www.google.com'
    },
    {
        id: 3,
        image: require('../assets/images/img-hero3.jpg'),
        title: 'Third The perfect design of your website',
        description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet',
        link: 'https://www.google.com'
    }

]

const Hero =  () =>{
return(
    <>
  <section id="home" className="hero-block">
  <Carousel>
    {
        heroData.map((val)=>{
            return(
            <Carousel.Item key={val.id}>
                <img  src={val.image} className="d-block w-100" alt="img"/>
                <Carousel.Caption>
                    <h3>{val.title}</h3>
                    <p>{val.description}</p>
                    <a className="btn btn-primary" href={val.link}>Learn More <i className="fas fa-chevron-right"></i> </a>
                </Carousel.Caption>
            </Carousel.Item>
            )
            
        })
    }



    </Carousel>
  </section>
   

    </>
)
}


export default Hero;