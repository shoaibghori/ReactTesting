import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
    {
        id:1,
        image: require('../assets/images/blog1.jpg'),
        time:'15 Nov 2024',
        title:'Coffee Lovers',
        description: ['lorem ipsum dolors sit aetm ipsum dolors sit aetm ipsum dolors sit aetm ipsum dolors sit aetm ipsum dolors sit aet'],
        link:'https//:www.google.com'
    },
    {
        id:2,
        image: require('../assets/images/blog2.jpg'),
        time:'16 Nov 2024',
        title:'Tea Lovers',
        description: ['lorem ipsum dolors sit aetm ipsum dolors sit aetm ipsum dolors sit aetm ipsum dolors sit aetm ipsum dolors sit aet'],
        link:'https//:www.google.com'
    },
    {
        id:3,
        image: require('../assets/images/blog3.jpg'),
        time:'17 Nov 2024',
        title:'Colddrink Lovers',
        description: ['lorem ipsum dolors sit aetm ipsum dolors sit aetm ipsum dolors sit aetm ipsum dolors sit aetm ipsum dolors sit aet'],
        link:'https//:www.google.com'
    },

]
export default function Blog(){
    return(
        <>
        <section id="blog" className="block blog-block">
        <Container>
            <div className="title-holder">
                <h2>latest From Blog</h2>
                <div className="subtitle">get our latest news from blog</div>
            </div>
            <Row>
                {
                    blogData.map(val=>{
                        return(
                            <Col sm={4} key={val.id} >
                                <div className='holder'>
                            <Card >
                                <Card.Img variant="top" src={val.image}  alt='imagehere'/>
                                <Card.Body>
                                    <time>{val.time}</time>
                                    <Card.Title>{val.title}</Card.Title>
                                    <Card.Text>
                                    {val.description}
                                    </Card.Text>
                                    <a href={val.link} className='btn btn-primary'>Read More <i className='fas fa-chevron-right'></i></a>
                                </Card.Body>
                            </Card>
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